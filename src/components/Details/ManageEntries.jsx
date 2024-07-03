import React, { useState } from "react";
import axios from "axios";

const ManageEntries = () => {
  const [option, setOption] = useState(""); // State to track the selected option
  const [formData, setFormData] = useState({
    customerId: "",
    customerName: "",
    customerContact: "",
    roomNum: "",
    roomType: "",
    entryDate: "",
    exitDate: "",
    paymentAmount: "",
    paymentDate: "",
  });

  const handleOptionChange = (selectedOption) => {
    setOption(selectedOption);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDeleteEntry = async () => {
    try {
      const { customerId } = formData;

      if (!customerId) {
        alert("Please enter a customer ID to delete.");
        return;
      }

      const deleteResponse = await axios.post(
        `http://localhost:8080/Galvanic/customers/delete/${customerId}`
      );
      console.log("Delete response:", deleteResponse.data); // Log response for verification
    } catch (error) {
      console.error("Error deleting entry:", error);
    }
  };

  const handleInsertEntry = async () => {
    try {
      const customerData = {
        customer_name: formData.customerName,
        customerContact: formData.customerContact,
        roomNum: formData.roomNum,
        roomType: formData.roomType,
        checkinDate: formData.entryDate,
        checkoutDate: formData.exitDate,
        payment: formData.paymentAmount,
      };

      const customerResponse = await axios.post(
        "http://localhost:8080/Galvanic/customers/add",
        customerData
      );

      console.log("Insert response:", customerResponse.data); // Log response for verification

      setFormData({
        // customerId: "",
        customerName: "",
        customerContact: "",
        roomNum: "",
        roomType: "",
        entryDate: "",
        exitDate: "",
        paymentAmount: "",
        //paymentDate: "",
      });

      // Optionally, you can trigger a refresh of the data in Details.jsx
      // Fetch data again from Details component if needed
    } catch (error) {
      console.error("Error inserting entry:", error);
    }
  };

  const handleResetEntry = () => {
    setFormData({
      customerId: "",
      customerName: "",
      customerContact: "",
      roomNum: "",
      roomType: "",
      entryDate: "",
      exitDate: "",
      paymentAmount: "",
      paymentDate: "",
    });
  };

  return (
    <div className="w-full bg-white rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Operations
        </h1>
        <div className="flex space-x-4">
          <button
            type="button"
            className={`w-full text-white ${
              option === "insert"
                ? "bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300"
                : "bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300"
            } font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-800 shadow-md`}
            onClick={() => handleOptionChange("insert")}
          >
            Insert
          </button>
          <button
            type="button"
            className={`w-full text-white ${
              option === "delete"
                ? "bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300"
                : "bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300"
            } font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-800 shadow-md`}
            onClick={() => handleOptionChange("delete")}
          >
            Delete
          </button>
        </div>
        {option === "insert" && (
          <form className="space-y-4 md:space-y-6">
            {/* <div>
              <label
                htmlFor="customerId"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Customer ID
              </label>
              <input
                type="text"
                name="customerId"
                id="customerId"
                placeholder="Enter customer ID"
                value={formData.customerId}
                onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div> */}
            <div>
              <label
                htmlFor="customerName"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Customer Name
              </label>
              <input
                type="text"
                name="customerName"
                id="customerName"
                placeholder="Enter customer name"
                value={formData.customerName}
                onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="customerContact"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Customer Contact
              </label>
              <input
                type="text"
                name="customerContact"
                id="customerContact"
                placeholder="Enter customer contact"
                value={formData.customerContact}
                onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="roomNum"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Room Number
              </label>
              <input
                type="text"
                name="roomNum"
                id="roomNum"
                placeholder="Enter room number"
                value={formData.roomNum}
                onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="roomType"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Room Type
              </label>
              <input
                type="text"
                name="roomType"
                id="roomType"
                placeholder="Enter room type"
                value={formData.roomType}
                onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="entryDate"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Entry Date
              </label>
              <input
                type="date"
                name="entryDate"
                id="entryDate"
                value={formData.entryDate}
                onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="exitDate"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Exit Date
              </label>
              <input
                type="date"
                name="exitDate"
                id="exitDate"
                value={formData.exitDate}
                onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="paymentAmount"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Payment Amount
              </label>
              <input
                type="text"
                name="paymentAmount"
                id="paymentAmount"
                placeholder="Enter payment amount"
                value={formData.paymentAmount}
                onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            {/* <div>
              <label
                htmlFor="paymentDate"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Payment Date
              </label>
              <input
                type="date"
                name="paymentDate"
                id="paymentDate"
                value={formData.paymentDate}
                onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div> */}
            <div className="flex space-x-4 mt-4">
              <button
                type="button"
                onClick={handleInsertEntry}
                className="w-full text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-800 shadow-md"
              >
                Insert Entry
              </button>
              <button
                type="button"
                onClick={handleResetEntry}
                className="w-full text-white bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-500 dark:hover:bg-gray-600 dark:focus:ring-gray-800 shadow-md"
              >
                Reset Entry
              </button>
            </div>
          </form>
        )}
        {option === "delete" && (
          <form className="space-y-4 md:space-y-6">
            <div>
              <label
                htmlFor="customerId"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Customer ID
              </label>
              <input
                type="text"
                name="customerId"
                id="customerId"
                placeholder="Enter customer ID"
                value={formData.customerId}
                onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="flex space-x-4 mt-4">
              <button
                type="button"
                onClick={handleDeleteEntry}
                className="w-full text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-800 shadow-md"
              >
                Delete Entry
              </button>
              <button
                type="button"
                onClick={handleResetEntry}
                className="w-full text-white bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-500 dark:hover:bg-gray-600 dark:focus:ring-gray-800 shadow-md"
              >
                Reset Entry
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ManageEntries;
