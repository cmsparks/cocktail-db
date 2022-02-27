import requests
import re
cock_page = 'List_of_cocktails'
base_url = 'http://en.wikipedia.org/wiki/'
url = base_url + cock_page
resp = requests.get(url, params={'action': 'raw'})
page = resp.text
infobox_regex = r'\{\{\s*(?:infobox cocktail)(?:\s|.)*?\}\}'

def find_and_save_infobox(link):
    url = base_url + link

    resp = requests.get(url, params={'action': 'raw'})
    cocktail_page = resp.text

    print(cocktail_page)

    info_boxes = re.findall(infobox_regex, cocktail_page, re.IGNORECASE |  re.MULTILINE)

    print(info_boxes)

    for box in info_boxes:
        f = open('./infoboxes/'+link+".info", 'w')
        f.write(box)
        f.close()

re.sub(r'^.*?\{\{TOC left\}\}', '\{\{TOC left\}\}', page)
re.sub(r'^.*?==References==', '==References==', page)

links = re.findall(r'\[\[.*?\]\]', page)

cleaned_links = []

for link in links:
    #remove files
    if "File" in link:
        continue
    link = link[2:-2]
    if '|' in link:
        link = link[:link.index("|")]

    cleaned_links.append(link)

for link in cleaned_links:
    print(link)
    find_and_save_infobox(link)

