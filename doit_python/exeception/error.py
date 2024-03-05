"""
try:
    a=[1, 2]
    print(a[3])
    4 / 0
except (ZeroDivisionError,ZeroDivisionError) as e:
    print(e)
"""

# 오류 회피하기
try:
    f=open("나없는 파일", 'r')
except FileNotFoundError:
    pass