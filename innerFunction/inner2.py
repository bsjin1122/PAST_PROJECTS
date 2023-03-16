print(hex(234)) #16진수로 변환 #0xea
print(hex(3)) #0x3

# id는 객체를 입력받아 객체의 고유 주소값(레퍼런스)을 리턴하는 함수이다.
a = 3
print(id(3))
print(id(a))
b = a
print(id(b))
print(id(4))

#10진수로 표현 
print(int('3'))
print(int(3.4))

# isinstance(인스턴스, 클래스이름)
# 입력으로 받은 인스턴스가 그 클래스의 인스턴스인지를 판단하여 
# 참이면 True, 거짓이면 False
class Person: pass

c = Person()
print(isinstance(c, Person))

d = 3
print(isinstance(b, Person))

"""
def sum(a, b):
    return a+b
"""
print('lambda--------------------')
sum = lambda a, b: a+b
print(sum(3, 4))

myList = [lambda a, b:a+b, lambda a, b: a*b]
print(myList)
print(myList[0](3, 4))
print(myList[1](3, 4))

print(len("python")) #6
print(len([1, 2, 3])) #3
print(len((1, 'a'))) #2

print(list("python"))
print(list((1, 2, 3)))

d = [1, 2, 3]
e = list(d)
print(e)
