<!-- for pushing the file into github -->
-step 1 :create a new repository
-step 2: top-right corner click into icon and create a new one
-step 3: git init
-step 4:git add
-step 5:git commit -m "message"
-step 6:git remote add origin <copy and paste repository from git hub>
-step 7:git pull origin main --rebase
-step 8:git push origin main

# Features

- Login/Sign UP
   - Sign In /Sign up Form
   - redirect to Browse Page 
  - Browse (after athentication)
    - Header
    - Main Movie
       - Tailor in background
       - Title & Description
       - MovieSuggestions
       - Movielists * N
- NetflixGPT
  - Search Bar
  - Movie Suggestions

# NETFLIX GPT
 - create-react-app
 - configured tailwindcss => https://v3.tailwindcss.com/docs/guides/create-react-app
 - routing setup
  - npm install react-router-dom
 - header
 - Login Form
 - SignUP Form 
 - Form Validation
 - useRef Hook (for reference the curreny object value in form input validation ).
 - using firebase for authntication login as well as deploy
 # - Deployment By using firebase
    - steps for deploy to PRODCUTION
   STEP 1:  npm install -g firebase-tools
   STEP 2:  firebase --version
   STEP 3:  firebase login
   STEP 4:  firebase init
     - asking question ? 
         - public directory ? 
         - type=>build
         - index.html -> no
         - gitdeploy auto -> no
# it created configuration for this 
now we have do deploy.
 run THE COMMAND=> npm run build
   STEP 6: DEPLOY PRODUCTION COMMAND =>run => firebase deploy 
      - Hosting URL: https://netflix-gpt-6fe1f.web.app
- Create  Authentication 
  -Signin /Signup
   - IMPLEMENT  Signin user api
- setup for redux 
  - npm install -D  @reduxjs/toolkit
  - npm install react-redux
    -after signin ->update to user store
- Update Profile api
============================
feature 
-Movies
  - fetch from TMDB API

  





