"""
coffee = 10
while True:
    money = int(input("돈을 넣어주세요. : "))
    if money == 300:
        print("커피를 줍니다.")
        coffee = coffee - 1
    elif money > 300:
        print("거스름돈 %d를 주고 커피를 줍니다." %(money-300))
        coffee = coffee -1
    else:
        print("돈을 다시 돌려주고 커피를 사지 않습니다")
        print("남은 커피의 양은 %d개 입니다." % coffee)
    if not coffee:
        print("커피가 다 떨어졌습니다. 판매를 중지합니다.")
        break
"""

a = 0
while a < 10:
    a = a+1
    if a % 2 ==0: 
        continue
    print(a)

while True:
    print("Ctrl + C를 눌러야 while문을 빠져나갈 수 있습니다.")

test_list = ['one', 'two', 'three']
for i in test_list:
    print(i)

marks = [90, 25, 67, 45, 80]
number = 0
for mark in marks:
    number = number +1
    if mark >= 60:
        print("%d번 학생은 합격입니다." %number)
    else:
        print("%d번 학생은 불합격입니다." %number)

a = [(1, 2), (3, 4), (5, 6)]
for (first, last) in a:
    print(first+last)

marks = [90, 25, 67, 45, 80]
number = 0
for mark in marks:
    number = number + 1
    if mark < 60: continue
    print("%d번 학생 축하합니다. 합격입니다." %number)


sum = 0
for i in range(1, 11):
    sum = sum + i

print(sum) 

marks = [90, 25, 67, 45, 80]
for number in range(len(marks)):
    if marks[number] < 60: continue
    print("%d번 학생 축하합니다. 합격입니다." %(number +1)) 

for i in range(2, 10):
    for j in range(1, 10):
        print(i*j, end =" ")
    print('')

a = [1, 2, 3, 4]
result = []
for num in a:
    result.append(num *3)

print(result)

result = [num * 3 for num in a]
result = [num * 3 for num in a if num % 2 == 0]
print(result)

result = [x*y for x in range(2, 10) for y in range(1, 10)]
print(result)

# IF문 -- 1
a = "Life is too short, you need python"

if "wife" in a: print("wife")
elif "python" in a and "you" not in a: print("python")
elif "shirt" not in a: print("shirt")
elif "need" in a: print("need")
else: print("none")

i = 0
while True:
    i += 1
    if i > 5: continue
    print("*"* i)

A = [70, 60, 55, 75, 95, 90, 80, 80, 85, 100]
total = 0
for score in A:
    total += score
average = total/len(A)
print(average)