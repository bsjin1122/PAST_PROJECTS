package hellojpa;

import jakarta.persistence.*;

@Entity
public class Locker {
    @Id @GeneratedValue
    private Long id;

    private String name;

//    @OneToOne(mappedBy = "locker")
//    private Member member; // 읽기 전용이 된다.
}
