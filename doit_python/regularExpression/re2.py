import re
p = re.compile('[a-z]+')

"""
re.compile을 이용하여 정규 표현식을 컴파일한다. 
re.compile의 결과로 리턴되는 
객체 p(컴파일된 패턴 객체)를 이용하여 그 이후의 작업을 수행

p = re.compile(정규표현식)
m = p.match("조사할 문자열")
if m:
    print('Match found:', m.group())
else:
    print('No match')



"""
# m = p.match("python") # <re.Match object; span=(0, 6), match='python'>
# m = p.match("3 python") #None
# print(m)

result = p.findall("life is too short")
print(result) #['life', 'is', 'too', 'short']

result2 = p.finditer("life is too short")
print(result2)
for r in result2: print(r)

"""
['life', 'is', 'too', 'short']
<callable_iterator object at 0x000002C81806A5C0>
<re.Match object; span=(0, 4), match='life'>
<re.Match object; span=(5, 7), match='is'>
<re.Match object; span=(8, 11), match='too'>
<re.Match object; span=(12, 17), match='short'>
"""

