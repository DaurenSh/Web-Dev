a=int(input())
b=int(input())

for i in range(a,b+1):
    if(i%2==0):
        if(i>a):
            print(" ",end="")
        print(i,end="")