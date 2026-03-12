import { useNavigate } from 'react-router-dom';
import { Calendar, MapPin } from 'lucide-react';

const Projects1 = () => {
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      name: 'মনোরঞ্জন-সুখ নিকেতন',
      date: 'Ongoing',
      video:
        'https://player.cloudinary.com/embed/?cloud_name=dtbgkad9m&public_id=whatsapp-video-2026-01-10-at-133529_Af8sOBYV_bwwl8n&profile=cld-default&autoplay=1',
      description:
        'সম্প্রতি আমাদের ট্রাস্টের একটি নতুন মানবিক প্রকল্প হিসেবে একটি বৃদ্ধাশ্রম (আশ্রয়হীনদের জন্য আশ্রয়স্থল) নির্মাণের পরিকল্পনা গ্রহণ করা হয়েছে ।',
      location: 'করবাড়ি স্টপেজ অশোকপুর , পূর্বময়না পাড়া',
      ongoing: true,
    },
    
  ];

  const handleProjectClick = (projectId: number) => {
    if (projectId === 1) {
      navigate('/project-details');
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-[#0e0e0e]">
      {/* Heading and Description */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#b0db9c] mb-4">
          Ongoing Projects
        </h2>
        <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
          অচেনা সুখ স্বপ্ন দেখে এমন এক আশ্রয়ের,
          যেখানে ভাগ্যের উপহাসে জর্জরিত অসহায় দরিদ্র বৃদ্ধ-বৃদ্ধা এবং শিশুরা পাবে নিরাপদ একটু ঠাঁই —
          নিঃশর্ত, নিঃস্বার্থ, আর নিঃশঙ্ক...
          <br />
          <br />
          আর কিছুদিনের অপেক্ষা...
        </p>
      </div>

      {/* Responsive Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              onClick={() => handleProjectClick(project.id)}
              className={`group rounded-2xl overflow-hidden bg-[#141414] ring-1 ring-white/10 hover:ring-[#b0db9c]/80 transition-all shadow-sm hover:shadow-lg flex flex-col ${
                project.id === 1 ? 'cursor-pointer' : ''
              }`}
              role={project.id === 1 ? 'button' : 'article'}
              tabIndex={project.id === 1 ? 0 : -1}
              onKeyDown={(e) => {
                if (project.id === 1 && (e.key === 'Enter' || e.key === ' ')) {
                  handleProjectClick(project.id);
                }
              }}
            >
              <div className="relative aspect-[16/10] bg-gradient-to-b from-[#1b1b1b] to-[#121212]">
                {project.video ? (
                  <iframe
                    src={project.video}
                    className="absolute inset-0 w-full h-full"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                  />
                ) : (
                  <img
                    src={project.image}
                    alt={project.name}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                )}
                {project.ongoing && (
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex items-center gap-2 bg-black/70 rounded-full px-2.5 py-1 shadow">
                    <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-[10px] sm:text-xs text-white font-semibold select-none">LIVE</span>
                  </div>
                )}
                <div className="absolute left-3 bottom-3 sm:left-4 sm:bottom-4">
                  <span className="inline-flex items-center rounded-full bg-[#b0db9c] text-black px-2 py-0.5 sm:px-2.5 sm:py-1 text-[10px] sm:text-xs font-semibold shadow">
                    {project.date}
                  </span>
                </div>
                <div className="absolute right-3 bottom-3 sm:right-4 sm:bottom-4 max-w-[60%] sm:max-w-[65%]">
                  <span className="inline-flex items-center gap-1 rounded-full bg-black/60 backdrop-blur px-2 py-0.5 sm:px-2.5 sm:py-1 text-[10px] sm:text-xs text-white ring-1 ring-white/10">
                    <MapPin className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#b0db9c]" aria-hidden="true" />
                    <span className="truncate">{project.location}</span>
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-6 flex-1 flex flex-col">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 tracking-tight text-[#b0db9c]">
                  {project.name}
                </h3>
                <p className="text-gray-400 text-sm sm:text-[15px] mb-4 sm:mb-5 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="mt-auto flex items-center gap-4 text-[11px] sm:text-xs text-gray-400">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" aria-hidden="true" />
                    <span aria-label={`Scheduled month ${project.date}`}>{project.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5 min-w-0">
                    <MapPin className="w-4 h-4" aria-hidden="true" />
                    <span className="truncate" aria-label="Project location">
                      {project.location}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects1;
