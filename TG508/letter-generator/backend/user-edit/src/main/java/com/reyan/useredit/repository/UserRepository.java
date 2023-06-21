package com.reyan.useredit.repository;

import com.reyan.useredit.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository  extends JpaRepository<User,Long> {



}
