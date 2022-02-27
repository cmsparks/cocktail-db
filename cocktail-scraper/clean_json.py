import json
import re
f = open("cocktails.json")
cocktails = json.load(f)
f.close()
for cocktail in cocktails:
  if 'ingredients' in cocktail:
    if '\n' in cocktail['ingredients']:
      cocktail['ingredients'] = cocktail['ingredients'].split('\n')
    elif '<br>' in cocktail['ingredients']:
      cocktail['ingredients'] = cocktail['ingredients'].split('<br>')
    elif '<br/>' in cocktail['ingredients']:
      cocktail['ingredients'] = cocktail['ingredients'].split('<br/>')
    elif '&nbsp;ml' in cocktail['ingredients']:
      cocktail['ingredients'] = cocktail['ingredients'].split('&nbsp;ml')
    elif ', ' in cocktail['ingredients']:
      cocktail['ingredients'] = cocktail['ingredients'].split(', ')
    else:
      cocktail['ingredients'] = [cocktail['ingredients']]
    for i in range(len(cocktail['ingredients'])):
      cocktail['ingredients'][i] = cocktail['ingredients'][i].replace("*", "")
      cocktail['ingredients'][i] = re.sub(r'\[\[[^\[\]\|]*?\|?([^\[\]\|]+)\]\]', r'\1', cocktail['ingredients'][i])
      cocktail['ingredients'][i] = cocktail['ingredients'][i].replace("&nbsp;ml", " ")
      cocktail['ingredients'][i] = cocktail['ingredients'][i].replace("&nbsp;", " ")
      cocktail['ingredients'][i] = cocktail['ingredients'][i].replace("<small>", "")
      cocktail['ingredients'][i] = cocktail['ingredients'][i].replace("</small>", "")
      cocktail['ingredients'][i] = cocktail['ingredients'][i].strip()
    for bad_ingred in ["}}", ""]:
      if bad_ingred in cocktail['ingredients']:
        cocktail['ingredients'].remove(bad_ingred)
  for prop in ['prep', 'name', 'garnish', 'served', 'drinkware', 'other']:
    if prop in cocktail:
      cocktail[prop] = cocktail[prop].replace("\n", "")
      cocktail[prop] = cocktail[prop].replace("}}", "")
      cocktail[prop] = cocktail[prop].replace("(cocktail)", "")
      cocktail[prop] = cocktail[prop].replace(".info", "")
      cocktail[prop] = re.sub(r'\[\[[^\[\]\|]*?\|?([^\[\]\|]+)\]\]', r'\1', cocktail[prop])
      cocktail[prop] = cocktail[prop].replace("<ref name", "")
      cocktail[prop] = cocktail[prop].strip()
  primary_alcohols = {
    'beer': 'Beer',
    'ale': 'Ale',
    'fruitbeer': 'Fruit beer',
    'lager': 'Lager',
    'pilsner': 'Pilsner',
    'porter': 'Porter',
    'stout': 'Stout',
    'wheatbeer': 'Wheat beer',
    'gin': 'Gin',
    'everclear': 'Everclear',
    'moonshine': 'Moonshine',
    'sake': 'Sake',
    'whiskey': 'Whiskey',
    'bourbon': 'Bourbon whiskey',
    'canadian': 'Canadian whiskey',
    'irishw': 'Irish whiskey',
    'rye': 'Rye whiskey',
    'scotch': 'Scotch whiskey',
    'tennessee': 'Tennessee whiskey',
    'whisky': 'Whisky',
    'brandy': 'Brandy',
    'cognac': 'Cognac',
    'gmarnier': 'Grand Mariner',
    'hpnotiq': 'Hpnotiq',
    'pisco': 'Pisco',
    'wine': 'Wine',
    'sparkling': 'Sparkling wine',
    'champagne': 'Champagne',
    'fortified': 'Fortified wine',
    'port': 'Port',
    'prosecco': 'Prosecco',
    'vermouth': 'Vermouth',
    'cider': 'Cider',
    'mezteq': 'Mezcal/Tequila',
    'mezcal': 'Mezcal',
    'tequila': 'Tequila',
    'vodka': 'Vodka',
    'rum': 'Rum',
    '151': 'Bacardi 151',
    'cachaça': 'Cachaça',
    'schnapps': 'Schnapps',
    'highproof': 'High-proof alcohol',
    'anise': 'Anise-flavored liqueur',
    'absinthe': 'Absinthe',
    'ouzo': 'Ouzo',
    'pastis': 'Pastis',
    'sambuca': 'Sambuca',
    'chocolate': 'Chocolate liqueur',
    'cacao': 'Crème de Cacao',
    'coffee': 'Coffee liqueur',
    'cream': 'Cream liqueur',
    'irishc': 'Irish Cream',
    'crème': 'Crème liqueur',
    'menthe': 'Crème de menthe',
    'berry': 'Berry liqueur',
    'curaçao': 'Curaçao',
    'fruit': 'Fruit liqueur',
    'midori': 'Midori',
    'orange': 'Orange-flavored liqueur',
    'pucker': 'Pucker',
    'campari': 'Campari',
    'herbal': 'Herbal liqueur',
    'jäger': 'Jägermeister',
    'amaretto': 'Amaretto'
  }
  cocktail['primary_alcohol'] = []
  for key, val in primary_alcohols.items():
    if key in cocktail and cocktail[key] == 'yes':
      cocktail['primary_alcohol'].append(val)
  if 'other' in cocktail:
      cocktail['primary_alcohol'].append(cocktail['other'])
f = open("cleaned_cocktails.json", "w")
json.dump(cocktails, f)
f.close()
