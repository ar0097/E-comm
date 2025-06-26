import Link from "next/link";
import React from "react";
import { FiMail } from "react-icons/fi";
import { GrFormPreviousLink } from "react-icons/gr";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { TbSend } from "react-icons/tb";

function Contact() {
  return (
    <div className="bg-gray-50 h-screen">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
              href="/"
            >
              <GrFormPreviousLink className="w-6 h-6" />
              <span>Back to Home</span>
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">Contact Us</h1>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-10 mx-36">
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600 text-lg">
              Have questions about our products or need assistance? We're here
              to help! Reach out to us and we'll respond as soon as possible.
            </p>
          </div>
          <div className="space-y-4">
            <div className="rounded-lg border bg-white text-card-foreground shadow-sm">
              <div className="p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <FiMail className="w-6 h-6 " color="#2563eb " />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">info@example.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-lg border bg-white text-card-foreground shadow-sm">
              <div className="p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <IoCallOutline color="#16a34a" className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">+ 01 234 567 88</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-lg border bg-white text-card-foreground shadow-sm">
              <div className="p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <IoLocationOutline className="w-6 h-6" color="#ea580c" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-600">
                      Flipkart Internet Private Limited
                      <br />
                      Buildings Alyssa, Begonia &amp; Clove
                      <br />
                      Embassy Tech Village
                      <br />
                      Outer Ring Road, Devarabeesanahalli Village
                      <br />
                      Bengaluru, 560103, Karnataka, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="rounded-lg border bg-white text-card-foreground shadow-sm">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-2xl font-semibold leading-none tracking-tight">
                Send us a Message
              </h3>
              <p className="text-sm text-muted-foreground">
                Fill out the form below and we'll get back to you within 24
                hours.
              </p>
            </div>
            <div className="p-6 pt-0">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="name"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                      id="name"
                      name="name"
                      placeholder="Enter your full name"
                      value=""
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="email"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                      value=""
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="subject"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    id="subject"
                    name="subject"
                    placeholder="What is this regarding?"
                    value=""
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>
                <button
                  className="inline-flex items-center justify-center bg-black/90 text-white gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
                  type="submit"
                >
                  <TbSend className="w-6 h-6" color="" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
