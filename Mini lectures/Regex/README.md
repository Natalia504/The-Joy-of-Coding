# Regex Commands

## Using regex in the Markdown files

To get you comfortable using RegEx you should clone this repo and use your text editors ctrl-f search menu. If you press the button that looks like `.*` then your search will use regex. Look over the other .md files in this repo and follow along to get use to using regex to select text. When you feel comfortable using plain Regex there is an HTML doc that

## SINGLE CHARACTERS selectors

`.` Any character

`\d` Any digit 0-9

`\w` Any character A-Z a-z 0-9

`\W` Any thing that is not A-Z a-z 0-9

`\s` Any white space

`\S` Anything that is not white space

`\.` Literal period

`\(` Literal parenthesis

## POSITION

`^` Begging of a line.

`$` End of a line.

`\b` Word boundary, things like space or enter.

## QUANTIFIERS

`*` Any number of any characters, 0 or more

`+` 1 or more of the character to the left of this symbol.

`?` 0 or 1 of the character to the left of this symbol.

`{min, max}` A string that has anything between min and max

`{n}` A string that has exactly this many characters

`[abc]` Match either a, b, or c.

`[- a-z]` Single dash is literal - surrounded means a through z

`[^abc]` Anything that is not, a, b or c.

## Capture Groups

`()` Captures surrounded section into separate sections

`$1` Capture group 1.

`\1` Select capture group 1.


## JS specific tags

`g` Global, when using things like match it will only find the first instance, but g will find all matches

`i` Case insensitive

## JS Commands

`.exec()` This method goes on a Regex and expects a sting. It can be run multiple times to get all the matches and capture groups form a string.

`.match()`This method goes on a string and can take in a regex. it will return the first match it finds, unless you add on the global tag on your regex

`.test()` This method goes on a regex and takes in a string. It returns true if a match can be found and false if not.

`.split()` This method goes on a regex and can take in regex so describe how to split up a string into an array

`.replace()` This method goes on a string and can take in a regex

## Additional Resources

*Video Series*
https://www.youtube.com/watch?v=7DG3kCDx53c&index=1&list=PLRqwX-V7Uu6YEypLuls7iidwHMdCM6o2w

*Code Wars*
https://www.codewars.com/collections/regex-32