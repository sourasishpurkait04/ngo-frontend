import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Calendar, Users, ArrowRight, Tag } from 'lucide-react';

const Projects = () => {
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      name: 'বৃক্ষরোপণ',
      date: 'August(monsoon)',
      image: 'https://res.cloudinary.com/dtbgkad9m/image/upload/v1768227483/WhatsApp_Image_2026-01-12_at_19.39.50_1_dcuajo.jpg',
      description:
        'প্রতিবছর বর্ষাকালে সমুদ্র উপকূলবর্তী এলাকা এবং বিভিন্ন বিদ্যালয় প্রাঙ্গণে নতুন চারা গাছ লাগানো হয়।',
      beneficiaries: 5000,
    },
    {
      id: 6,
      name: "রক্তদান শিবির ",
      date: "Summar (Once a Year)",
      location: "Kakdwip",
      image:
        "https://res.cloudinary.com/dtbgkad9m/image/upload/v1768227482/WhatsApp_Image_2026-01-12_at_19.39.49_dacygv.jpg",
      description: "বছরে একবার  রক্তদান শিবিরের আয়োজন করা হয়।",
      beneficiaries: 100,
      photos: [],
    },
    // {
    //   id: 2,
    //   name: 'সুখের পোশাক',
    //   date: 'September-October(DurgaPuja)',
    //   image: 'https://res.cloudinary.com/dtbgkad9m/image/upload/v1768227483/WhatsApp_Image_2026-01-12_at_19.39.51_am7rdn.jpg',
    //   description:
    //     'প্রতিবছর ছোট ছোট শিশু ও বয়স্ক বৃদ্ধ বৃদ্ধাদের পূজার নতুন পোশাক দেওয়া হয় ।',
    //   beneficiaries: 900,
    // },
    // {
    //   id: 3,
    //   name: 'কম্বল বিতরণ',
    //   date: 'December(Winter)',
    //   image: 'https://res.cloudinary.com/dtbgkad9m/image/upload/v1756484365/Dress_fvc3b8.png',
    //   description:
    //     'শীতকালে রাস্তার ভবঘুরে এবং শীতার্ত মানুষদের নতুন কম্বল বিতরণ করা হয়।',
    //   beneficiaries: 700,
    // },
    // {
    //   id: 4,
    //   name: 'মনোরঞ্জন-সুখ নিকেতন',
    //   date: 'February 2026',
    //   image: 'https://res.cloudinary.com/dtbgkad9m/image/upload/v1756484364/Plantation_2_ahp6vj.png',
    //   description:
    //     'সম্প্রতি আমাদের ট্রাস্টের একটি নতুন মানবিক প্রকল্প হিসেবে একটি বৃদ্ধাশ্রম নির্মাণের পরিকল্পনা গ্রহণ করা হয়েছে।',
    //   beneficiaries: 1000,
    // },
  ];

  const handleProjectClick = (projectId: number) => {
    if (projectId === 4) {
      navigate('/project-details');
    }
  };

  return (
    <section className="relative py-20 bg-[#0e0e0e]">
      {/* layered background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black via-[#0e0e0e] to-black" />
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#b0db9c]/10 blur-3xl" />
      <div className="container mx-auto px-4 relative">
        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <h2 className="bg-gradient-to-r from-white to-[#b0db9c] bg-clip-text text-transparent text-4xl md:text-5xl font-extrabold tracking-tight">
              Upcoming Projects
            </h2>
            <p className="mt-3 text-lg text-gray-400 max-w-2xl">
              Discover our latest initiatives and how they&apos;re making a difference
            </p>
          </div>

          {/* Non-interactive filter chips (visual grouping) */}
          <div
            className="flex flex-wrap items-center gap-2"
            aria-label="Project categories"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-gray-300">
              <Tag className="h-4 w-4 text-[#b0db9c]" aria-hidden="true" />
              Education
            </span>
            {/* <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-gray-300">
               <Tag className="h-4 w-4 text-[#b0db9c]" aria-hidden="true" />
               Health
             </span> */}
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-gray-300">
              <Tag className="h-4 w-4 text-[#b0db9c]" aria-hidden="true" />
              Community
            </span>
          </div>
        </div>

        {/* Cards list (semantic) */}
        <ul
          role="list"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          aria-label="Upcoming project cards"
        >
          {projects.map((project, index) => (
            <li key={project.id} role="listitem" className="group">
              <article
                onClick={() => handleProjectClick(project.id)}
                className="h-full rounded-2xl overflow-hidden bg-[#141414] ring-1 ring-white/10 transition-all duration-300 hover:ring-[#b0db9c]/40 focus-within:ring-[#b0db9c]/60 shadow-[0_0_0_0_rgba(0,0,0,0)] hover:shadow-[0_10px_40px_rgba(176,219,156,0.12)] cursor-pointer"
                style={{ viewTransitionName: `project-${project.id}`, animationDelay: `${index * 120}ms` }}
              >
                {/* Media */}
                <div className="relative aspect-[16/10] bg-gradient-to-b from-[#1b1b1b] to-[#121212]">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                  {/* month badge */}
                  <div className="absolute left-4 top-4">
                    <span className="inline-flex items-center rounded-full bg-[#b0db9c] text-black px-2.5 py-1 text-xs font-semibold shadow">
                      {project.date}
                    </span>
                  </div>
                  {/* beneficiaries badge */}
                  <div className="absolute right-4 top-4">
                    <span className="inline-flex items-center gap-1 rounded-full bg-black/60 backdrop-blur px-2.5 py-1 text-xs text-white ring-1 ring-white/10">
                      <Users className="h-3.5 w-3.5 text-[#b0db9c]" aria-hidden="true" />
                      {project.beneficiaries.toLocaleString()}+
                    </span>
                  </div>

                  {/* bottom vignette */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 tracking-tight group-hover:text-[#b0db9c] transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-5 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  {/* meta row */}
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" aria-hidden="true" />
                      <span aria-label={`Scheduled month ${project.date}`}>{project.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Users className="w-4 h-4" aria-hidden="true" />
                      <span aria-label={`${project.beneficiaries} beneficiaries`}>
                        {project.beneficiaries.toLocaleString()} people
                      </span>
                    </div>
                  </div>
                </div>

                {/* subtle underline hover accent */}
                <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[#b0db9c]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </article>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-full bg-[#2b2b2b] px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-[#b0db9c] hover:text-black hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b0db9c] focus-visible:ring-offset-2 focus-visible:ring-offset-black shadow-lg hover:shadow-[0_0_30px_rgba(176,219,156,0.45)]"
            aria-label="View all projects"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
