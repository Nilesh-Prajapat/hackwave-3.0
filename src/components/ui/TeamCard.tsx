import React from "react";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio?: string;
  category: "organizer" | "faculty" | "team" | "judge" | "mentor";
  social: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    portfolio?: string;
  };
}

interface TeamCardProps {
  member: TeamMember;
  onMouseEnter: (id: number) => void;
  onMouseLeave: () => void;
}

const TeamCard: React.FC<TeamCardProps> = ({
  member,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <div
      className="relative overflow-hidden rounded-2xl border border-[#141414]/15 bg-[#fcf2e8] p-4 sm:p-5 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-xl group w-full max-w-[290px] min-h-[360px] sm:min-h-[380px] mx-auto"
      onMouseEnter={() => onMouseEnter(member.id)}
      onMouseLeave={onMouseLeave}
    >
      {/* Background artwork: Japanese ink poster theme */}
      <img
        src="/assets/coresbg.webp"
        alt=""
        className="absolute inset-0 w-full h-full object-fill pointer-events-none select-none"
      />

      {/* Main Card Content Layer - Vertically Centered */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full my-auto space-y-3 pt-5 sm:pt-6 pb-2">
        {/* Profile Photo */}
        <div className="relative w-[165px] h-[175px] sm:w-[175px] sm:h-[185px] rounded-xl overflow-hidden border-2 border-[#F52222] shadow-md bg-white/40 shrink-0">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = "none";
              const fallback = e.currentTarget.parentElement?.querySelector(
                ".initials-fallback"
              ) as HTMLElement;
              if (fallback) fallback.style.display = "flex";
            }}
          />
          <div
            className="initials-fallback absolute inset-0 w-full h-full bg-[#F52222] flex items-center justify-center text-3xl font-bold text-white"
            style={{ display: "none" }}
          >
            {member.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
        </div>

        {/* Bottom Details Section */}
        <div className="w-full text-left mt-1">
          {/* Row 1: Left-aligned Name + Right-aligned Social Icons */}
          <div className="flex items-center justify-between w-full gap-2 mb-1.5">
            <h3 className="text-lg sm:text-xl font-jansina font-normal text-[#141414] leading-tight truncate">
              {member.name}
            </h3>

            {/* Social Links on the Right side of Name */}
            <div className="flex items-center space-x-1 shrink-0">
              {member.social.linkedin && (
                <a
                  href={member.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#141414]/80 hover:text-[#F52222] p-1 transition-colors"
                  title="LinkedIn"
                >
                  <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              )}
              {member.social.twitter && (
                <a
                  href={member.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#141414]/80 hover:text-[#F52222] p-1 transition-colors"
                  title="Twitter/X"
                >
                  <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
              )}
              {member.social.github && (
                <a
                  href={member.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#141414]/80 hover:text-[#F52222] p-1 transition-colors"
                  title="GitHub"
                >
                  <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Row 2: Role Badge & optional bio underneath */}
          <div className="flex flex-col items-start justify-start gap-1">
            <span className="inline-block text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-[#F52222] text-white shadow-xs">
              {member.role}
            </span>
            {member.bio && (
              <p className="text-xs font-jansina font-normal text-[#141414] mt-0.5 leading-tight">
                {member.bio}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
