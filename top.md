# FireAuth

##### An Open Source JavaScript wrapper for Firebase's native and third-party authentications. 

## Usage

#####HTML

`<script src="https://filehost.firebaseapp.com/FireAuth/FireAuth-0.0.1.js"></script>`

or

`<script src="path/to/FireAuth-0.0.1.js"></script>`

#####JS
`var fireAuthInstance = new FireAuth("https://MYFIREBASEREF.firebaseio.com/");`

Creating a User
```
fireAuthInstance.createUserWithEmail("email@email.com", "password", function(userData){
  //Handle user creation  
})
```
##### In order to use FireAuth, you must enable User Authentication in your Firebase Authentication Settings

##### For Facebook authentication, you must [configure your application](https://www.firebase.com/docs/web/guide/login/facebook.html) for Facebook.


