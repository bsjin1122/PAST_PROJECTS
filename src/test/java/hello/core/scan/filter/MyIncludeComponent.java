package hello.core.scan.filter;

import java.lang.annotation.*;

@Target(ElementType.TYPE) // type -> 클래스 레벨에서 붙음
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface MyIncludeComponent {
}
