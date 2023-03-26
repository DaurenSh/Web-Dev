a=int(input())
c=0
for i in range(1,int(a**0.5)+1):
    if(a%i==0):
        if(int(i)!=int(a/i)):
                c=c+2
        else:
            c=c+1
print(c)