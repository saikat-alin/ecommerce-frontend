import React from "react";
import ShippingStepper from "./ShippingStepper";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const ShippingInfo = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state?.data);
  }, [location]);

  const [isChecked, setIsChecked] = useState(true);

  return (
    <div className="max-w-container mx-auto px-4">
      <ShippingStepper />
      <Breadcrumbs title="Shipping Info" prevLocation={prevLocation} />

      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="col-span-1 border border-blue-300 p-4 rounded-lg">
          <div className="text-gray-800">
            <input
              type="radio"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <p>
              Address: A1- Cherry Blossom Houise-84; Road- 14, Block-B Banani,
              Dhaka- 1213, Bangladesh
            </p>
            <p>Postal Code: 1213</p>
            <p>City: Dhaka</p>
            <p>Country: Bangladesh</p>
            <p>Phone: 778965498</p>
          </div>
        </div>
        <div className="col-span-1 flex items-center justify-center border p-4 rounded-lg">
          <button className="w-52 h-10 bg-indigo-500 text-white hover:bg-black duration-300 rounded-lg">
            + Add new address
          </button>
        </div>
      </div>

      <div className="flex justify-center mb-8">
        <Link to="/payment">
          <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300 rounded-lg">
            Proceed to Payment
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ShippingInfo;
