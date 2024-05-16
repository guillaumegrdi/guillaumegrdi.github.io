def triangle() :

    l1 = int(input('veuillez entrer la longueur du premier coté :  ' ))
    l2 = int(input('veuillez entrer la longueur du second coté :   '))
    l3 = int(input('veuillez entrer la longueur du dernier coté :   '))
    
    if l1 or l2 or l3 == 0:
      print('veuillez entrer des valeurs correctes')
      triangle()

    if l1**2 + l2**2 == l3**2:
     print('le triangle est rectangle')
    elif l2**2 + l3**2 == l1**2:
     print('le triangle est rectangle')
    elif l1**2 + l3**2 == l2**2:
     print('le triangle est rectangle')
    elif l1 + l2 == l3:
     print('le triange est impossible')
    else:
     print('le triangle n est pas rectangle')

    replay = int(input("voulez vous refaire ?   "))

    if replay == 1:
      triangle()

triangle()
