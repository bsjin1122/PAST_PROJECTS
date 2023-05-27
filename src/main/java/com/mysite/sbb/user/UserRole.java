package com.mysite.sbb.user;
import lombok.Getter;
@Getter
// 상수 자료형이므로 @Setter 는 없다.
public enum UserRole {
    ADMIN("ROLE_ADMIN"),
    USER("ROLE_USER");

    UserRole(String value){
        this.value = value;
    }

    private String value;
}
