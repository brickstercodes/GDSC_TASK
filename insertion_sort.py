arr = [33, 12, 24, 42, 87, 92, 20, 100]

for i in range(1, len(arr)):
    j = i-1
    temp = arr[i]

    if temp <= arr[j]:
        continue
    
    else:
        while temp > arr[j] and j>=0:
            arr[j+1] = arr[j]
            arr[j] = temp
            j-=1

print(arr)
