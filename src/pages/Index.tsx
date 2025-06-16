
import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Calendar, ExternalLink, Code, Database, Cloud, Settings, Award, GraduationCap, Target } from 'lucide-react';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const skills = [
    { category: "Frontend", items: ["React", "Angular", "Vue.js", "Next.js", "Tailwind CSS", "Bootstrap"], icon: Code },
    { category: "Backend", items: ["Node.js", "NestJS", "Java Spring Boot", "PHP", "Laravel", "ASP.NET"], icon: Settings },
    { category: "Database", items: ["PostgreSQL", "MySQL", "MongoDB", "Supabase", "Redis", "Prisma"], icon: Database },
    { category: "Cloud & Tools", items: ["AWS", "Docker", "CI/CD", "Git", "Lambda", "S3"], icon: Cloud }
  ];

  const projects = [
    {
      title: "Mobifone MBF B11",
      period: "06/2023 – 02/2025",
      description: "Telecommunications equipment management application with ReactJS, NodeJS, and AWS integration.",
      tech: ["NodeJS", "PostgreSQL", "ReactJS", "AWS", "EKS", "BIRT Report"],
      teamSize: 8
    },
    {
      title: "EVN_PC",
      period: "10/2022 - 06/2023",
      description: "Scheduling and maintenance software for Vietnam's national electricity company.",
      tech: ["NodeJS", "PostgreSQL", "ReactJS", "AWS", "Prisma"],
      teamSize: 12
    },
    {
      title: "Eyepro Mobile App",
      period: "08/2021 – 10/2022",
      description: "AI-powered automatic attendance tracking with computer vision for educational institutions.",
      tech: ["NodeJS", "Angular", "Ionic", "Swift", "OpenCV"],
      teamSize: 9
    },
    {
      title: "QCA Flow Bank",
      period: "05/2020 – 02/2021",
      description: "Credit scoring system for Bank of Myanmar with advanced analytics.",
      tech: ["NodeJS", "VueJS", "MongoDB", "Redis", "Kafka"],
      teamSize: 20
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
      ]
    },
    {
      company: "Vdsmart",
      role: "Software Engineer", 
      period: "10/2019 - 10/2020",
      highlights: [
        "Developed cross-platform apps with Angular and Ionic",
        "Built face recognition using TensorFlow",
        "Created real-time notifications with WebSocket"
      ]
    },
    {
      company: "Shopee Like",
      role: "Software Engineer",
      period: "07/2018 – 03/2019",
      highlights: [
        "Built server-side with NodeJS and RxJS",
        "Developed HTML5 canvas image editor",
        "Implemented product copying between platforms"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-emerald-600/10"></div>
        <div className={`text-center z-10 px-4 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Avatar */}
          <div className="mb-8">
            <img 
              src="/lovable-uploads/fb03a7b4-63d4-4bca-9657-3ef46cb7836e.png" 
              alt="Tran Quoc Tuan"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto object-cover border-4 border-green-400 shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            TRAN QUOC TUAN
          </h1>
          <h2 className="text-2xl md:text-3xl text-slate-300 mb-8 font-light">
            Full-Stack Developer
          </h2>
          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            7+ years experienced NodeJS Developer with Solution Architect Certification.
            Specialized in AWS, React, and modern web technologies.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="https://www.linkedin.com/in/tran-quoc-tuan-b338261b3/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-green-600 hover:bg-green-500 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105">
              <Linkedin size={20} />
              Contact Me
            </a>
            <a href="https://github.com/tuantran1295" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-slate-400 hover:border-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105">
              <Github size={20} />
              View Projects
            </a>
          </div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-emerald-400 rounded-full animate-pulse animation-delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-green-300 rounded-full animate-pulse animation-delay-2000"></div>
        </div>
      </section>

      {/* Objective Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent flex items-center justify-center gap-3">
            <Target className="text-green-400" size={36} />
            Objective
          </h2>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-green-500/50 transition-all duration-500">
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
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => {
              const IconComponent = skillGroup.icon;
              return (
                <div key={skillGroup.category} className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-green-500/50 transition-all duration-500 hover:scale-105 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: `${index * 200}ms` }}>
                  <div className="flex items-center gap-3 mb-4">
                    <IconComponent className="text-green-400" size={24} />
                    <h3 className="text-xl font-semibold">{skillGroup.category}</h3>
                  </div>
                  <div className="space-y-2">
                    {skillGroup.items.map((skill) => (
                      <div key={skill} className="text-slate-300 text-sm bg-slate-700/50 px-3 py-1 rounded-full">
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
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent flex items-center justify-center gap-3">
            <GraduationCap className="text-green-400" size={36} />
            Education
          </h2>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-green-500/50 transition-all duration-500">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-green-400 mb-2">FPT UNIVERSITY</h3>
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
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent flex items-center justify-center gap-3">
            <Award className="text-green-400" size={36} />
            Certifications
          </h2>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-green-500/50 transition-all duration-500">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 bg-green-600/20 text-green-300 px-6 py-3 rounded-full border border-green-600/30 mb-6">
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
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent flex items-center justify-center gap-3">
            <Award className="text-green-400" size={36} />
            Honors & Awards
          </h2>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-green-500/50 transition-all duration-500">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 bg-emerald-600/20 text-emerald-300 px-6 py-3 rounded-full border border-emerald-600/30">
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
      <section id="projects" className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={project.title} className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-green-500/50 transition-all duration-500 hover:scale-102 hover:-translate-y-2 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: `${index * 300}ms` }}>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-green-400">{project.title}</h3>
                  <span className="text-sm text-slate-400 flex items-center gap-1">
                    <Calendar size={14} />
                    {project.period}
                  </span>
                </div>
                <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs bg-green-600/20 text-green-300 px-2 py-1 rounded-full border border-green-600/30">
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
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={exp.company} className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-green-500/50 transition-all duration-500 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ animationDelay: `${index * 200}ms` }}>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-green-400">{exp.company}</h3>
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
                      <span className="text-green-400 mt-2 block w-1 h-1 bg-green-400 rounded-full flex-shrink-0"></span>
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
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-green-500/50 transition-all duration-300 hover:scale-105">
              <Mail className="text-green-400 mx-auto mb-4" size={32} />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-slate-300 text-sm break-all">tuantran1245@gmail.com</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-green-500/50 transition-all duration-300 hover:scale-105">
              <MapPin className="text-green-400 mx-auto mb-4" size={32} />
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-slate-300 text-sm">Vietnam</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-green-500/50 transition-all duration-300 hover:scale-105">
              <Code className="text-green-400 mx-auto mb-4" size={32} />
              <h3 className="font-semibold mb-2">Experience</h3>
              <p className="text-slate-300 text-sm">7+ Years</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-green-500/50 transition-all duration-300 hover:scale-105">
              <Settings className="text-green-400 mx-auto mb-4" size={32} />
              <h3 className="font-semibold mb-2">Certification</h3>
              <p className="text-slate-300 text-sm">Solution Architect</p>
            </div>
          </div>
          
          <div className="mt-12">
            <p className="text-slate-300 mb-8 text-lg">
              Ready to bring your next project to life? Let's connect and discuss how I can help.
            </p>
            <a href="https://www.linkedin.com/in/tran-quoc-tuan-b338261b3/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 font-semibold">
              <Linkedin size={20} />
              Start a Conversation
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-700">
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
