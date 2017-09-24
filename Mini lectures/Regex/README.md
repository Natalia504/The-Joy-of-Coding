# Regex Commands

## Using regex in the Markdown files

a few of these examples will have you use the ctrl-f search menu inside your text editor. If you press the button that looks like .* then your search will use regex.

## QUANTIFIERS

`*` (any number of any characters, 0 or more)
`+` (1 or more)
`?` (0 or 1)
`{min, max}` (a string that has anything between min and max)
`{n}` (a string that has exactly this many characters)
`[abc]` (match either a, b, or c)
`[- a-z]` (single dash is literal - surrounded means a through z)
`[^abc]` (anything that is not, a, b or c)

## Capture Groups

`()` (Captures surrounded section into separate sections)
`$1` (replace section 1)
`\1` (select section 1)

## POSITION

`^` (begging of a line)
`$` (end of a line)
`\b` (word boundary)

## SINGLE CHARACTERS selectors

`.` (any character)
`\d` (any digit 0-9)
`\w` (any character A-Z a-z 0-9)
`\W` (any thing that is not A-Z a-z 0-9)
`\s` (any white space)
`\S` (anything that is not white space)
`\.` (literal period)
`\(` (literal parenthesis)


## JS specific tags
`g` (global, when using things like match it will only find the first instance, but g will find all matches)
`i` (case insensitive)

## JS Commands

`.exec()` (This method goes on a Regex and expects a sting. It can be run multiple times to get all the matches and capture groups form a string.)

`.match()`(This method goes on a string and can take in a regex. it will return the first match it finds, unless you add on the global tag on your regex)

`.test()` (This method goes on a regex and takes in a string. It returns true if a match can be found and false if not)

`.split()` (This method goes on a regex and can take in regex so describe how to split up a string into an array)

`.replace()` (This method goes on a string and can take in a regex)

## Additional Resources

*Video Series*
https://www.youtube.com/watch?v=7DG3kCDx53c&index=1&list=PLRqwX-V7Uu6YEypLuls7iidwHMdCM6o2w

*Code Wars*
https://www.codewars.com/collections/regex-32