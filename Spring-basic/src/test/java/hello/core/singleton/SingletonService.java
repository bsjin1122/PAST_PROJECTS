package hello.core.singleton;

public class SingletonService {
    private static final SingletonService instance = new SingletonService();// 클래스 레벨이므로, 딱 한번만 올라감. static 영역

    // 조회할 때
    public static SingletonService getInstance(){
        return instance;
    }

    private SingletonService(){
    }

    public void logic(){
        System.out.println("싱글톤 객체 로직 호출");
    }





}
