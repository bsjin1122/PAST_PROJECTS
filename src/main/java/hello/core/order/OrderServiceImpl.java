package hello.core.order;

import hello.core.discount.DiscountPolicy;
import hello.core.member.Member;
import hello.core.member.MemberRepository;

public class OrderServiceImpl implements OrderService{
    // 철저하게 인터페이스에만 의존
    private final MemberRepository memberRepository;
    private final DiscountPolicy discountPolicy;

    public OrderServiceImpl(MemberRepository memberRepository, DiscountPolicy discountPolicy) {
        this.memberRepository = memberRepository; // 어떤 것이 호출될지는 모름 -> 권한이 AppConfig가 프로그램에 대한 제어 흐름을 갖고 있음
        this.discountPolicy = discountPolicy;
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
}
