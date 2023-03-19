# \section
# [\t\n\r\f\v]ection
import re
# p = re.compile("r'\\section")
"""
정규식 문자열 앞에 r문자를 삽입하면, 이 정규식은 Raw String 규칙에 의하여 
백슬래시 2개 대신, 1개만 써도 2개 쓴 것과 동일한 의미를 갖게 된다. 
"""

# |(or)
p = re.compile('Crow|Servo')
m = p.match('CrowHello')
print(m)

print(re.search('^Life', 'Life is too short'))
print(re.search('^Life', 'My Life'))

print('-------------')

# $ :끝과 매치
print(re.search('short$', 'Life is too short'))
print(re.search('short$', 'Life is too short, you need python'))

# \b : 단어 구분자
p1 = re.compile(r'\bclass\b')
print(p1.search('no class at all'))

print(p1.search('the declassified algorithm'))
print(p1.search('one subclass is'))

print('----------------')

# 그룹핑 (ABC)+
p2 = re.compile('(ABC)+')
m = p2.search('ABCABCABC OK?')
print(m)
print(m.group(0))

"""
group() : 매치된 문자열을 리턴한다.
start() : 매치된 문자열의 시작 위치를 리턴한다.
end() : 매치된 문자열의 끝 위치를 리턴한다.
span() : 매치된 문자열의 (시작, 끝)에 해당되는 튜플을 리턴한다. 
"""

# p3 = re.compile(r"(\w+)\s+\d+[-]\d+[-]\d+")
p3 = re.compile(r"(\w+)\s+((\d+)[-]\d+[-]\d+)")
m2 = p3.search("park 010-1234-1234")
print(m2.group(3))

print('---------그룹핑된 문자열 재참조하기--------')
p4 = re.compile(r'(\b\w+)\s+\1')
print(p4.search('Paris in the the spring').group())