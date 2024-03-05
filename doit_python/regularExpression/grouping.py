import re
# 그룹핑 된 문자열에 이름 붙이기 
p = re.compile(r"(?P<name>\w+)\s+((\d+)[-]\d+[-]\d+)")
m = p.search("park 010-1234-5678")
print(m.group("name"))

p2 = re.compile(r'(?P<word>\b\w+)\s+(?P=word)')
print(p2.search('Paris in the the spring').group())

p3 = re.compile(".+:")
m3 = p3.search("http://google.com")
print(m3.group())

print('-----긍정형 전방 탐색-----')
p4 = re.compile(".+(?=:)")
m4 = p4.search("http://google.com")
print(m4.group())

