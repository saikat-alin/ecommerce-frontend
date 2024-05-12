import React from "react";
import {
  FaShoppingCart,
  FaTruck,
  FaCreditCard,
  FaCheckCircle,
} from "react-icons/fa";

const ConfirmStepper = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center mt-8 lg:pl-40 lg:pr-40">
      <div className="flex flex-col items-center mb-4 lg:mb-0">
        <div className="text-green-500">
          <FaShoppingCart size={30} />
        </div>
        <div className="text-green-500">1. My Cart</div>
      </div>

      <div className="flex flex-col items-center mb-4 lg:mb-0">
        <div className="text-green-500">
          <FaTruck size={30} />
        </div>
        <div className="text-green-500">2. Shipping Info</div>
      </div>

      <div className="flex flex-col items-center mb-4 lg:mb-0">
        <div className="text-green-500">
          <FaCreditCard size={30} />
        </div>
        <div className="text-green-500">4. Payment</div>
      </div>

      <div className="flex flex-col items-center mb-4 lg:mb-0">
        <div className="text-orange-500">
          <FaCheckCircle size={30} />
        </div>
        <div className="text-orange-500">5. Confirmed</div>
      </div>
    </div>
  );
};

export default ConfirmStepper;
