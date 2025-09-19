import React from 'react';

const ContactUs = () => {
  return (
    <div className="container mx-auto p-8 md:p-12 lg:p-16 text-center bg-transparent">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Contact Us
      </h1>
      <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
        For any inquiries or collaboration, feel free to reach out to us through the following channels.
      </p>

      <div className="flex flex-col items-center space-y-4">
        <a href="mailto:info@example.com" className="text-blue-600 hover:underline">
          <span className="font-semibold">Email:</span> info@example.com
        </a>
        <a href="tel:+1234567890" className="text-blue-600 hover:underline">
          <span className="font-semibold">Phone:</span> (123) 456-7890
        </a>
        <p className="text-gray-700">
          <span className="font-semibold">Address:</span> Main Street, N100
        </p>
      </div>
    </div>
  );
};

export default ContactUs;