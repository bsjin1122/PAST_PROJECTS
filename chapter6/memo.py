import sys

option = sys.argv[1]
"""
memo = sys.argv[2]

print(option)
print(memo)

if option == '-a':
    memo = sys.argv[2]
    f = open('C:/Users/SEOJIN/SJ_STUDY/doit_python/chapter6/memo.txt', 'a')
    f.write(memo)
    f.write('\n')
    f.close()       
"""
if option == '-a':
    memo = sys.argv[2]
    f = open('C:/Users/SEOJIN/SJ_STUDY/doit_python/chapter6/memo.txt', 'a')
    f.write(memo)
    f.write('\n')
    f.close()
elif option =='-v':
    f = open('C:/Users/SEOJIN/SJ_STUDY/doit_python/chapter6/memo.txt')
    memo = f.read()
    f.close()
    print(memo)