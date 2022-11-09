# Project Philosophy:

Gig-Finder is a Job Board application for quick jobs.It's a platform that will provide users an easy way to find jobs online.

# Features:

The home page displays a description of the application, and a instructs the user to click on the Register link in the navigation in order to view all of the categories available.

Upon clicking on "category" in the navigation there is a dropdown menu at the top of the page to allow you to sort the listings by category.

Below the dropdown menu is a form where users can create new categories.

Below the form is all of the listings which are displayed with a title, body, and category and have the ability to be edited as well as deleted.

If you would like to create a new listing click "New Listing" in the navigation which will take you to a form to fill out.Once you are done filling out the form click "Create Listing" which will automatically take you to the "listings" page where you can see your new listing that you created.

# Description of app:

This is a single page full-stack CRUD application that has a back-end that was creating using Ruby and a sinatra API which stores data which is then fetched from : http://localhost:0000/catories, http://localhost:0000/listings and localhost:0000/users. The front-end was created using React and Javascript

On the front end the application uses a total of 10 components: App.js, Home.js, Navigation.js, Listings.js, Listing.js, New Listing.js, EditListing.js, NewCategory.js, Filter.js and Users.js

The application has 3 different client-side routes throughout it using React-Router: Home, Listings, and NewListing

Styling was done using CSS

# Technologies used:

React
Javascript
HTML
CSS
Ruby
Sinatra
Active Record

# Installation

Fork and clone both the front-end and back-end repositories

## Back-end

cd into the project directory
run 'bundle install'
run 'rake db:migrate'
run start-server to start the server

## Front-end

cd into the project directory
run 'npm install'
run 'npm start' and the application will open into browser
