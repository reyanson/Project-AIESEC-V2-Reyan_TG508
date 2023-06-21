package com.reyan.useredit.controller;

import com.reyan.useredit.exception.UserNotFoundException;
import com.reyan.useredit.model.User;
import com.reyan.useredit.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.*;

import java.io.FileOutputStream;
import java.nio.file.NoSuchFileException;
import java.util.List;
import org.springframework.web.multipart.MultipartFile;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.springframework.web.bind.annotation.PostMapping;


@RestController
@CrossOrigin("http://localhost:3000")
public class UserController {


    @Autowired
    private UserRepository userRepository;
    private static final String UPLOAD_DIRECTORY = "/home/reyanson/FOT/Leve03/Semi_01/project/Project-AIESEC/TG508/letter-generator/backend/user-edit/Image";

    @PostMapping("/user") //use put user
    User newUser(@RequestBody User newUser){
        return userRepository.save(newUser);
    }

    @GetMapping("/users") //get user
    List<User> getAllUsers(){
        return userRepository.findAll();
    }

    @GetMapping("/user/{id}")
     User getUserById(@PathVariable Long id){
        return userRepository.findById(id)
                .orElseThrow(()-> new UserNotFoundException(id));

    }

    @PutMapping("/user/{id}")
    User updateUser(@RequestBody User newUser,@PathVariable Long id){
        return userRepository.findById(id)
                .map(user -> {
                    user.setUsername(newUser.getUsername());
                    user.setName(newUser.getName());
                    user.setEmail(newUser.getEmail());
                    user.setDp(newUser.getDp());
                    return  userRepository.save(user);
                }).orElseThrow(()->new UserNotFoundException(id));
    }

    @DeleteMapping("/user/{id}")
    String deleteUser(@PathVariable Long id){
        if(!userRepository.existsById(id)){
            throw new UserNotFoundException(id);
        }
        userRepository.deleteById(id);
        return "User with id "+id+" has been deleted success.";  
    }

    @PostMapping("/upload")
    public String uploadFile(@RequestParam("profilePicture") MultipartFile file) {
        if (file.isEmpty()) {
            return "Please select a file to upload.";
        }

        try {
                File uploadDir = new File("/home/reyanson/FOT/Leve03/Semi_01/project/Project-AIESEC/TG508/letter-generator/backend/user-edit/Image");
                            if (!uploadDir.exists()) {
                        uploadDir.mkdirs();
                        System.out.println("print");
                    }

            byte[] bytes = file.getBytes();
            Path path = Paths.get(UPLOAD_DIRECTORY + File.separator + file.getOriginalFilename());
            Files.write(path, bytes);
            return "File uploaded successfully!";
        } catch(NoSuchFileException e){
            return "Error";
        } catch (IOException e) {
            e.printStackTrace();
            return "Failed to upload the file.";
        }
    }

//    @Value("${upload.path}") // Specify the path where you want to store the profile pictures
//    private String uploadPath;
//    @PostMapping("/upload")
//    public ResponseEntity<String> uploadProfilePicture(@RequestPart("profilePicture") MultipartFile file) {
//        try {
//            // Create the upload directory if it doesn't exist
//            File uploadDir = new File(uploadPath);
//            if (!uploadDir.exists()) {
//                uploadDir.mkdirs();
//                System.out.println("print");
//            }
//
//            // Generate a unique filename for the uploaded picture
//            String fileName = file.getOriginalFilename();
//            String uniqueFileName = System.currentTimeMillis() + "-" + fileName;
//
//            // Save the file to the upload directory
//            File destination = new File(uploadPath + File.separator + uniqueFileName);
//            FileCopyUtils.copy(file.getBytes(), new FileOutputStream(destination));
//
//            // Return the file path or any other response as needed
//            String filePath = "/upload/"; // Example: Assuming the files are served from "/uploads" endpoint
//            return ResponseEntity.ok(filePath);
//        } catch (IOException e) {
//            e.printStackTrace();
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
//        }
//    }



}
