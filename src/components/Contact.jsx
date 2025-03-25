import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const createMailtoLink = () => {
    const { name, email, message } = formData;
    return `mailto:subhashmail1107@gmail.com?subject=Message from ${name}&body=Name: ${name}%0AEmail: ${email}%0A%0A${message}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = createMailtoLink();
    window.location.href = mailtoLink;
  };

  return (
    <div className="bg-[#222831] text-white rounded-xl p-6 w-full mx-auto my-10 shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="p-3 rounded-lg bg-[#31363F] text-white outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="p-3 rounded-lg bg-[#31363F] text-white outline-none"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="5"
          className="p-3 rounded-lg bg-[#31363F] text-white outline-none resize-none"
        />
        <button
          type="submit"
          className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-lg"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
