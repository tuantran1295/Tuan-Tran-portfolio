import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Calendar, ExternalLink, Code, Database, Cloud, Settings, Award, GraduationCap, Target } from 'lucide-react';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const skills = [
    { category: "Frontend", items: ["React", "Angular", "Vue.js", "Next.js", "Tailwind CSS", "Bootstrap"], icon: Code, color: "from-purple-500 to-pink-500" },
    { category: "Backend", items: ["Node.js", "Express", "PHP", "Laravel", "Spring Boot"], icon: Settings, color: "from-blue-500 to-cyan-500" },
    { category: "Database", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Prisma"], icon: Database, color: "from-green-500 to-teal-500" },
    { category: "Cloud & Tools", items: ["AWS", "Docker", "CI/CD", "Git", "Lambda", "S3"], icon: Cloud, color: "from-orange-500 to-red-500" }
  ];

  const projects = [
    {
      title: "Mobifone MBF B11",
      period: "06/2023 – 02/2025",
      description: "Telecommunications equipment management application with ReactJS, NodeJS, and AWS integration.",
      tech: ["NodeJS", "PostgreSQL", "ReactJS", "AWS", "EKS", "BIRT Report"],
      teamSize: 8,
      color: "from-purple-600 to-blue-600"
    },
    {
      title: "EVN_PC",
      period: "10/2022 - 06/2023",
      description: "Scheduling and maintenance software for Vietnam's national electricity company.",
      tech: ["NodeJS", "PostgreSQL", "ReactJS", "AWS", "Prisma"],
      teamSize: 12,
      color: "from-green-600 to-teal-600"
    },
    {
      title: "Eyepro Mobile App",
      period: "08/2021 – 10/2022",
      description: "AI-powered automatic attendance tracking with computer vision for educational institutions.",
      tech: ["NodeJS", "Angular", "Ionic", "Swift", "OpenCV"],
      teamSize: 9,
      color: "from-orange-600 to-pink-600"
    },
    {
      title: "QCA Flow Bank",
      period: "05/2020 – 02/2021",
      description: "Credit scoring system for Bank of Myanmar with advanced analytics.",
      tech: ["NodeJS", "VueJS", "MongoDB", "Redis", "Kafka"],
      teamSize: 20,
      color: "from-indigo-600 to-purple-600"
    }
  ];

  const experiences = [
    {
      company: "FPT Information System",
      role: "Software Engineer",
      period: "06/2021 – 02/2025",
      highlights: [
        "Built task scheduling with NextJS, NodeJS, Remix, Redux",
        "Implemented JWT and SSO authentication",
        "Created live chat bot using OpenAI API",
        "Automated testing with Selenium and Appium"
      ],
      color: "from-cyan-500 to-blue-500"
    },
    {
      company: "Vdsmart",
      role: "Software Engineer", 
      period: "10/2019 - 10/2020",
      highlights: [
        "Developed cross-platform apps with Angular and Ionic",
        "Built face recognition using TensorFlow",
        "Created real-time notifications with WebSocket"
      ],
      color: "from-emerald-500 to-green-500"
    },
    {
      company: "Shopee Like",
      role: "Software Engineer",
      period: "07/2018 – 03/2019",
      highlights: [
        "Built server-side with NodeJS and RxJS",
        "Developed HTML5 canvas image editor",
        "Implemented product copying between platforms"
      ],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-emerald-900/40 via-green-900/30 to-teal-900/40">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 via-green-600/10 to-teal-600/10"></div>
        
        {/* Glass morphism background */}
        <div className="absolute inset-0 backdrop-blur-sm bg-gradient-to-br from-emerald-500/5 via-green-500/5 to-teal-500/5"></div>
        
        <div className={`text-center z-10 px-4 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Avatar with glass effect */}
          <div className="mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 rounded-full p-1 animate-pulse">
                <div className="bg-slate-900/80 backdrop-blur-md rounded-full p-2">
                  <img 
                    src="/lovable-uploads/fb03a7b4-63d4-4bca-9657-3ef46cb7836e.png" 
                    alt="Tran Quoc Tuan"
                    className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Glass card for main content */}
          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg">
              TRAN QUOC TUAN
            </h1>
            <h2 className="text-2xl md:text-3xl text-emerald-300 mb-8 font-light drop-shadow-md">
              Full-Stack Developer
            </h2>
            <p className="text-lg text-slate-200 mb-12 max-w-2xl mx-auto leading-relaxed">
              7+ years experienced NodeJS Developer with Solution Architect Certification.
              Specialized in AWS, React, and modern web technologies.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <a 
                href="https://www.linkedin.com/in/tran-quoc-tuan-b338261b3/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 bg-emerald-600/80 hover:bg-emerald-500/80 backdrop-blur-md border border-emerald-400/30 px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-emerald-500/25 text-white"
              >
                <Linkedin size={20} />
                Contact Me
              </a>
              <a 
                href="https://github.com/tuantran1295" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 hover:border-white/30 px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 text-white"
              >
                <Github size={20} />
                View Projects
              </a>
            </div>
          </div>
        </div>
        
        {/* Enhanced animated background elements with green theme */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/50"></div>
          <div className="absolute top-3/4 right-1/4 w-4 h-4 bg-green-400 rounded-full animate-pulse animation-delay-1000 shadow-lg shadow-green-400/50"></div>
          <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-teal-400 rounded-full animate-pulse animation-delay-2000 shadow-lg shadow-teal-400/50"></div>
          <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-emerald-300 rounded-full animate-pulse shadow-lg shadow-emerald-300/50"></div>
          <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-green-300 rounded-full animate-pulse animation-delay-1000 shadow-lg shadow-green-300/50"></div>
          
          {/* Floating glass elements */}
          <div className="absolute top-1/3 left-1/5 w-16 h-16 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl rotate-12 animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-1/3 right-1/5 w-12 h-12 bg-emerald-500/10 backdrop-blur-sm border border-emerald-500/20 rounded-xl -rotate-12 animate-pulse"></div>
        </div>
      </section>

      {/* Objective Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent flex items-center justify-center gap-3">
            <Target className="text-purple-400" size={36} />
            Objective
          </h2>
          <div className="bg-gradient-to-br from-slate-800/50 via-purple-900/30 to-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-500 shadow-lg hover:shadow-purple-500/20">
            <ul className="space-y-4 text-slate-300 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-2 block w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></span>
                7 years experienced full stack developer with Solution Architect Certification.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-2 block w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></span>
                Familiar with AWS SAM, AWS Cloudformation Stack, AWS Lambda Functions, AWS S3, AWS RDS and many other cloud services.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-2 block w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></span>
                Could learn many languages and technologies in very short period of time.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-2 block w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></span>
                Proficient in Linux bash and macOS terminal.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-2 block w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></span>
                Clean coding, ergonomic, good Photoshop and UI design skill, mobile first and responsive designing mind set.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-2 block w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></span>
                Able to work as full stack developer with NextJS, React, Angular, RxJS, Ionic, VueJS and Tailwind for frontend, backend using NodeJS, Java Spring Boot, PHP, MySQL, PostgreSQL, MongoDB.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-800/30 via-purple-800/20 to-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => {
              const IconComponent = skillGroup.icon;
              return (
                <div key={skillGroup.category} className={`bg-gradient-to-br ${skillGroup.color}/10 backdrop-blur-sm rounded-xl p-6 border-2 border-transparent bg-clip-padding hover:border-gradient-to-r hover:${skillGroup.color}/50 transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-xl ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: `${index * 200}ms` }}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${skillGroup.color}`}>
                      <IconComponent className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">{skillGroup.category}</h3>
                  </div>
                  <div className="space-y-2">
                    {skillGroup.items.map((skill) => (
                      <div key={skill} className={`text-slate-300 text-sm bg-gradient-to-r ${skillGroup.color}/20 backdrop-blur-sm px-3 py-1 rounded-full border border-transparent hover:border-white/20 transition-colors duration-300`}>
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent flex items-center justify-center gap-3">
            <div className="p-2 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500">
              <GraduationCap className="text-white" size={36} />
            </div>
            Education
          </h2>
          <div className="bg-gradient-to-br from-slate-800/50 via-emerald-900/20 to-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-500 shadow-lg hover:shadow-emerald-500/20">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-2">FPT UNIVERSITY</h3>
              <p className="text-lg text-slate-300 mb-2">Major: Software Engineering - IELTS 6.5</p>
              <p className="text-slate-400 mb-4">2014 – 2018</p>
            </div>
            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <Award className="text-green-400 mt-1 flex-shrink-0" size={16} />
                <span className="text-slate-300">Top 50 Student Achievement Award for Excellent Semester Transcript in Feb 2017</span>
              </div>
              <div className="flex items-start gap-3">
                <Award className="text-green-400 mt-1 flex-shrink-0" size={16} />
                <span className="text-slate-300">Top 100 Student Achievement Award for Good Semester Transcript in Jun 2018</span>
              </div>
            </div>
            
            {/* Certificate Image */}
            <div className="text-center">
              <img 
                src="/lovable-uploads/228dc3d2-fc28-4d37-af37-c92671d0ee11.png" 
                alt="Excellent Student of Semester Certificate - Fall 2016"
                className="w-full max-w-md mx-auto rounded-lg border border-slate-600 hover:border-green-400 transition-colors duration-300 mb-2"
              />
              <p className="text-sm text-slate-400">Excellent Student Certificate - Fall 2016</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-800/30 via-blue-800/20 to-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent flex items-center justify-center gap-3">
            <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500">
              <Award className="text-white" size={36} />
            </div>
            Certifications
          </h2>
          <div className="bg-gradient-to-br from-slate-800/50 via-blue-900/20 to-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-500 shadow-lg hover:shadow-blue-500/20">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 px-6 py-3 rounded-full border border-blue-600/30 mb-6 backdrop-blur-sm">
                <Award size={24} />
                <span className="text-lg font-semibold">Solution Architect Certification 2022</span>
              </div>
            </div>
            
            {/* Certificate Image */}
            <div className="text-center">
              <img 
                src="/lovable-uploads/7cc9a134-da9e-4cca-914c-4dbe841f5469.png" 
                alt="Solution Architect Certificate of Completion - October 2022"
                className="w-full max-w-2xl mx-auto rounded-lg border border-slate-600 hover:border-green-400 transition-colors duration-300 mb-2"
              />
              <p className="text-sm text-slate-400">Solution Architect Certificate - October 2022</p>
            </div>
          </div>
        </div>
      </section>

      {/* Honors & Awards Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent flex items-center justify-center gap-3">
            <div className="p-2 rounded-lg bg-gradient-to-r from-orange-500 to-red-500">
              <Award className="text-white" size={36} />
            </div>
            Honors & Awards
          </h2>
          <div className="bg-gradient-to-br from-slate-800/50 via-orange-900/20 to-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-orange-500/30 hover:border-orange-400/50 transition-all duration-500 shadow-lg hover:shadow-orange-500/20">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-600/20 to-red-600/20 text-orange-300 px-6 py-3 rounded-full border border-orange-600/30 backdrop-blur-sm">
                <Award size={24} />
                <span className="text-lg font-semibold">Excellent Employee Award 2021</span>
              </div>
            </div>
            
            {/* Certificate Image */}
            <div className="text-center">
              <img 
                src="/lovable-uploads/0633de57-0c4e-43aa-97d3-ef3024bd0537.png" 
                alt="Employee Recognition Certificate 2021"
                className="w-full max-w-md mx-auto rounded-lg border border-slate-600 hover:border-green-400 transition-colors duration-300 mb-2"
              />
              <p className="text-sm text-slate-400">Employee Recognition 2021</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gradient-to-r from-slate-800/30 via-pink-800/20 to-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={project.title} className={`bg-gradient-to-br ${project.color}/10 backdrop-blur-sm rounded-xl p-6 border border-transparent hover:border-gradient-to-r hover:${project.color}/50 transition-all duration-500 hover:scale-102 hover:-translate-y-2 shadow-lg hover:shadow-2xl ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: `${index * 300}ms` }}>
                <div className="flex justify-between items-start mb-4">
                  <h3 className={`text-xl font-semibold bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>{project.title}</h3>
                  <span className="text-sm text-slate-400 flex items-center gap-1">
                    <Calendar size={14} />
                    {project.period}
                  </span>
                </div>
                <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className={`text-xs bg-gradient-to-r ${project.color}/20 backdrop-blur-sm text-white px-2 py-1 rounded-full border border-white/10`}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="text-sm text-slate-400">
                  Team Size: {project.teamSize} members
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={exp.company} className={`bg-gradient-to-br ${exp.color}/10 backdrop-blur-sm rounded-xl p-6 border border-transparent hover:border-gradient-to-r hover:${exp.color}/50 transition-all duration-500 shadow-lg hover:shadow-xl ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ animationDelay: `${index * 200}ms` }}>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <div>
                    <h3 className={`text-xl font-semibold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>{exp.company}</h3>
                    <p className="text-slate-300">{exp.role}</p>
                  </div>
                  <span className="text-slate-400 flex items-center gap-1 mt-2 md:mt-0">
                    <Calendar size={14} />
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-slate-300 flex items-start gap-2">
                      <span className={`mt-2 block w-2 h-2 bg-gradient-to-r ${exp.color} rounded-full flex-shrink-0 shadow-lg`}></span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-800/30 via-cyan-800/20 to-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/20">
              <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 w-fit mx-auto mb-4">
                <Mail className="text-white" size={32} />
              </div>
              <h3 className="font-semibold mb-2 text-blue-300">Email</h3>
              <p className="text-slate-300 text-sm break-all">tuantran1245@gmail.com</p>
            </div>
            <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 backdrop-blur-sm rounded-xl p-6 border border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-emerald-500/20">
              <div className="p-3 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 w-fit mx-auto mb-4">
                <MapPin className="text-white" size={32} />
              </div>
              <h3 className="font-semibold mb-2 text-emerald-300">Location</h3>
              <p className="text-slate-300 text-sm">Vietnam</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/20">
              <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 w-fit mx-auto mb-4">
                <Code className="text-white" size={32} />
              </div>
              <h3 className="font-semibold mb-2 text-purple-300">Experience</h3>
              <p className="text-slate-300 text-sm">7+ Years</p>
            </div>
            <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur-sm rounded-xl p-6 border border-orange-500/30 hover:border-orange-400/50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-orange-500/20">
              <div className="p-3 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 w-fit mx-auto mb-4">
                <Settings className="text-white" size={32} />
              </div>
              <h3 className="font-semibold mb-2 text-orange-300">Certification</h3>
              <p className="text-slate-300 text-sm">Solution Architect</p>
            </div>
          </div>
          
          <div className="mt-12">
            <p className="text-slate-300 mb-8 text-lg">
              Ready to bring your next project to life? Let's connect and discuss how I can help.
            </p>
            <a href="https://www.linkedin.com/in/tran-quoc-tuan-b338261b3/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-500 hover:via-pink-500 hover:to-blue-500 px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 font-semibold shadow-lg hover:shadow-purple-500/25">
              <Linkedin size={20} />
              Start a Conversation
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gradient-to-r from-purple-500/30 via-pink-500/30 to-blue-500/30">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400">
            © 2025 Tran Quoc Tuan. Crafted with passion and modern web technologies.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
