# Apple Store

This repository contains the source code for an Apple Store app build with React.

## Features

- Home: Browse a catalog of furniture products.
- Product Pages:
    - Iphone, Macbook, Mac, Mac Studio ( contains all the products from the respective category )
- Cart Page: Cart page containing all selected products from the user ( only for logged in users )
- Details Page:
    - Product details: info about the selected product ( visible for guest and users ) and Buy button ( visible for users only )
    - Review section: each product details page contains Review section. All comments are visible for guests and users, but only users can Create Reviews. 
      (Reviews can be DELETED or EDITED only by the creator of the review.)
## Run the project:
    -Open client folder in new terminal and type:
        npm install
        npm run dev
    -Open server folder in new terminal and type:
        node server
## Project Structure: 
    
- Project Defense - React
    - client
       - src
           - assets (contains all images/ logos)
           - components
               - cart
                   - Cart.css
                   - Cart.jsx
                   - CheckoutModal.css
                   - CheckoutModal.jsx
               - footer
                   - Footer.jsx
                   - Footer.module.css
               - home
                   - Home.jsx
                   - Home.module.css
               - item
                   - Item.jsx
                   - Item.css
               - navbar
                   - Navbar.jsx
                   - Navbar.module.css
               - popular
                   - Popular.css
                   - Popular.jsx
               - productCategory
                   - ProductCategory.jsx
                   - ProductCategory.css
               - productDetails
                   - ProductDetails.css
                   - ProductDetails.jsx
               - registerLogin
                   - Login.css
                   - Login.jsx
                   - Register.css
                   - Register.jsx
               - reviews
                   - AddReview.jsx
                   - Reviews.css
                   - Reviews.jsx
            - contexts
               - AuthContext.jsx
               - ProductsContext.jsx
            - services
               - userServices.js
       - README.md
       - index.html
       - package-lock.json
       - package.json
       - vite.config.js
    - server
    - README.md
