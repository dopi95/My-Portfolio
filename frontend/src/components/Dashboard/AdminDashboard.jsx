import React, { useState } from 'react';

const sections = ['Projects', 'Skills', 'Testimonials'];

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('Projects');
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">Admin Dashboard</h1>

      <div className="flex justify-center gap-4 mb-6">
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => {
              setActiveSection(section);
              setShowForm(false);
            }}
            className={`px-4 py-2 rounded ${
              activeSection === section ? 'bg-blue-600 text-white' : 'bg-white border'
            }`}
          >
            {section}
          </button>
        ))}
      </div>

      <div className="bg-white p-6 rounded shadow-md">
        <h2 className="text-xl font-semibold mb-4">{activeSection} Management</h2>

        <div className="flex gap-3 mb-4">
          <button onClick={() => setShowForm(!showForm)} className="bg-green-500 text-white px-4 py-2 rounded">
            {showForm ? 'Close Form' : 'Add ' + activeSection.slice(0, -1)}
          </button>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded">Edit</button>
          <button className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
        </div>

        {showForm && (
          <div className="border-t pt-4">
            <h3 className="text-lg font-medium mb-2">Add {activeSection.slice(0, -1)}</h3>
            <form className="grid gap-4">
              <input type="text" placeholder="Title / Skill / Name" className="p-2 border rounded" />
              <textarea placeholder="Description or Details" className="p-2 border rounded" />
              <input type="url" placeholder="Image URL or Project Link" className="p-2 border rounded" />
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
