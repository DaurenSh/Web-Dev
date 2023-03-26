a=int(input())
b=int(input())
ind=0
for i in range(a,b+1):
    if(int(i**0.5)**2==i):
        if(ind==1):
            print(" ",end="")
        print(i,end="")
        ind=1