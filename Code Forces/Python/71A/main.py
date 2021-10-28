lines = int(input())
inputs = []

for i in range(lines):
    inputs.append(input())

for i in range(lines):
    if len(inputs[i]) > 10:
        print('{}{}{}'.format(inputs[i][0], len(inputs[i])-2, inputs[i][len(inputs[i])-1]))
    else:
        print(inputs[i])