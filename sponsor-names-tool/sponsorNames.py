#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sun Feb 26 15:52:39 2017

@author: Brendan
"""
from textwrap import indent
import os

#File that contains names is moved into an array
namesFile = open(os.path.expanduser("~/Desktop/RazooNames.txt"))
names = namesFile.read().splitlines()

#TABLES: UNCOMMENT TO USE
# for name in names:
# 	#Opening the row upon first iteration
# 	if names.index(name) == 0:
# 		print("<tr>")

# 	#Printing data w/ <td>
# 	print(indent("<td>" + name + "</td>", "    "))

# 	#Closing rows
# 	try:
# 		#End of a third column w/ more data to come
# 		if names.index(names[names.index(name) + 1]) % 3 == 0:
# 			print("</tr>")
# 			print("<tr>")
# 	except IndexError:
# 		#No more data, so tr needs to be closed but not reopened
# 		print("</tr>")

for i in range(3):
	print("<ul>")
	for name in names[i::3]:
		print(indent("<li>" + name + "</li>", "  "))
	print("</ul>")