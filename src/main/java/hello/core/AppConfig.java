package hello.core;

import hello.core.discount.DiscountPolicy;
import hello.core.discount.FixDiscountPolicy;
import hello.core.discount.RateDiscountPolicy;
import hello.core.member.MemberService;
import hello.core.member.MemberServiceImpl;
import hello.core.member.MemoryMemberRepository;
import hello.core.order.OrderService;
import hello.core.order.OrderServiceImpl;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

// 역할이 모호해서 리팩터링이 필요하게 됨 -> 구현이 어떤게 있는지 한눈에 보여야함
// 장점: 메서드, 리턴타입만 봐도 역할이 다 드러남, return 코드만 바꾸면 됨!
// 애플리케이션 전체 구성이 어떻게 되어있는지 빠르게 파악할 수 있다.

@Configuration // 설정정보 담당한다는 뜻
public class AppConfig {
    // @Bean memberService -> new MemoryMemberRepository()
    // @Bean orderService -> new MemoryMemberRepository()


    @Bean // 스프링 컨테이너에 등록된다.
    public MemberService memberService(){
        return new MemberServiceImpl(memberRepository()); // 생성자 주입
    }

    // 역할이 드러남.
    @Bean
    public MemoryMemberRepository memberRepository() {
        return new MemoryMemberRepository();
    }

    @Bean
    public OrderService orderService(){
        return new OrderServiceImpl(memberRepository(), discountPolicy());
    }

    @Bean
    public DiscountPolicy discountPolicy(){
        return new RateDiscountPolicy();
        //return new FixDiscountPolicy();
    }


}
