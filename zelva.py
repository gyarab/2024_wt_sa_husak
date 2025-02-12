from turtle import *
from math import sqrt

shape('turtle')

a = sqrt(100*50)

forward(100)
left(90)
forward(100)
left(45)
forward(a)
left(90)
forward(a)
left(45)
forward(100)
left(135)
forward(2*a)
left(135)
forward(100)
left(135)
forward(2*a)

exitonclick()