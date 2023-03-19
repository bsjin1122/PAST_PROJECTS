import re
# 1. DOTALL, S
"""
p = re.compile('a.b', re.DOTALL)
m = p.match('a\nb')
print(m)

# None
# re.DOTALL 을 쓰면, <re.Match object; span=(0, 3), match='a\nb'>
"""

# 2. IGNORECASE, I 
p = re.compile('[a-z]', re.I) #대소문자 구분 없이 매치됨
print(p.match('python'))
