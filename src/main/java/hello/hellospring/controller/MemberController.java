package hello.hellospring.controller;

import hello.hellospring.domain.Member;
import hello.hellospring.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;


@Controller
public class MemberController {

    private final MemberService memberService; //= new MemberService(); // 여러 개의 인스턴스를 생성할 필요가 없음 -> 스프링 컨테이너에 등록

    @Autowired // <- 스프링이 MemberService를 연결
    public MemberController(MemberService memberService) { //'hello.hellospring.service.MemberService' that could not be found.?
        this.memberService = memberService;
    }

    @GetMapping("/members/new")
    public String createForm(){
        return "members/createMemberForm";
    }

    @PostMapping("/members/new")
    public String create(MemberForm form){
        Member member = new Member();
        member.setName(form.getName());

       // System.out.println("member = " + member.getName());
        memberService.join(member);

        return "redirect:/";
    }

    @GetMapping("/members")
    public String list(Model model){
        List<Member> members = memberService.findMembers();
        model.addAttribute("members", members);
        return "members/memberList";
    }


}





    /* setter 주입 단점: 누군가가 필요할 때 public으로 열려있어야 해서, 바꿔줄 이유가 없는데 노출이 됨. 중간에 잘못 바꾸면 문제가 됨.
    @Autowired (final 빼야)
    public void setMemberService(MemberService memberService){
        this.memberService = memberService;
    }
    */
