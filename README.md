# express-contacts-backend
backend in Express JS for a Contact APP, using [MongoDB](https://www.mongodb.com/) as the database using the [Mongoose](https://mongoosejs.com/) ORM and [ExpressJS](https://expressjs.com/) as the api platform.

## Video
- Part 1 [designing the application](https://youtu.be/eJ_xe15fKRg)

## Getting Started
- clone this repository `git clone https://github.com/tomtarpeyyt/express-contacts-backend.git`
- enter the directory `cd express-contacts-backend`
- install depndencies `npm i`
- run dev server `npm run dev`

## Plan
- [Whimsical Contact Application Plan](https://whimsical.com/contact-application-plan-KAB8sMXVb1vFdiHf3GyJBF)

## Stack
- ExpressJS
- MongoDB (mongoose orm)
- nodemon (devDep)
- cors (devDep)
- bcrypt (hashing password)
- jsonwebtoken (auth)

## Database Models

### userSchema
- username: String, required, unique
- email: String, required, unique
- password: String, required

### contactSchema
- user: ObjectId, ref[User]
- name: String, required
- email: String
- telephone: String
- address: String
- category: String enum ['individual', 'business']

## Routes

### userRoutes
- (POST)/register `userController.register()`
- (POST)/login  `userController.login()`

## contactRoutes
- (GET)/ `contactController.getAllContacts()`
- (POST)/ `contactController.createContact()`
- (GET)/:id `contactController.getContactById()`
- (PUT)/:id `contactController.updateContact()`
- (DELETE)/:id `contactController.deleteContact()`


## Testing with cUrl in windows
- `curl.exe -X POST -H "Content-Type: application/json" -d '{\"username\": \"tom\", \"email\": \"tom@gmail.com\", \"password\": \"password123\"}' http://localhost:5000/api/users/register`
