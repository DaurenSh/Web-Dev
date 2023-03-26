a=str(input())
b=int(a)
c=0
for i in range(0,len(a)):
    c=c*10+(b%10)
    b=int(b/10)
print(c)
