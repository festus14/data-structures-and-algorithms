
 # MOORE HACKERRANK
import copy
from collections import defaultdict
def gridSort(arr, rules_string, turns):

    rules = []
    for index, status in enumerate(rules_string):
        if status == 'alive':
            rules.append(index)

    rules_dict = defaultdict(int)
    for num in rules:
        rules_dict[num] = True

    for _ in range(turns):
       new_array = copy.deepcopy(arr)
       for i in range(len(arr)):
           for j in range(len(arr[i])):
               count = 0
               if i == 0:
                   count += (arr[i+1][j])
                   if j == 0 or 0 < j < len(arr[i])-1:
                       count += (arr[i][j+1])
                       count += (arr[i+1][j+1])
                   if j == len(arr[i])-1 or 0 < j < len(arr[i])-1:
                       count += (arr[i][j-1])
                       count += (arr[i+1][j-1])
               elif i == len(arr)-1:
                   count += (arr[i-1][j])
                   if j == 0 or 0 < j < len(arr[i])-1:
                       count += (arr[i][j+1])
                       count += (arr[i-1][j+1])
                   if j == len(arr[i])-1 or 0 < j < len(arr[i])-1:
                       count += (arr[i][j-1])
                       count += (arr[i-1][j-1])
               else:
                   count += (arr[i-1][j])
                   count += (arr[i+1][j])
                   if j == 0 or 0 < j < len(arr[i]) - 1:
                       count += (arr[i + 1][j + 1])
                       count += (arr[i][j + 1])
                       count += (arr[i - 1][j + 1])
                   if j == len(arr[i]) - 1 or 0 < j < len(arr[i]) - 1:
                       count += (arr[i + 1][j - 1])
                       count += (arr[i][j - 1])
                       count += (arr[i - 1][j - 1])

               new_array[i][j] = count

       for i in range(len(arr)):
           for j in range(len(arr[i])):
               if rules_dict[new_array[i][j]]:
                   arr[i][j] = 1
               else:
                   arr[i][j] = 0

    print(arr)

print(gridSort([[0,1,0,0], [0,0,0,0]], ['dead', 'alive', 'dead', 'dead', 'dead', 'dead', 'dead', 'dead', 'dead', ], 1))
# # WEEKLY STOCK PRICE
# result = []
# days = [1,1,1,1,1,1,1,7,7,7,7,7,7,7]
# for i in range(len(days) - 6):
#     seven_days_sum = sum(days[i: i+7])
#     average = seven_days_sum/7
#
#     each_average = str(round(average, 2))
#     result.append(each_average)
#
# print(result)

