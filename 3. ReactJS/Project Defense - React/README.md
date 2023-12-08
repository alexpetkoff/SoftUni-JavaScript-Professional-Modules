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
