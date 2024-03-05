package org.jpql;

import jakarta.persistence.*;

@Entity
@NamedQuery(name="Member.findByUsername",
            query="select m from Member m where m.username = :username"
)
public class Member {
    @Id
    @GeneratedValue
    private Long id;
    private String username;
    private int age;

    private MemberType type;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="TEAM_ID")
    private Team team;

    public MemberType getType() {
        return type;
    }

    public void setType(MemberType type) {
        this.type = type;
    }

    public void setTeam(Team team) {
        this.team = team;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    @Override
    public String toString() {
        return "Member{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", age=" + age +
//                ", team=" + team + 양방향은 지우는 게 좋다
                '}';
    }

    public Team getTeam() {
        return team;
    }

    public void changeTeam(Team team) { // 연관관계 양방향 편의메서드
        this.team = team;
        team.getMembers().add(this);
    }
}
