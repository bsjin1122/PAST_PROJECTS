print('------<pow>-----')
print(pow(2, 4))
print(pow(3, 3))

print('----range----')
print(list(range(5)))
print(list(range(5, 10)))
print(list(range(1, 10, 2)))
print(list(range(0, -10, -1)))
print('')
print('-----sorted-----')
print(sorted([3, 1, 2]))
print(sorted(['a', 'b', 'c']))
print(sorted("zero"))
print(sorted((3, 2, 1)))

print('')
print('----sort함수의 경우----')
# 객체 그 자체를 정렬만할 뿐, 정렬된 결과를 리턴하지는 않는다. 
a = [3, 1, 2]
result = a.sort()
print(result)
print(a)

print('----str함수----')
print(str(3))
print(str('hi'))
print(str('hi'.upper()))

print('----tuple 함수----')
print(tuple("abc"))
print(tuple([1, 2, 3]))
print(tuple((1, 2, 3)))

print('----type함수----')
print(type("abc"))
print(type([]))
print(type(open("test", 'w'))) #파일자료형

print('----zip----')
# 동일한 개수로 이루어진 자료형을 묶어주는 역할을 하는 함수이다.
print(list(zip([1, 2, 3], [4, 5, 6])))
print(list(zip([1, 2, 3], [4, 5, 6], [7, 8, 9])))
print(list(zip("abc", "def")))
print(list(zip("ㄱ, ㄴ, ㄷ", "ㄹ, ㅁ, ㅂ", "ㅇ, ㅈ, ㅊ")))