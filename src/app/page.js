"use client";
import Image from "next/image";
import { useState } from "react";
import img1 from "../assets/pic1.png";
import img2 from "../assets/pic2.png";
import img3 from "../assets/clg.png";

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [listing, setListing] = useState([]);
  const [productName, setProductName] = useState("");
  const [seller, setSeller] = useState("");
  const [contact, setContact] = useState("");
  const [userType, setUserType] = useState("Seller");
  const [home, setHome] = useState(true);
  const [lastPage, setLastPage] = useState(false);
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
  const handleGoToLogin = () => {
    setHome(false);
  };
  const handleLastPage = () => {
    setLastPage(true);
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
      {home == true && (
        <div className="w-[90vw]">
          <div className="title text-3xl mb-[100px]">
            Electronic Waste Management
          </div>
          <p className="text-2xl">
            E-waste is any electrical or electronic equipment that’s been
            discarded. This includes working and broken items that are thrown in
            the garbage or donated to a charity reseller like Goodwill. Often,
            if the item goes unsold in the store, it will be thrown away.
            E-waste is particularly dangerous due to toxic chemicals that
            naturally leach from the metals inside when buried. The definition
            of e-waste is likely to keep expanding. In an era of rapid
            technological advancement, more and more highly sophisticated
            electronic goods are being invented and manufactured. Just think of
            the concept of the “smart home.” It’s easy to recognize how many
            electronic devices can now do everything from offer security to
            turning lights on and off, to having fresh coffee ready before we
            wake up. Unfortunately, a skyrocketing amount of e-waste is being
            written off by owners as junk. There’s no more significant example
            of that than computers, laptops, and smartphones. New models arrive
            even as the current one appears to be working just fine. Despite
            that, the latest version always provides additional features that
            make it seem too enticing to resist.
          </p>
          <div className="flex flex-row">
            <Image className="mt-5" src={img1} alt="PIC1" />
            <Image className="mt-5" src={img2} alt="PIC1" />
          </div>
          <p className="ml-10">Trend in Growth of E-Waste in India</p>
          <p className="text-2xl mt-20">
            Please proceed to our marketplace in the nextpage where people can
            trade their E-Waste materials
          </p>
          <button
            type="button"
            onClick={handleGoToLogin}
            className="rounded bg-indigo-600 px-2 py-1 mt-10 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Go To Login
          </button>
        </div>
      )}
      {loggedIn == false && home == false && lastPage == false && (
        <div className="login-box  h-[400px]">
          <div className="title text-3xl mb-[100px]">
            Electronic Waste Management
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
                setUserType(e.target.value);
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
      {loggedIn == true && lastPage == false && (
        <>
          <div className="title text-3xl">{userType === 'Buyer' ? 'Buyer Listing' : 'Seller Listing'}</div>
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
              lastPage === false &&
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
          <p className="mt-10 text-2xl font-bold">
            Price and quantity should be directly negotiated between the seller
            and the buyer.
          </p>
          {userType === "Seller" && lastPage === false && (
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
                    placeholder="Seller Name"
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
                  Contact
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
          )}
          <button
            type="button"
            onClick={handleLastPage}
            className="rounded bg-indigo-600 px-2 py-1 mt-10 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            End
          </button>
        </>
      )}
      {lastPage == true && (
        <>
          <Image className="mt-5" src={img3} alt="PIC1" />
          <p className="w-[75vw] mt-10">
            We are pleased to have successfully completed the Mini project
            “E-WASTE MANAGEMENT”. We thoroughly enjoyed the process of working
            on this project and gained a lot of knowledge doing so. We would
            like to take this opportunity to express our gratitude to Dr. B G
            Prasad, Principal of DSCE, for permitting us to utilize all the
            necessary facilities of the institution.
            <br />
            <br />
            We also thank our respected, Head of Computer Science & Engineering
            (Cyber Security), DSCE, Bangalore, Dr. Mohammed Tajuddin, for his
            support and encouragement throughout the process.
            <br />
            <br />
            We are immensely grateful to our respected and learned guide, Asst
            Prof. Padmavathi, Designation, Dept. of Computer Science &
            Engineering (Cyber Security), DSCE for his/her valuable help and
            guidance. We are indebted to them for their invaluable guidance
            throughout the process and their useful inputs at all stages of the
            process.
          </p>
          <br />
          <br />
          <br />
          <div className="w-[80vw] flex flex-row justify-end">
            <div className="">
            <p>Submitted By:</p>
            <p>BAIDURYA PHUKAN - ( 1DS22CY011 )</p>
            <p>MEGHANA DESHMUKH - ( 1DS22CY025 )</p>
            <p>MOUNIKA T - ( 1DS22CY029 )</p>
            <p>PARVATI WALADUNKI - ( 1DS22CY032 )</p>
            </div>
          </div>
        </>
      )}
    </main>
  );
}
