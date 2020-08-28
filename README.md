## Project Overview

MyReads is a bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read.

## App functionality

In this application, the main page displays a list of "shelves" (i.e. categories), each of which contains a number of books. The three shelves are:

- Currently Reading
- Want to Read
- Read

Each book has a control that lets you select the shelf for that book. When you select a different shelf, the book moves there. Note that the default value for the control should always be the current shelf the book is in.

The main page also has a link to /search, a search page that allows you to find books to add to your library.

The search page has a text input that may be used to find books. As the value of the text input changes, the books that match that query are displayed on the page, along with a control that lets you add the book to your library. To keep the interface consistent, you may consider re-using some of the code you used to display the books on the main page.

## Netlify URL

https://rehab-ahmed-myreads.netlify.app/

## How to install

Once Node is installed, navigate to the directory where you want to store the app

```
git clone https://github.com/Rehab-Ahmed253/React-Developer-Nanodegree-MyRead
npm install
```

Once all of the dependencies have been installed you can launch the app with

```
npm start
```

A new browser window should automatically open displaying the app. If it doesn't, navigate to [http://localhost:3000/](http://localhost:3000/) in your browser
