## Functions
<dl>
<dt><a href="#checkForAvailableToken">checkForAvailableToken(foundToken, noToken)</a></dt>
<dd><p>Checks for any tokens existing from a user&#39;s session, and authenticates it (Logs the user in).</p>
</dd>
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
<dt><a href="#loginWithFacebook">loginWithFacebook(callback)</a></dt>
<dd><p>Logs in a Firebase user with Facebook Authentication. Make sure your application is <a href="https://www.firebase.com/docs/web/guide/login/facebook.html">configured as a Facebook App</a>.</p>
</dd>
<dt><a href="#loginWithGithub">loginWithGithub(callback)</a></dt>
<dd><p>Logs in a Firebase user with GitHub Authentication. Make sure your application is <a href="https://www.firebase.com/docs/web/guide/login/github.html">configured as a GitHub App</a>.</p>
</dd>
<dt><a href="#loginWithGoogle">loginWithGoogle(callback)</a></dt>
<dd><p>Logs in a Firebase user with Google Authentication. Make sure your application is <a href="https://www.firebase.com/docs/web/guide/login/google.html">configured as a Google App</a>.</p>
</dd>
<dt><a href="#loginWithTwitter">loginWithTwitter(options, callback)</a></dt>
<dd><p>Logs in a Firebase user with Twitter Authentication. Make sure your application is <a href="https://www.firebase.com/docs/web/guide/login/twitter.html">configured as a Twitter App</a>.</p>
</dd>
<dt><a href="#logout">logout()</a></dt>
<dd><p>Logs out a user and removes authentication token.</p>
</dd>
<dt><a href="#authChangeListener">authChangeListener(onLogin, onLogout)</a></dt>
<dd><p>Event handler checks any changes in user authentication. Can also be used as an alternative to callbacks from other login functions.</p>
</dd>
<dt><a href="#setTokenName">setTokenName(newTokenName)</a></dt>
<dd><p>Sets the token id or name.</p>
</dd>
</dl>
<a name="checkForAvailableToken"></a>
## checkForAvailableToken(foundToken, noToken)
Checks for any tokens existing from a user's session, and authenticates it (Logs the user in).

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| foundToken | <code>function</code> | A function with the parameter authData that will get called if a token. |
| noToken | <code>function</code> | A function with the parameter error that will get called if no token is found. |

**Example**  
```js
ref.checkForAvailableToken(function(authData){
      doStuffWith(authData);
},function(error){
      doStuffWith(error);
});
```
<a name="createUserWithEmail"></a>
## createUserWithEmail(email, password, callback)
Creates a new Firebase user with Email and Password Authentication.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| email | <code>string</code> | The user's email |
| password | <code>string</code> | The user's password |
| callback | <code>function</code> | Optional callback function with parameter userData. (Called upon successful account creation) |

**Example**  
```js
ref.createUserWithEmail("john@doe.com", "correcthorsebatterystaple", function(userData){
     // The user creation was successful
     doStuffWith(userData);
})
```
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

**Example**  
```js
ref.loginWithEmail("john@doe.com", "correcthorsebatterystaple", false, function(authData){
     // The authentication was successful.
     doStuffWith(authData);
})
```
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

**Example**  
```js
ref.changeUserPassword("john@doe.com", "correcthorsebatterystaple", "youwillneverguessthis", function(){
     // Password has been changed - handle anything else here.
})
```
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

**Example**  
```js
ref.changeUserEmail("john@doe.com", "jane@doe.com", "correcthorsebatterystaple", function(){
     // Email has been changed - handle anything else here.
})
```
<a name="resetUserPassword"></a>
## resetUserPassword(email, callback)
Sends a reset password email to the user.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| email | <code>string</code> | The user's email |
| callback | <code>function</code> | Optional callback function. (Called once reset email is sent) |

**Example**  
```js
ref.resetUserPassword("john@doe.com", function(){
     // Email has been sent - handle anything else here.
})
```
<a name="deleteUserWithEmail"></a>
## deleteUserWithEmail(email, password, callback)
Deletes a Firebase user with Email and Password Authentication.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| email | <code>string</code> | The user's email |
| password | <code>string</code> | The user's password |
| callback | <code>function</code> | Optional callback function. (Called upon successful account deletion) |

