# AlgoDomainTask
**Task1 - Backend**
To Run this project you will be needing the following tools
     -Ide (VS code recommended)
     -Node js installed on your machine.
     -PostMan or Thunder Client extension in vscode
     -Any Browser
     
To Run the Project first download all the files
     - start the node server by npm run start
     - Make sure you install this packages from npm (express,mongoose)
     
After installation of all dependencies run command nodemon app.js in command prompt. make sure to run your project at PORT 8000.

open Postman. create a new collection in Postman. now use following commond for maniputation with REST API.

**For Adding products**
Note- You can take id from product.json file
localhost:3030/api/products/addaproduct:id

**For adding multiple products**
Note- You can take id from product.json file
localhost:3030/api/products/addmultileproduct:id

**Finding product by name**

localhost:3030/api/products/productByname:Dell Latitude 5420

**Finding product by category**

localhost:3030/api/products/productByCategory:Electronics

**Finding product by type**
Note- You can take productType from product.json file
localhost:3030/api/products/productByType:productType

**Finding product with a price range**
Note- You can take lowest sng highest price from product.json file
localhost:3030/api/products/productByRange:min:max

**Finding product by seller with his particular id **
Note- You can take id from product.json file
localhost:3030/api/products/displayProduct:id

Updating a product by seller
Note- You can take id and sellerId from product.json file
localhost:3030/api/products/updateProduct:sellerId:id

deleting a product by seller
Note:You can take id and sellerId from product.json 
localhost:3030/api/products/delete:sellerId:id

I have uploaded database in .json with name product.json

Thanks.



**Task_2 Frontend**

Download All of the code in your machine.
Make sure file Structure is same as above.
Download this packages ScrollBar2 using npm i 
Run the project by **npm run start**


