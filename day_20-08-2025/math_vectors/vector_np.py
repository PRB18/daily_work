# Day 01 - Vector Operations with NumPy

import numpy as np

# define vectors
A = np.array([1, 2, 3])
B = np.array([4, 5, 6])

# vector addition
add = A + B

# dot product
dot = np.dot(A, B)

# magnitude (norm)
mag_A = np.linalg.norm(A)

print("A =", A)
print("B =", B)
print("A + B =", add)           # [5 7 9]
print("A · B =", dot)           # 32
print("|A| =", mag_A)           # sqrt(14)
