import React, { useState } from 'react';

const ProfilePage = () => {
  const [profilePicture, setProfilePicture] = useState(null);

  const handlePictureChange = (event) => {
    const file = event.target.files[0];
    setProfilePicture(file);
  };

  const uploadPicture = async () => {
    if (profilePicture) {
      const formData = new FormData();
      formData.append('profilePicture', profilePicture);

      try {
        const response = await fetch('http://localhost:8080/upload', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          console.log('Profile picture uploaded successfully!');
          // Perform any additional actions after successful upload
        } else {
          console.error('Failed to upload profile picture.');
          // Handle upload failure
        }
      } catch (error) {
        console.error('Error occurred during profile picture upload:', error);
        // Handle upload error
      }
    }
  };

  return (
    <div>
      <h1>Profile Page</h1>
      <div>
        <h2>Profile Picture</h2>
        {profilePicture ? (
          <img src={URL.createObjectURL(profilePicture)} alt="Profile" />
        ) : (
          <p>No profile picture selected</p>
        )}
        <input
          type="file"
          accept="image/*"
          onChange={handlePictureChange}
        />
        <button onClick={uploadPicture}>Upload</button>
      </div>
    </div>
  );
};

export default ProfilePage;
