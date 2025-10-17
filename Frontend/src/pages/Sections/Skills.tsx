import {
    SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiBootstrap, SiFigma,
    SiPhp, SiNodedotjs, SiMysql, SiMongodb, SiApache, SiPostgresql,
    SiPython, SiTypescript,
    SiGit, SiGithub, SiGnubash, SiNpm
  } from "react-icons/si";
  
  import { BiLogoVisualStudio } from "react-icons/bi";
  
  
  import SkillCard from "../../components/SkillCard";
  
  const categories = [
    {
      title: "Frontend",
      skills: [
        { icon: <SiTypescript color="#3178C6" size={22} />, name: "TypeScript" },
        { icon: <SiHtml5 color="#E34F26" size={22} />, name: "HTML" },
        { icon: <SiCss3 color="#1572B6" size={22} />, name: "CSS" },
        { icon: <SiJavascript color="#F7DF1E" size={22} />, name: "JavaScript" },
        { icon: <SiReact color="#61DAFB" size={22} />, name: "React" },
        { icon: <SiTailwindcss color="#38BDF8" size={22} />, name: "TailwindCSS" },
        { icon: <SiBootstrap color="#7952B3" size={22} />, name: "Bootstrap" },
        { icon: <SiFigma color="#F24E1E" size={22} />, name: "Figma" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { icon: <SiPython color="#3776AB" size={22} />, name: "Python" },
        { icon: <SiPhp color="#777BB4" size={22} />, name: "PHP" },
        { icon: <SiNodedotjs color="#68A063" size={22} />, name: "NodeJS" },
        { icon: <SiMysql color="#4479A1" size={22} />, name: "MySQL" },
        { icon: <SiMongodb color="#47A248" size={22} />, name: "MongoDB" },
        { icon: <SiApache color="#D22128" size={22} />, name: "Apache" },
        { icon: <SiPostgresql color="#336791" size={22} />, name: "PostgreSQL" },
      ],
    },
    {
      title: "Herramientas",
      skills: [
        { icon: <SiGit color="#F05032" size={22} />, name: "Git" },
        { icon: <SiGithub color="#FFFFFF" size={22} />, name: "GitHub" },
        { icon: <SiGnubash color="#4EAA25" size={22} />, name: "Terminal" },
        { icon: <BiLogoVisualStudio color="#007ACC" size={22} />, name: "VSCode" },
        { icon: <SiNpm color="#CB3837" size={22} />, name: "npm" },
      ],
    },    
  ];
      
  
  const Skills = () => {
    return (
      <section
        id="skills"
        className="relative min-h-screen bg-black pt-20 pb-20 px-8 md:px-20 lg:px-40"
      >
        {/* Fondo azul difuminado */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[200px] bg-blue-500 opacity-20 blur-[120px] rounded-l-full z-0"></div>

        <div className="max-w-5xl mx-auto p-4 relative z-10 ">
          <h2 
          className="font-extrabold mb-6 text-xl text-white"
          style={{ textShadow: '0 0 8px rgba(255, 255, 255, 0.6)' }}
          >
            Skills
          </h2>
          <p className="text-white text-sm mb-7">
            Te presento mis habilidades en diversas tecnologías que utilizo en mi desarrollo profesional. 
            Estoy emocionado de seguir aprendiendo cada vez más, tanto de estas como de nuevas herramientas que surjan en el mundo del desarrollo de Software.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 ">
            {categories.map((cat) => (
              <SkillCard key={cat.title} title={cat.title} skills={cat.skills} />
            ))}
          </div>
        </div>
      </section>

    );
  };
  
  export default Skills;
  