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
    <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform">
      <h3 className="text-2xl font-semibold text-gray-200 mb-6 text-center">
        {title}
      </h3>
      <div className="grid grid-cols-2 gap-4 text-center">
        {skills.map((skill, idx) => (
          <div key={idx} className="flex flex-col items-center">
            {skill.icon}
            <span className="text-sm text-gray-300 mt-2">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
