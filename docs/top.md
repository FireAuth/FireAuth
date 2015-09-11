# FireAuth

##### An Open Source JavaScript wrapper for Firebase's native and third-party authentication. 

## Setup

#####HTML

`<script src="https://rawgit.com/FireAuth/FireAuth/master/FireAuth-0.0.1.js"></script>`

or

`<script src="path/to/FireAuth-0.0.1.js"></script>`

#####JS
`ref.createUserWithEmail("johnDoe@gmail.com", "thisismypassword", function(error, userData){        //creates a user
    if(error){
        console.log("Account creation failed: " + error);     //user creation unsuccessful
    } else{
        console.log("Account creation succeeded!");     //user creation successful

        ref.child('user').child(userData.uid).set({     //creates a child with the users firebase simplelogin
            user: true,                                 //ID and stores the user's information
            username: username,
            email: email,
            likes: {                //NOTE: It is highly reccomended that that user's password is not stored
                1: "dogs",          //in the JSON tree as Firebase does this already
                2: "pizza"
            }
        });

    }
 });

 ref.loginWithEmail("johnDoe@gmail.com", "thisismypassword", true, function(authData){      //logs in a user
    var userRef = ref.child('user').child(authData.uid);      //access the users information from JSON tree
    userRef.once('value', function(snapshot){
        console.log(snapshot.val().username.val);      //prints out the users email which was stored in the JSON tree
    });

 });


 ref.logout();      //logs user out`

##### In order to use FireAuth, you must enable User Authentication in your Firebase Authentication Settings

## Third Part Authentication Configuration Guides

#####  [Facebook](https://www.firebase.com/docs/web/guide/login/facebook.html)

##### [GitHub](https://www.firebase.com/docs/web/guide/login/github.html)

##### [Google](https://www.firebase.com/docs/web/guide/login/google.html)

##### [Twitter](https://www.firebase.com/docs/web/guide/login/twitter.html)


