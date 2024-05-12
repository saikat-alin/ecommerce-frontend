import React from "react";
import { useState } from "react";
import { MdCancel, MdArrowDropDown } from "react-icons/md";

const AvailableStockModal = ({ handleCloseModal, rowData }) => {
  const [selectedStatus, setSelectedStatus] = useState(rowData.wh_status);
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
              Available Stock
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
            <div className="flex">
              <label
                htmlFor="quantity"
                className="block text-teal-600 text-sm font-bold mb-2"
              >
                Add Quantity:
              </label>
              <input
                type="number"
                id="quantity"
                className="w-1/3 py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                placeholder="Enter quantity"
              />
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

export default AvailableStockModal;
