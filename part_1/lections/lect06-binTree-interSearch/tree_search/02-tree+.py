class Node:
    def __init__(self, value):
        self.key = value  # вершина - родитель
        self.left = None
        self.right = None


node3 = Node(3)
node4 = Node(4)
node5 = Node(5)
node7 = Node(7)
node4.left = node3
node4.right = node5
node5.right = node7

tree = node4
print(tree)

def print_tree(tree, indent=0, smb="\t"):
    if tree:
        print(f"key={tree.key}")
        print(smb * indent + ">> left  ", end="")
        print_tree(tree.left, indent+1, smb)
        print(smb * indent + ">> right ", end="")
        print_tree(tree.right, indent+1, smb)
    else:
        print("--|")

node6 = Node(6)
node7.left = node6
print_tree(tree)
