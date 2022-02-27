import requests
import re
cock_page = 'Aviation_(cocktail)'
base_url = 'http://en.wikipedia.org/wiki/'
url = base_url + cock_page
infobox_regex=r'\{\{\s*(?:infobox cocktail)(?:\s|.)*?\}\}'

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


find_and_save_infobox(cock_page)
