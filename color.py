import json
import re
f = open("cocktail-web/src/data/cocktails.json")
cocktails = json.load(f)
f.close()
colors = set()
for cocktail in cocktails:
  if 'color' in cocktail:
    colors.add(cocktail['color'])
print(colors)
