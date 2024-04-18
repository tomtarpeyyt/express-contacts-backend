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
- `curl.exe -X POST -H "Content-Type: application/json" -d '{\"email\": \"tom@gmail.com\", \"password\": \"password123\"}' http://localhost:5000/api/users/login`
- ` curl.exe -X POST -H "Content-Type: application/json" -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjIwOGNhNzhmNzJlNjFkM2VhMWMwNzkiLCJpYXQiOjE3MTM0NjE0MzAsImV4cCI6MTcxMzQ2NTAzMH0.Rd7xtZbUMzJ8nB4Ud0MGNVvk_cZKoWKNhsKJ1zFGwS0" -d '{ \"name\": \"Bob Jones\", \"email\": \"bob@gmail.com\", \"telephone\": \"0121233432323\", \"address\": \"123 this street\", \"category\": \"business\"}' http://localhost:5000/api/contacts`
