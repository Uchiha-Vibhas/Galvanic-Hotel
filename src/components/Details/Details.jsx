// Details.jsx

import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "./Table"; // Import Table component

const Details = () => {
  const [customers, setCustomers] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [payments, setPayments] = useState([]);
  const [option, setOption] = useState(""); // State to track the selected option

  useEffect(() => {
    fetchCustomers();
    fetchRooms();
    fetchPayments();
  }, []);

  const fetchCustomers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/Galvanic/customers"
      );
      setCustomers(response.data);
    } catch (error) {
      console.error("Error fetching customers:", error);
    }
  };

  const fetchRooms = async () => {
    try {
      const response = await axios.get("http://localhost:8080/Galvanic/rooms");
      setRooms(response.data);
    } catch (error) {
      console.error("Error fetching rooms:", error);
    }
  };

  const fetchPayments = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/Galvanic/payments"
      );
      setPayments(response.data);
    } catch (error) {
      console.error("Error fetching payments:", error);
    }
  };

  const handleOptionChange = (selectedOption) => {
    setOption(selectedOption);
  };

  return (
    <div>
      <main className="bg-gray-900 w-full pt-10 pb-10">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border sm:max-w-4xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Manage Entries
              </h1>
              <div className="flex space-x-4 overflow-x-auto">
                <button
                  type="button"
                  className={`flex-1 text-white ${
                    option === "customers"
                      ? "bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
                      : "bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300"
                  } font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800 shadow-md`}
                  onClick={() => handleOptionChange("customers")}
                >
                  Customers
                </button>
                <button
                  type="button"
                  className={`flex-1 text-white ${
                    option === "rooms"
                      ? "bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
                      : "bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300"
                  } font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800 shadow-md`}
                  onClick={() => handleOptionChange("rooms")}
                >
                  Rooms
                </button>
                <button
                  type="button"
                  className={`flex-1 text-white ${
                    option === "payments"
                      ? "bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
                      : "bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300"
                  } font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800 shadow-md`}
                  onClick={() => handleOptionChange("payments")}
                >
                  Payments
                </button>
              </div>
              <div className="overflow-x-auto mt-4">
                {option === "customers" && (
                  <Table
                    data={customers}
                    headers={[
                      "Customer ID",
                      "Customer Name",
                      "Customer Number",
                      "Entry Date",
                      "Exit Date",
                      "Room Number",
                      "Customer Cost",
                    ]}
                  />
                )}
                {option === "rooms" && (
                  <Table
                    data={rooms}
                    headers={["Room Number", "Room Type", "Room Cost"]}
                  />
                )}
                {option === "payments" && (
                  <Table
                    data={payments}
                    headers={["Customer ID", "Payment Amount", "Payment Date"]}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Details;
