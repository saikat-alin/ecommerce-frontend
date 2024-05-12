import React from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import ConfirmStepper from "./ConfirmStepper";
import { FcApproval } from "react-icons/fc";

const ConfirmOrder = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  const [orderCode, setOrderCode] = useState("");
  const [receiptNumber, setReceiptNumber] = useState("");

  useEffect(() => {
    setPrevLocation(location.state?.data);
    setOrderCode("ABCD123");
    setReceiptNumber("1234567890");
  }, [location]);

  return (
    <div className="max-w-container mx-auto px-4">
      <ConfirmStepper />
      <Breadcrumbs title="Confirm Order" prevLocation={prevLocation} />
      <div className="flex justify-center">
        <FcApproval size={50}/>
      </div>
      <div className="confirm-order-section mt-8 flex items-center justify-center mb-20">
        <div>
          <h2 className="text-xl font-bold mb-2 text-center">
            Thank you for your order!
          </h2>
          <p className="mb-2 text-center">Order Code: {orderCode}</p>
          <p className="text-center">Payment Receipt Number: {receiptNumber}</p>
        </div>
      </div>
    </div>
  );
};

export default ConfirmOrder;
