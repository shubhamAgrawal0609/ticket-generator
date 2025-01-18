import { useState } from "react";

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    github: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-semibold mb-4">Your Journey to Coding Conf 2025 Starts Here!</h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">Full Name</label>
        <input
          name="name"
          type="text"
          onChange={handleChange}
          className="w-full p-2 border rounded mb-4"
          placeholder="Enter your name"
          required
        />

        <label className="block mb-2">Email Address</label>
        <input
          name="email"
          type="email"
          onChange={handleChange}
          className="w-full p-2 border rounded mb-4"
          placeholder="example@email.com"
          required
        />

        <label className="block mb-2">GitHub Username</label>
        <input
          name="github"
          type="text"
          onChange={handleChange}
          className="w-full p-2 border rounded mb-4"
          placeholder="@yourusername"
          required
        />

        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded mt-4 w-full hover:bg-blue-800"
        >
          Generate My Ticket
        </button>
      </form>
    </div>
  );
};

export default Form;
