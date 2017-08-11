This task is to test angular.js, typescript and html skills. 

Task:
1. Create a login page with email and password textboxes. When submit is clicked, based on server response, either redirect to user profile page or show invalid login details alert. 
2. Create User profile page based on response from /userprofile endpoint. Use profilePic field value to display the user profile pic. 

Instructions:
1. Clone/download this repository to your computer.
2. Deploy your angular.js project folder inside root folder of the downloaded repository.
3. Run the server from root folder of the downloaded respoitory using the following command- node app.js

API Endpoints:
1. /login:
   Request type: GET, Parameters: email, password. 
   Only accepted login details are: testuser, test_password
   Response: 200 Ok if provided details matches, else 404 
2. /userprofile: 
   Request type: GET
   Response:
    {
    "fullName": "sundar pichai",
    "company": "Google",
    "age": 45,
    "address": "MountainView, CA",
    "profilePic": "http://searchengineland.com/figz/wp-content/seloads/2015/05/sundar-pichai-2-1920-800x450.jpg"
    }
