 Books have a title, author, and genre
 Users can…
   Add books into the bookstore system via an admin page (create)
   See a list of books on the home page (read)
   Edit a book’s title, author, or genre (update)
   Delete a book from the bookstore (delete)
   Search for books by title OR by author OR by genre (read)
   View book details on a book detail page (read)
   Lists of books are always paginated in groups of 10
   Book detail view is linked to from the listing and search pages
   Search results are presented in a new page
   Appropriate HTTP verbs are used for CRUD actions
   GET requests are only used for read actions
   POST requests are only used for create actions
   PUT or PATCH requests are only used for update actions
   DELETE requests are only used for delete actions
   All views are rendered on the server using server-side templates written with Pug or EJS
   Web server can be started with the command npm start
   Test suite can be run with the command npm test
   All code submissions are peer reviewed via GitHub PR by at least one other member of the team
   Master is always in a stable state (tests passing, site functions)
   The artifact produced is properly licensed, preferably with the MIT license.
Stretch

 App is deployed and live on the web (consider using Heroku)
 All source code is written with ES6
 Users have their own account and can sign up and log in/out
 Users have one of three roles: admin, clerk, reader
 Users with role reader can only view and search for books
 Users with role clerk can edit books in addition to viewing/searching
 Users with role admin can perform all actions (create, read, update, delete) with books
 Books have a price, cover image, publisher, and ISBN number
Quality Rubric

Code is well formatted without any linting errors [25 points]
Variables, functions, CSS classes, etc. are meaningfully named* [50 points]
Functions are small and serve a single purpose [50 points]
Code is well organized into a meaningful file structure [50 points]
Code is reasonably tested with a test suite [50 points]
Interface is user friendly [25 points]
* meaningfully named = no comments exist in code to explain functionality - the names serve that function.
