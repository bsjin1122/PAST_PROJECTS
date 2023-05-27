package com.mysite.sbb.user;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<SiteUser, Long> {
                                                // PK 타입은 Long이다.
}
