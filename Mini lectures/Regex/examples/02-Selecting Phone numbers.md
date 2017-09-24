456-129-2567
(876)356-1278
801.458.6467
801 875 5789

Write a regex can select every phone number.

to select the parenthesis you need to escape regex, to do this you can write `\(` or `\)` othersise regex thinks you are doing a capture group

Since only one of the numbers has the `()` around the first part we need to use the `?` to specify that it is optional. The `?` means there can be either 0 or 1 of these and both would work.

Phone numbers have a pattern of 3 digits, 3 digits, 4 digits. So we can use the `{}` brackets to specify how many `\d` we are looking for.

between the digits there can be a few different characters, so we can use the `[]` to say any one of these characters can go in this spot.

below is the regex to select the phone numbers

`\(?\d{3}[-\). ]\d{3}\d{3}\d{4}`

I will go over each part of this regex

`\(?` This means the string can optionally start with a ( character or not

`\d{3}` There will be 3 digits in a row

`[-\). ]` Followed by a single one of these characters

`\d{3}` Followed by 3 digits

`[-. ]` Followed by a single one of these characters

`\d{4}` Followed by 4 digits