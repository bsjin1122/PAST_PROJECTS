import random
def random_pop(data):
    number = random.randint(0, len(data)-1)
    return data.pop(number)

if __name__=="__main__":
    data = [1, 2, 3, 4, 5]
while data: print(random_pop(data))

# import random
# data = [1, 2, 3, 4, 5]
# random.shuffle(data)
# print(data)
