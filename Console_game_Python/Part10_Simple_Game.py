###########################
## PART 10: Simple Game ###
### --- CODEBREAKER --- ###
## --Nope--Close--Match--  ##
###########################

# It's time to actually make a simple command line game so put together everything
# you've learned so far about Python. The game goes like this:

# 1. The computer will think of 3 digit number that has no repeating digits.
# 2. You will then guess a 3 digit number
# 3. The computer will then give back clues, the possible clues are:
#
#     Close: You've guessed a correct number but in the wrong position
#     Match: You've guessed a correct number in the correct position
#     Nope: You haven't guess any of the numbers correctly
#
# 4. Based on these clues you will guess again until you break the code with a
#    perfect match!

import random
import collections

# Prints random numbers
def pick_numbers():
    digits = list(range(10))
    random.shuffle(digits)
    return(digits[:3])

# Prints guestion to user and lets user guess
def user_input():
    guess = input("What is your guess? ")
    return(guess)

# compares user input to random 3 digits
def compare(digits):
    g = int(user_input())
    guess = list(map(int, str(g)))
    print(str(digits) + " " + str(guess))
    match = "Match"
    close = "Close"
    nope = "Nope"
    winner = "You won"
    if (digits[0] == guess[0]) or (digits[1] == guess[1]) or digits[2] == guess[2]:
        if collections.Counter(guess) == collections.Counter(digits):
            return winner
        return match
    for x in digits:
        for y in guess:
            if x == y:
                return close
    return nope

# runs game
def run_game(numbers):
    result = compare(numbers)
    if (result == "Nope"):
        print(result)
        result = compare(numbers)
    if (result == "Close"):
        print(result)
        result = compare(numbers)
    if (result == "Match"):
        print(result)
        result = compare(numbers)
    if (result == "You won"):
        print("You won! Correct numbers were: " + str(numbers))

#lets pick random digits
nros = pick_numbers()

print("Lets start")
run_game(nros)
