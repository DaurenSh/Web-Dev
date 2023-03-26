a=str(input())
c=0
for i in range(0,len(a)):
    c=c+int(a[i])*(2**(len(a)-1-i))
print(c)