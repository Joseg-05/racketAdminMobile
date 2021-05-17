<h1 align="center"> Racket Admin </h1>

<p> Welcome to racket admin mobile! An application to help users who provide racket services (mainly racket restringing) to keep track of their incoming/outgoing orders  </p>

<p><strong>Overview:</strong> Users will input their credentials to log in (For the time being please use <strong>email: T@gmail.com</strong> and <strong>password: 1234</strong>). Once they have done so, they are able to see/edit their orders, customers, and products.</p>

<h3 align="center"> Home Page </h3>
<p>Upon logging in you will be presented with the home page </p>
<p>You can logout by clicking on the icon on the top right</p>
<p>At the time you can see one graph on the screen (not completely styled) that will show your orders over the month</p>


<h3 align="center"> Orders Page </h3>
<p>Switching the the orders tab, you can <strong>Add</strong> or <strong>Edit</strong> Orders</p>
<p> Clicking on the add icon on the top right from the main order tab screen will take you to the add screen</p>
<p> Clicking on any order on the screen from the main order tab screen will take you to the edit screen, here you can edit the order, with multiple textinputs and also a date button on top that once you click on it, a calendar will pop up (only working on android atm)</p>
<p> After adding or editing a an order, you should be redirected back to the main orders tab, where you will see the update in the list of orders </p>
<p> You are able to swipe left for a "Completed" gesture, however, it is not completely implemented at the moment</p>

<h3 align="center"> Customers Page </h3>
<p> Functions are similar the Orders page in that you can add or edit customers</p>

<h3 align="center"> Inventory Page </h3>
<p> Functions are similar the Orders page in that you can add or edit Inventory</p>


<h3 align="center">Extra Notes</h3>
<p> All Edit and Add Screens have input validation</p>
<p>All interactions with logging in, logging out, adding or editing any items within the app are interactions with the racket admin api hosted on a seperate server,
since the hosting is on a free tier, the first time you log in or add/edit any items you may have to wait a little bit for the api to respond</p>
<p>react-native-paper, redux-thunk, react-native-chart-kit, and axios are some of the main third party npm packages used </p>
<p> Redux is used to manage the user's JWT token</p>
<p> <strong>Delete Buttons</strong> are not implemented on any of the edit screens ATM</p>
<p> There are some header UI issues with IOS (would prefer to run the app on android), however the app will not crash on either apps, and everything runs efficiently </p>
