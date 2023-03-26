a=int(input())
ind=0
for i in range(1,a+1):
    if(a%i==0):
        if(ind==1):
            print(" ",end="")
        print(i,end="")
        ind=1