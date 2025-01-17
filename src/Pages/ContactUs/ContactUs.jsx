"use client";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaPhoneAlt,
  FaMobile,
} from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
// import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const ContactUs = () => {
  const form = useRef();
  const { user } = useAuth();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_627rdn8",
        "template_ygwtf75",
        form.current,
        "MAnAmkEBH4a46_FDY"
      )
      .then(
        (result) => {
          console.log(result.text);
          //   toast.success("Email Sent Successfully");
          Swal.fire({
            icon: "success",
            title: "Wow...",
            text: "Email Sent Successfully....!!",
          });
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            icon: "error",
            title: "Wow...",
            text: "Some thing wrong....!!",
          });
          //   toast.error("Error, Please try again later");
        }
      );
  };
  return (
    <div>
      <div className="lg:px-16 md:px-8 py-28 bg-black sm:px-2 px-4">
        <div className="lg:flex gap-10">
          <div className="lg:w-2/3">
            <form ref={form} onSubmit={sendEmail}>
              <div className="space-y-5">
                <div className="form-control">
                  <input
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                    className="input input-bordered text-white bg-[#0D0D21]"
                    required
                  />
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    name="last_name"
                    placeholder="Last Name"
                    className="input input-bordered text-white bg-[#0D0D21]"
                    required
                  />
                </div>
                <div className="form-control">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    className="input input-bordered text-white bg-[#0D0D21]"
                    defaultValue={user?.email}
                  />
                </div>
                <div className="form-control">
                  <textarea
                    name="message"
                    placeholder="Message"
                    className="input input-bordered text-white bg-[#0D0D21] h-24"
                    required
                  ></textarea>
                </div>
                <div className="form-control">
                  <input
                    type="submit"
                    value={"Submit Message"}
                    className="text-white font-bold py-2 px-4 rounded border border-purple-700  hover:bg-purple-700"
                    required
                  ></input>
                </div>
              </div>
            </form>
          </div>
          <div className="lg:w-1/3 bg-[#0D0D21] p-5 rounded-md">
            <h2 className="text-2xl font-bold text-purple-800">
              Contact Us :{" "}
            </h2>
            <p className="text-sm text-justify text-gray-300 py-5">
              Dhaka, Savar, Savar Khagan Bazar, Daffodil International
              University
            </p>

            <p className="flex items-center mt-8 text-sm text-gray-300 hover:text-blue-700 hover:underline">
              <span className="font-bold mr-2 text-2xl text-blue-700">
                <MdMarkEmailRead></MdMarkEmailRead>{" "}
              </span>{" "}
              oneyeareducation@gmail.com
            </p>
            <p className="flex items-center py-3 text-sm text-gray-300 hover:text-blue-700 hover:underline">
              <span className="font-bold mr-2 text-2xl text-green-600">
                <FaPhoneAlt></FaPhoneAlt>{" "}
              </span>{" "}
              +880193841356
            </p>
            <p className="flex items-center text-sm text-gray-300 hover:text-blue-700 hover:underline">
              <span className="font-bold mr-2 text-2xl text-purple-800">
                <FaMobile></FaMobile>{" "}
              </span>{" "}
              +8801824139665
            </p>

            <div className="flex space-x-7 pt-10">
              <a
                href="#"
                className=" text-3xl text-blue-500 hover:text-blue-700 transform hover:scale-125 transition-transform duration-300"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="text-3xl text-blue-500 hover:text-blue-700 transform hover:scale-125 transition-transform duration-300"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="text-3xl text-pink-500 hover:text-pink-700 transform hover:scale-125 transition-transform duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-3xl text-gray-500 hover:text-gray-700 transform hover:scale-125 transition-transform duration-300"
              >
                <FaGithub />
              </a>
              <a
                href="#"
                className="text-3xl text-blue-400 hover:text-blue-600 transform hover:scale-125 transition-transform duration-300"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
