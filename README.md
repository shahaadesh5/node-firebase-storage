# Node.js-Firebase-Storage

Prerequisites:
* Node v 10+
* Firebase Account
* Firebase Storage App

To Run the App:
1. Install the necessary dependancies using `npm install`
2. Create a Firebase Project. Follow the steps here - https://firebase.google.com/docs/web/setup
3. Create a new Firebase App.
4. Add Firebase Storage Service.
5. Go to project Settings and Under Service accounts tab, Click on 'Generate new private key' button. Download the json config file and place it under the project folder.
6. Update the environtment variable and set `BUCKET_URL` with the bucket URL for your Firebase App.
7. Run the app using `npm start`
8. Upload the files by hitting a POST request on the API: http://localhost:5000/upload

That's it! The project should be working to upload files on your Firebase Storage app. 