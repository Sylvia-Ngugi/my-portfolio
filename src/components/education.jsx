import React from "react";


const Education = () => {
  const educationList = [
    
    {
      school: "St Andrew's Kabare Boarding Primary School",
      qualification: "Kenya Certificate of Primary Education (KCPE)",
      grade: "388 Marks",
      years: "2014 – 2016",
    },
    {
      school: "Nakuru Girl's High School",
      qualification: "Kenya Certificate of Secondary Education (KCSE)",
      grade: "B+ (Plus)",
      years: "2017 – 2021",
    },
    {
      school: "Kirinyaga University",
      qualification: "Bachelor of Science in Software Engineering",
      grade: "Second Class Upper division Honors",
      years: "2021 – 2025",
      hasTranscript: true, // 👈
    },
  ];

  return (
    <section
  id="education"
  className="py-12 px-4 md:px-16 bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('/EDUCATIONBACKGROUND.png')" }}
>

      <h2 className="text-3xl font-bold text-center text-white mb-10">Education</h2>
      <div className="space-y-8">
        {educationList.map((edu, index) => (
          <div
            key={index}
            className="bg-white shadow-md p-6 rounded-lg border-l-4 border-blue-500"
          >
            <h3 className="text-xl font-semibold">{edu.school}</h3>
            <p className="text-gray-700">{edu.qualification}</p>
            <div className="flex justify-between text-sm text-gray-600 mt-2">
              <span><strong>Grade:</strong> {edu.grade}</span>
              <span><strong>Years:</strong> {edu.years}</span>
            </div>

            {/* 🎓 Download button for university */}
            {edu.hasTranscript && (
              <a
                href="/TRANSCRIPT..pdf"
                download
                className="inline-block mt-4 text-sm text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
              >
                📄 Download Transcript
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
