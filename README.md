#edimension-sso-login

My chrome extension implementation of the automated SSO login, I don't particularly like to be redirected through two login pages. Feel free to clone and fork, but do read the source code before you do, and understand how it works - keeping this unpacked so modification of the source code is easy.

#How it works

This is non-malicious: feel free to look at the source. `background.js` listens for a change in tab url, if it detects either the `edimension login webapp` or the `saturn login page` then it will run the appropriate content script. The `edimension` content script simply follows the SSO login link, and the `saturn` content script fills in the userNameInput and passwordInput fields with the values from your Google Chrome Password Manager/Lastpass. This extension does not store any data, being careful to read from the autofill and not storing it in a local variable.

#Keep your browser secure

Interestingly, since the DOM input fields are only accessible after the user interacts with the page, we can simulate this with a keyboard event and the input field *PLAINTEXT* CAN be read into a local variable. This is probably how malicious extensions can grab your vault autofill passwords. If the autofill can be read, it can most definitely be stored, sent and used. Manage your extensions properly and check source code if installing unpacked extensions folks.

#Installation

Open `chrome://extensions` in Chrome, click `Load Unpacked` and navigate to your local copy of this directory.