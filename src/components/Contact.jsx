import React from "react";
import { FaGoogle, FaPhone } from "react-icons/fa";
const Contact = () => {
  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label className="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
          </label>
          <h3 className="text-lg font-bold">
            You can reach out to me via email or phone !!
          </h3>
          <p className="mt-2">
            <FaGoogle className="inline mr-2 hover:text-purple-400" />{" "}
            nitesh26589@gmail.com
          </p>
          <p className="py-2">
            <FaPhone className="inline mr-2 hover:text-purple-400" /> +91
            9814426589
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
