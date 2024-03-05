package org.jpql;

import jakarta.persistence.*;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Root;

import java.util.List;

public class JpaMain {
    public static void main(String[] args) {
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("hello");
        EntityManager em = emf.createEntityManager(); // 고객의 요청이 들어올 때마다 -> 쓰레드간에 공유x (사용하고 버려야 한다.)

        EntityTransaction tx = em.getTransaction();
        tx.begin();

        try{
            Team teamA = new Team();
            teamA.setName("teamA");
            em.persist(teamA);

            Team teamB = new Team();
            teamB.setName("teamB");
            em.persist(teamB);

            Member member = new Member();
            member.setUsername("회원1");
            member.setAge(10);
            member.setTeam(teamA);
            em.persist(member);

            Member member2 = new Member();
            member2.setUsername("회원2");
            member2.setAge(20);
            member2.setTeam(teamA);
            em.persist(member2);

            Member member3 = new Member();
            member3.setUsername("회원3");
            member3.setAge(30);
            member3.setTeam(teamB);
            em.persist(member3);

            em.flush();
            em.clear();
            // 자동으로 flush 호출-- 쿼리 날리면 기본 flush모드가 있다. flush는 commit/query 나갈때 자동으로.
            // 문제는,
            int resultCount = em.createQuery("update Member m set m.age = 20").executeUpdate();
            System.out.println("resultCount = " + resultCount);
            
//            for (Member mem : result) {
//                System.out.println("mem.getUsername()+  = " + mem.getUsername() + ", " + mem.getTeam().getName());
//                // 회원1, 팀A(SQL)
//                // 회원2, 팀A(1차캐시)
//                // 회원3, 팀B(영속성 컨텍스트에 올림, 쿼리 날림) --> 쿼리가 3번 나감
//            }
//                    "select m from Member m inner join m.team t";
//            List<Object[]> result = em.createQuery(query).getResultList();
//            for (Object[] objects : result) {
//                System.out.println("objects[0] = " + objects[0]);
//                System.out.println("objects[1] = " + objects[1]);
//                System.out.println("objects[2] = " + objects[2]);
//            }
//            List<Member> resultList = em.createQuery("select m from Member m order by m.age desc", Member.class)
//                    .setFirstResult(1)
//                     .setMaxResults(10)
//                    .getResultList();

            
            //            List<MemberDTO> resultList = em.createQuery("select new jpql.MemberDTO(m.username, m.age) from Member m", MemberDTO.class).getResultList();
//
//            MemberDTO memberDTO = resultList.get(0);
//            System.out.println("memberDTO.getUsername() = " + memberDTO.getUsername());
//            System.out.println("memberDTO.getUsername() = " + memberDTO.getAge());
//

//            TypedQuery<Member> stringTypedQuery = em.createQuery("select m from Member m where m.username = :username", Member.class);
//            stringTypedQuery.setParameter("username", "member1");
//            Member singleResult = stringTypedQuery.getSingleResult();
//            System.out.println("singleResult = " + singleResult.getUsername());

//            TypedQuery<Member> query = em.createQuery("select m.username from Member m", Member.class); // 제네릭타입
//            Member singleResult = query.getSingleResult();
//            List<Member> resultList = query.getResultList();
//
//            for (Member member1: resultList) {
//                System.out.println(member1);
//            }
            //Query query3 = em.createQuery("select m.username, m.age from Member m");





            System.out.println("=====================");
            tx.commit(); // 진짜 db에 들어가게 됨
        }catch(Exception e){
            tx.rollback();
            e.printStackTrace();
            //em.close();
        }
        emf.close();
    }
}