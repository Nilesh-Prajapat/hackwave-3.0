"use client";

import React, { useRef } from "react";
import { useState } from "react";
import Navbar from "@/components/global/nav";
import TeamCard from "@/components/ui/TeamCard";
import VariableProximity from "@/components/ui/VariableProximity";
import JapaneseBrushHeading from "@/components/ui/JapaneseBrushHeading";

// Team member interface matching TeamCard component
interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio?: string;
  image: string;
  category: "organizer" | "faculty" | "team";
  social: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    portfolio?: string;
  };
}

// Faculty Coordinators data
const facultyCoordinators: TeamMember[] = [
  {
    id: 1,
    name: "Dr. Faculty Name 1",
    role: "Faculty Coordinator",
    image: "/icons/icon_1.png",
    category: "faculty",
    social: {
      linkedin: "https://linkedin.com/in/faculty1",
    },
  },
  {
    id: 2,
    name: "Dr. Faculty Name 2",
    role: "Faculty Coordinator",
    image: "/icons/icon_2.png",
    category: "faculty",
    social: {
      linkedin: "https://linkedin.com/in/faculty2",
    },
  },
];

// Organizers data - Sorted role-wise and alphabetically
const organizers: TeamMember[] = [
  {
    id: 1,
    name: "Anish Sarkar",
    role: "Technical Lead",
    image: "/teamPhoto/Anish_Sarkar.jpg",
    category: "organizer",
    social: {
      linkedin: "https://www.linkedin.com/in/anishsarkar-",
      twitter: "https://x.com/anishsarkars",
      portfolio: "https://t.co/zHQDkEepvg",
    },
  },
  {
    id: 2,
    name: "Sumit Rathore",
    role: "Technical Lead",
    image: "/teamPhoto/sumit.jpg",
    category: "organizer",
    social: {
      linkedin: "https://www.linkedin.com/in/rathore-sumit/",
      twitter: "https://x.com/Awxara_",
      portfolio: "https://sumitrathore.me",
    },
  },
  {
    id: 3,
    name: "Shruti Singh",
    role: "Operation Lead",
    image: "/teamPhoto/Shruti_singh.jpg",
    category: "organizer",
    social: {
      linkedin: "https://www.linkedin.com/in/shruti-singh-307159327/",
    },
  },
  {
    id: 4,
    name: "Tapan Porwal",
    role: "Operation Lead",
    image: "/teamPhoto/Tapan_Porwal.jpeg",
    category: "organizer",
    social: {
      linkedin: "https://www.linkedin.com/in/tapan-porwal-b46826205",
      twitter: "https://x.com/PorwalTapan",
    },
  },
  {
    id: 5,
    name: "Kamaksha Raghuwanshi",
    role: "Outreach Lead",
    image: "/teamPhoto/Kamaksha_Raghuwanshi.png",
    category: "organizer",
    social: {
      linkedin: "https://www.linkedin.com/in/kamaksha-raghuwanshi",
    },
  },
  {
    id: 6,
    name: "Paridhi Jain",
    role: "Design Lead",
    image: "/teamPhoto/Paridhi_Jain.jpg",
    category: "organizer",
    social: {
      linkedin: "https://www.linkedin.com/in/paridhi-jain-240a69297?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
  },
  {
    id: 7,
    name: "Riya Singh",
    role: "Design Lead",
    image: "/teamPhoto/Riya_Singh.jpg",
    category: "organizer",
    social: {
      linkedin: "https://www.linkedin.com/in/riya-singh-00505b294/",
      twitter: "https://x.com/Riys5667",
      portfolio: "https://riya-singh-lily.vercel.app/",
    },
  },
];

// Team Members data - Sorted alphabetically
const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Aarya yadav",
    role: "Team Member",
    image: "/teamPhoto/Aarya_yadav.jpg",
    category: "team",
    social: {
      linkedin: "https://www.linkedin.com/public-profile/settings?trk=public-profile",
    },
  },
  {
    id: 2,
    name: "Adarsh Singh",
    role: "Team Member",
    image: "/teamPhoto/Adarsh_Singh.jpeg",
    category: "team",
    social: {
      linkedin: "https://www.linkedin.com/in/adarshxzsingh/",
      twitter: "https://x.com/Adarshxz",
    },
  },
  {
    id: 3,
    name: "Angel Hidau",
    role: "Team Member",
    image: "/teamPhoto/Angel_Hidau.jpeg",
    category: "team",
    social: {
      linkedin: "http://linkedin.com/in/angel-hidau-6250b836b",
    },
  },
  {
    id: 4,
    name: "Anushka Rathode",
    role: "Team Member",
    image: "/teamPhoto/Anushka_Rathode.png",
    category: "team",
    social: {
      linkedin: "https://www.linkedin.com/in/anushka-rathode-719122320/",
      twitter: "https://x.com/AnushkaRathode",
    },
  },
  {
    id: 5,
    name: "Ayush sonakpuriya",
    role: "Team Member",
    image: "/teamPhoto/Ayush_sonakpuriya.jpg",
    category: "team",
    social: {
      linkedin: "https://www.linkedin.com/in/ayush-sonakpuriya?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
  },
  {
    id: 6,
    name: "Kartik Prajapat",
    role: "Team Member",
    image: "/teamPhoto/Kartik_Prajapat.png",
    category: "team",
    social: {
      linkedin: "https://www.linkedin.com/in/kartik-prajapat01/",
      twitter: "https://x.com/prajapat35773",
      portfolio: "https://www.karrtik.me/",
    },
  },
  {
    id: 7,
    name: "Khushi yadav",
    role: "Team Member",
    image: "/teamPhoto/Khushi_yadav.jpg",
    category: "team",
    social: {
      linkedin: "https://www.linkedin.com/in/",
    },
  },
  {
    id: 8,
    name: "Lakshya Pandagre",
    role: "Team Member",
    image: "/teamPhoto/Lakshya_Pandagre.jpg",
    category: "team",
    social: {
      linkedin: "https://www.linkedin.com/in/lakshya-pandagre-937a3b328?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      twitter: "https://x.com/Its_lakshya_ai",
      portfolio: "https://itslakshya.vercel.app/",
    },
  },
  {
    id: 9,
    name: "Nilesh Prajapat",
    role: "Team Member",
    bio: "The guy who made the website",
    image: "/teamPhoto/Nilesh_Prajapat.jpeg",
    category: "team",
    social: {
      linkedin: "https://www.linkedin.com/in/nilesh-prajapat",
      portfolio: "https://itsnilesh.vercel.app",
    },
  },
  {
    id: 10,
    name: "Pavan Sahu",
    role: "Team Member",
    image: "/teamPhoto/Pavan_Sahu.png",
    category: "team",
    social: {
      linkedin: "https://www.linkedin.com/in/pavan-sahu?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
  },
  {
    id: 11,
    name: "Pratham Yadav",
    role: "Team Member",
    image: "/teamPhoto/Pratham_Yadav.jpg",
    category: "team",
    social: {
      linkedin: "https://www.linkedin.com/in/prathamyadavv",
      twitter: "https://x.com/insanekrishnaa",
      portfolio: "https://prathm.me/",
    },
  },
  {
    id: 12,
    name: "Priyesh Singh",
    role: "Team Member",
    image: "/teamPhoto/Priyesh_Singh.png",
    category: "team",
    social: {
      linkedin: "https://linkedin.com/in/alwayspriyesh",
      twitter: "https://x.com/alwayspriyesh",
      portfolio: "https://priyesh.tech/",
    },
  },
  {
    id: 13,
    name: "Rajpal Pawar",
    role: "Team Member",
    image: "/teamPhoto/Rajpal_Pawar.png",
    category: "team",
    social: {
      linkedin: "https://www.linkedin.com/in/rajpal-pawar-530682325?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      twitter: "https://x.com/hencerajpal",
      portfolio: "https://rajpal-pawar.github.io/Portfolio/",
    },
  },
  {
    id: 14,
    name: "Rashi Malviya",
    role: "Team Member",
    image: "/teamPhoto/Rashi_Malviya.jpg",
    category: "team",
    social: {
      linkedin: "https://www.linkedin.com/in/rashi-malviya-0a3643375?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
  },
  {
    id: 15,
    name: "Ravi Shankar Prasad",
    role: "Team Member",
    image: "/teamPhoto/Ravi_Shankar_Prasad.jpg",
    category: "team",
    social: {
      linkedin: "https://www.linkedin.com/in/ravi-prasad-2b7a3234a?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
      twitter: "https://x.com/fxxxxxx7777?s=11",
    },
  },
  {
    id: 16,
    name: "Sadikcha Chhetri",
    role: "Team Member",
    image: "/teamPhoto/Sadikcha_Chhetri.png",
    category: "team",
    social: {
      linkedin: "https://www.linkedin.com/in/sadikcha-chhetri-405285357?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      portfolio: "https://sadikcha1.netlify.app/",
    },
  },
  {
    id: 17,
    name: "Somya Tanwar",
    role: "Team Member",
    bio: "The guy who shipped assets",
    image: "/teamPhoto/Somya_Tanwar.png",
    category: "team",
    social: {
      linkedin: "https://www.linkedin.com/in/somya-tanwar",
      twitter: "https://x.com/0xSomyaa",
      portfolio: "https://somyaa.me",
    },
  },
  {
    id: 18,
    name: "Suyash Verma",
    role: "Team Member",
    image: "/teamPhoto/Suyash_Verma.png",
    category: "team",
    social: {
      linkedin: "https://www.linkedin.com/in/suyash-codez",
      twitter: "https://x.com/suyash_codez",
      portfolio: "https://suyashsites.vercel.app",
    },
  },
  {
    id: 19,
    name: "Urvaksh Tirle",
    role: "Team Member",
    image: "/teamPhoto/Urvaksh_Tirle.jpg",
    category: "team",
    social: {
      linkedin: "https://www.linkedin.com/in/urvaksh-tirle",
      twitter: "https://x.com/urvakshtirle",
      portfolio: "https://seenly.tech/urvaksh",
    },
  },
  {
    id: 20,
    name: "Vishal Maratha",
    role: "Team Member",
    image: "/teamPhoto/Vishal_Maratha.jpg",
    category: "team",
    social: {
      linkedin: "https://www.linkedin.com/in/vishal-maratha2002",
      portfolio: "https://vishal-portfolio-site-tawny.vercel.app/",
    },
  },
  {
    id: 21,
    name: "Yashika kushwah",
    role: "Team Member",
    image: "/teamPhoto/Yashika_kushwah.jpg",
    category: "team",
    social: {
      linkedin: "https://www.linkedin.com/in/yashika-kushwah-136054314?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
  },
  {
    id: 22,
    name: "Yukti Vishwakarma",
    role: "Team Member",
    image: "/teamPhoto/Yukti_Vishwakarma.png",
    category: "team",
    social: {
      linkedin: "https://www.linkedin.com/public-profile/settings/",
    },
  },
];

const TeamPage = () => {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#141414] text-[#fcf2e8] pb-20 px-6">
        {/* Header Section */}
        <div
          ref={containerRef}
          className="text-center h-screen mb-16 flex flex-col items-center justify-center"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl text-[#fcf2e8] mb-6">
            <VariableProximity
              label="Meet The Team" className="font-jansina"
              fromFontVariationSettings="wght 200"
              toFontVariationSettings="wght 900"
              radius={400}
              containerRef={containerRef}
            />
          </h1>
          <p className="text-xl md:text-2xl text-[#ccc] max-w-3xl mx-auto">
            The passionate individuals behind Hackwave who work tirelessly to
            create an unforgettable experience for all participants.
          </p>
        </div>
        <div className="max-w-7xl mx-auto">
          {/* Faculty Coordinators Section */}
          {false && (
            <div className="mb-20">
              <div className="text-center mb-12">
                <JapaneseBrushHeading>
                  Faculty Coordinators
                </JapaneseBrushHeading>
                <p className="text-lg md:text-xl text-[#ccc] max-w-2xl mx-auto">
                  Academic leaders providing guidance and support for our
                  hackathon
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {facultyCoordinators.map((member) => (
                  <TeamCard
                    key={`faculty-${member.id}`}
                    member={member}
                    onMouseEnter={setHoveredMember}
                    onMouseLeave={() => setHoveredMember(null)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Organizers Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <JapaneseBrushHeading>
                Organizers
              </JapaneseBrushHeading>
              <p className="text-lg md:text-xl text-[#ccc] max-w-2xl mx-auto">
                The core team driving the vision and execution of Hackwave
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
              {organizers.map((member) => (
                <TeamCard
                  key={`organizer-${member.id}`}
                  member={member}
                  onMouseEnter={setHoveredMember}
                  onMouseLeave={() => setHoveredMember(null)}
                />
              ))}
            </div>
          </div>

          {/* Team Members Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <JapaneseBrushHeading>
                Team Members
              </JapaneseBrushHeading>
              <p className="text-lg md:text-xl text-[#ccc] max-w-2xl mx-auto">
                Dedicated individuals making Hackwave a memorable experience
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
              {teamMembers.map((member) => (
                <TeamCard
                  key={`team-${member.id}`}
                  member={member}
                  onMouseEnter={setHoveredMember}
                  onMouseLeave={() => setHoveredMember(null)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamPage;
