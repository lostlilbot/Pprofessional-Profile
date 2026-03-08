import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects | Vincent Churchill - Educational Technology Portfolio",
  description: "Explore educational technology projects, applications, and tools developed by Vincent Churchill. From curriculum management systems to language learning platforms.",
  keywords: [
    "Educational Apps",
    "Language Learning Tools",
    "Curriculum Management",
    "ESL Technology",
    "EdTech Projects",
  ],
};

// Sample GitHub projects - replace with actual repositories
// To fetch your real GitHub repos, add your username to the GitHub API call
const githubProjects = [
  {
    name: "Curriculum Manager Pro",
    description: "A comprehensive curriculum management system for K-12 educators. Features include lesson planning, assessment tracking, and student progress analytics.",
    language: "TypeScript",
    stars: 234,
    forks: 45,
    topics: ["education", "curriculum", "react", "typescript"],
    url: "https://github.com",
    image: "📚",
    featured: true,
  },
  {
    name: "Language Learning Hub",
    description: "Interactive language learning platform with AI-powered pronunciation feedback and personalized learning paths.",
    language: "Python",
    stars: 189,
    forks: 67,
    topics: ["language-learning", "ai", "education", "machine-learning"],
    url: "https://github.com",
    image: "🗣️",
    featured: true,
  },
  {
    name: "ESL Assessment Toolkit",
    description: "Standardized testing toolkit for English as a Second Language learners with automated grading capabilities.",
    language: "JavaScript",
    stars: 156,
    forks: 32,
    topics: ["esl", "assessment", "testing", "education"],
    url: "https://github.com",
    image: "📝",
    featured: false,
  },
  {
    name: "Student Performance Dashboard",
    description: "Real-time analytics dashboard for tracking student engagement and academic performance across multiple metrics.",
    language: "TypeScript",
    stars: 98,
    forks: 23,
    topics: ["analytics", "dashboard", "education", "data-visualization"],
    url: "https://github.com",
    image: "📊",
    featured: true,
  },
  {
    name: "Vocabulary Builder API",
    description: "RESTful API for vocabulary building applications with spaced repetition algorithms and progress tracking.",
    language: "Node.js",
    stars: 87,
    forks: 19,
    topics: ["api", "vocabulary", "learning", "spaced-repetition"],
    url: "https://github.com",
    image: "🔤",
    featured: false,
  },
  {
    name: "Classroom Collaboration Suite",
    description: "Real-time collaboration tools for virtual classrooms including whiteboard, chat, and file sharing.",
    language: "TypeScript",
    stars: 145,
    forks: 38,
    topics: ["collaboration", "classroom", "real-time", "websocket"],
    url: "https://github.com",
    image: "👥",
    featured: false,
  },
  {
    name: "Quiz Generator Pro",
    description: "AI-powered quiz generation tool that creates custom assessments from any educational content.",
    language: "Python",
    stars: 267,
    forks: 56,
    topics: ["quiz", "ai", "assessment", "education-tech"],
    url: "https://github.com",
    image: "✅",
    featured: true,
  },
  {
    name: "Multi-Language Content CMS",
    description: "Content management system designed for multilingual educational content with translation workflow.",
    language: "PHP",
    stars: 78,
    forks: 15,
    topics: ["cms", "multilingual", "content-management", "i18n"],
    url: "https://github.com",
    image: "🌐",
    featured: false,
  },
];

