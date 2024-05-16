from random import *
a = randint(0, 1000)
i = 0

while (i < 11) : 
 i +=1
 b = int(input('Tentez de deviner le nombre :'))
 if (a<b):
  print('Le nombre attendu est plus petit')
 elif (a>b):
  print('Le nombre attendu est plus grand')
 elif (a==b):
  print('Bravo le nombre attendu était bien :', a)
 elif(i > 9):
   print("Malheureusement vous n'avez pas réussi à trouver le nombre attendu qui était :", a)


