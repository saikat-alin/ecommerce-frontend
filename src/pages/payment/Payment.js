import React from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import PaymentStepper from "./PaymentStepper";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";

const Payment = () => {
  const products = useSelector((state) => state.orebiReducer.products);
  const [totalAmt, setTotalAmt] = useState("");
  const [shippingCharge, setShippingCharge] = useState("");
  useEffect(() => {
    let price = 0;
    products.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmt(price);
  }, [products]);
  useEffect(() => {
    if (totalAmt <= 200) {
      setShippingCharge(30);
    } else if (totalAmt <= 400) {
      setShippingCharge(25);
    } else if (totalAmt > 401) {
      setShippingCharge(20);
    }
  }, [totalAmt]);

  return (
    <div className="max-w-container mx-auto px-4">
      <PaymentStepper />
      <Breadcrumbs title="Payment gateway" />

      <div className="flex gap-4">
        <div className="w-3/5 p-8 bg-gray-100 flex flex-col lg:flex-row justify-center lg:justify-between items-center">
          <div className="d-block p-3 aiz-megabox-elem">
            <img
              src="	https://ecommerce-clothes.we4sell.com/public/assets/img/cards/sslcommerz.png              "
              className="img-fluid mb-2 h-32 w-42"
              alt="sslCommerz"
            />
            <div className="d-block flex justify-center">
            <input
                type="radio"
              />
              <div className="font-bold text-md ml-2">sslCommerz</div>
            </div>
          </div>
          <div className="d-block p-3 aiz-megabox-elem">
            <img
              src="https://ecommerce-clothes.we4sell.com/public/assets/img/cards/stripe.png"
              className="img-fluid mb-2 h-32 w-42"
              alt="Stripe"
            />
            <div className="d-block flex justify-center">
              <input
                type="radio"
              />
              <div className="font-bold text-md ml-2">Stripe</div>
            </div>
          </div>
          <div className="d-block p-3 aiz-megabox-elem">
            <img
              src="https://ecommerce-clothes.we4sell.com/public/assets/img/cards/cod.png"
              className="img-fluid mb-2 h-32 w-42"
              alt="Cash on Delivery"
            />
            <div className="d-block flex justify-center">
              <input
                type="radio"
              />
              <div className="font-bold text-md ml-2">Cash on Delivery</div>
            </div>
          </div>
        </div>

        <div className="w-2/5 p-8 bg-gray-100">
          <div className="max-w-7xl gap-4 flex justify-center">
            <div className="w-96 flex flex-col gap-4">
              <h1 className="text-2xl font-semibold text-center">Summary</h1>
              <div>
                {products.map((item) => (
                  <p
                    key={item._id}
                    className="flex items-center justify-between border-[1px] border-gray-400 border-b-0 py-1.5 text-lg px-4 font-medium"
                  >
                    {item.name} × {item.quantity}
                    <span className="font-semibold tracking-wide font-titleFont">
                      {item.price}৳
                    </span>
                  </p>
                ))}

                <p className="flex items-center justify-between border-[1px] border-gray-400 border-b-0 py-1.5 text-lg px-4 font-medium">
                  Subtotal
                  <span className="font-semibold tracking-wide font-titleFont">
                    {totalAmt}৳
                  </span>
                </p>
                <p className="flex items-center justify-between border-[1px] border-gray-400 border-b-0 py-1.5 text-lg px-4 font-medium">
                  Shipping Charge
                  <span className="font-semibold tracking-wide font-titleFont">
                    {shippingCharge}৳
                  </span>
                </p>
                <p className="flex items-center justify-between border-[1px] border-gray-400 border-b-0 py-1.5 text-lg px-4 font-medium">
                  Total
                  <span className="font-bold tracking-wide text-lg font-titleFont">
                    {totalAmt + shippingCharge}৳
                  </span>
                </p>
                <p className="flex items-center justify-between border-[1px] border-gray-400 py-1.5 text-lg px-4 font-medium">
                  <input
                    className="w-44 mdl:w-52 h-8 px-4 border text-primeColor text-sm outline-none border-gray-400 rounded-lg"
                    type="text"
                    placeholder="Coupon Number"
                  />
                  <button className="w-20 h-8 bg-cyan-500 text-white hover:bg-black duration-300 rounded-lg">
                    Apply
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center m-8">
        <Link to="/confirm-order">
          <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300 rounded-lg">
            Complete Order
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Payment;
