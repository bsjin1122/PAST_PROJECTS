package hello.hellospring.repository;
import hello.hellospring.domain.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
// 구현체를 자동으로 만들어서 빈에 자동으로 등록해준다. 우리는 가져다 쓰면 된다.
public interface SpringDataJpaMemberRepository extends JpaRepository<Member, Long>, MemberRepository{
    @Override
    Optional<Member> findByName(String name);
}
