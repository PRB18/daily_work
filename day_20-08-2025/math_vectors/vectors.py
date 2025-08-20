
import math

def add_vectors(a, b):
    return [x + y for x, y in zip(a, b)]

def dot_product(a, b):
    return sum(x * y for x, y in zip(a, b))

def magnitude(v):
    return math.sqrt(sum(x ** 2 for x in v))

# Example
A = [1, 2, 3]
B = [4, 5, 6]

print("A =", A)
print("B =", B)
print("A + B =", add_vectors(A, B))       # [5, 7, 9]
print("A · B =", dot_product(A, B))       # 32
print("|A| =", magnitude(A))              # sqrt(14)
