# Local Mart
* This is a simple react app that helps a local vendor who is currently taking orders on phone/whatsapp.
* The users can visit the link for that store. They can search and add the items that they want.
* Clicking on `ORDER` will open whatsapp chat for the vendor number with a prefilled formated message having all the details of order.
* Clicking on send will send the message to the vendor.
* Vendor can prepare the order and deliver it to the user.

# What does local mart help in?
Now every local vendor has the money, knowledge or exposure to create a website and take orders. Their user base is already shifting to zepto/swiggy/blinkit. The main reason I order blinkit instead of the shop outside my house is that I don't know what all things are available in shop. 
If they provided me an interface to view things in their shop, take the order and deliver in 10mins. I'll definetly choose them over blinkit.

# How to get started
* This is a simple react app that helps a local vendor taking orders on phone/whatsapp. 
* Add the list of products available in a shop, tag them to categories and define the categories they offer.
    * Do this by pasting the CSV in `src > input` folder. Name the file `products.csv`. The csv should have these columns: 
    - `id`: string
    - `photoUrl`: string
    - `title`: string
    - `mrp`: number
    - `volume`: string
    - `category`: string
* At last they can add their contact number on which the order details will be pinged via whatsapp.
* Once they are done, we can deploy the site on any available free tool.
    * Run `npm run build`. Deploy the `dist` folder
* Share the site link to all the customers in their serviceable area.

# Future enhancements
Before developing further, I am currently testing it with nearby local vendors. If they find it usefu these points can be picked up to enhance the site.
* Integrate a CMS/Google sheet to get product details, vendor contact number and categories available.
* Add option to choose between different size 1L|500ml|200ml for a given product enhancing the user experience.
* Add a backend to save orders and show previous orders.
* User session management to ensure no one misuses it.