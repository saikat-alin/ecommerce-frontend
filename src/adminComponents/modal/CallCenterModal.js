import React from "react";
import { useState } from "react";
import { MdCancel, MdArrowDropDown } from "react-icons/md";

const CallCenterModal = ({ handleCloseModal, rowData }) => {
  const [selectedStatus, setSelectedStatus] = useState(rowData.status);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleToggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleStatusChange = (newStatus) => {
    setSelectedStatus(newStatus);
    setIsDropdownOpen(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-modalBg">
      <div className="modal-container bg-gray-200 p-6 rounded-xl max-w-lg w-full">
        <div className="modal-content">
          <div className="modal-header flex justify-between mb-2">
            <h4 className="text-primeColor font-bold text-lg">
              Product Details
            </h4>
            <span
              className="modal-close cursor-pointer"
              onClick={handleCloseModal}
            >
              <MdCancel color="red" size={20} />
            </span>
          </div>

          <div class="mb-2 h-px bg-gray-300 dark:bg-white/100" />

          <div className="modal-body text-teal-500 font-bold">
          <div className="mb-1 text-teal-500">
              <span>Contact Number : </span>
              <span>{rowData.contact_num}</span>
            </div>
            <div className="mb-1">
              <span>Order ID : </span>
              <span>{rowData.name}</span>
            </div>
            <div className="mb-1">
              <span>Order Date : </span>
              <span>{rowData.date}</span>
            </div>
            <div className="mb-1">
              <span>Product : </span>
              <span>{rowData.product}</span>
            </div>
            <div className="mb-1">
              <span>Quantity : </span>
              <span>{rowData.quantity}</span>
            </div>
            <div className="mb-1">
              <span>Total Amount : </span>
              <span>{rowData.amount}৳</span>
            </div>
            <div className="mb-1">
              <span>Delivery address : </span>
              <span>{rowData.delivery_add}</span>
            </div>
            <div className="mb-1">
              <span className="mr-2">Status : </span>
              <div className="relative inline-block text-left">
                <div>
                  <button
                    type="button"
                    onClick={handleToggleDropdown}
                    className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    id="options-menu"
                    aria-haspopup="true"
                    aria-expanded={isDropdownOpen}
                  >
                    {selectedStatus}
                    <MdArrowDropDown size={20} />
                  </button>
                </div>

                {/* Dropdown menu */}
                {isDropdownOpen && (
                  <div
                    className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <div className="py-1" role="none">
                      <a
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                        onClick={() => handleStatusChange("Confirm")}
                      >
                        Confirm
                      </a>
                      <a
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                        onClick={() => handleStatusChange("Not Comfirm")}
                      >
                        Not Comfirm
                      </a>
                      <a
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                        onClick={() => handleStatusChange("Not Contact")}
                      >
                        Not Contact
                      </a>
                      <a
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                        onClick={() => handleStatusChange("Not Response")}
                      >
                        Not Response
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-4">
            <button
              className="p-2 bg-red-500 text-white duration-300 rounded-lg mr-2"
              onClick={handleCloseModal}
            >
              Cancel
            </button>
            <button
              className="p-2 bg-green-500 text-white duration-300 rounded-lg"
              onClick={handleCloseModal}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallCenterModal;
