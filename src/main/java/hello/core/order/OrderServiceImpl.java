package hello.core.order;

import hello.core.annotation.MainDiscountPolicy;
import hello.core.discount.DiscountPolicy;
import hello.core.member.Member;
import hello.core.member.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

@Component
//@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService{
    // 2. setter 수정자 주입
    // final 필드에서제거 후에, set~~으로 메서드 정의하고, @Autowired 꼭 붙여준다!!!

    // 3. 필드 주입-> 별로 좋지 않음. 외부에서 변경이 어려움.
    // 필드에 아예 @Autowired로 넣어줌.

    // 철저하게 인터페이스에만 의존
    private final MemberRepository memberRepository; // 값이 무조건 있어야 한다. 무조건 세팅해줘.
    private final DiscountPolicy discountPolicy;

//    @Autowired
//    private DiscountPolicy rateDiscountPolicy;

    // 3. 일반 메서드 주입 , 필드에 final 제거
    // 한 번에 여러 필드를 주입받을 수 있다. (일반적으로 잘 사용하지 않는다.)
//    @Autowired
//    public void init(MemberRepository memberRepository, DiscountPolicy
//            discountPolicy) {
//        this.memberRepository = memberRepository;
//        this.discountPolicy = discountPolicy;
//    }


//    @Autowired
//    public void setMemberRepository(MemberRepository memberRepository) {
//        System.out.println("memberRepository = " + memberRepository);
//        this.memberRepository = memberRepository;
//    }

    //주입할 대상이 없어도 동작하게 하려면
    //`@Autowired(required = false)` 로 지정하면 된다.

//    @Autowired
//    public void setDiscountPolicy(DiscountPolicy discountPolicy) {
//        System.out.println("discountPolicy = " + discountPolicy);
//        this.discountPolicy = discountPolicy;
//    }



    // 중요! 생성자가 딱 1개만 있으면 @Autowired를 생략해도 자동 주입 된다.** 물론 스프링 빈에만 해당한다.
    @Autowired
    // lombok 라이브러리 적용! -> getter, setter 임의로 만들어줌  파라미터에 @Qualifier("mainDiscountPolicy")
    public OrderServiceImpl(MemberRepository memberRepository, @MainDiscountPolicy DiscountPolicy discountPolicy) {
        //System.out.println("1. OrderServiceImpl.OrderServiceImpl");
        // System.out.println("memberRepository = " + memberRepository);
        // System.out.println("discountPolicy = " + discountPolicy);
        this.memberRepository = memberRepository; // 어떤 것이 호출될지는 모름 -> 권한이 AppConfig가 프로그램에 대한 제어 흐름을 갖고 있음
        this.discountPolicy = discountPolicy; //discountPolicy;
        // 생성자에서 들어오는 값들은 무조건 있다고 생각한다.
    }

    // = new MemoryMemberRepository();
    //private final DiscountPolicy discountPolicy = new RateDiscountPolicy();
    // private final DiscountPolicy discountPolicy = new FixDiscountPolicy();
    //OCP, DIP 같은 객체지향 설계 원칙을 충실히 준수했다
    //그렇게 보이지만 사실은 아니다

    @Override
    public Order createOrder(Long memberId, String itemName, int itemPrice) {
        Member member = memberRepository.findById(memberId);
        int discountPrice = discountPolicy.discount(member, itemPrice);
        return new Order(memberId, itemName, itemPrice, discountPrice);
    }

    // 테스트 용도
    public MemberRepository getMemberRepository(){
        return memberRepository;
    }


}
