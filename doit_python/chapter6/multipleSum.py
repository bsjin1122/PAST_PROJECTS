n = 1
'''
while n < 1000:
    print(n)
    n += 1
'''
result = 0
for n in range(1, 1000):
    if n % 3 == 0 or n % 5 ==0:
        result += n
print(result)