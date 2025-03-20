export default function Home() {
    return (
      <div className="bg-gray-100 min-h-screen">
        {/* Navbar */}
        <nav className="bg-white shadow-md py-4 px-6 fixed w-full top-0 z-10">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">My Portfolio</h1>
            <div className="space-x-6">
              <a href="#about" className="text-gray-700 hover:text-blue-500">About</a>
              <a href="#projects" className="text-gray-700 hover:text-blue-500">Projects</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-500">Contact</a>
            </div>
          </div>
        </nav>
  
        {/* Hero Section */}
        <header className="h-screen flex flex-col justify-center items-center text-center px-4">
          <h2 className="text-4xl font-bold text-gray-800">Hello, I'm <span className="text-blue-500">Your Name</span></h2>
          <p className="text-lg text-gray-600 mt-2">Full-Stack Developer | JavaScript | React | Node.js</p>
          <a href="#projects" className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition">View My Work</a>
        </header>
  
        {/* About Section */}
        <section id="about" className="py-16 bg-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800">About Me</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">I am a passionate full-stack developer with experience in building modern web applications. My expertise includes JavaScript, React, Node.js, and MongoDB.</p>
          </div>
        </section>
  
        {/* Projects Section */}
        <section id="projects" className="py-16 bg-gray-100">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">Real-Time Chat App</h3>
            <p className="mt-2">A real-time messaging application using Socket.io and Node.js.</p>
         <div className="mt-4">
        <a href="https://github.com/yourusername/chat-app" className="text-blue-500">GitHub</a>
        <a href="https://chat-app.vercel.app" className="text-blue-500 ml-4">Live Demo</a>
        </div>
        </div>
              {/* Project Card */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold">E-Commerce App</h3>
                <p className="mt-2">A full-stack e-commerce platform built with React, Node.js, and MongoDB.</p>
                <div className="mt-4">
                  <a href="https://github.com/yourusername/ecommerce" className="text-blue-500">GitHub</a>
                  <a href="https://ecommerce.vercel.app" className="text-blue-500 ml-4">Live Demo</a>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Contact Section */}
        <section id="contact" className="py-16 bg-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800">Contact Me</h2>
            <p className="text-gray-600 mt-4">Feel free to reach out via email or connect on LinkedIn.</p>
            <div className="mt-6 space-x-4">
              <a href="mailto:your.email@example.com" className="text-blue-500">Email</a>
              <a href="https://linkedin.com/in/yourusername" className="text-blue-500">LinkedIn</a>
              <a href="https://github.com/yourusername" className="text-blue-500">GitHub</a>
            </div>
          </div>
        </section>
      </div>
    );
  }
