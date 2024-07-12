Objective
Work with REST APIs, understand asynchronous programming, and build interactive web pages using JavaScript.

Prerequisites
Fork and clone the boilerplate repository.
Install dependencies:
sh
Copy code
npm install
npm run start
# or
json-server db.json -s ./public
Coding Guidelines
HTML code in public/index.html
JavaScript code in public/js
CSS code in public/css
Images in public/images
Use Bootstrap for styling
Code should be well-indented and commented
Requirements
Populate products in db.json, leave saveforlater empty.
Create "Products" and "Save for Later" sections in HTML.
Use Fetch API and Promises for all HTTP calls.
Instructions
getProducts(): Fetch products, populate <ul id="products">, return JSON promise.
getsaveforlater(): Fetch saveforlater, populate <ul id="saveforlaterList">, return JSON promise.
addsaveforlater(): Handle "Add to saveforlater" button, post to db.json, return updated saveforlater list promise.
HTML Structure
Products list: <ul id="products">
Save for Later list: <ul id="saveforlater">
Invoke getProducts() and getsaveforlater()
Deleting Items
Use Deletesaveforlater(id) to delete items from Save for Later list.
