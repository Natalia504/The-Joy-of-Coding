Let me tell you beautiful story about a short man with a mustache and overalls and a hat. He was a hero in the eyes of many. He is also a brilliant fighter and an amazingly smart man. He was a doctor, a fighter, and a race car driver; an athlete a spaceman a Super Smash survivor. He is Mario.



When selecting text the easiest way to select all the text is using the `.*`
the `.` means any character at all, and the `*` means any number of characters

to select a word with specifically 4 letters you can do

`\w{4}`

this means select any string of 4 characters together. You will notice that it selects any 4 characters and not just 4 letter words. we can add the `\b` 'word boundary' tag to the begging and end to make sure its only 4 letter words

`\b\w{4}\b`

If you want to select words with anywhere between 3-5 characters you can chane the `{}` to match.

`\b\w{3,5}\b`

Lets select all words that start with a vowel. We can use the `[]` to specify that a position can have any of the specified characters

`\b[aeiou]\w+\b`

this tells RegEx to select any word that is surrouned with spaces and starts with aeiou followed by one or more characters. The `+` means one or more. But if you notice we have not selected any words that are one letter long that start with a vowel.

if we wrap the \w+ in parenthesis and add a `?` to the end it means that part is optional, meaning it has to start with a vowel and can any number of characters after, or none.

`\b[aeiou](\w+)?\b`

Lets say instead of selecting words that start with a Vowel lets pick words that start with an uppercase letter. You will need to select the option in your search bar to select case sensitively.

`\b[A-Z](\w+)?\b`