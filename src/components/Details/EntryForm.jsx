import React from "react";

const EntryForm = ({
  formData,
  handleInputChange,
  handleSubmit,
  handleReset,
  buttonText,
}) => {
  return (
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
          Contact Number
        </label>
        <input
          type="text"
          name="customerContact"
          id="customerContact"
          placeholder="Enter customer contact number"
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
          Check-in Date
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
          Check-out Date
        </label>
        <input
          type="date"
          name="exitDate"
          id="exitDate"
          value={formData.exitDate}
          onChange={handleInputChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
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
      <div className="flex space-x-4 mt-4">
        <button
          type="button"
          onClick={handleSubmit}
          className="w-full text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-cyan-500 dark:hover:bg-cyan-600 dark:focus:ring-cyan-800 shadow-md"
        >
          {buttonText}
        </button>
        <button
          type="button"
          onClick={handleReset}
          className="w-full text-white bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-500 dark:hover:bg-gray-600 dark:focus:ring-gray-800 shadow-md"
        >
          Reset
        </button>
      </div>
    </form>
  );
};

export default EntryForm;