**Example**  
```js
ref.deleteUserWithEmail("john@doe.com", "correcthorsebatterystaple", function(){
     // Successfully deleted user within Firebase - Handle anything else here.
})
```
<a name="loginWithFacebook"></a>
## loginWithFacebook(callback)
Logs in a Firebase user with Facebook Authentication. Make sure your application is [configured as a Facebook App](https://www.firebase.com/docs/web/guide/login/facebook.html).

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| options.redirect | <code>boolean</code> | Whether the webpage should redirect the current page. If false or not defined the webpage will just open a popup to Twitter. |
| options.token | <code>boolean</code> | True to create an auth token, false or undefined to not create one. |
| options.sessionTime | <code>string</code> | If not specified - or set to default - sessions are persisted for as long as you have configured in the Login & Auth tab of your App Dashboard. To limit persistence to the lifetime of the current window, set this to sessionOnly. A value of none will not persist authentication data at all and will end authentication as soon as the page is closed. |
| options.permissions | <code>string</code> | A set of permissions your application may want to access from the user's Github account. Certain permissions will have to be approved by the user and Github. Each of these permissions can be accessed through the callback. [Click here](https://developer.github.com/v3/oauth/#scopes) to view some of the permissions that can be access from Github. |
| callback | <code>function</code> | Optional callback function with parameters [error](https://www.firebase.com/docs/web/guide/user-auth.html#section-full-error) and [authData](https://www.firebase.com/docs/web/guide/login/facebook.html#section-logging-in) that will not get called if redirect is true. (Called upon successful or unsuccessful login) [NOTE: Alternatively, the authData from any login method can be accessed universally from the "authChangeListener" function] |

**Example**  
```js
var settings = {
      token: false,
      redirect: true,
      sessionTime: "none",
      permissions: "email, user_likes"
};

ref.loginWithFacebook(settings, function(error, authData){
      // The authentication was successful and opened within a popup.
      if(error){
          debugError(error);
      }else{
         doStuffWith(authData);
      }
});
```
<a name="loginWithGithub"></a>
## loginWithGithub(callback)
Logs in a Firebase user with GitHub Authentication. Make sure your application is [configured as a GitHub App](https://www.firebase.com/docs/web/guide/login/github.html).

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| options.redirect | <code>boolean</code> | Whether the webpage should redirect the current page. If false or not defined the webpage will just open a popup to Twitter. |
| options.token | <code>boolean</code> | True to create an auth token, false or undefined to not create one. |
| options.sessionTime | <code>string</code> | If not specified - or set to default - sessions are persisted for as long as you have configured in the Login & Auth tab of your App Dashboard. To limit persistence to the lifetime of the current window, set this to sessionOnly. A value of none will not persist authentication data at all and will end authentication as soon as the page is closed. |
| options.permissions | <code>string</code> | A set of permissions your application may want to access from the user's Github account. Certain permissions will have to be approved by the user and Github. Each of these permissions can be accessed through the callback. [Click here](https://developer.github.com/v3/oauth/#scopes) to view some of the permissions that can be access from Github. |
| callback | <code>function</code> | Optional callback function with parameters [error](https://www.firebase.com/docs/web/guide/user-auth.html#section-full-error) and [authData](https://www.firebase.com/docs/web/guide/login/github.html#section-logging-in) that will not get called if redirect is true. (Called upon successful or unsuccessful login) [NOTE: Alternatively, the authData from any login method can be accessed universally from the "authChangeListener" function] |

**Example**  
```js
var settings = {
      token: true,
      redirect: false,
      sessionTime: "default",
      permissions: "user, notifications, read:org"
};

ref.loginWithGithub(settings, function(error, authData){
      // The authentication was successful and opened within a popup.
      if(error){
          debugError(error);
      }else{
         doStuffWith(authData);
      }
});
```
<a name="loginWithGoogle"></a>
## loginWithGoogle(callback)
Logs in a Firebase user with Google Authentication. Make sure your application is [configured as a Google App](https://www.firebase.com/docs/web/guide/login/google.html).

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| options.redirect | <code>boolean</code> | Whether the webpage should redirect the current page. If false or not defined the webpage will just open a popup to Twitter. |
| options.token | <code>boolean</code> | True to create an auth token, false or undefined to not create one. |
| options.sessionTime | <code>string</code> | If not specified - or set to default - sessions are persisted for as long as you have configured in the Login & Auth tab of your App Dashboard. To limit persistence to the lifetime of the current window, set this to sessionOnly. A value of none will not persist authentication data at all and will end authentication as soon as the page is closed. |
| options.permissions | <code>string</code> | A set of permissions your application may want to access from the user's Github account. Certain permissions will have to be approved by the user and Github. Each of these permissions can be accessed through the callback. [Click here](https://developer.github.com/v3/oauth/#scopes) to view some of the permissions that can be access from Github. |
| callback | <code>function</code> | Optional callback function with parameters [error](https://www.firebase.com/docs/web/guide/user-auth.html#section-full-error) and [authData](https://www.firebase.com/docs/web/guide/login/google.html#section-logging-in) that will not get called if redirect is true. (Called upon successful or unsuccessful login) [NOTE: Alternatively, the authData from any login method can be accessed universally from the "authChangeListener" function] |

**Example**  
```js
var settings = {
      token: true,
      redirect: false,
      sessionTime: "none",
      permissions: "profile, openid"
};

ref.loginWithGoogle(settings, function(error, authData){
      // The authentication was successful and opened within a popup.
      if(error){
          debugError(error);
      }else{
         doStuffWith(authData);
      }
});
```
<a name="loginWithTwitter"></a>
## loginWithTwitter(options, callback)
Logs in a Firebase user with Twitter Authentication. Make sure your application is [configured as a Twitter App](https://www.firebase.com/docs/web/guide/login/twitter.html).

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>object</code> | Object with optional values. |
| options.redirect | <code>boolean</code> | Whether the webpage should redirect the current page. If false or not defined the webpage will just open a popup to Twitter. |
| options.token | <code>boolean</code> | True to create an auth token, false or undefined to not create one. |
| options.sessionTime | <code>string</code> | If not specified - or set to default - sessions are persisted for as long as you have configured in the Login & Auth tab of your App Dashboard. To limit persistence to the lifetime of the current window, set this to sessionOnly. A value of none will not persist authentication data at all and will end authentication as soon as the page is closed. |
| callback | <code>function</code> | Optional callback function with parameters [error](https://www.firebase.com/docs/web/guide/user-auth.html#section-full-error) and [authData](https://www.firebase.com/docs/web/guide/login/twitter.html#section-logging-in) that will not get called if redirect is true. (Called upon successful or unsuccessful login) [NOTE: Alternatively, the authData from any login method can be accessed universally from the "authChangeListener" function] |

**Example**  
```js
var settings = {
     redirect: true,
     token: false,
     sessionTime: "default"
};

ref.loginWithTwitter(settings, function(error, authData){
     // The authentication was successful and opened within a popup.
     if(error){
         debugError(error);
     }else{
          doStuffWith(authData);
     }
});
```
<a name="logout"></a>
## logout()
Logs out a user and removes authentication token.

**Kind**: global function  
**Example**  
```js
ref.logout();
```
<a name="authChangeListener"></a>
## authChangeListener(onLogin, onLogout)
Event handler checks any changes in user authentication. Can also be used as an alternative to callbacks from other login functions.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| onLogin | <code>function</code> | A function with parameter authData that will get called if the user becomes authenticated or is already logged in. |
| onLogout | <code>function</code> | A function with parameter authData that will get called if the user becomes unauthenticated or is already logged out. |

**Example**  
```js
ref.authChangeListener(function(authData){
     //The user has logged in
     doStuffWith(authData);
}, function(authData){
     //The user has logged out
     doStuffWith(authData);
});
```
<a name="setTokenName"></a>
## setTokenName(newTokenName)
Sets the token id or name.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| newTokenName | <code>string</code> | the new name of your token. |

**Example**  
```js
ref.setTokenName("myTokenForMyFirstWebApp");
```
