package hello.core.member;

public class MemberServiceImpl implements MemberService{

    private final MemberRepository memberRepository; // 추상화에만 의존하게 됨 DIP를 지킴!
    // = new MemoryMemberRepository(); // 추상화에도, 구현에도 의존 (DIP를 위반)

    public MemberServiceImpl(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    @Override
    public void join(Member member) {
        memberRepository.save(member);
    }

    @Override
    public Member findMember(Long memberId) {
        return memberRepository.findById(memberId);
    }
}
