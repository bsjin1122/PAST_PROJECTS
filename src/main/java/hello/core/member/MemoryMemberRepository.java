package hello.core.member;

import java.util.HashMap;
import java.util.Map;

// 회원 저장소 구현
public class MemoryMemberRepository implements MemberRepository{

    private static Map<Long, Member> store = new HashMap<>(); //동시성 이슈가 있을 수 있으므로 new ConcurrentHashMap 를 쓰는 게 맞다


    @Override
    public void save(Member member) {
        store.put(member.getId(), member);
    }

    @Override
    public Member findById(Long memberId) {
        return store.get(memberId);
    }
}
