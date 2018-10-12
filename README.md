# PHP developer code test
## What are you building?
We have a client who wants to build a new PHP web site for selling online Mr Men books. We have been given a limited amount of time to prototype a basic structure for the client. 
The client has big expectations, and will want the site to be able to deal with high-traffic numbers, include a security model, plus look great and be integrated with a payment system. These are all future aspirations, but should be considered for the prototype even though they are not required at this stage.
For this test try to keep it to 4 hours or less. This doesn’t have to be 100% complete, but obviously get as much in there as you can to show your capabilities.

## The basic prototype site structure
The prototype site you will produce for this code test should have the following pages and scripts:
* A home page (home.html)
* A document list page (list.html)
* A document preview page (details.html)
* The CSV file import script (books.csv)

## The basic user journey 
The visitors typically land on the home page. They can click through to view the document list and then click on one or more of the document previews available. On the preview page if they like the document they can enter their email address, buy the document, and return to the home page. If they don’t like it they can return to the list page.

## Tasks we’d like you to carry out
1. The site currently has no server-side code. This is your task, please take the html and make a prototype site. You’ll need to consider the following, but remember that this is your choice, do it the way you think is most effective:
⋅⋅1. Should I use a PHP framework?
⋅⋅2. Should I use a frontend framework?
⋅⋅3. What database should I use?
2. Design a simple database to store the document titles and documents.
3. Use this table to populate the pages of the site.
4. We want to track the visitor while on the site, so when the visitor clicks “More Info” against a document we want to store this in a session object.
5. When the visitor returns to the list page, the document they last viewed should have an asterisk (*) or some kind of visual marker next to it.
6. When a visitor returns to the home page without buying anything, the list of documents they have viewed so far should be displayed on the home page, again utilising the data in the session. This list should be all documents viewed, not just the last one.
7. If the visitor decides to buy the document, once they click “buy” they return to the home page.
8. The email address and document purchased should be stored in the database.
9. The home page should now detail which document the user has purchased.
10. Finally please do one or more of the following if you have time:
⋅⋅1. Show a little frontend flare by adding in some nice feature to make the prototype look better or have a slightly nicer interface.
⋅⋅2. Do a little extra to make the solution to perform faster, using caching, query optimisation or other methods to get the most out of the server performance we have.
⋅⋅3. Create an extra piece of functionality that gets the prototype slightly closer to the solution that they are looking for. We want to wow them so they give us the work, so the more functional it is, the more likely we’ll win the work.

## What do we need from you?
Once you have completed the task above, please provide the following documentation:
1. In your solution please take all necessary precautions as though this were a live environment. Make sure you have tested it and the functionality outlined has been tested.
2. Please return a zip file containing the site as a whole, any SQL required to build the database and any installation instructions. 
3. Please provide a little information about the following to help us understand how you think:
⋅⋅1. Did you use a PHP framework? Please clarify why you chose your solution.
⋅⋅2. Did you use a frontend framework? Please clarify why you chose your solution.
⋅⋅3. What database did you use? Please clarify why you chose your solution.
⋅⋅4. What additions did you do if any, please provided a short description.
⋅⋅5. How long did the test take you?
If you have any questions please don’t hesitate to get in touch and we’ll do our best to help.

Good luck!


