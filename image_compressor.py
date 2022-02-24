'''
    File name: image_compressor.py
    Author: Charlie Sokolove
    Date created: 02/21/2022
    Date last modified: 02/21/2022
    Python Version: 3.9.10
'''

# WIP

from PIL import Image
from fnmatch import fnmatch
import PIL
import os
import glob

images = []
sizes = []

for path, subdirs, files in os.walk("assets\images"):
    for name in files:
        if fnmatch(name, "*.jpg"):
            images.append(os.path.join(path, name))
            sizes.append(os.path.getsize(os.path.join(path, name)))
            img = Image.open(os.path.join(path, name))
            new_name = os.path.splitext(name)[0] + ".jpg"
            img.save(os.path.join(path, new_name), optimize=True, quality=30)

        elif fnmatch(name, "*.jpeg") or fnmatch(name, "*.png"):
            sizes.append(os.path.getsize(os.path.join(path, name)))
            img = Image.open(os.path.join(path, name))
            new_name = os.path.splitext(name)[0] + ".jpg"
            img.convert('RGB').save(os.path.join(path, new_name), optimize=True, quality=30)
            images.append(os.path.join(path, new_name))

init_size = 0
for size in sizes:
    init_size = init_size + size

print("The initial size was: ", init_size)

sizes = []

#for image in images:
 #   img = Image.open(image)
  #  img.save(image, optimize=True, quality=30)
   # sizes.append(os.path.getsize(image))

comp_size = 0
for size in sizes:
    comp_size = comp_size + size

print("The compressed size is: ", comp_size)
print("\n")
print("This saved: ", init_size - comp_size)