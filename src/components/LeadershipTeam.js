import Image from "next/image";

const teamMembers = [
  {
    name: "Mr. Ganesh",
    description: "CFO Operations",
    image: "/ganesh.webp",
  },
  {
    name: "Mr. Amarnath",
    description: "General Manager",
    image: "/amarnath.webp",
  },
  {
    name: "Mr. Charan",
    description: "Director",
    image: "/charan.webp",
  },
  {
    name: "Ms. Manvitha",
    description: "Exports Manager",
    image: "/manvitha.webp",
  },
  {
    name: "Mr. Varun",
    description: "Supply Chain Manager",
    image: "/varun.png",
  },
];

const LeadershipTeam = () => {
  return (
    <section className="text-center py-16 bg-white">
      <h2 className="text-4xl font-bold text-gray-900">Our Leadership Team</h2>
      <p className="text-gray-600 mt-4 text-lg">
        With years of combined experience, our team leads with expertise.
      </p>

      {/* Team Cards Row */}
      <div className="mt-16 flex flex-wrap justify-center gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white shadow-xl rounded-xl p-4 text-center w-[180px] transition-transform hover:scale-105"
          >
            <div className="relative w-[90px] h-[90px] mx-auto rounded-full overflow-hidden">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
                sizes="90px"
              />
            </div>
            <h3 className="text-lg font-semibold mt-4 text-gray-900">{member.name}</h3>
            <p className="text-xs text-gray-600 mt-1">{member.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LeadershipTeam;
