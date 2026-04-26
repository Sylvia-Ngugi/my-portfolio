function Contact() {
    return (
      <section className="bg-blue-50 py-20 px-6" id="contact">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Contact Me</h2>
          <p className="text-gray-700 mb-8 text-lg">
            Feel free to reach out for collaborations, freelance projects, or just to connect!
          </p>
  
          <div className="flex flex-col items-center space-y-4">
             
              <p> Mobile Number : +254742200714 </p>
                   
            <a
              href="mailto:your.email@example.com"
              className="text-blue-700 hover:underline text-lg"
            >
              📧 ssilvia.ngugi@gmail.com
            </a>
  
            <a
              href="https://www.linkedin.com/in/silvia-ngugi-7854982b2/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:underline text-lg"
            >
              🔗 LinkedIn Profile
            </a>
  
            <a
              href="https://github.com/Sylvia-Ngugi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:underline text-lg"
            >
              💻 GitHub Profile
            </a>
          </div>
        </div>
      </section>
    );
  }
  
  export default Contact;
  