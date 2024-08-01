Unzip or clone the specific file like "client" in terminal type "npm install". After that type "npm run dev" to start the project locally on pc. Although there's a bakend part here. I hoisted the backend code on render. So, if you run client side on pc it's automatically got data from backend code that hoisted on internet. There's no need to run backend locally.

  #Implement Features

  1. User Authentication and Authorization : Signup: Users can create new accounts with unique email addresses and passwords. Login: Authenticate users with JWT and allow access to protected routes. OAuth Login: Allow users to log in using third-party services (e.g., Google, Facebook). Store the User in Mongodb database.

  2. Profile Management : View Profile: Display user's personal information, including name, email, and profile picture. Edit Profile: Allow users to update their personal information and change their passwords.

  3. CRUD Operations : Create Items: Users can create new items (e.g., tasks, posts, events) with detailed information. Read Items: Display a list of items created by the user or shared with the user. Update Items: Allow users to edit the details of their items. Delete Items: Users can delete items they have created. JWT implementation : Secure all these api through JWT

  4. Searching product : Search Functionality: Implement search features that allow users to find items.

  5. Dashboard implementation : i. Profile section ii. All products seaction with crud operation except create iii. Add products Section (create product) iv. Back to home button

  6. Relevant Routes & Section Add 7 section in home page that align to my project
