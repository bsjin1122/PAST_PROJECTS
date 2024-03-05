package hellojpa;

import jakarta.persistence.*;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Root;
import org.hibernate.Hibernate;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Set;

public class JpaMain {

    public static void main(String[] args) {

        EntityManagerFactory emf = Persistence.createEntityManagerFactory("hello");
        EntityManager em = emf.createEntityManager(); // 고객의 요청이 들어올 때마다 -> 쓰레드간에 공유x (사용하고 버려야 한다.)

        EntityTransaction tx = em.getTransaction();
        tx.begin();

        try{
            // Criteria 사용 준비
            CriteriaBuilder cb = em.getCriteriaBuilder();
            CriteriaQuery<Member> query = cb.createQuery(Member.class);
            
            // 루트 클래스 (조회를 시작할 클래스)
            Root<Member> m = query.from(Member.class);
            // 쿼리 생성
            CriteriaQuery<Member> cq = query.select(m).where(cb.equal(m.get("username"), "kim"));
            List<Member> resultList = em.createQuery(cq).getResultList();


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
/* 섹션9 값타입
             Address address = new Address("city", "street", "10000");
            Address address2 = new Address("city", "street", "10000");

            System.out.println(address== address2);
            System.out.println(address.equals(address2));
//
//            Member member = new Member();
//            member.setUsername("member1");
//            member.setHomeAddress(address);
//            em.persist(member);
//
//            Address newAddress = new Address("NewCity", address.getStreet(), address.getZipcode());
//            member.setHomeAddress(newAddress);


            //member.getHomeAddress().setCity("newCity"); // member, member2 둘 다 바뀌게 됨! 이런 버그는 잡기가 어렵다.
            //--------------------------------------------------------------------
                        Member member = new Member();
            member.setUsername("member");
            member.setHomeAddress(new Address("homecity", "street", "zipcode100"));


            member.getFavoriteFoods().add("치킨");
            member.getFavoriteFoods().add("족발");
            member.getFavoriteFoods().add("피자");

            member.getAddressHistory().add(new AddressEntity("old1", "street1", "1000"));
            member.getAddressHistory().add(new AddressEntity("old2", "street1", "1000"));

            em.persist(member);

            em.flush();
            em.clear(); // db에는 데이터가 있는 상태처럼.

            System.out.println("--------------------START-------------------");
            Member findMember = em.find(Member.class, member.getId());
            // X : findMember.getHomeAddress().setCity("newCity");
           // Address homeAddress = findMember.getHomeAddress();
           //  findMember.setHomeAddress(new Address("newCity", homeAddress.getStreet(), homeAddress.getZipcode())); // 완전히 교체가 필요

            // 치킨을 한식으로 바꾸고 싶다면...?
//            findMember.getFavoriteFoods().remove("치킨");
//            findMember.getFavoriteFoods().add("한식"); // String 은 통째로 갈아끼워야 한다.

            System.out.println("===========ADDRESS===========+");
            // 주소 바꾸기
            //findMember.getAddressHistory().remove(new Address("old1", "street1", "1000")); // hashcode가 의미 있음, 같은 값으로 찾음 equals
            //findMember.getAddressHistory().add(new Address("newCity1", "street1", "1000"));


//            List<Address> addressHistory = findMember.getAddressHistory();
//            for (Address address: addressHistory) {
//                System.out.println("address.getCity() = " + address.getCity());
//            }
//            Set<String> favoriteFoods = findMember.getFavoriteFoods();
//            for (String favoriteFood: favoriteFoods) {
//                System.out.println("favoriteFood = " + favoriteFood);
//            }

 */

/* 섹션8 프록시와 연관관계 정리
            Member member = new Member();
            member.setUsername("helloo");
            em.persist(member);

            em.flush();
            em.clear();

            //Member findMember = em.find(Member.class, member.getId()); // 쿼리가 나감
            Member findMember = em.getReference(Member.class, member.getId()); // 쿼리가 나감
            //System.out.println("findMember.getClass() = " + findMember.getClass());
            //System.out.println("findMember.getId() = " + findMember.getId());
            System.out.println("findMember.getUsername() = " + findMember.getUsername());

            // --------------------------------
            Team team = new Team();
            team.setName("teamA");
            em.persist(team);
            Team teamB = new Team();
            teamB.setName("teamB");
            em.persist(teamB);

            Member member1 = new Member();
            member1.setUsername("member1");
            member1.setTeam(team);
            em.persist(member1);

            Member member2 = new Member();
            member2.setUsername("member2");
            member2.setTeam(teamB);
            em.persist(member2);

            em.flush();
            em.clear();

            List<Member> members = em.createQuery("select m from Member m", Member.class).getResultList();

            Member m = em.find(Member.class, member2.getId());
            System.out.println("m.getTeam().getClass() = " + m.getTeam().getClass());

            System.out.println("-----------");
            m.getTeam().getName();
            System.out.println("m.getTeam().getName() = " + m.getTeam().getName());
            System.out.println("-----------");

            //-----------------------------------
             Child child1 = new Child();
            Child child2 = new Child();

            Parent parent = new Parent();
            parent.addChild(child1);
            parent.addChild(child2);

            em.persist(parent);


            em.flush();
            em.clear();

            Parent findParent = em.find(Parent.class, parent.getId());
            //em.remove(findParent);
             findParent.getChildList().remove(0);






 */
/* 섹션 7 고급 매핑
 *  Movie movie = new Movie();
            movie.setDirector("aaa");
            movie.setActor("bbb");
            movie.setName("바람과함께사라지다");
            movie.setPrice(10000);
            em.persist(movie);

            em.flush();
            em.clear(); // 1차 캐시에 아무것도 안남음
            Movie findMovie = em.find(Movie.class, movie.getId());
            System.out.println("movie = " + movie);
            System.out.println("findMovie = " + findMovie);

            Member member = new Member();
            member.setCreateBy("kim");
            member.setUsername("user1");
            member.setCreatedDate(LocalDateTime.now());

            em.persist(member);

            em.flush();
            em.clear();

 */
/* 섹션6
            Member member = new Member();
            member.setUsername("member1");
            em.persist(member);

            Team team = new Team();
            team.setName("teamA");
            // 애매해짐.....
            team.getMembers().add(member);
            em.persist(team);
*/


            /* 섹션5
            // 저장
            Team team = new Team();
            team.setName("TeamA");
            em.persist(team);

            Member member = new Member();
            member.setUsername("member1");
            member.changeTeam(team);
            em.persist(member);

            // team.getMembers().add(member); ---> Member 엔터티에서 편의 메소드를 만들어주자.


            em.flush(); // db에 있는것 가져옴
            em.clear(); // 영속성 컨텍스트 초기화


            Member findMember = em.find(Member.class, member.getId()); // 1차캐시에서 가져옴
            List<Member> members = findMember.getTeam().getMembers();
            for (Member m : members) {
                System.out.println("m = " + m.getUsername());
            }
            */


            /*List<Member> result = em.createQuery("select m from Member as m", Member.class).getResultList(); // 대상이 테이블이 아니고 객체가 된다.
            for (Member member: result) {
                System.out.println("member.name = " + member.getName());
            }*/

            //Member member = new Member(200L, "member200");
            //em.persist(member);

            // em.flush(); // 강제로 호출, insert query가 실행되었다.
            // 쿼리가 db에 바로 반영이 되어버림. 이름 조심.
            //Member member = em.find(Member.class, 150L);
            //member.setName("AAAAA");

//            Member findMember1 = em.find(Member.class, 150L);
//            em.clear();
//            Member findMember2 = em.find(Member.class, 150L); // 초기화돼서 다시 영속성 컨텍스트에 올리게 된다.

//            em.clear(); // 영속성 컨테이너 안에 있는 모든 것들을
            //em.detach(member); // jpa에서 관리하지 않음. 커밋할 때 아무 일도 일어나지 않음. select 쿼리만 나가고, update 쿼리 안함

//            Member member1 = new Member(150L, "A");
//            Member member2 = new Member(160L, "B");
//
//            em.persist(member1);
//            em.persist(member2);


//            Member findMember1 = em.find(Member.class, 101L);
//            Member findMember2 = em.find(Member.class, 101L); // 조회 1번만 됨!
//            System.out.println("findMember1 == findMember2" + (findMember1 == findMember2)); // true


//            // 비영속상태
//            Member member = new Member();
//            member.setId(101L);
//            member.setName("HelloJPA"); // jpa가 매핑정보를 보고 직접 넣어준다.
//            // 영속
//            System.out.println("=====BEFORE====");
//            em.persist(member); // ----> 영속 상태가 된다. 관리가 된다는 뜻이다.
//            System.out.println("=====AFTER====");
//
//
//            Member findMember = em.find(Member.class, 101L);
//            System.out.println("findMember.id = " + findMember.getId());
//            System.out.println("findMember.name = " + findMember.getName());

//            findMember.setName("HelloJPA"); // 수정 시에는 persist 안해도 됨. 컬렉션처럼 됨.
//            System.out.println("findMember.id = " + findMember.getId());
//            System.out.println("findMember.name = " + findMember.getName());


