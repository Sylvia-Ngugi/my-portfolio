import React from 'react';

const Resume = () => {
  return (
    <section className="py-12 px-4 bg-white text-center" id="resume">
      <h2 className="text-3xl font-bold mb-6">Resume</h2>
      <p className="text-gray-700 mb-4">Download my resume below:</p>
     <a 
  href="/resume.pdf" 
  download 
  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
>
  Download Resume
</a>

    </section>
  );
};

export default Resume;
