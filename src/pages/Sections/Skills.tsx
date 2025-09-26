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
        { icon: <SiTypescript color="#3178C6" size={45} />, name: "TypeScript" },
        { icon: <SiHtml5 color="#E34F26" size={45} />, name: "HTML" },
        { icon: <SiCss3 color="#1572B6" size={45} />, name: "CSS" },
        { icon: <SiJavascript color="#F7DF1E" size={45} />, name: "JavaScript" },
        { icon: <SiReact color="#61DAFB" size={45} />, name: "React" },
        { icon: <SiTailwindcss color="#38BDF8" size={45} />, name: "TailwindCSS" },
        { icon: <SiBootstrap color="#7952B3" size={45} />, name: "Bootstrap" },
        { icon: <SiFigma color="#F24E1E" size={45} />, name: "Figma" },
      ],
      },
      {
        title: "Backend",
        skills: [
          { icon: <SiPython color="#3776AB" size={45} />, name: "Python" },
          { icon: <SiPhp color="#777BB4" size={45} />, name: "PHP" },
          { icon: <SiNodedotjs color="#68A063" size={45} />, name: "NodeJS" },
          { icon: <SiMysql color="#4479A1" size={45} />, name: "MySQL" },
          { icon: <SiMongodb color="#47A248" size={45} />, name: "MongoDB" },
          { icon: <SiApache color="#D22128" size={45} />, name: "Apache" },
          { icon: <SiPostgresql color="#336791" size={45} />, name: "PostgreSQL" },
        ],
      },
      {
        title: "Herramientas",
        skills: [
          { icon: <SiGit color="#F05032" size={45} />, name: "Git" },
          { icon: <SiGithub color="#FFFFFF" size={45} />, name: "GitHub" },
          { icon: <SiGnubash color="#4EAA25" size={45} />, name: "Terminal" },
          { icon: <BiLogoVisualStudio color="#007ACC" size={45} />, name: "VSCode" },
          { icon: <SiNpm color="#CB3837" size={45} />, name: "npm" },
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
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[500px] bg-blue-500 opacity-20 blur-[120px] rounded-l-full z-0"></div>

        <div className="max-w-7xl mx-auto p-4 relative z-10 ">
          <h2 
          className="font-extrabold mb-12 text-3xl text-white"
          style={{ textShadow: '0 0 8px rgba(255, 255, 255, 0.6)' }}
          >
            Skills
          </h2>
          <p className="text-white text-xl mb-10">
            Te presento mis habilidades en diversas tecnologías que utilizo en mi desarrollo profesional. 
            Estoy emocionado de seguir aprendiendo cada vez más, tanto de estas como de nuevas herramientas que surjan en el mundo del desarrollo web.
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
  