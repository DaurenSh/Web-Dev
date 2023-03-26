a=int(input())
b=int(input())
c=int(input())
d=int(input())

for i in range(a,b+1):
    if(i%d==c):
        if(i>a):
            print(" ",end="")
        print(i,end="")
