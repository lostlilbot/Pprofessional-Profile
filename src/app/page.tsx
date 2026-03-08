import type { Metadata } from "next";

export default function Home() {
  const workHistory = [
    {
      period: "2024 – Present",
      location: "Honduras",
      title: "English Language Educator",
      description: "Leading English language education programs in El Progreso, Yoro Department.",
      highlighted: true,
    },
    {
      period: "2016 – 2024",
      location: "Indonesia",
      title: "Independent Educator & Consultant",
      description: "Multi-school operations with comprehensive curriculum implementation across Indonesia.",
      highlighted: false,
    },
    {
      period: "Earlier",
      location: "Sakhalin, Russia",
      title: "ESL Consultant & Trainer",
      description: "Company formation and curriculum design for corporate English training programs.",
      highlighted: false,
    },
    {
      period: "Earlier",
      location: "Venezuela",
      title: "Corporate ESL & Professional Trainer",
      description: "Specialized training in Aviation English, Medical English, and Legal English for corporate clients.",
      highlighted: false,
    },
    {
      period: "2009 – 2016",
      location: "Thailand",
      title: "Regional Lead & Trainer – British Council",
      description: "Aptis program implementation, methodology development, and teacher upskilling across the region.",
      highlighted: false,
    },
    {
      period: "Earlier",
      location: "Oman",
      title: "ESL Trainer – Ibri College",
      description: "English language instruction at tertiary level.",
      highlighted: false,
    },
    {
      period: "Earlier",
      location: "Bolivia",
      title: "Project Director – Bolivian Government",
      description: "Architected and launched 22 schools, establishing educational infrastructure nationwide.",
      highlighted: false,
    },
    {
      period: "Earlier",
      location: "South Africa",
      title: "Operational Intelligence Officer",
      description: "Strategic leadership, crisis management, and operational intelligence in high-pressure environments.",
      highlighted: false,
    },
  ];

  const expertise = [
    {
      category: "K-12 Curriculum",
      description: "Comprehensive elementary and secondary education frameworks aligned with international standards.",
      icon: "📚",
    },
    {
      category: "Canadian Curriculum",
      description: "Canadian educational standards and assessment methodologies for global implementation.",
      icon: "🍁",
    },
    {
      category: "South African Curriculum",
      description: "CAPS-aligned curricula with contextual adaptation for diverse educational contexts.",
      icon: "🌍",
    },
    {
      category: "Technical English",
      description: "Specialized technical vocabulary and communication skills for engineering and technology sectors.",
      icon: "⚙️",
    },
    {
      category: "Aviation English",
      description: "ICAO-compliant aviation English training for pilots, air traffic controllers, and aviation professionals.",
      icon: "✈️",
    },
    {
      category: "Medical English",
      description: "Healthcare-specific English communication training for medical professionals and institutions.",
      icon: "🏥",
    },
    {
      category: "Legal English",
      description: "Legal terminology and professional communication for legal practitioners and law students.",
      icon: "⚖️",
    },
    {
      category: "Corporate ESL",
      description: "Business English programs tailored for corporate environments and professional development.",
      icon: "💼",
    },
  ];

  const skills = [
    "Linux (Ubuntu)",
    "Legacy DOS",
    "Curriculum Development",
    "Corporate Training",
    "Educational Leadership",
    "Cross-Cultural Teams",
    "Program Architecture",
    "Crisis Management",
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32 lg:py-40">
          <div className="max-w-3xl">
            <p className="text-amber-400 font-medium tracking-wider uppercase mb-4 text-sm md:text-base">
              International Educational Consultant
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Vincent Churchill
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
              Highly adaptive Educational Consultant and Language Trainer with an extensive 
              international portfolio spanning four continents. Expert in curriculum development, 
              corporate ESL training, and educational program architecture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/50495924662"
                className="inline-flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold px-8 py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Contact via WhatsApp
              </a>
              <a
                href="#expertise"
                className="inline-flex items-center justify-center gap-2 border-2 border-slate-600 hover:border-slate-500 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200"
              >
                View Expertise
              </a>
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

      {/* Professional Summary */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-slate-50 rounded-2xl p-8 md:p-12 border-l-4 border-amber-500">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              Professional Summary
            </h2>
            <p className="text-slate-700 leading-relaxed text-lg">
              Proven ability to lead cross-cultural teams and implement high-impact educational 
              frameworks in both emerging markets and established institutions. Possesses a 
              unique background in operational intelligence, providing a foundation of extreme 
              discipline, complex problem-solving, and resilience in high-pressure environments. 
              Over 25 years of global experience in curriculum design, corporate ESL training, 
              and educational leadership across four continents.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="py-16 md:py-20 bg-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">
            Technical Competencies
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-slate-800 text-white px-5 py-2.5 rounded-full font-medium text-sm md:text-base"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Professional History Timeline */}
      <section id="history" className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mb-4 text-center">
            Professional History
          </h2>
          <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
            A reverse-chronological overview of international educational leadership and consulting experience
          </p>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 transform md:-translate-x-1/2"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12">
              {workHistory.map((item, index) => (
                <div 
                  key={index} 
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Dot */}
                  <div className={`absolute left-4 md:left-1/2 w-4 h-4 rounded-full transform -translate-x-1/2 z-10 ${
                    item.highlighted ? 'bg-amber-500' : 'bg-slate-400'
                  }`}></div>
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                  }`}>
                    <div className={`bg-slate-50 rounded-xl p-6 ${
                      item.highlighted ? 'ring-2 ring-amber-500' : ''
                    }`}>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${
                        item.highlighted 
                          ? 'bg-amber-100 text-amber-800' 
                          : 'bg-slate-200 text-slate-700'
                      }`}>
                        {item.period}
                      </span>
                      <h3 className="font-bold text-slate-900 text-lg mb-1">
                        {item.title}
                      </h3>
                      <p className="text-amber-600 font-medium mb-2">
                        {item.location}
                      </p>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Spacer for other side */}
                  <div className="hidden md:block md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Dashboard */}
      <section id="expertise" className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-center">
            Curriculum Expertise
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Specialized frameworks and programs designed for diverse educational contexts and professional domains
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((item, index) => (
              <div
                key={index}
                className="bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-lg mb-3 text-white">
                  {item.category}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="font-serif text-xl font-bold mb-6 text-amber-400">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-slate-300">
                    El Progreso, Yoro Department, Honduras
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <a 
                    href="https://wa.me/50495924662" 
                    className="text-slate-300 hover:text-amber-400 transition-colors"
                  >
                    +504 9592-4662
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-slate-300">
                    Available upon request
                  </span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-serif text-xl font-bold mb-6 text-amber-400">
                Quick Connect
              </h3>
              <div className="space-y-3">
                <a
                  href="https://wa.me/50495924662"
                  className="inline-flex items-center gap-2 text-slate-300 hover:text-amber-400 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Message on WhatsApp
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-slate-400 text-sm">
                © {new Date().getFullYear()} Vincent Churchill. All rights reserved.
              </p>
              <p className="text-amber-400/80 text-sm font-medium">
                References available upon request
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
