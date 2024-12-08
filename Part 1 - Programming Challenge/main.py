def isPalindrome(text):
    text = text.lower()
    text = ''.join(filter(str.isalpha, text))

    left = len(text) - 1
    right = 0

    while(left > right):
        if(text[left]==text[right]):
            left =- 1
            right =+ 1
        else:
            return False
    return True

if __name__ == "__main__":
    text = input("enter the text you want to check : ")
    if(isPalindrome(text)):
        print("("+text +") is a Palindrome")
    else:
        print("("+text +") isn't a Palindrome")