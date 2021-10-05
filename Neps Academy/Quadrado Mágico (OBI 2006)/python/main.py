input1 = input().split(" ")
input2 = input().split(" ")
input3 = input().split(" ")

inputs = [input1,input2,input3]
locl = []

def test(valor):
    prev = valor[0][0] + valor[0][1] + valor[0][2]
    for i in range(2):
        i += 1
        if (valor[0][i] + valor[0][i] + valor[0][i]) != prev:
            print(1)
            return 0

    prev = valor[0][0] + valor[1][0] + valor[2][0]
    for i in range(1, 2):
        if (valor[0][i] + valor[1][i] + valor[2][i]) != prev:
            print("aqui 2")
            return 0

    if (valor[0][0] + valor[1][1] + valor[2][2]) != prev:
        print("aqui 3")
        return 0

    if (valor[0][2] + valor[1][1] + valor[2][0]) != prev:
        print("aqui 4")
        return 0

    return 1

for i in range(3):
    for j in range(3):
        inputs[i][j] = int(inputs[i][j])
        if inputs[i][j] == 0:
            locl.append([i,j])

sum = 0
for i in range(3):
    if inputs[0][i] != 0 and inputs[1][i] != 0 and inputs[2][i] != 0:
        sum = inputs[0][i] + inputs[1][i] + inputs[2][i]
        break

if sum == 0:
    for i in range(3):
        if inputs[i][0] != 0 and inputs[i][1] != 0 and inputs[i][2] != 0:
            sum = inputs[0][i] + inputs[1][i] + inputs[2][i]
            break

if sum == 0:
    if inputs[0][0] != 0 and inputs[1][1] != 0 and inputs[2][2] != 0:
        sum = inputs[0][0] + inputs[1][1] + inputs[2][2]

if sum == 0:
    if inputs[0][2] != 0 and inputs[1][1] != 0 and inputs[2][0] != 0:
        sum = inputs[0][2] + inputs[1][1] + inputs[2][0]

if sum == 0:
    i = 0
    aux2 = inputs
    if inputs[0][0] == 0 and inputs[1][1] == 0 and inputs[2][2] == 0:
        aux4 = inputs[0][2] + inputs[2][0]
        aux3 = (inputs[0][1] + inputs[0][2]) - aux4
        aux2[1][1] = aux3
        aux4 = inputs[0][1] + inputs[0][2]
        aux3 = aux4 - (inputs[0][2] + inputs[1][2])
        aux2[2][2] = aux3
        while (sum == 0):
            aux2[0][0] += 1
            aux2[1][2] += 1
            aux2[2][2] += 1
            if test(aux2) == 1:
                print(aux2)
                break

    elif inputs[0][2] == 0 and inputs[1][1] == 0 and inputs[2][0] == 0:
        aux3 = inputs[0][0] + inputs[1][1] + inputs[2][2]
        aux3 = (inputs[0][0] + inputs[0][1] + inputs[0][2]) - aux3
        aux2[1][1] = aux3
        print(aux2)

for i in locl:
    inputs[i[0]][i[1]] = -sum

aux=0
for i in inputs:
    if (i[0] + i[1] + i[2]) < 0:
        i[locl[aux][1]] = -(i[0] + i[1] + i[2])
        aux += 1

for i in inputs:
    print('{} {} {}'.format(i[0],i[1],i[2]))