import time
print(time.time())
print('----------------')
print(time.localtime(time.time()))
print('----------------')
print(time.asctime(time.localtime(time.time())))
print('----------------')
print(time.ctime()) #현재 시간만을 리턴
print(time.strftime('%x', time.localtime(time.time()))) #여러 가지 포맷 코드 제공
print(time.strftime('%c', time.localtime(time.time()))) #여러 가지 포맷 코드 제공
