class HousePark:
    lastname="박"
    def __init__(self, name):
        self.fullname = self.lastname + name
    def travel(self, where):
        print("%s, %s여행을 가다." %(self.fullname, where))

"""
pey = HousePark("응용")
# pey.setname("응용")
pey.travel("태국")
pey = HousePark()
print(pey.lastname)
pey.setname("응용")
print(pey.fullname)
pey.travel("부산")
"""

class HouseKim(HousePark):
    lastname="김"
    def travel(self, where, day):
        print("%s, %s여행 %d 가네." %(self.fullname, where, day))

pey = HousePark("응용")
juliet = HouseKim("줄리엣")
pey+juliet
# juliet.travel("독도")