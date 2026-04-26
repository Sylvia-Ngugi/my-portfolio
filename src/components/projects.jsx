import React from 'react';

const Projects = () => {
  return (
    <section className="py-12 px-4 bg-gray-100 text-center" id="projects">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold">Restaurant Booking Website</h3>
          <p className="text-gray-600 mt-2">An app that uses Firebase and EmailJS to manage bookings.</p>
          <a
      href="https://github.com/Sylvia-Ngugi/DINEWITHSLYWEBSITE"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:underline"
    >
      🛠️ GitHub Code
      </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
