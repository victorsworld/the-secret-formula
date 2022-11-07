# The Secret Formula

In this assignment we'll be exploring the world of forms! Begin by forking and cloning this assignment and creating an `index.html` file, a `styles.css` file, and a `main.js` file.

## Part 1: The alerter

Let's start out simple, in your `index.html` file, create a form that contains a text input and a submit button. From here, use Javascript to make it so that when the submit button is clicked, the page displays the text inside of the text input as a browser alert.

## Part 2: Sandwich builder

Somewhere below your previous form, create a new form. The purpose of this form will be to allow the user to select ingredients that will go in a sandwich. Inside of your form, create at least ten checkbox inputs that correspond to various sandwich ingredients (wheat bread, lettuce, peppers, etc.). Additionally, create a submit button.

Finally, wire up your form using Javascript so that upon clicking the submit button, a browser alert is displayed with a string with all of the ingredients that the user selected by checking the inputs (i.e.: "Your sandwich contains: bread, pesto, tomato, mozzerella, spinach"). To do this, you'll need to build a string, querying each checkbox one at a time. You could use a for-loop to do this but you are not required to do so.

## Part 3: Haircut appointment scheduler

Below your previous form, create another new form. This form will represent a haircut scheduling form which should contain the following inputs:
* a date input for what day the haircut should be scheduled for
* a text input to allow the user to request a specific hair cutter
* one set of two radio inputs that allows the user to select whether they have long or short hair
* a submit button

Additionally, make sure to add proper labels for each input.

When the user submits the form, display an alert with a message with the following structure: "Haircut scheduled for [DATE] with [HAIRCUTTER] for [LONG/SHORT] hair."

## Part 4: Create account

Finally, create one more form that represents a "create account" form. This form should have the following inputs:
* a text input for the user's desired username
* an email input for the user's email
* a password input for the user's password
* a confirm password input that makes the user type their password a second time to confirm it
* a submit button

Once again, make sure to add proper labels for your inputs.

When the user submits the form, display an alert with the created user's username and email. As a habit of good security, don't display the user's password.

## Stretch goals

### Beautify your forms

Go wild with CSS, make your forms look good! Check out some inspiration here: https://uicookies.com/beautiful-css-forms/

### Create Account Validation

Add validation to your Create Account form. When the user submits the form, ensure that their username is at least three characters, their email contains an @ symbol, their password is at least four characters, and that their 'password' and 'confirm password' values match. If any of these are not true, alert an error instead of a success message.

### User Login

Add one more form below your Create Account form for user login. This form should contain a username and a password input. When the user submits the form, determine whether the user has previously created an account that matches the given username and password. If so, log a success message. If not, log an error. To do this, you'll need to modify your Create Account form functionality to store the created accounts.
