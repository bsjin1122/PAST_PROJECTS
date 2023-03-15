try:
    # 4 / 0
    a = [1, 2, 3]
    a[4]
# except ZeroDivisionError as e:
except IndexError as e:
    print(e)