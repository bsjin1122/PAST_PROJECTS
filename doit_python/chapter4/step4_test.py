# n = int(input("숫자을 입력하세요"))
# def fib(n):
#     if n == 0 : return 0
#     if n == 1 : return 1
#     return 

#2 파일 읽고 쓰기 
f = open("C:/study/python_sj/chapter4/sample.txt", 'r')
lines = f.readlines()
list = []

for line in lines:
    list.append(line.replace("\n", ""))
f.close()

total = 0
for i in list:
    total += int(i)

average = total / len(list)

fi = open("C:/study/python_sj/chapter4/result.txt", "w")
fi.write(str(average))
fi.close()
