# 프로그램의 외부에 저장된 파일을 읽는 여러가지 방법
f = open("C:/study/python_sj/새파일.txt")
while True:
    line = f.readline()
    if not line: break
    print(line)
f.close()