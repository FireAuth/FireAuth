/*
 * Copyright © 2015 Ayush Jain & Rohan Iyer
 * Deployment Version 0.0.1 (ECMA5 compiled)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

"use strict";

/**
 * @class FireAuth
 * @attribute {string} user - Optional username or some form of identification of the current user
 * @attribute {string} tokenName - name of the token that will be stored in user's browser (This should not be kept default)
 * @constructor FireAuth
 * @param {string} firebaseURL - The URL of the Firebase reference.
 */

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FireAuth = (function () {

    /**
     * Represents an instance of FireAuth.
     * @constructor
     * @param {string} firebaseURL - The URL of the Firebase reference.
     */

    function FireAuth(firebaseURL) {
        _classCallCheck(this, FireAuth);

        this.ref = new Firebase(firebaseURL);
        this.user = '';
        this.tokenName = this.tokenName;
        this.token = localStorage.getItem(this.tokenName);

        if (token == null) {
            token = "No Token";
        }

        ref.authWithCustomToken(token, function (error, result) {
            if (error) {
                console.log("No pre-existing token found");
            } else {
                console.log("Pre-existing token found");
                user = result.uid;
            }
        });
    }

    /**
     * Creates a new Firebase user with Email and Password Authentication.
     * @function createUserWithEmail
     * @param  {string} email - The user's email
     * @param  {string} password - The user's password
     * @param  {Function} callback - Optional callback function with parameter userData. (Called upon successful account creation)
     */

    _createClass(FireAuth, [{
        key: "createUserWithEmail",
        value: function createUserWithEmail(email, password, callback) {
            ref.createUser({
                email: email,
                password: password
            }, function (error, userData) {
                if (error) {
                    throw "Account Creation Failed! " + error;
                } else {
                    console.log("Successfully created user account with uid:", userData.uid);

                    if (typeof callback === "function") {
                        callback(userData);
                    }
                }
            });
        }

        /**
         * Logs in a Firebase user with Email and Password Authentication.
         * @function loginWithEmail
         * @param  {string} email - The user's email
         * @param  {string} password - The user's password
         * @param  {boolean} token - True to create an auth token, false to not create one.
         * @param  {function} callback - Optional callback function with parameter authData. (Called upon successful login)
         */
    }, {
        key: "loginWithEmail",
        value: function loginWithEmail(email, password, token, callback) {
            ref.authWithPassword({
                email: email,
                password: password
            }, function authHandler(error, authData) {
                if (error) {
                    throw "Authentication Failed! " + error;
                } else {
                    console.log("Authenticated successfully with payload:", authData);
                    user = authData.uid;
                    if (token) {
                        localStorage.setItem(this.tokenName, authData.token);
                    }

                    if (typeof callback == "function") {
                        callback(authData);
                    }
                }
            });
        }

        /**
         * Changes a Firebase user's password.
         * @function changeUserPassword
         * @param  {string} email - The user's email
         * @param  {string} oldPassword - The user's original password
         * @param  {string} newPassword - The user's new password
         * @param  {Function} callback - Optional callback function. (Called upon successful password change)
         */
    }, {
        key: "changeUserPassword",
        value: function changeUserPassword(email, oldPassword, newPassword, callback) {
            ref.changePassword({
                email: email,
                oldPassword: oldPassword,
                newPassword: newPassword
            }, function (error) {
                if (error) {
                    switch (error.code) {
                        case "INVALID_USER":
                            throw "The specified user account does not exist.";
                            break;
                        case "INVALID_PASSWORD":
                            throw "The specified user account password is incorrect.";
                            break;
                        default:
                            throw "Error changing password: " + error;
                    }
                } else {
                    console.log("User password changed successfully!");
                    callback();
                }
            });
        }

        /**
         * Changes a Firebase user's email.
         * @function changeUserEmail
         * @param  {string} oldEmail - The user's original email
         * @param  {string} newEmail - The user's new email
         * @param  {string} password - The user's password
         * @param  {Function} callback - Optional callback function. (Called upon successful email change)
         */
    }, {
        key: "changeUserEmail",
        value: function changeUserEmail(oldEmail, newEmail, password, callback) {
            ref.changeEmail({
                email: email,
                oldPassword: oldPassword,
                newPassword: newPassword
            }, function (error) {
                if (error) {
                    switch (error.code) {
                        case "INVALID_USER":
                            throw "The specified user account does not exist.";
                            break;
                        case "INVALID_PASSWORD":
                            throw "The specified user account password is incorrect.";
                            break;
                        default:
                            throw "Error changing email: " + error;
                    }
                } else {
                    console.log("User email changed successfully!");
                    callback();
                }
            });
        }

        /**
         * Sends a reset password email to the user.
         * @function resetUserPassword
         * @param  {string} email - The user's email
         * @param  {Function} callback - Optional callback function. (Called once reset email is sent)
         */
    }, {
        key: "resetUserPassword",
        value: function resetUserPassword(email, callback) {
            ref.changeEmail({
                email: email,
                oldPassword: oldPassword,
                newPassword: newPassword
            }, function (error) {
                if (error) {
                    switch (error.code) {
                        case "INVALID_USER":
                            throw "The specified user account does not exist.";
                            break;

                        default:
                            throw "Error resetting password: " + error;
                    }
                } else {
                    console.log("User email changed successfully!");
                    callback();
                }
            });
        }

        /**
         * Deletes a Firebase user with Email and Password Authentication.
         * @function deleteUserWithEmail
         * @param  {string} email - The user's email
         * @param  {string} password - The user's password
         * @param  {Function} callback - Optional callback function. (Called upon successful account deletion)
         */
    }, {
        key: "deleteUserWithEmail",
        value: function deleteUserWithEmail(email, password, callback) {
            ref.removeUser({
                email: email,
                password: password
            }, function (error) {
                if (error) {
                    switch (error.code) {
                        case "INVALID_USER":
                            throw "The specified user account does not exist.";
                            break;
                        case "INVALID_PASSWORD":
                            throw "The specified user account password is incorrect.";
                            break;
                        default:
                            throw "User deletion failed! " + error;
                    }
                } else {
                    console.log("User account deleted successfully!");
                    if (typeof callback == "function") {
                        callback();
                    }
                }
            });
        }

        /**
         * Logs in a Firebase user with Facebook Authentication. Make sure your application is configured as a Facebook App.
         * @function loginWithFacebook
         * @param {boolean} redirect - Whether the webpage should redirect the current page. If false the webpage will just open a popup to Facebook.
         * @param {Function} callback - Optional callback function with parameter authData that will not get called if redirect is true. (Called upon successful login)
         * @tutorial {String} Docs - https://www.firebase.com/docs/web/guide/login/facebook.html |||||||||||||||||||BROKEN||||||||||||||||||||||
         */
    }, {
        key: "loginWithFacebook",
        value: function loginWithFacebook(redirect, callback) {
            if (redirect) {
                ref.authWithOAuthRedirect("facebook", function (error) {
                    if (error) {
                        throw "Authentication Failed! " + error;
                    } else {
                        localStorage.setItem(this.tokenName, authData.token);
                    }
                });
            } else {
                ref.authWithOAuthPopup("facebook", function (error, authData) {
                    if (error) {
                        throw "Authentication Failed! " + error;
                    } else {
                        console.log("Authenticated successfully with payload:", authData);
                        localStorage.setItem(this.tokenName, authData.token);
                        if (typeof callback == "function") {
                            callback(authData);
                        }
                    }
                });
            }
        }

        /**
         * Logs in a Firebase user with Github Authentication. Make sure your application is configured as a Github App.
         * @function loginWithGithub
         * @param {boolean} redirect - Whether the webpage should redirect the current page. If false the webpage will just open a popup to Github.
         * @param {Function} callback - Optional callback function with parameter authData that will not get called if redirect is true. (Called upon successful login)
         * @tutorial https://www.firebase.com/docs/web/guide/login/github.html |||||||||||||||||||BROKEN||||||||||||||||||||||
         */
    }, {
        key: "loginWithGithub",
        value: function loginWithGithub(redirect, callback) {
            if (redirect) {
                ref.authWithOAuthRedirect("github", function (error) {
                    if (error) {
                        throw "Authentication Failed! " + error;
                    } else {
                        localStorage.setItem(this.tokenName, authData.token);
                    }
                });
            } else {
                ref.authWithOAuthPopup("github", function (error, authData) {
                    if (error) {
                        throw "Authentication Failed! " + error;
                    } else {
                        console.log("Authenticated successfully with payload:", authData);
                        localStorage.setItem(this.tokenName, authData.token);
                        if (typeof callback == "function") {
                            callback(authData);
                        }
                    }
                });
            }
        }

        /**
         * Logs in a Firebase user with Google Authentication. Make sure your application is configured as a Google App.
         * @function loginWithGoogle
         * @param {boolean} redirect - Whether the webpage should redirect the current page. If false the webpage will just open a popup to Google.
         * @param {Function} callback - Optional callback function with parameter authData that will not get called if redirect is true. (Called upon successful login)
         * @tutorial https://www.firebase.com/docs/web/guide/login/google.html |||||||||||||||||||BROKEN||||||||||||||||||||||
         */
    }, {
        key: "loginWithGoogle",
        value: function loginWithGoogle(redirect, callback) {
            if (redirect) {
                ref.authWithOAuthRedirect("google", function (error) {
                    if (error) {
                        throw "Authentication Failed! " + error;
                    } else {
                        localStorage.setItem(this.tokenName, authData.token);
                    }
                });
            } else {
                ref.authWithOAuthPopup("google", function (error, authData) {
                    if (error) {
                        throw "Authentication Failed! " + error;
                    } else {
                        console.log("Authenticated successfully with payload:", authData);
                        localStorage.setItem(this.tokenName, authData.token);
                        if (typeof callback == "function") {
                            callback(authData);
                        }
                    }
                });
            }
        }

        /**
         * Logs out a user and removes authentication token.
         * @function logout
         */
    }, {
        key: "logout",
        value: function logout() {
            ref.unauth();
            localStorage.removeItem(this.tokenName);
        }

        /**
         * Event handler checks any changes in user authentication
         * @function checkAuthChanges
         * @param {Function} loggedIn - A function that will get called if the user becomes authenticated or is already logged in.
         * @param {Function} loggedOut - A function that will get called if the user becomes unauthenticated or is already logged out.
         */
    }, {
        key: "checkAuthChanges",
        value: function checkAuthChanges(loggedIn, loggedOut) {
            ref.onAuth(function () {
                if (ref.getAuth() == null) {
                    //not logged in
                    loggedOut();
                } else {
                    //logged in
                    loggedIn();
                }
            });
        }

        //regex to check if the text is an email
    }, {
        key: "checkIfEmailInString",
        value: function checkIfEmailInString(text) {
            var re = /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
            return re.test(text);
        }
    }]);

    return FireAuth;
})();
