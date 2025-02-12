import React, { useState } from "react";

const CreateEvent = () => {
  const [eventData, setEventData] = useState({
    name: "",
    date: "",
    description: "",
    location: "",
    category: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setEventData({ ...eventData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); // Reset message before submitting

    try {
      const response = await fetch("http://localhost:5000/api/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(eventData),
      });

      if (!response.ok) throw new Error("Failed to create event");

      const data = await response.json();
      setMessage("Event created successfully!");
      setEventData({ name: "", date: "", description: "", location: "", category: "" });
    } catch (error) {
      setMessage("Error creating event. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Create a New Event</h2>
        {message && <p className="mb-4 text-center text-green-400">{message}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={eventData.name}
            onChange={handleChange}
            placeholder="Event Name"
            className="w-full p-2 bg-gray-700 rounded text-white"
            required
          />
          <input
            type="date"
            name="date"
            value={eventData.date}
            onChange={handleChange}
            className="w-full p-2 bg-gray-700 rounded text-white"
            required
          />
          <input
            type="text"
            name="location"
            value={eventData.location}
            onChange={handleChange}
            placeholder="Event Location"
            className="w-full p-2 bg-gray-700 rounded text-white"
            required
          />
          <input
            type="text"
            name="category"
            value={eventData.category}
            onChange={handleChange}
            placeholder="Event Category"
            className="w-full p-2 bg-gray-700 rounded text-white"
            required
          />
          <textarea
            name="description"
            value={eventData.description}
            onChange={handleChange}
            placeholder="Event Description"
            className="w-full p-2 bg-gray-700 rounded text-white"
            required
          ></textarea>
          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded">
            Create Event
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;
