import React from "react";
import PrimaryBtn from "../ui/reusable/PrimaryBtn";
import UniversalBtn from "../ui/reusable/UniversalBtn";
import "./Card.css";

const Checkout = ({ orderItem }) => {
  return (
    <>
      <div className="flex p-3 justify-between w-150 justify-self-center">
        <div className="text-yellow-400 flex items-center gap-2">
          <span className="h-10 aspect-square flex justify-center items-center text-center bg-yellow-500 rounded-full text-black">
            1
          </span>
          Shipping
        </div>
        <div className="text-white flex items-center gap-2">
          <span className="h-10 aspect-square flex justify-center items-center text-center  bg-neutral-900 rounded-full text-black">
            2
          </span>
          Payment
        </div>
        <div className="text-white flex items-center gap-2">
          <span className="h-10 aspect-square flex justify-center items-center text-center bg-neutral-900 rounded-full text-black">
            3
          </span>
          review & Confirm
        </div>
      </div>
      <main className="flex gap-10 p-4">
        <div className="w-full">
          <div className=" p-4 border border-yellow-500 bg-neutral-900/70 w-full m-4 rounded-md text-neutral-500">
            <b className="text-neutral-300">Shipping Address</b>
            <ul className="mt-5">
              <b className="text-neutral-300">Musab Abdulwahab</b>
              <li className="mt-2">0703-352-7870</li>
              <li>
                <address>
                  12, Luxury Street, Ikorodu Lagos, Nigeria, Africa
                </address>
              </li>
            </ul>
            <div className="flex justify-self-end">
              <PrimaryBtn FunctionDesc={"Change"} />
            </div>
          </div>
          <div>
            <div className=" p-4 border border-yellow-500 bg-neutral-900/70 w-full m-4 rounded-md text-neutral-500">
              <b className="text-neutral-300">Shipping Address</b>
              <hr className="mt-4 text-yellow-600" />
              <ul className="mt-5 flex flex-col gap-2 accent-yellow-600">
                <li className="flex justify-between mt-2">
                  <span className="flex gap-2 items-center">
                    <input
                      type="radio"
                      className="w-3 bg-transparent text-transparent"
                      name="shoppinMethod"
                      id=""
                    />
                    <p className="text-sm font-semibold">
                      Express Delivery(1-2 Bussiness Days)
                    </p>
                  </span>
                  <b>₦ 15,000</b>
                </li>
                <hr className="mt-1 text-neutral-700" />
                <li className="flex justify-between">
                  <span className="flex gap-2 items-center">
                    <input
                      type="radio"
                      className="w-3 bg-transparent text-transparent"
                      name="shoppinMethod"
                      id=""
                    />
                    <p className="text-sm font-semibold">
                      Express Delivery(1-2 Bussiness Days)
                    </p>
                  </span>
                  <b>₦ 10,000</b>
                </li>
                <hr className="mt-1 text-neutral-700" />
                <li className="flex justify-between">
                  <span className="flex gap-2 items-center">
                    <input
                      type="radio"
                      className="w-3 bg-transparent text-transparent"
                      name="shoppinMethod"
                      id=""
                    />
                    <p className="text-sm font-semibold">
                      Express Delivery(1-2 Bussiness Days)
                    </p>
                  </span>
                  <b>₦ 5,000</b>
                </li>
                <hr className="mt-1 text-neutral-700" />
              </ul>
            </div>
          </div>
        </div>

        <div className=" h-100 overflow-hidden p-2 w-full">
          <div className=" text-white h-full scrollbar- CustomScrollBar bg-neutral-900/70 border-yellow-500 border rounded-2xl p-3 ">
            <b className="p-2">Order Items</b>
            {orderItem.map((item) => (
              <OrderItem
                title={item.title}
                source={item.img}
                price={item.price}
                description={item.description}
              />
            )) || <div>No Products bought</div>}
          </div>
        </div>
        <div className=" text-white bg-neutral-900/70 border-yellow-500 border rounded-2xl p-5 w-300">
          <b className="">Order Summary</b>
          <div className="my-6 text-neutral-400">
            <ul className="flex flex-col gap-4">
              <li className="flex justify-between">
                Subtotal (4 items) <span>₦5,560,000</span>
              </li>
              <li className="flex justify-between">
                Shopping Fee <span>₦1,500</span>
              </li>
              <li className="flex justify-between">
                Insurance <span>₦15,000</span>
              </li>
              <li className="flex justify-between">
                Promo Code <span>--</span>
              </li>
            </ul>
            <hr className=" my-5 text-yellow-500" />
            <div className="text-center flex flex-col gap-3">
              <div className="flex justify-between">
                <span className="text-sm">
                  <b className="text-2xl text-white">Total</b>(VAT)
                </span>
                <b className="text-xl font-light text-yellow-500">₦6,896,000</b>
              </div>
              <UniversalBtn
                actionDesc={"Continue To Payment"}
                additionalStyle={"text-white text-2xl h-10 font-bold"}
              />

              <p>100% Secure Checkout</p>
            </div>
            <div className="flex w-full">
              <img className="w-20" src="/public/images/Alux.png" alt="" />
              <img className="w-20" src="/public/images/Alux.png" alt="" />
              <img className="w-20" src="/public/images/Alux.png" alt="" />
              <img className="w-20" src="/public/images/Alux.png" alt="" />
              <img className="w-20" src="/public/images/Alux.png" alt="" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Checkout;

export function OrderItem({ title, source, description, price }) {
  return (
    <div className="flex items-center relative w-[95%] justify-self-center bg-neutral-800/55 border-yellow-600 p-2 mt-2 rounded-lg">
      <img
        src={source}
        className="w-15 h-25 object-contain rounded-2xl mr-5"
        alt=""
      />
      <div className="w-[60%]">
        <b className="text-md">{title}</b>
        <p className="text-neutral-500 text-[14px]">{description}</p>
      </div>
      <b className="absolute right-3">₦{price}</b>
    </div>
  );
}
