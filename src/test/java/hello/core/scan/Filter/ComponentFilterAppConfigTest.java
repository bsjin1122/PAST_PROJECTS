package hello.core.scan.Filter;

import org.junit.jupiter.api.Assertions.*;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.NoSuchBeanDefinitionException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.ComponentScan.*;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.FilterType;

import static org.junit.jupiter.api.Assertions.assertThrows;

public class ComponentFilterAppConfigTest {

    @Test
    void filterScan(){
       ApplicationContext ac = new AnnotationConfigApplicationContext(ComponentFilterAppConfig.class);
       BeanA beanA = ac.getBean("beanA", BeanA.class);
       Assertions.assertThat(beanA).isNotNull();

       //error ac.getBean("beanB", BeanB.class);
       assertThrows(NoSuchBeanDefinitionException.class, ()-> ac.getBean("beanB", BeanB.class));
    }

    @Configuration
    //type = FilterType.ANNOTATION 기본값
    @ComponentScan(includeFilters = @Filter(type = FilterType.ANNOTATION, classes = MyIncludeComponent.class),
                    excludeFilters = @Filter(type=FilterType.ANNOTATION, classes = MyExludeComponent.class))
    static class ComponentFilterAppConfig{

    }
}
