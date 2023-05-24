import json

# read JSON data from file
with open('data.json', 'r') as file:
    data = json.load(file)

distinct_values = set()

# separate string by comma and add to set
for item in data:
    i = item['category'].split(", ")
    # print(i)
    for j in i:
        distinct_values.add('"' + j.capitalize() + '"')


# write distinct values to text file
with open('distinct_values.txt', 'w') as file:
    file.write("[")
    file.write(', '.join(sorted(distinct_values)))
    file.write("]")


#