#!/bin/bash
# Authors : Oceane Andreis
# Date: 09/20/2019

#Problem 1 Code:

echo "Enter a regular expression: "
read regex

echo "Enter an input filename: "
read inputfilename

#Make sure to document how you are solving each problem!
#Problem 2 Code:
grep $regex $inputfilename

#Problem 3 Code:
#Phone = ^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$
Phone=([0-9]{3}-[0-9]{3}-[0-9]{4})
echo "Output the number of phone numbers in regex_practice.txt:"

egrep -c  $Phone $inputfilename

echo "A count of the number of emails:"

egrep -c "\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}\b" $inputfilename

echo "A list of all the phone numbers in the 303:"

egrep -c '303-[0-9]{3}-[0-9]{4}' $inputfilename

echo "Stored a list of all the emails from geocities.com"

egrep -o ".*@geocities.com" $inputfilename >> email_results.txt
