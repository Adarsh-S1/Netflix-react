import React, { useState, useEffect} from "react";
import Razorpay from "razorpay";
import './Payment.css'
var instance = new Razorpay({
  key_id: "rzp_test_9hzO0oa82AS3RH",
  key_secret: "hDEv9VpwmmLtUXJfdPKSYBZo",
});
function Payment() {
 
  return (
    <div>
      <button
        onClick={(e) => {
         e.preventDefault();
        }}
      >
        hy
      </button>
    </div>
  );
}

export default Payment;
