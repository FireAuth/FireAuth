# FireAuth

##### An Open Source JavaScript wrapper for Firebase's native and third-party authentications. 

## Usage

#####HTML

`<script src="https://filehost.firebaseapp.com/FireAuth/FireAuth-0.0.1.js"></script>`

or

`<script src="path/to/FireAuth-0.0.1.js"></script>`

#####JS
`var accountInstance = new AccountJS("https://MYFIREBASEREF.firebaseio.com/");`

Creating a User
```
accountInstance.createUserWithEmail("email@email.com", "password", function(userData){
  //Handle user creation  
})
```
##### In order to use FireAuth, you must enable User Authentication in your Firebase Authentication Settings

##### For Facebook authentication, you must [configure your application](https://www.firebase.com/docs/web/guide/login/facebook.html) for Facebook.


## Functions
<dl>
<dt><a href="#createUserWithEmail">createUserWithEmail(email, password, callback)</a></dt>
<dd><p>Creates a new Firebase user with Email and Password Authentication.</p>
</dd>
<dt><a href="#loginWithEmail">loginWithEmail(email, password, token, callback)</a></dt>
<dd><p>Logs in a Firebase user with Email and Password Authentication.</p>
</dd>
<dt><a href="#changeUserPassword">changeUserPassword(email, oldPassword, newPassword, callback)</a></dt>
<dd><p>Changes a Firebase user&#39;s password.</p>
</dd>
<dt><a href="#changeUserEmail">changeUserEmail(oldEmail, newEmail, password, callback)</a></dt>
<dd><p>Changes a Firebase user&#39;s email.</p>
</dd>
<dt><a href="#resetUserPassword">resetUserPassword(email, callback)</a></dt>
<dd><p>Sends a reset password email to the user.</p>
</dd>
<dt><a href="#deleteUserWithEmail">deleteUserWithEmail(email, password, callback)</a></dt>
<dd><p>Deletes a Firebase user with Email and Password Authentication.</p>
</dd>
<dt><a href="#loginWithFacebook">loginWithFacebook(redirect, callback)</a></dt>
<dd><p>Logs in a Firebase user with Facebook Authentication. Make sure your application is configured as a Facebook App.</p>
</dd>
<dt><a href="#logout">logout()</a></dt>
<dd><p>Logs out a user and removes authentication token.</p>
</dd>
</dl>
<a name="createUserWithEmail"></a>
## createUserWithEmail(email, password, callback)
Creates a new Firebase user with Email and Password Authentication.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| email | <code>string</code> | The user's email |
| password | <code>string</code> | The user's password |
| callback | <code>function</code> | Optional callback function with parameter userData. (Called upon successful account creation) |

<a name="loginWithEmail"></a>
## loginWithEmail(email, password, token, callback)
Logs in a Firebase user with Email and Password Authentication.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| email | <code>string</code> | The user's email |
| password | <code>string</code> | The user's password |
| token | <code>boolean</code> | True to create an auth token, false to not create one. |
| callback | <code>function</code> | Optional callback function with parameter authData. (Called upon successful login) |

<a name="changeUserPassword"></a>
## changeUserPassword(email, oldPassword, newPassword, callback)
Changes a Firebase user's password.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| email | <code>string</code> | The user's email |
| oldPassword | <code>string</code> | The user's original password |
| newPassword | <code>string</code> | The user's new password |
| callback | <code>function</code> | Optional callback function. (Called upon successful password change) |

<a name="changeUserEmail"></a>
## changeUserEmail(oldEmail, newEmail, password, callback)
Changes a Firebase user's email.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| oldEmail | <code>string</code> | The user's original email |
| newEmail | <code>string</code> | The user's new email |
| password | <code>string</code> | The user's password |
| callback | <code>function</code> | Optional callback function. (Called upon successful email change) |

<a name="resetUserPassword"></a>
## resetUserPassword(email, callback)
Sends a reset password email to the user.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| email | <code>string</code> | The user's email |
| callback | <code>function</code> | Optional callback function. (Called once reset email is sent) |

<a name="deleteUserWithEmail"></a>
## deleteUserWithEmail(email, password, callback)
Deletes a Firebase user with Email and Password Authentication.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| email | <code>string</code> | The user's email |
| password | <code>string</code> | The user's password |
| callback | <code>function</code> | Optional callback function. (Called upon successful account deletion) |

<a name="loginWithFacebook"></a>
## loginWithFacebook(redirect, callback)
Logs in a Firebase user with Facebook Authentication. Make sure your application is configured as a Facebook App.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| redirect | <code>boolean</code> | Whether the webpage should redirect the current page. If false the webpage will just open a popup to Facebook. |
| callback | <code>function</code> | Optional callback function with parameter authData that will not get called if redirect is true. (Called upon successful login) |

<a name="logout"></a>
## logout()
Logs out a user and removes authentication token.

**Kind**: global function  


##### Created by Ayush Jain and Rohan Iyer 