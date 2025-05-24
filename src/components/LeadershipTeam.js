import Image from "next/image";

const teamMembers = [
  {
    name: "Mr. Ganesh",
    description: "CFO Operations",
    image: "/ganesh.png",
  },
  {
    name: "Mr. Amarnath",
    description: "General Manager",
    image: "/amarnath.png",
  },
  {
    name: "Mr. Charan",
    description: "Director",
    image: "/charan.png",
  },
  {
    name: "Ms. Manvitha",
    description: "Exports Manager",
    image: "/manvitha.png",
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

      <div className="mt-16 space-y-16">
        {/* First row with 3 cards */}
        <div className="flex justify-center gap-12 flex-wrap">
          {teamMembers.slice(0, 3).map((member, index) => (
            <div
              key={index}
              className="bg-white  shadow-2xl rounded-xl p-8 text-center w-[320px] transition-transform hover:scale-105"
            >
              <div className="relative w-[180px] h-[180px] mx-auto rounded-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="180px"
                />
              </div>
              <h3 className="text-2xl font-semibold mt-6 text-gray-900">{member.name}</h3>
              <p className="text-base text-gray-600">{member.position}</p>
              <p className="text-sm text-gray-500 mt-1">{member.description}</p>
            </div>
          ))}
        </div>

        {/* Second row with 2 cards centered below */}
        <div className="flex justify-center gap-12 flex-wrap">
          {teamMembers.slice(3).map((member, index) => (
            <div
              key={index + 3}
              className="bg-white shadow-2xl rounded-xl p-8 text-center w-[320px] transition-transform hover:scale-105"
            >
              <div className="relative w-[180px] h-[180px] mx-auto rounded-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="180px"
                />
              </div>
              <h3 className="text-2xl font-semibold mt-6 text-gray-900">{member.name}</h3>
              <p className="text-base text-gray-600">{member.position}</p>
              <p className="text-sm text-gray-500 mt-1">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeam;
