export default function About() {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          About CSPS
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          The main focus of CSPS is to provide students with engaging opportunities 
          through entertainment, hackathons, tech talks, and seminars. 
          We aim to foster learning, creativity, and collaboration in a fun and 
          inspiring environment.
        </p>

        {/* Image + Text */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Image */}
          <img
            src="/events/lunch/group.jpeg" // <-- replace with your image
            alt="About CSPS"
            className="w-72 h-72 object-cover rounded-2xl shadow-lg"
          />

          {/* Text */}
          <div className="text-left max-w-lg">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">
              Who We Are
            </h3>
            <p className="text-gray-600 mb-4">
              CSPS is a community of passionate students, innovators, and tech enthusiasts.
              We organize events and activities that entertain, educate, and inspire members
              to explore the world of technology.
            </p>
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">
              What We Do
            </h3>
            <p className="text-gray-600">
              From fun entertainment sessions to skill-building hackathons, 
              insightful tech talks, and informative seminars, CSPS creates
              opportunities for students to learn, collaborate, and grow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
