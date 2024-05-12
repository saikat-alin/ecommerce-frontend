import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  productOne,
  productTwo,
  productThree,
  productFour,
} from "../../../assets/images/index";

const SpecialOffers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Special Offers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1101"
          img={productOne}
          productName="5.5 KG"
          price="1000"
          color="Household"
          badge={true}
          des="Omera LPG offers you a 5.5 KG LPG cylinder for your family outdoor events. We maintain European standards in manufacturing and bottling,ensuring our promise to deliver high safety standards."
        />
        <Product
          _id="1102"
          img={productTwo}
          productName="12 KG"
          price="1500"
          color="Household"
          badge={true}
          des="Omera LPG offers 12 KG Cylinders to cater to small and large families.The efficient heating technology,  portability, and transportability coupled with our excellent customer service make it a convenient option for consumers."
        />
        <Product
          _id="1103"
          img={productThree}
          productName="25 kG"
          price="3000"
          color="Household"
          badge={true}
          des="Omera LPG offers 25 KG Cylinders to cater to small and large families.The efficient heating technology,  portability, and transportability coupled with our excellent customer service make it a convenient option for consumers."
        />
        <Product
          _id="1104"
          img={productFour}
          productName="35 KG"
          price="6000"
          color="Commercial & Industrial"
          badge={true}
          des="Omera LPG offers 35 KG cylinders to cater to high-volume commercial use, especially in hotels, restaurants, and cafes.The efficient heating technology, portability, and transportability coupled with our excellent customer service make it a convenient option for  consumers."
        />
      </div>
    </div>
  );
};

export default SpecialOffers;
