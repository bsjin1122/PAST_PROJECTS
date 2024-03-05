import re
# p = re.compile('[a-z]+')
# m = p.match("python")
m = re.match('[a-z]+', 'python')

print(m.group())
print(m.start())
print(m.end())
print(m.span()) #매치된 문자열의 (시작, 끝) 에 해당되는 튜플을 리턴한다. 

print('-----문자열 바꾸기----')
p = re.compile('(blue|white|red)')
print(p.sub('colour', 'blue socks and red shoes', count=1))

p2 = re.compile('(blue|white|red)')
print(p2.subn('colour', 'blue socks and red shoes'))

p3 = re.compile(r"(?P<name>\w+)\s+(?P<phone>(\d+)[-]\d+[-]\d+)")
print(p3.sub("\g<phone> \g<name>", "park 010-1234-5678"))
print(p3.sub("\g<2> \g<1>", "park 010-1234-5678"))
