import re
# p = re.compile("^python\s\w+")
p = re.compile("^python\s\w+", re.MULTILINE) 
data = """python one
life is too short
python two
you need python
python three"""

# print(p.findall(data)) #['python one']
print(p.findall(data)) # ['python one', 'python two', 'python three']

# VERBOSE, X
# charref = re.compile(r'&[#](0[0-7]+|[0-9]+|x[0-9a-fA-F]+);')
charref = re.compile(r"""
&[#]            #Start of a numeric entity reference
(
    0[0-7]+     # Octal form
  | [0-9]+      # Decimal form
  | x[0-9a-fA-F] #Hexadecimal form
)
;               # Trailing semicolon
""", re.VERBOSE)