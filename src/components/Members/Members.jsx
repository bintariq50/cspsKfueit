import { motion } from "framer-motion";
import Member from "./Member";
import members from "./members.js";

export default function Members() {
  // Variants for staggered animation
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15, // 150ms delay between cards
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" } },
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Meet Our Members</h2>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          variants={containerVariants}
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {members.map((member) => (
            <div key={member.id} variants={cardVariants}>
              <Member member={member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
