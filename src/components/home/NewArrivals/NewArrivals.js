import React from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  productOne,
  productTwo,
  productThree,
  productFour,
  productFive,
  productSix,
} from "../../../assets/images/index";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

const NewArrivals = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="w-full pb-16">
      <Heading heading="New Arrivals" />
      <Slider {...settings}>
        <div className="px-2">
          <Product
            _id="100001"
            img={productOne}
            productName="5.5 KG"
            price="1000"
            color="Household"
            badge={true}
            des="Omera LPG offers you a 5.5 KG LPG cylinder for your family outdoor events. We maintain European standards in manufacturing and bottling,ensuring our promise to deliver high safety standards."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100002"
            img={productTwo}
            productName="12 KG"
            price="1500"
            color="Household"
            badge={true}
            des="Omera LPG offers 12 KG Cylinders to cater to small and large families.The efficient heating technology,  portability, and transportability coupled with our excellent customer service make it a convenient option for consumers."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100003"
            img={productThree}
            productName="25 kG"
            price="3000"
            color="Household"
            badge={true}
            des="Omera LPG offers 25 KG Cylinders to cater to small and large families.The efficient heating technology,  portability, and transportability coupled with our excellent customer service make it a convenient option for consumers."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100004"
            img={productFour}
            productName="35 KG"
            price="6000"
            color="Commercial & Industrial"
            badge={true}
            des="Omera LPG offers 35 KG cylinders to cater to high-volume commercial use, especially in hotels, restaurants, and cafes.The efficient heating technology, portability, and transportability coupled with our excellent customer service make it a convenient option for  consumers."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100005"
            img={productFive}
            productName="45 KG"
            price="8000"
            color="Commercial & Industrial"
            badge={true}
            des="Omera LPG offers 45 KG cylinders to cater to high-volume commercial use, especially in hotels, restaurants, and cafes.The efficient heating technology, portability, and transportability coupled with our excellent customer service make it a convenient option for consumers."
          />
        </div>
        <div className="px-2">
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
      </Slider>
    </div>
  );
};

export default NewArrivals;