const languages = [
  { name: "TypeScript", color: "#3178c6", count: 3 },
  { name: "Python", color: "#3572A5", count: 2 },
  { name: "JavaScript", color: "#f1e05a", count: 1 },
  { name: "Node.js", color: "#68a063", count: 1 },
  { name: "PHP", color: "#4F5D95", count: 1 },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <p className="text-amber-400 font-medium tracking-wider uppercase mb-4 text-sm md:text-base">
              Portfolio
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Projects & Applications
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
              A collection of educational technology projects, open-source tools, 
              and applications designed to enhance learning experiences globally.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold text-amber-400">{githubProjects.length}</span>
                <span className="text-slate-400 text-sm">Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold text-amber-400">
                  {githubProjects.reduce((acc, p) => acc + p.stars, 0)}
                </span>
                <span className="text-slate-400 text-sm">Stars</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold text-amber-400">
                  {githubProjects.reduce((acc, p) => acc + p.forks, 0)}
                </span>
                <span className="text-slate-400 text-sm">Forks</span>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="relative block w-full h-16 md:h-24" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-slate-50"></path>
          </svg>
        </div>
      </section>

      {/* GitHub Stats */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center gap-3">
              <svg className="w-8 h-8 text-slate-900" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
              <span className="text-slate-600 text-sm">View on GitHub</span>
            </div>
            <div className="h-6 w-px bg-slate-300"></div>
            <div className="flex flex-wrap justify-center gap-3">
              {languages.map((lang) => (
                <div key={lang.name} className="flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-full">
                  <span 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: lang.color }}
                  ></span>
                  <span className="text-slate-700 text-sm font-medium">{lang.name}</span>
                  <span className="text-slate-400 text-xs">({lang.count})</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mb-4 text-center">
            Featured Projects
          </h2>
          <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
            Highlighted applications showcasing innovative solutions in educational technology
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {githubProjects.filter(p => p.featured).map((project, index) => (
              <a
                key={index}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="h-40 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-4 left-4 w-20 h-20 bg-amber-500 rounded-full filter blur-2xl"></div>
                  </div>
                  <span className="text-6xl">{project.image}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-amber-500 text-lg">{project.image}</span>
                    <h3 className="font-bold text-lg text-slate-900 group-hover:text-amber-600 transition-colors">
                      {project.name}
                    </h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.topics.slice(0, 3).map((topic) => (
                      <span key={topic} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">
                        {topic}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-1 text-slate-500 text-sm">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                      {project.stars}
                    </div>
                    <div className="flex items-center gap-1 text-slate-500 text-sm">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      {project.forks}
                    </div>
                    <span 
                      className="text-xs px-2 py-1 rounded"
                      style={{ backgroundColor: project.language === 'TypeScript' ? '#3178c620' : project.language === 'Python' ? '#3572A520' : '#f1e05a20', color: project.language === 'TypeScript' ? '#3178c6' : project.language === 'Python' ? '#3572A5' : '#7a6f2a' }}
                    >
                      {project.language}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mb-4 text-center">
            All Projects
          </h2>
          <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
            Complete portfolio of open-source educational technology tools and applications
          </p>
          
          <div className="space-y-4">
            {githubProjects.map((project, index) => (
              <a
                key={index}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group bg-slate-50 hover:bg-slate-100 rounded-xl p-6 transition-all duration-200"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-14 h-14 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl flex items-center justify-center text-2xl">
                      {project.image}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-slate-900 group-hover:text-amber-600 transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-slate-600 text-sm line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 md:gap-6">
                    <div className="flex items-center gap-1 text-slate-500 text-sm">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                      <span className="font-medium">{project.stars}</span>
                    </div>
                    <div className="flex items-center gap-1 text-slate-500 text-sm">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span className="font-medium">{project.forks}</span>
                    </div>
                    <span 
                      className="text-xs px-3 py-1.5 rounded-full font-medium"
                      style={{ backgroundColor: project.language === 'TypeScript' ? '#3178c615' : project.language === 'Python' ? '#3572A515' : '#f1e05a15', color: project.language === 'TypeScript' ? '#3178c6' : project.language === 'Python' ? '#3572A5' : '#7a6f2a' }}
                    >
                      {project.language}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">
            Interested in Collaborating?
          </h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Whether you need custom educational software, curriculum development, 
            or consulting on educational technology implementations, we can discuss how to work together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/50495924662"
              className="inline-flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold px-8 py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Get In Touch
            </a>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 border-2 border-slate-600 hover:border-slate-500 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
