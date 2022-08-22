import React from "react";
import { FaGoogle, FaPhone } from "react-icons/fa";
const Contact = () => {
  return (
    <div>
      <input type="checkbox" id="my-modal-3" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative">
          <label
            for="my-modal-3"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="text-lg font-bold">
            You can reach out to me via email or phone !!
          </h3>
          <p class="mt-2">
            <FaGoogle className="inline mr-2 hover:text-purple-400" />{" "}
            nitesh26589@gmail.com
          </p>
          <p class="py-2">
            <FaPhone className="inline mr-2 hover:text-purple-400" /> +91
            9814426589
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
