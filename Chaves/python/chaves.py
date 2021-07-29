input = input()
cont1 = 0
cont2 = 0

for i in range(len(input)):
    if input[i] == '{':
        cont1 += 1
    
    if input[i] == '}':
        cont2 += 1

if cont1 == cont2 or (cont1 + cont2) == 0:
    print("S")
else:
    print("N")