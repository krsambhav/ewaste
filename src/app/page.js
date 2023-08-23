"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [listing, setListing] = useState([]);
  const [productName, setProductName] = useState("");
  const [seller, setSeller] = useState("");
  const [contact, setContact] = useState("");
  const [userType, setUserType] = useState("");
  const [buyerListing, setBuyerListing] = useState([
    {
      Product: "Circuit boards",
      Seller: "MV Enterprise",
      Contact: "+917822671187",
    },
    {
      Product: "Plastic Castings",
      Seller: "J.M Electronics",
      Contact: "+919022783311",
    },
    {
      Product: "Rechargeable Batteries",
      Seller: "Radiant Stationary",
      Contact: "+918867200921",
    },
  ]);
  const handleLogInBtn = () => {
    setLoggedIn(true);
  };
  const handleAddListing = () => {
    if (productName.trim() == "") return;
    const temp_list = {
      Product: productName,
      Seller: seller,
      Contact: contact,
    };
    setListing([...listing, temp_list]);
  };
  const handleListingDelete = (index) => {
    if (index == 0 && listing.length == 1) setListing([]);
    else {
      let temp_list = [];
      for (let i = 0; i < index; i++) {
        temp_list.push(listing[i]);
      }
      for (let i = index + 1; i < listing.length; i++) {
        temp_list.push(listing[i]);
      }
      setListing(temp_list);
    }
  };
  return (
    <main className="w-screen min-h-screen flex flex-col items-center mt-10">
      {loggedIn == false && (
        <div className="login-box w-[400px] h-[400px]">
          <div className="title text-3xl mb-[100px]">
            E Waste Management System
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2">
              <input
                type="email"
                name="email"
                id="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="pass"
              className="block text-sm font-medium leading-6 text-gray-900 mt-5"
            >
              Password
            </label>
            <div className="mt-2">
              <input
                type="password"
                name="pass"
                id="pass"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="**********"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium leading-6 text-gray-900 mt-5"
            >
              Category
            </label>
            <select
              onChange={(e) => {
                setUserType(e.target.value)
              }}
              value={userType}
              id="category"
              name="category"
              className="mt-2 block w-full rounded-md border-0 px-3 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
              defaultValue="Seller"
            >
              <option>Seller</option>
              <option>Buyer</option>
            </select>
          </div>
          <button
            type="button"
            onClick={handleLogInBtn}
            className="rounded bg-indigo-600 px-2 py-1 mt-10 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Login
          </button>
        </div>
      )}
      {loggedIn == true && (
        <>
          <div className="title text-3xl">Seller Listing</div>
          <div className="listing-container mt-10">
            {userType === "Buyer" &&
              buyerListing.map((list, index) => (
                <div
                  key={index}
                  className="flex w-full items-center justify-between space-x-6 p-6 shadow-lg"
                >
                  <div className="flex-1 truncate">
                    <div className="flex items-center space-x-3">
                      <h3 className="truncate text-sm font-medium text-gray-900">
                        Product: {list["Product"]}
                      </h3>
                    </div>
                    <p className="mt-1 truncate text-sm text-gray-500">
                      Seller: {list["Seller"]}
                    </p>
                    <p className="truncate text-sm text-gray-500 mt-2">
                      Contact: {list["Contact"]}
                    </p>
                  </div>
                </div>
              ))}
            {userType === "Seller" &&
              listing.map((list, index) => (
                <div
                  key={index}
                  className="flex w-full items-center justify-between space-x-6 p-6 shadow-lg"
                >
                  <div className="flex-1 truncate">
                    <div className="flex items-center space-x-3">
                      <h3 className="truncate text-sm font-medium text-gray-900">
                        Product: {list["Product"]}
                      </h3>
                    </div>
                    <p className="mt-1 truncate text-sm text-gray-500">
                      Seller: {list["Seller"]}
                    </p>
                    <p className="truncate text-sm text-gray-500 mt-2">
                      Contact: {list["Contact"]}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleListingDelete(index)}
                    className="mt-20 rounded bg-red-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                  >
                    Delete Listing
                  </button>
                </div>
              ))}
          </div>
          <p className="mt-10">Price and quantity should be directly negotiated between the seller and the buyer.</p>
          <div className="add-listing-box mt-20">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Mobiles/Laptops/etc"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="mt-5 block text-sm font-medium leading-6 text-gray-900"
              >
                Seller
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="1/2/3 kgs"
                  value={seller}
                  onChange={(e) => setSeller(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="mt-5 block text-sm font-medium leading-6 text-gray-900"
              >
                Location
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Contact"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                />
              </div>
            </div>
            <button
              type="button"
              onClick={handleAddListing}
              className="mt-5 rounded bg-indigo-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add Listing
            </button>
          </div>
        </>
      )}
    </main>
  );
}
