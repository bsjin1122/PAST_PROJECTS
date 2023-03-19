import re

data = """
park 010-9999-9988
kim 010-9909-7789
lee 010-8789-7768
"""

pat = re.compile("(\d{3}[-]\d{4})[-]\d{4}")
result = pat.sub("\g<1>-####", data)
print(result)



p2 = re.compile('[a-z]+')
m2 = p2.search("5 python")
print(m2.start() + m2.end())

print('-----이메일 정규식----')
pat2 = re.compile(".*[@].*[.](?:com$|net$).*$")
print(pat2.match("pahkey@gmail.com"))
print(pat2.match("kim@daum.net"))
print(pat2.match("lee@myhome.co.kr"))