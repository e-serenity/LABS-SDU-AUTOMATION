* Need 1920*1080 monitor resolution, taskbar not hidden at the bottom of the screenand solflare ectension installed in chrome.

* We need npm, install nvm then `nvm install 18` and `nvm use 18` ( to install nvm on windows : https://github.com/coreybutler/nvm-windows)

* Open the folder in your terminal and install dependencies with `npm install`

* Modify path `const extensionPath` line 8 of src/sa.ts and replace Your_User

* Launch the script using `npm start run` and go to solfare tab, create a new wallet, backup passphrase.

* Create a new burn wallet, export private key and select it by default in solfare

* Go on `Star Atlas Labs` tab and clic to launch game, then return in solfare and auto accept and auto confirm labs website

* If needed import this wallet in your chrome phantom

* Prepare one or more scan fleet in this wallet and move them to the choosen sector on Labs map

* Set `const paused` to false line 7 of src/sa.ts

* `npm start run` will connect and scan all fleet every 70 seconds !
