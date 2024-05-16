import time
second = 50
minute = 0

while (1==1):
    second = second + 1
    time.sleep(1)
    print(minute, ":",second)
    if (second > 58):
        minute += 1
        second = -1