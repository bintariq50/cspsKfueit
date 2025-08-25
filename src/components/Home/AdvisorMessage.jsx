import members from "../Members/members"

export default function AdvisorMessage() {
  const advisor = members[0]
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
        </h2>

        {/* Advisor Image */}
        <img
          src={advisor.image} // <-- replace with your advisor image path
          alt="Advisor"
          className="w-40 h-40 rounded-full mx-auto shadow-lg mb-6 object-cover"
        />

        {/* Advisor Message */}
        <p className="text-lg text-gray-600 leading-relaxed">
          "Our mission is to inspire, guide, and support students in achieving
          their goals with dedication and excellence. Together, we aim to build
          a brighter future through innovation and teamwork."
        </p>

        {/* Advisor Name */}
        <p className="mt-6 font-semibold text-gray-700 text-xl">
         {advisor.prefix+". " +   advisor.firstName +" " +  advisor.lastName }
        </p>
        <p className="text-gray-500">{advisor.designation}</p>
      </div>
    </section>
  );
}
