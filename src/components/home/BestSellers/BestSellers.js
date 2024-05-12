import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  productTwo,
  productThree,
  productFour,
  productSix,
} from "../../../assets/images/index";

const BestSellers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Our Bestsellers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="100002"
          img={productTwo}
          productName="12 KG"
          price="1500"
          color="Household"
          badge={true}
          des="Omera LPG offers 12 KG Cylinders to cater to small and large families.The efficient heating technology,  portability, and transportability coupled with our excellent customer service make it a convenient option for consumers."
        />
        <Product
          _id="100003"
          img={productThree}
          productName="25 kG"
          price="3000"
          color="Household"
          badge={true}
          des="Omera LPG offers 25 KG Cylinders to cater to small and large families.The efficient heating technology,  portability, and transportability coupled with our excellent customer service make it a convenient option for consumers."
        />
        <Product
          _id="100004"
          img={productFour}
          productName="35 KG"
          price="6000"
          color="Commercial & Industrial"
          badge={true}
          des="Omera LPG offers 35 KG cylinders to cater to high-volume commercial use, especially in hotels, restaurants, and cafes.The efficient heating technology, portability, and transportability coupled with our excellent customer service make it a convenient option for  consumers."
        />
        <Product
          _id="100006"
          img={productSix}
          productName="425 KG"
          price="15000"
          color="Industrial"
          badge={true}
          des="Omera LPG offers 425 KG cylinders to cater to high-volume industrial use.We can also accommodate a large capacity of LPG carriers according to your requirement. For more information, you can reach us anytime.We can also accommodate a large capacity of LPG carriers according to your requirement. For more information, you can reach us anytime."
        />
      </div>
    </div>
  );
};

export default BestSellers;
