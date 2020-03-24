# QUESTION 1
# rotate the string


def rotate_the_string(string, directions, amounts):
    orig_string = string

    for direction, amount in zip(directions, amounts):
        list_string = list(orig_string)
        new_list_string = list_string[:]
        amount = amount % len(list_string)
        for char_index in range(len(list_string)):
            new_index = char_index + amount if direction == 0 else char_index - amount
            if new_index >= len(list_string) or new_index < 0:
                new_index = new_index % len(list_string) if direction == 0 else new_index + len(list_string)

            new_list_string[char_index] = list_string[new_index]

        # if direction == 0:
        #     amount = amount % len(list_string)
        #     for char_index in range(len(list_string)):
        #         new_index = char_index + amount
        #         # print(list_string, new_index)
        #         if new_index >= len(list_string):
        #             new_index = new_index %  len(list_string)
        #         new_list_string[char_index] = list_string[new_index]
        #
        # elif direction == 1:
        #     amount = amount % len(list_string)
        #     for char_index in range(len(list_string)):
        #         new_index = char_index - amount
        #         if new_index < 0:
        #             new_index = new_index + len(list_string)
        #         new_list_string[char_index] = list_string[new_index]

        orig_string = "".join(new_list_string)
    return orig_string

# print(rotate_the_string('ephjos', [1,0], [7,4]))
print(rotate_the_string('hurart', [0,1], [4,1]))
