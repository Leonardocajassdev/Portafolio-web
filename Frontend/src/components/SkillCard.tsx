import type { ReactNode } from "react";

interface Skill {
  icon: ReactNode;
  name: string;
}

interface SkillCardProps {
  title: string;
  skills: Skill[];
}

export default function SkillCard({ title, skills }: SkillCardProps) {
  return (
    <div
      className="bg-gray-900 p-6 rounded-3xl border border-white/5
                 hover:shadow-2xl hover:shadow-blue-900/20
                 hover:-translate-y-2 hover:scale-[1.02]
                 transition-all duration-300 ease-out"
    >
      <h3 className="text-lg font-semibold text-gray-200 mb-6 text-center">
        {title}
      </h3>

      <div className="grid grid-cols-3 gap-4 text-center">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center 
                       transition-transform duration-300
                       hover:scale-110"
          >
            <div className="text-3xl text-gray-300 hover:text-blue-400 transition-colors duration-300">
              {skill.icon}
            </div>
            <span className="text-sm text-gray-300 mt-2">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}