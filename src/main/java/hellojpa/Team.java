package hellojpa;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
public class Team extends BaseEntity{
    public Team() {
    }
    @Id
    @GeneratedValue
    @Column(name="TEAM_ID")
    private Long id;

    @Column(name="NAME")
    private String name;

    @OneToMany // Member 엔터티의 team 변수명
    @JoinColumn(name = "TEAM_ID")
    private List<Member> members = new ArrayList<>();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Member> getMembers() {
        return members;
    }

    public void setMembers(List<Member> members) {
        this.members = members;
    }

    /* 둘 중 한 군데에서만 지정해준다.
    public void addMember(Member member){
        member.setTeam(this);
        members.add(member);
    }
    */
}
