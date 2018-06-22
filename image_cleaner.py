'''
    File name: image_cleaner.py
    Author: Brendan Doney
    Date created: 6/12/2018
    Date last modified: 6/12/2018
    Python Version: 3.6.5

    Be aware that this checker *DOES NOT INCLUDE* SCSS or CSS files, 
    which may be used to set things such as background images
'''

from os import listdir, walk
from os.path import isfile, join
from html.parser import HTMLParser

images_used = []


class MyHTMLParser(HTMLParser):

    def handle_starttag(self, tag, attrs):
        """Method used my HTMLParser class to handle the parsing of tags (overriden method from base class)"""

        if tag == "img" or tag == "source" or tag == "link" and attrs[0][1] == "icon":
            # Iterate through all arguments to find src of image or link
            for word_set in attrs:
                for i in range(len(word_set)):
                    if word_set[i] == "src" or word_set[i] == "href":
                        # i + 1 should be the url of the src, so append that
                        if type(images_used) is list:
                            images_used.append(str(word_set[i + 1]).strip())
                        elif type(images_used) is set:
                            images_used.add(str(word_set[i + 1]).strip())
                        print(word_set[i + 1])


page_paths = ["_pages/", "_includes/"]
parser = MyHTMLParser()

for path in page_paths:
    for file in listdir(path):
        # Check if file is an actual file based on full path w/ join
        file_path = join(path, file)
        if isfile(file_path):
            # Parse data from confirmed file now
            print("Files in {}:".format(file_path))
            with open(file_path, "r") as src_file:
                parser.feed(src_file.read())
            print()

image_path = "photos/"
all_images = []
# Add all found images in specified photos directory to the all_images list
for (dirpath, _, filenames) in walk(image_path):
    all_images.extend([join(dirpath, str(file).strip()) for file in filenames if file not in all_images])
# print(all_images)

images_used = set(images_used)

# Remove all photos from images_used
for image in images_used:
    if image in all_images:
        all_images.remove(image)
    elif image[0] != "/" and ("/" + image) in all_images:
        all_images.remove("/" + image)
    elif image[0] == "/" and image[1:] in all_images:
        all_images.remove(image[1:])
    else:
        print("Not found! \"{}\" in {}".format(image, all_images))
        print()

# print("All images: {}".format(all_images))
# print("Used images: {}".format(images_used))
print("Images that are not needed: {}".format(all_images))