import { RiCloseLine, RiDeleteBin6Line } from "react-icons/ri";
import { useState } from "react";
const OrderCart = ({ toogleOrder, showOrder }) => {
  // const [showOrder, setShowOrder] = useState(false);

  return (
    <div
      className={`lg:col-span-2 fixed top-0 bg-[#1F1D2B] w-full lg:w-96 lg:right-0  h-full transition-all ${
        showOrder ? "right-0" : "-right-full"
      }`}
    >
      {/* Cart Order */}
      <div className="relative pt-16 lg:pt-8 text-gray-300 p-8 h-full">
        <RiCloseLine
          onClick={toogleOrder}
          className="lg:hidden absolute left-4 top-4 p-2 box-content text-gray-300 bg-[#262837] rounded-full text-xl"
        />
        <h1 className="text-2xl my-4">Orders #15654</h1>
        {/* tags */}
        <div className="flex items-center gap-4 flex-wrap mb-6">
          <button className="bg-[#EC7C6A] text-white py-2 px-4 rounded-xl">
            Dine In
          </button>
          <button className="text-[#EC7C6A] py-2 px-4 rounded-xl border border-gray-500">
            To Go
          </button>
          <button className="text-[#EC7C6A] py-2 px-4 rounded-xl border border-gray-500">
            Delivery
          </button>
        </div>
        {/* Car */}
        <div>
          <div className="grid grid-cols-6 mb-4 p-4">
            <h5 className="col-span-4">Item</h5>
            <h5>Qty</h5>
            <h5>Price</h5>
          </div>
          {/* Products All */}
          <div className="h-[500px] md:h-[700px] lg:h-[400px] overflow-scroll">
            {/* Product */}
            <div className="bg-[#262837] p-4 rounded-xl mb-4">
              <div className="grid grid-cols-6 mb-6">
                {/* Product Details */}
                <div className="col-span-4 flex items-center gap-3">
                  <img
                    src="../../../img/dish1.png"
                    className="w-10 h-10 object-cover"
                  />
                  <div>
                    <h5 className="text-sm">Speacy seasoned...</h5>
                    <p className="text-xs text-gray-500">$2.29</p>
                  </div>
                </div>
                {/* Qty */}
                <div>
                  <span>2</span>
                </div>
                {/* Price */}
                <div>
                  <span>$4.58</span>
                </div>
              </div>
              {/* Notes */}
              <div className="grid grid-cols-6 items-center">
                <form className="col-span-5">
                  <input
                    type="text"
                    className="bg-[#1F1D2B] py-2 px-4 rounded-lg"
                    placeholder="Order note..."
                  />
                </form>
                <div>
                  <button className="border border-red-500 p-2 rounded-lg">
                    <RiDeleteBin6Line className="text-red-500" />
                  </button>
                </div>
              </div>
            </div>
            {/* Product 2 */}
            <div className="bg-[#262837] p-4 rounded-xl mb-4">
              <div className="grid grid-cols-6 mb-6">
                {/* Product Details */}
                <div className="col-span-4 flex items-center gap-3">
                  <img
                    src="../../../img/dish1.png"
                    className="w-10 h-10 object-cover"
                  />
                  <div>
                    <h5 className="text-sm">Speacy seasoned...</h5>
                    <p className="text-xs text-gray-500">$2.29</p>
                  </div>
                </div>
                {/* Qty */}
                <div>
                  <span>2</span>
                </div>
                {/* Price */}
                <div>
                  <span>$4.58</span>
                </div>
              </div>
              {/* Notes */}
              <div className="grid grid-cols-6 items-center">
                <form className="col-span-5">
                  <input
                    type="text"
                    className="bg-[#1F1D2B] py-2 px-4 rounded-lg"
                    placeholder="Order note..."
                  />
                </form>
                <div>
                  <button className="border border-red-500 p-2 rounded-lg">
                    <RiDeleteBin6Line className="text-red-500" />
                  </button>
                </div>
              </div>
            </div>
            {/* Product 3 */}
            <div className="bg-[#262837] p-4 rounded-xl mb-4">
              <div className="grid grid-cols-6 mb-6">
                {/* Product Details */}
                <div className="col-span-4 flex items-center gap-3">
                  <img
                    src="../../../img/dish1.png"
                    className="w-10 h-10 object-cover"
                  />
                  <div>
                    <h5 className="text-sm">Speacy seasoned...</h5>
                    <p className="text-xs text-gray-500">$2.29</p>
                  </div>
                </div>
                {/* Qty */}
                <div>
                  <span>2</span>
                </div>
                {/* Price */}
                <div>
                  <span>$4.58</span>
                </div>
              </div>
              {/* Notes */}
              <div className="grid grid-cols-6 items-center">
                <form className="col-span-5">
                  <input
                    type="text"
                    className="bg-[#1F1D2B] py-2 px-4 rounded-lg"
                    placeholder="Order note..."
                  />
                </form>
                <div>
                  <button className="border border-red-500 p-2 rounded-lg">
                    <RiDeleteBin6Line className="text-red-500" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Submit payments */}
          <div className="bg-[#262837] absolute bottom-0 left-0 p-4 w-full">
            <div className="flex ite justify-between mb-4">
              <span className="text-gray-400">Discount</span>
              <span>$0</span>
            </div>
            <div className="flex ite justify-between mb-6">
              <span className="text-gray-400">Subtotal</span>
              <span>$201.03</span>
            </div>
            <div>
              <button className="bg-[#EC7C6A] w-full py-2 px-4 rounded-lg">
                Continue to payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OrderCart;
