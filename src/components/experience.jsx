import React from "react";

const Experience = () => {
  const experiences = [
    {
      role: "Junior Software Engineer",
      company: "Nuclear Power and Energy Agency",
      duration: "January 2026 – Present",
      tasks: [
        "Assist in troubleshooting issues and ensure internet connectivity.",
        "Perform basic testing and debugging, and help fix reported issues.",
        "Contribute to technical documentation and participate in team meetings.",
      ],
    },
    {
      role: "Junior Software Engineer, Graphic Designer, and Social Media Manager",
      company: "Koinonia Church and Clergy Sacco",
      duration: "October 2025 – December 2025",
      tasks: [
        "Managed and maintained the Koinonia Sacco WordPress website, including design updates and content posting.",
        "Created graphic designs and branding materials.",
        "Handled social media management and content creation.",
      ],
    },
    {
      role: "IT Expert & Data Entry (Part-time)",
      company: "Kirinyaga University Library Sector",
      duration: "Sep 2024 – Apr 2025",
      tasks: [
        "Helped in cataloguing library books and managing records.",
        "Performed accurate data entry and digital record updates.",
      ],
    },
    {
      role: "Junior Software Engineer-Attachee",
      company: "Kenya National Library Services",
      duration: "May 2023 – Aug 2023",
      tasks: [
        "Built simple web applications using Django for managing and displaying information.",
        "Created dashboards using HTML and CSS to present scraped data in a user-friendly format.",
        "Assisted in maintaining version control and documentation using Git.",
      ],
    },
    
    {
      role: "IT Entry Expert Officer",
      company: "Sales Enterprise",
      duration: "May 2024 – Sep 2024",
      tasks: [
        "Handled IT data entry operations for sales records.",
        "Ensured accuracy and consistency of customer information.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-12 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {exp.role}
              </h3>
              <p className="text-gray-600 italic">
                {exp.company} — {exp.duration}
              </p>
              <ul className="list-disc list-inside mt-3 text-gray-700 space-y-1">
                {exp.tasks.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
