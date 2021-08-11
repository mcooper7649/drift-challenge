## This is my Boilerplate Important Information
--

1. This is the a very basic React Frontend With Express Backend Boilerplate.
2. Steps needed to install
   1. NPM I to install our dependencies on the client directory
   2. You can try npm i on the server, there shouldn't be any depencencies
   3. next we need start our express server
      1. node server.js OR nodemon server.js will start it from root
   4. Then we can start our React Server
      1. npm run start



## Lets first Setup the ClientSide to have a button that lets us activate our jokebot
   - Bootstrap for Basic Styles
   - JumboTron to place our Jokebot
   - Jokebot button or Image inside that says
     - Activate JokeBot


## Next I will Add in the script tag from drift and see if I can get it to trigger on button click
   - onClick Panel will open


## Ngrok Steps Needed 
   - install ngrok
   - copy unique key as per ngrok website steps
   - ./ngrok https 5000     to generate a localhost:5000 forward
   - Add the forward to the drift dashboard


## Video Steps
--

1. opens ngrok to spin a public forward
2. http://127.0.0.1:4040/ this will take us tot he ngrok dashbaord where you can see all the requests such as get, post, put etc.
3. If online you have ngrok connected to your localhost forwarding
   
4. Go to Dev Platform > Click on button with all the apps and click on Drift Dev Platform
5. Create a new app 
   1. Display Information | Info about the App

6. Oauth scopes
   1. This is for the webhooks they are like notificaitons
   2. Scopes are like permissions, you can specify what type of authorization your app has with your account data. This way you don't need to expose sensitve data that your app won't need access to.
   3. If your not sure what scopes you may need you can read up on them or add them all and remove them later
      1. devdocs.drift.com/docs/authentication-and-scopes
   4. YOU MUST REMEMBER if you generate a new scoope after you created a app credential, it needs to be GENERATED AGAIN OR IT WONT WORK

7. Activate your App
   1. Installling to drift on the left panel
   2. Click Install App to generate code, or copy code if it already exists.
   3. The OAuth token  grants us access to our endpoints with our scopes
   4. REMEMBER if you change scope you need to REMOVE The APP and INSTALL AGAIN To get another TOKEN
   5. redirect url we didn't modify, 

8. Webhooks is where we want to put our NGROK address in the Settings Panel
   1. Copy the ngrok generated URL: example http://73d487cde5c0.ngrok.io
   2. Paste into Request URL field in Webhook panel
   3. Send Test payload
   4. go to http://127.0.0.1:4040/inspect/http and confirm that the POST Requst is now on top


9. Subscribe to Webhook events
   1.  This is adding OAuth scopes to our webhook events
   2.  There are many scopes and they are descriptive, so take your time understand the impact it may have if its not used.



## Building our Playbook
---

1. We are now ready to create our Custom Playbook
2. Create Chat Playbook
   1. Bot - Regular Bot
   2. Landing page - Takes over the Whole Page

3. We selected Bot
   1. You can select a url here or intsall the script on the page
      1. we will install the script on the page

4. PlayBook Type
   1. Bots
   2. LiveChat
      1.  We want to select the welcome message live chat
   3. Accouncements

5. Targeting - who you want this playbook for fire for
   1. all visitors works for our scenario
   2. you could also set conditional, such as if my team is online, we fire
      - there are many different conditions, you can play with it see whats available

   3. You can also set how often the visitor sett it, a typically cookie session is 30 minutes
   4. You can also set the percentage, ill leave at 100 for this

*** Important NOTE *** 

When the playbook is inactive the widget still appears on the app/page BUT it doesn't auto-fire or engage the user

   5. Advanced settings we can cover more in-depth later, refer to the documenation.


## BOT FLOW
---

1. You will see an intial Start of Bot Flow and End of Bot Flow
2. Inside you will see the first message 'Hey There!"
3. Note teh + icon, this is ADD NODE
   

3. We can setup a question to hanle our "Wanna hear a joke question"
   1. We can use a first name greeting by clicking on the personalization icon. Then we get prompted to input a default attribute should the first name not be available.
   2. Then we can edit the buttons available by editing the responses to this question
   3. Triggered actions let you tag and apply lead information. Helping for marketing and filtering.
   4. CQL lets u mark how likely you are to make the sale
   5. Attributes allow us set attributes for that contact we can create CUSTOM attributes too, VERY IMPORTANT
      1. go to VISITORS>CONTACTS>CONTACTSETTINGS>CUSTOMATTRIBUTES
      2. remember htese are the attributes that your site contacts have attached to their profile aka schema
      3. so create head_joke as an attribute
      4. now if we click on responsones and the sure button
         1. we check the box save information to contact attributes
         2. select our custom attribute and the value that gets passed when button is pressed

   6. For hte NO button we can have a auto response of "aww next time"

## Verifying its working
---

1. Turn on the Playbook
2. go to playbooks>chat playbooks
3. Make sure you have added installation script to your current build. ALSO Make sure you have other playbooks off, as you can only have 1 engaged at a time and you don't want them to have a higher priority for this.
4. We can open ngrok
   1. http://127.0.0.1:4040/inspect/http
   2. Clear the previous post reqeusts
   3. and go back to our local host and click sure and you can see all our EVENTS firing with teh associated data in the post


## Using that data with Drift API
---

1. devdocs.drift.com/docs/drift-events Go to the Receiving Information from Drift Tutorial
2. Conversation Events
3. Button Clicked
4. Copy the  buttonClicked Example
   1.  We can take that code and input directly into the console to see how it works before we totally implement
   2.  now we can click our sure button and our console will log the information we just pasted into the console

5. Now that we know  that works we can add that code to the bottom of our drift script in our index.html or whatever page we have it on



## Generating a function that responds to the "Sure" button press
1. We need to go back to the react side of things and see if we can create a function

