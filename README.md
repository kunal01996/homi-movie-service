# To install Dependenncies
npm install
# Run the following command to run the app in dev mode
npm start

# Create new movie
Method - POST
url - BaseURL + /api/v1/movie

Body  {
  name: "",
  description: "",
  genres: [],
  duration: "",
  rating: "",
  releaseDate: ""
}

# Delete Record API
Method - Delete
url - BaseURL + /api/v1/movie?name=

Params -> name

# Retrive Data
 Method - GET
 url - BaseURL + /api/v1/movie?name=

Query Params optional

 # To Run test case
 npm run test
 