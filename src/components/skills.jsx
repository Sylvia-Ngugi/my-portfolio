import React from "react";

const techSkills = [
  "HTML", "CSS", "JavaScript", "React", "Firebase",
  "Tailwind CSS", "Git/GitHub", "Node.js", "REST APIs",
  "Prompt Engineering", "AI Integration", "MQL5"
];

const freelanceSkills = [
  "Academic Writing", "SEO Content Writing", "Transcription",
  "Graphic Design (Canva)", "PowerPoint Design",
  "Virtual Assistance", "Data Entry", "Research", "Editing & Proofreading"
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-600 mb-12">
          My Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Tech Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-500 mb-4">Technical Skills</h3>
            <ul className="grid grid-cols-2 gap-3 text-gray-700">
              {techSkills.map((skill, index) => (
                <li key={index} className="bg-blue-100 text-sm py-2 px-3 rounded-xl shadow-sm">
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Freelance Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-500 mb-4">Freelance & Creative Skills</h3>
            <ul className="grid grid-cols-2 gap-3 text-gray-700">
              {freelanceSkills.map((skill, index) => (
                <li key={index} className="bg-blue-100 text-sm py-2 px-3 rounded-xl shadow-sm">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
