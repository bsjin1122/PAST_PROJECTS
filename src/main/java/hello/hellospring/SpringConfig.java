package hello.hellospring;

import hello.hellospring.aop.TimeTraceAop;
import hello.hellospring.repository.*;
import hello.hellospring.service.MemberService;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.sql.DataSource;

@Configuration
public class SpringConfig {

    private final MemberRepository memberRepository;
    private EntityManager em;

    // 생성자 하나는 생략 가능
    @Autowired
    public SpringConfig(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

//    private DataSource dataSource;

//    @Autowired
//    public SpringConfig(EntityManager em){
//        this.em = em;
//    }

    //public SpringConfig(DataSource dataSource) {this.dataSource = dataSource;}

    @Bean
    public MemberService memberService(){
        return new MemberService(memberRepository); // 스프링 빈에 등록되어있는 것을 service에 넣어준다.
    }


//    @Bean // 스프링 빈에 직접 등록
//    public TimeTraceAop timeTraceAop(){
//        return new TimeTraceAop();
//    }

    //@Bean
    //public MemberRepository memberRepository(){
        //return new JpaMemberRepository(em);
        //return new JdbcTemplateMemberRepository(dataSource);
        //return new JdbcMemberRepository(dataSource);
        //return new MemoryMemberRepository();
    //}




}
