# def sum(a, b):
#     return a+b

# a = 3
# b = 4
# c = sum(a, b)
# print(c)

# def say():
#     return 'Hi'
# a = say()
# print(a)

# def sum(a, b):
#     print("%d, %d의 합은 %d입니다." %(a, b, a+b))

# a = sum(3, 4)
# print(a)

# def say():
#     print("hi")

# say()

# def sum_many(*args):
#     sum = 0
#     for i in args:
#         sum = sum + i
#     return sum 

# result = sum_many(1, 2, 3)
# print(result)

# result = sum_many(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
# print(result) 

"""
def sum_mul(choice, *args):
    if choice == "sum":
        result = 0
        for i in args:
            result = result + i
    elif choice == "mul":
        result = 1
        for i in args:
            result = result * i
    return result 

result = sum_mul('sum', 1, 2, 3, 4, 5)
print(result)

result = sum_mul('mul', 1, 2, 3, 4, 5)
print(result)

def sum_and_mul(a, b):
    return a+b
    # return a*b
result = sum_and_mul(3, 4)
# sum, mul = sum_and_mul(3, 4)
print(sum)
# print(mul)
print(result)

result = sum_and_mul(2, 3)
print(result)
"""

# def say_nick(nick):
#     if nick == "바보":
#         return
#     print("나의 별명은 %s입니다." % nick)

# say_nick("아호")
# say_nick("바보")

def say_myself(name, old, man=True):
    print("나의 이름은 %s입니다." %name)
    print("나이는 %d살입니다." %old)
    if man:
        print("남자입니다.")
    else:
        print("여자입니다.")

say_myself("박응용", 27)
say_myself("박응용", 27, True)
say_myself("박응선", 27, False)