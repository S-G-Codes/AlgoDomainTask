
const router = require("express").Router();
const product = require("../Modles/ProductSchemas");
const { json, type } = require('express/lib/response');
const res = require('express/lib/response');

router.get("/", (req, res) => {
  res.send("Here we are keeping our products!");
});

//Adding a product  -BY Seller
router.post("/addaproduct:id", async (req, res) => {
  //demo
  // try {
  //     const addpro = await new product({
  //       name: "GamingLaptop",
  //       productType: "GamingPC",
  //       productCategory: "Electronics",
  //       productPrice : "500000",
  //       cpu: "Intel",
  //       ram : "16GB",
  //       processor: "i7",
  //       rating : 8,
  //       sellerId: 101,
  //       warranty: "2year"
  //     })

  //     await addpro.save();
  //     res.send("Product added successfully")
  //     console.log('Product added successfully');

  // } catch (error) {
  //    console.log(error);

  // }

  try {
    const seller = req.params.id.split(":")[1];
   //  console.log(seller);
  
    const result = new product(req.body);
    result.sellerId = seller;
    const finalResult = await result.save();
    res.status(200).json(finalResult);
    
  } catch (error) {
    res.status(400).json("Something went Wrong!");
  
    console.log(error);
  }
});

//Adding Multiple product by seller


router.post('/addmultipleproduct:id' , async(req,res) =>{
   try {
       const seller = req.params.id.split(':')[1];
       const productArray = req.body;

       for (let index = 0; index < productArray.length; index++) {
          element = new  product(productArray[index]);
          element.sellerId = seller;
         const addedProduct = await element.save();
         
       }

       res.status(200).json(productArray);
     
      //  console.log(productArray);
       
   } catch (error) {
        res.status(400).json("Something went Wrong!");
  
    console.log(error);
    
                 
   }
});


//getting the product by productname
router.get("/productByname:productName" , async(req,res)=>{
   try {
      let pname = req.params.productName.split(':')[1]
      // console.log(pname);
      const result = await product.find({name : pname});
      res.status(200).json(result);
    
      
      
   } catch (error) {
      res.status(400).json("Something went Wrong!");
    
      console.log(error);
   }
});

//getting product by their type

router.get("/productByType:productType" , async(req,res)=>{
   try {
      let pType = req.params.productType.split(':')[1]
      // console.log(pType);
      const result = await product.find({productType : pType});
      res.status(200).json(result);
     
      
      
   } catch (error) {
      res.status(400).json("Something went Wrong!");
    
      console.log(error);
   }
});

//getting product by their category

router.get("/productByCategory:productCategory" , async(req,res)=>{
   try {
      let pCategory = req.params.productCategory.split(':')[1]
      // console.log(pCategory);
      const result = await product.find({productCategory : pCategory});
      res.status(200).json(result);
     
      
      
   } catch (error) {
      res.status(400).json("Something went Wrong!");
    
      console.log(error);
   }
});


//getting products in price range

router.get('/productByRange:min:max' , async (req,res) =>{
   try {
      let price = req.params;
       
      const min_Max  = price.max;
      min_MaxArray = min_Max.split(":")
      const min = min_MaxArray[0];
      const max = min_MaxArray[1];
      // $gte and $lte stands for greater then or lesser. Monogdb methods   //It takes only numeric values
      const result = await product.find({price:{$gte:min, $lte:max}})
      res.status(200).json(result);
   } catch (error) {
      res.status(400).json("Something went Wrong!");
    
      console.log(error);
   }
});







// Displaying products from DB 

router.get('/displayProduct:sellerId' , async(req,res)=>{
   try {
       let sID = req.params.sellerId.split(':')[1];
       const result = await product.find({sellerId: sID});
       res.status(200).json(result);
      //  console.log(result);
       
   } catch (error) {
      res.status(400).json("Something went Wrong!");
    
      console.log(error);
   }
});


//updating products
//while updating mention our sellerId  in sellerId and _id in id
router.put("/updateProduct:sellerId:id" , async(req,res)=>{
   try {
      const ProductTobeUpdate = req.params;
      const  temp = ProductTobeUpdate.id;
      const  Parray = temp.split(":");
      const SellerID = Parray[0];
       const productId = Parray[1];
      //  console.log(productId);
      //  console.log(SellerID);
      // $set  to set something
       const result = await product.updateOne({_id:productId, sellerId: SellerID} , {$set:req.body});
       res.status(200).json(result);
       console.log(result);
       
        

   } catch (error) {
      res.status(400).json("Something went Wrong!");
    
      console.log(error);
   }
});


//deleting a product 
router.delete("/delete:sellerId:id" , async(req,res) =>{
   try {
        const ProductTobeDeleted = req.params;
        const temp = ProductTobeDeleted.id;
        const dArray = temp.split(":")
         const SID = dArray[0];
         const ProductId = dArray[1];
    
         const result = await product.deleteOne({_id: ProductId, sellerId: SID});
         res.send(200).json(result);
         

   } catch (error) {
      res.status(400).json("Something went Wrong!");
    
      console.log(error);
   }
})




module.exports = router;
