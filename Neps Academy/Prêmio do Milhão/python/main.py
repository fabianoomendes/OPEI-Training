E = int(input())

views = []
for i in range(E):
    E2 = int(input())
    views.append(E2)

tot = 0
result = -1
for i, v in enumerate(views):
    dia = i + 1
    total = tot + v
    if tot >= 1000000 and result == -1:
        result = dia

print(result)