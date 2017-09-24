Why is it that that when we read thing we we skip skip certain words words like if if but not example example


If you do ctrl-f and type (\w+)\s\1\b then you will select all repeated words.

becasue we have () around the \w+ this is the first capture group and we can select it in our regex using \1