// src/pages/MemberProfile.jsx
import { useParams } from "react-router-dom";
import members from "./members.js";
import { Linkedin, Github } from "lucide-react";

export default function MemberProfile() {
  const { id } = useParams();
  const member = members.find((m) => m.id === parseInt(id));
  const img = "avatar.jpg";

  if (!member) return <h2 className="text-center mt-20">Member not found</h2>;

  return (
    <div className="max-w-4xl mx-auto py-20 px-6">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Profile Image */}
        <img
          src={member.image ? member.image : img}
          alt={member.name}
          className="w-40 h-40 rounded-full object-cover shadow-xl"
        />

        {/* Profile Details */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold mb-2">
            {`${member.prefix}. ${member.firstName} ${member.lastName}`}
          </h2>
          <p className="text-lg text-gray-600 mb-4">{member.designation}</p>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                <Linkedin size={28} />
              </a>
            )}
            {member.github && (
              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-black"
              >
                <Github size={28} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
