class Bird:
    def fly(self):
        #raise NotImplementedError
        print("very fast")

class Eagle(Bird):
    pass

eagle = Eagle()
eagle.fly()