import React from "react";

const services = [
  {
    title: "Academic Writing",
    description:
      "Essays, research papers, reports, and referencing styles (APA, MLA, OSCOLA, etc.) with guaranteed originality and clarity.",
      samples: [
      {
        title: "SOFTWARE BUSINESS REPORT",
        fileUrl: "/SOFTWARE BUSINESS REPORT.pdf", 
      },
      {
        title: "Research proposal",
        fileUrl: "/samples/Research proposal Gilbert_Z3FWiO2.docx",
      },
       {
        title: "Budget Management in Food Service Operations",
        fileUrl: "/samples/Budget Management in Food Service Operations.docx",
      },
       {
        title: "NewShoes is a Strategic Marketing Plan",
        fileUrl: "/samples/NewShoes is a Strategic Marketing Plan.docx",
      },
       {
        title: "Psychological Perspectives on Violent Behavior",
        fileUrl: "/samples/Psychological Perspectives on Violent Behavior.docx",
      },
       {
        title: "Sociological Analysis",
        fileUrl: "/samples/Sociological Analysis...docx",
      },
      {
        title: "The Enduring Legacy of Roman Engineering",
        fileUrl: "/samples/The Enduring Legacy of Roman Engineering.docx",
      },
    ],
  },
  {
    title: "Content Writing & SEO",
    description:
      "Well-researched blog posts, website content, and SEO-optimized writing tailored to your audience and brand voice.",
  },
  {
    title: "Graphic Design",
    description:
      "Custom social media posts, infographics, branding kits, and marketing visuals using Canva and Adobe tools.",
  },
  {
    title: "Transcription",
    description:
      "Accurate audio/video transcription with fast turnaround times and proper formatting for interviews, podcasts, and lectures.",
      samples: [
    {
      title: "23281_AF_US_US12_NEPH_Nov21_1pmET -",
      fileUrl: "/samples/23281_AF_US_US12_NEPH_Nov21_1pmET -.docx", 
    },
    {
      title: "23281_AF_US_US12_NEPH_Nov21_1pmET - (2)",
      fileUrl: "/samples/23281_AF_US_US12_NEPH_Nov21_1pmET - (2).docx", 
    },
    {
      title: "E600_DE04_MedOnc_21.11.2023_1000-",
      fileUrl: "/samples/E600_DE04_MedOnc_21.11.2023_1000-.docx",
    },
    {
      title: "E600_DE04_MedOnc_21.11.2023_1000-1",
      fileUrl: "/samples/E600_DE04_MedOnc_21.11.2023_1000-1.docx",
    },
  ]
  },
  {
    title: "PowerPoint Presentations",
    description:
      "Clean, modern presentations for academic, business, or creative purposes, including custom design and animations.",
      samples: [
    {
      title: "Telehealth Presentation",
      fileUrl: "/samples/Telehealth Presentation.pptx", 
    },
  ]
  },
  {
    title: "Virtual Assistance",
    description:
      "Reliable support for inbox management, data entry, customer communication, and task organization.",
  },
  {
    title: "AI Training / Prompt Engineering",
    description:
      "Crafting prompts, training data, and testing flows for large language models and generative AI systems.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-600 mb-12">
          My Services
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-500">
                {service.title}
              </h3>
              <p className="text-gray-700 text-sm">{service.description}</p>
              {service.samples && (
  <div className="mt-4">
    <h4 className="text-sm font-semibold text-gray-600 mb-2">📄 Sample Works:</h4>
    <ul className="space-y-1">
      {service.samples.map((sample, i) => (
        <li key={i}>
          <a
            href={sample.fileUrl}
            download
            className="text-blue-600 hover:underline text-sm"
          >
            {sample.title}
          </a>
        </li>
      ))}
    </ul>
  </div>
)}

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
