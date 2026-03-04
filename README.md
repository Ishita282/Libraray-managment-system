# Library Managment System

## Routes and Endpoints

### /users
    >> GET: Get all the list of the users in the system
    >> POST: Create/ Register a new user

### /users/{id}
    >> GET:  Get a users by their id
    >> PUT: Updating a user by their id
    >> DELETE: Delete a user by their id (check if the user is in the system)

### /users/subscription-details/{id}
    >> GET: Get a user subscription detail by their id
        - Date of subscription
        - Valid till?
        - Fine if any?

### /books
    >> GET:  Get all the list of the books in the system
    >> POST: Add a new book to the system

### /books/{id}
    >> GET: Get all the list of the books in the system 
    >> PUT: Update a book by its id
    >> DELETE: Delete a book by its id 

### /books/issued
    >> GET: Get all the list of the issued books in the system

### /books/issued/withFine
    >> GET: Get all the list of the issued books with fine amount in the system

## Subscription-type

    >> Basic (3 months)
    >> Standard (6 months)
    >> Premium (12 months)

## Miss renewal/ subscription

    >> If a user missed  the renewal date, then user should be fine with $100
    >> If a user missed  his/her subscription, then user expected to pay $100
    >> If a user missed  both renewal date and subscription, then user should be fine with $200

## How to start the application (Locally)

`npm init`
/
`npm i express mongoose mongodb dotenv`
/
`npm i nodemon --save-dev`
/
`npm run dev`

## MVC Architechture (db)

    >> M: Model (Structure of our Mongodb)
    >> V: View (Frontend)
    >> C: Controller (Brain/Logic of a route)

## DTO