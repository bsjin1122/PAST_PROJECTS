package com.mysite.sbb;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

// 컨트롤러 : 서버에 전달된 클라이언트의 요청(url과 전달된 파라미터 등) 처리하는 자바 클래스
@Controller
public class HelloController {
    @GetMapping("/hello")
    @ResponseBody // hello 메서드의 응답 결과가 문자열 그 자체임을 나타냄
    public String hello(){
        return "Hello SBB~~~!!";
    }


}
