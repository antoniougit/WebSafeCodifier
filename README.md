# WebSafeCodifier

First revision: 27/02/2020

## Revisions
v6.0
* Major overhaul: modern UI, removed buttons, character count and encoding/decoding now happens automatically on typing/copypasting instead of having to press a button.

v5.1
* Now also supports Dynamic Motivation webscripts.

v5.0 
* Fixed formatting. Now it's totally human readable.

v4.0 - 15/07/2022
* Added an extra option to encode the Persado Web Standalone config file. The file gets stripped of the unneeded webscripts parts, removes all comments, spaces, linebreaks. It then gets encoded to JSON and Base64 as required by the Portal/API.

v3.0 - 31/03/2021
* All characters now get converted to their corresponding hex entities for improved compatibility and consistency. 
* Standard characters (up to 0x7e) are ignored by default. 
* First option updated to include the 5 XML pre-declared entities "<>'"&", and these exceptionally get converted to named entities. 
* Last option also updated to ignore standard symbols. 
* Buttons are now next to each other to save space. 
* Slightly increased default textarea height. 
* Minified CSS to decrease file size.

v2.1 - 01/08/2020
* Fixed a bug where the "Encode" button didn't always register the click. 
* "Enter" keyboard button now encodes the input text. "Shift + Enter" must be used for manual line breaks, if needed. 
* Added "Clear" button. 
* Added favicon.

v2.0 - 24/07/2020
* Complete overhaul, removed everything and started from scratch. Code reduced to about 30% of original, a completely different approach was used for conversion. 
* Added "Encode" button. 
* Now always returns decimal or hex entities. Named entities were removed to prevent compatibility issues. 
* Most characters are now getting encoded by default, even standard symbols. Really common characters, like "." and "," are not. 
* Options updated to be more useful and reflect this approach. 
* Last option (noted in red) overrides all other options and encodes pretty much everything except latin letters, numbers and the most common characters.

v1.1 - 27/02/2020 - Original version, optimised by me
* Removed jQuery, CSS dependencies and other redundant stuff. 
* Converted everything to ES6+. 
* Better variable naming.
* Improved code, some functions & logic.
* &nbsp; and most HTML entities are now NOT being converted, but "&" still is.

v1.0 - Original version, not created by me


##Helpful references

https://lonewolfonline.net/html-character-codes-ascii-entity-unicode-symbols/
http://xmlnews.org/docs/xml-basics.html
https://mothereff.in/html-entities
