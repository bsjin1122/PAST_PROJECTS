# a = abs(3)
# a = abs(-3) 3
a = abs(-1.2)
print(a)

# b = all([1, 2, 3])
b = all([1, 2, 3, 0]) #False
print(b)

# all(x)은 반복 가능한(iterable) 자료형 x를 입력 인수로 받으며, 
# 이 x가 모두 참이면 True, 거짓이 하나라도 있으면 False
# c = any([1, 2, 3, 0]) # True 
c = any([0, ""]) # False
print(c)

# d = chr(97) a 아스키 코드 문자/숫자
d = chr(48)  # 0
print(d)

# e = dir([1, 2, 3]) 객체가 자체적으로 가지고 있는 변수나 함수를 보여준다. 
e = dir({'1': 'a'})
# print(e)

# a를 b로 나눈 몫과 나머지를 튜플 형태로 리턴하는 함수
f = divmod(7,3)
print(f) # 7 나누기 3의 몫은 2, 나머지는 1

g = divmod(1.3, 0.2)
print(g) 

for i, name in enumerate(['body', 'foo', 'bar']):
    print(i, name)

o = eval('1+2')
print(o)

print(eval("'hi'+'a'"))
print(eval('divmod(4,3)'))
