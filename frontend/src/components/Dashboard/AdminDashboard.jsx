import React, { useState } from 'react';
import pp from './img/pp.jfif'
import {
  FaProjectDiagram,
  FaUserShield,
  FaSignOutAlt,
  FaGlobe,
  FaLock,
  FaTools,
  FaBars,
  FaTimes,
  FaHome,
} from 'react-icons/fa';

const AdminDashboard = () => {
  const [view, setView] = useState('Home');
  const [activeForm, setActiveForm] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const renderForm = () => {
    const handleCancel = () => setActiveForm('');

    switch (activeForm) {
      case 'Project':
        return (
          <div>
            <h2 className="text-xl font-semibold mb-4">Add Project</h2>
            <form className="grid gap-4 border-t pt-4">
              <input type="text" placeholder="Project Title" className="p-2 border rounded" />
              <textarea placeholder="Short Description" className="p-2 border rounded" />
              <textarea placeholder="Detailed Description" className="p-2 border rounded" />
              <input type="text" placeholder="Tech Stack (comma-separated)" className="p-2 border rounded" />
              <input type="url" placeholder="Image URL" className="p-2 border rounded" />
              <input type="url" placeholder="Live Demo URL" className="p-2 border rounded" />
              <input type="url" placeholder="GitHub Code URL" className="p-2 border rounded" />
              <div className="flex gap-4">
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Project</button>
                   <button
                 type="button"
                 onClick={handleCancel}
                 className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition-colors duration-200"
                      >
                              Cancel
                           </button>
              </div>
            </form>
          </div>
        );
      case 'Skill':
        return (
          <div>
            <h2 className="text-xl font-semibold mb-4">Add Skill</h2>
            <form className="grid gap-4 border-t pt-4">
              <input type="text" placeholder="Skill Name" className="p-2 border rounded" />
              <input type="number" placeholder="Proficiency (%)" className="p-2 border rounded" />
              <div className="flex gap-4">
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Skill</button>
<button
  type="button"
  onClick={handleCancel}
  className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition-colors duration-200"
>
  Cancel
</button>
              </div>
            </form>
          </div>
        );
      case 'Testimonial':
        return (
          <div>
            <h2 className="text-xl font-semibold mb-4">Add Testimonial</h2>
            <form className="grid gap-4 border-t pt-4">
              <input type="text" placeholder="Name" className="p-2 border rounded" />
              <input type="text" placeholder="Position" className="p-2 border rounded" />
              <input type="url" placeholder="Image URL" className="p-2 border rounded" />
              <textarea placeholder="Feedback" className="p-2 border rounded" />
              <input type="number" placeholder="Rating (1-5)" className="p-2 border rounded" />
              <div className="flex gap-4">
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Testimonial</button>
<button
  type="button"
  onClick={handleCancel}
  className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition-colors duration-200"
>
  Cancel
</button>
              </div>
            </form>
          </div>
        );
      default:
        return null;
    }
  };

  const renderManageView = () => {
    const handleCancelPassword = () => setView('Home');

    const renderAddNewLink = (label, formName) => (
      <button
  onClick={() => setActiveForm(formName)}
  className="text-sm bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition-colors duration-200"
>
  Add New {label}
</button>

    );

    switch (view) {
      case 'Projects':
      case 'Skills':
      case 'Testimonials':
      case 'ChangePassword':
        return {
          Projects: (
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Manage Projects</h2>
                {renderAddNewLink('Project', 'Project')}
              </div>
              <div className="mt-4">
                <p>Total Projects: 3</p>
                <div className="space-y-2 mt-2">
                  <div className="p-4 border rounded flex justify-between items-center">
                    <span>Ghion Homes Real Estate</span>
                    <div className="space-x-2">
                      <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition-colors duration-200">
  Edit
</button>
<button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition-colors duration-200">
  Delete
</button>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          ),
          Skills: (
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Manage Skills</h2>
                {renderAddNewLink('Skill', 'Skill')}
              </div>
              <div className="mt-4">
                <p>Total Skills: 9</p>
                <ul className="space-y-2 mt-2">
                  <li className="p-4 border rounded flex justify-between items-center">
                    <span>HTML - 90%</span>
                    <div className="space-x-2">
                      <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition-colors duration-200">
  Edit
</button>
<button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition-colors duration-200">
  Delete
</button>

                    </div>
                  </li>
                </ul>
              </div>
            </div>
          ),
          Testimonials: (
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Manage Testimonials</h2>
                {renderAddNewLink('Testimonial', 'Testimonial')}
              </div>
              <div className="mt-4">
                <p>Total Testimonials: 3</p>
                <div className="space-y-2 mt-2">
                  <div className="p-4 border rounded flex justify-between items-center">
                    <span>Liya Mekonnen - 5★</span>
                    <div className="space-x-2">
                      <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition-colors duration-200">
  Edit
</button>
<button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition-colors duration-200">
  Delete
</button>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          ),
          ChangePassword: (
            <div>
              <h2 className="text-xl font-semibold mb-4">Change Password</h2>
              <form className="grid gap-4 border-t pt-4">
                <input type="password" placeholder="Current Password" className="p-2 border rounded" />
                <input type="password" placeholder="New Password" className="p-2 border rounded" />
                <input type="password" placeholder="Confirm New Password" className="p-2 border rounded" />
                <div className="flex gap-4">
                  <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Change Password</button>
<button
  type="button"
  onClick={handleCancelPassword}
  className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded transition-colors duration-200"
>
  Cancel
</button>
                </div>
              </form>
            </div>
          ),
        }[view];

      default:
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-6">Quick Links</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <button onClick={() => setActiveForm('Project')} className="bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded text-lg">Add New Project</button>
              <button onClick={() => setActiveForm('Skill')} className="bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded text-lg">Add New Skill</button>
              <button onClick={() => setActiveForm('Testimonial')} className="bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded text-lg">Add New Testimonial</button>
            </div>

            <div className="mt-10 bg-white border rounded-xl shadow p-6">
              <h3 className="text-xl font-semibold mb-6 text-gray-800">Summary</h3>
              <div className="space-y-4 text-lg text-gray-700">
                <div className="flex items-center gap-3"><FaProjectDiagram className="text-green-600 text-2xl" /><span>Total Projects: 3</span></div>
                <div className="flex items-center gap-3"><FaTools className="text-green-600 text-2xl" /><span>Total Skills: 9</span></div>
                <div className="flex items-center gap-3"><FaUserShield className="text-green-600 text-2xl" /><span>Total Testimonials: 3</span></div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
      {/* Mobile Header */}
      <div className="md:hidden bg-white p-4 flex justify-between items-center shadow fixed w-full top-0 z-20">
        <div className="flex items-center gap-3">
          <img src={pp} alt="Profile" className="rounded-full w-10 h-10" />
          <p className="font-semibold text-blue-600">Elyas Yenealem</p>
        </div>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-xl">
          {isSidebarOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`bg-white shadow-md p-4 w-full md:w-64 md:block ${
          isSidebarOpen ? 'block' : 'hidden'
        } md:relative fixed md:top-0 top-16 z-10`}
      >
        <div className="hidden md:flex flex-col items-center mb-6">
          <img src={pp} alt="Profile" className="rounded-full w-20 h-20 mb-2" />
          <p className="font-semibold">Elyas Yenealem</p>
        </div>
        <nav className="space-y-2">
          <button onClick={() => { setView('Home'); setActiveForm(''); setIsSidebarOpen(false); }}
            className={`flex items-center gap-2 px-4 py-2 w-full hover:bg-blue-600 rounded ${view === 'Home' ? 'bg-blue-500 font-semibold' : ''}`}>
            <FaHome /> Dashboard
          </button>
          <button onClick={() => { setView('Projects'); setActiveForm(''); setIsSidebarOpen(false); }}
            className={`flex items-center gap-2 px-4 py-2 w-full hover:bg-blue-600 rounded ${view === 'Projects' ? 'bg-blue-500 font-semibold' : ''}`}>
            <FaProjectDiagram /> Projects
          </button>
          <button onClick={() => { setView('Skills'); setActiveForm(''); setIsSidebarOpen(false); }}
            className={`flex items-center gap-2 px-4 py-2 w-full hover:bg-blue-600 rounded ${view === 'Skills' ? 'bg-blue-500 font-semibold' : ''}`}>
            <FaTools /> Skills
          </button>
          <button onClick={() => { setView('Testimonials'); setActiveForm(''); setIsSidebarOpen(false); }}
            className={`flex items-center gap-2 px-4 py-2 w-full hover:bg-blue-600 rounded ${view === 'Testimonials' ? 'bg-blue-500 font-semibold' : ''}`}>
            <FaUserShield /> Testimonials
          </button>
          <button onClick={() => { setView('ChangePassword'); setActiveForm(''); setIsSidebarOpen(false); }}
            className={`flex items-center gap-2 px-4 py-2 w-full hover:bg-blue-600 rounded ${view === 'ChangePassword' ? 'bg-blue-500 font-semibold' : ''}`}>
            <FaLock /> Change Password
          </button>
          <a href="/" className="flex items-center gap-2 px-4 py-2 w-full hover:text-blue-500 rounded"><FaGlobe /> Back to Website</a>
<button className="flex items-center gap-2 px-4 py-2 w-full text-red-600 rounded hover:bg-red-300 hover:text-white bg-red-100 transition-colors duration-200">
  <FaSignOutAlt /> Logout
</button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 mt-20 md:mt-0 md:ml-64">{activeForm ? renderForm() : renderManageView()}</main>
    </div>
  );
};

export default AdminDashboard;
