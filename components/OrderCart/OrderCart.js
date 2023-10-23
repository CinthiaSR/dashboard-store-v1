import { RiCloseLine } from "react-icons/ri";
const OrderCart = () => {
  return (
    <div className="lg:col-span-2 fixed lg:static right-0 top-0 bg-[#1F1D2B] w-full h-full">
      {/* Cart Order */}
      <div className="relative pt-16 text-gray-300 p-8">
        <RiCloseLine className="absolute left-4 top-4 p-2 box-content text-gray-300 bg-[#262837] rounded-full text-xl" />
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
        {/* Cart */}
        <div>
          <div className="grid grid-cols-6 mb-4 p-4">
            <h5 className="col-span-4">Item</h5>
            <h5>Qty</h5>
            <h5>Price</h5>
          </div>
          {/* Product */}
          <div className="bg-[#262837] p-4 rounded-xl">
            <div className="grid grid-cols-6 ">
              {/* Product Details */}
              <div className="col-span-4 flex items-center gap-2">
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
          </div>
        </div>
      </div>
    </div>
  );
};
export default OrderCart;
