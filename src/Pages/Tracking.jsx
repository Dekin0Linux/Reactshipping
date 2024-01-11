import React from "react";

function Tracking() {
  return (
    <div className="container md:mx-auto">
      <p>Parcel Tracking</p>
      <div className="md:flex gap-4 flex-wrap ">

        <div className="bg-blue-200 shadow-sm md:p-10 p-5 md:w-[60%]">
          <span>Estimated Delivery</span>
          <p className="text-xl font-semibold text-gray-700">Order Status</p>
          <div >
              
          </div>
        </div>

        {/* detail */}
        <div className="p-5 bg-red-500 md:w-[35%]">Detail</div>
      </div>
    </div>
  );
}

export default Tracking;
