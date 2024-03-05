package hello.hellospring.service;

import static org.assertj.core.api.Assertions.*;
import static org.junit.jupiter.api.Assertions.*;

import hello.hellospring.repository.MemoryMemberRepository;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import hello.hellospring.domain.Member;



class MemberServiceTest {

    MemberService memberService;
    MemoryMemberRepository memberRepository;

    @BeforeEach
    public void beforeEach(){ //각 테스트를 실행하기 전
        memberRepository = new MemoryMemberRepository(); // 리포지토리를 만들고
        memberService = new MemberService(memberRepository); // 서비스에 넣어줌
        // 같은 memoryRepository를 사용하게 됨
    }

    @AfterEach
    public void afterEach(){
        memberRepository.clearStore();
    }


    @Test // 과감하게 한글로 바꿔도 됨 직관적
    // 빌드될 때 테스트 코드는 포함되지 않음
    void 회원가입() {
        //given
        Member member = new Member();
        member.setName("spirng");

        //when
        Long saveId = memberService.join(member);
        //then
        Member findMember = memberService.findOne(saveId).get();
        assertThat(member.getName()).isEqualTo(findMember.getName());
    }

    // 정상 flow보다 예외 flow도 봐야한다.
    @Test
    public void 중복_회원_예외(){
        // given
        Member member1 = new Member();
        member1.setName("spring");

        Member member2 = new Member();
        member2.setName("spring");

        // when
        memberService.join(member1);
        IllegalStateException e =   assertThrows(IllegalStateException.class, ()-> memberService.join(member2));

        assertThat(e.getMessage()).isEqualTo("이미 존재하는 회원입니다.");
/*
        try{
            memberService.join(member2);
            fail();
        }catch(IllegalStateException e){
            assertThat(e.getMessage()).isEqualTo("이미 존재하는 회원입니다.");
        }
*/
        // then

    }

    @Test
    void findMembers() {
    }

    @Test
    void findOne() {
    }
}