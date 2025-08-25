
import React from "react";

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-10 bg-gray-50">
      {/* Motivational / Inspirational Section */}
      <div className="max-w-2xl text-center mb-10">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
          🚀 Join Our Team, Shape the Future!
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Great things are never done alone—they’re achieved together.  
          Bring your passion, ideas, and energy, and let’s create something 
          extraordinary. The journey of a thousand miles begins with a single step—  
          take that step with us today! 🌟
        </p>
      </div>

      {/* Google Form Iframe */}
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-2xl overflow-hidden p-6">
        <iframe
          src="https://forms.gle/cTA9MXUKUtt9mrn67"
          width="100%"
          height="600"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          className="rounded-lg"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
}
