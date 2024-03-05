# class Simple:
#     pass

# a = Simple()

# class Service:
#     secret = "영구는 배꼽이 두 개다."

# pey = Service()
# print(pey.secret)

"""
class Service:
    secret = "영구는 배꼽이 두 개다"
    def setname(self, name):
        self.name = name
    def sum(self, a, b):
        result = a + b
        print("%s님 %s + %s = %s입니다." % (self.name, a, b, result))

pey = Service()
pey.setname("홍길동")
pey.sum(1, 1)

babo = Service()
babo.sum(1, 1)
"""

class Service:
    secret = "영구는 배꼽이 두 개다"
    def __init__(self, name): #인스턴스를 만들 때 항상 실행된다. 
        self.name = name
    def sum(self, a, b):
        result = a + b
        print("%s님 %s + %s = %s입니다." %(self.name, a, b, result))
