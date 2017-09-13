# MyReads Project

This is my submission for Udacity's MyReads Project

Project is based on [Create React App](https://github.com/facebookincubator/create-react-app) bolierplate to bootstrap the project.

## TL;DR

To get started developing right away:

## Usage
* install all project dependencies with `npm install` or `yarn install`
* start the development server with `npm start` or `yarn start`

## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── components
        ├── Book.js # Atomic component to render a Book card, including image, title, authors, and bookmark options
        ├── Readings.js # Component that groups all the possible shelves (at this time currently reading, read and want to read)
        ├── Shelf.js # Component that groups many Books
        ├── SearchBooks.js # Component that contains form to make book search, reuses Book component to render each available book in results   
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── shared # Shared components (for layout)
        ├── Copyright.js # copyright block at footer-copyright
        ├── Footer.js # component for footer section
        ├── Header.js # component for page general header
        ├── Listings.js # component for listings links at footer
    ├── styles
        ├── App.css # stylesheet that overrides some materialize styles for customization
    ├── thirdParty
        ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

Remember that good React design practice is to create new JS files for each component and use import/require statements to include them where they are needed.

## Available Search Terms
'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'

## Contributing

This repository is for educational purposes so feel free to raise an issue or a Pull Request if you want to contribute
