"""
1. 홍길동 씨의 주민등록 번호는 881120-1068234 이다. 
홍길동씨의 주민등록번호를 연월일(YYYYMMDD) 부분과 그 뒤 숫자 부분으로 나누어 출력
"""
pin = "881120-1068234"
yyyymmdd = pin[0:6]
num = pin[7:]
print(yyyymmdd)
print(num)

"""
2. 주민등록번호 뒷자리의 맨 첫 번째 숫자는 성별을 나타낸다. 주민등록번호에서 성별을 나타내는 숫자를 출력
"""
print(pin[7])

"""
리스트 
3. [1, 3, 5, 4, 2] 리스트를 [5, 4, 3, 2, 1]로 만들기
"""
a = [1, 3, 5, 4, 2]
a.sort()
a.reverse()
print(a)


"""
2. ['Life', 'is', 'too', 'short']라는 리스트를 Life is too short라는 문자열로
"""
b = ['Life', 'is', 'too', 'short']
result = " ".join(b)
print(result)

"""
튜플
1. (1, 2, 3)이라는 튜플에 4라는 값을 추가하여 (1, 2, 3, 4)처럼 만들어 출력해보자. 
"""
c = (1, 2, 3)
d = (4,)
print(c+d)

"""
딕셔너리
1. 딕셔너리 a에서 'B'에 해당되는 값을 추출하고 삭제해 보자. 
"""
a = {'A':90, 'B':80, 'C':70}
result = a.pop('B')
print(a)
print(result)

"""
집합
1. a 리스트에서 중복된 숫자들을 제거 
"""
a = [1, 1, 1, 2, 2, 3, 3, 3, 4, 4, 5]
aSet = set(a)
b = list(aSet)
print(b)

"""
변수 
1. 파이썬은 다음처럼 동일한 값에 여러 개의 변수를 선언할 수 있다. 
아래와 같이 a, b 변수를 선언한 후 a의 첫 번째 요소 값을 변경하면 b의 값은 어떻게 될까?
그리고 이런 결과가 나오는 이유에 대해서 설명해보자. 
"""
a = b = [1, 2, 3]
a[1] = 4
print(b)

# 제어문 
money = 1
if money:
    print("택시를 타고 가라")
else:
    print("걸어 가라")


money = 2000
if(money >= 3000):
    print("택시를 타라")
else:
    print("걸어가라")


1 in [1, 2, 3] # 1이 [1, 2, 3] 안에 있는가?
1 not in [1, 2, 3] #1이 [1, 2, 3] 안에 없는가

'a' in ('a', 'b', 'c')
jinString = 'j' not in 'python'
print(jinString)

print("---------------")
pocket = ['papaer', 'cellphone', 'moeny']
if 'money' in pocket:
    #print("택시를 타고 가라")
    pass
else: 
    print("걸어 가라")

print("---elif------------")

pocket = ['paper', 'cellphone']
card = 1
if 'money' in pocket:
    print("택시를 타고 가라")
elif card:
    print("택시를 타고 가라")
else:
    print("걸어 가라")

if 'money' in pocket : pass
else: print("카드를 꺼내라")

treeHit = 0 #나무를 찍은 횟수
while treeHit < 10:
    treeHit = treeHit +1
    print("나무를 %d번 찍었습니다." % treeHit)
    if treeHit == 10:
        print("나무 넘어갑니다.")

coffee = 10
money = 300
while money:
    print("돈을 받았으니 커피를 줍니다.")
    coffee = coffee -1
    print("남은 커피의 양은 %d개입니다." % coffee)
    if not coffee:
        print("커피가 다 떨어졌습니다. 판매를 중지합니다.")
        break
