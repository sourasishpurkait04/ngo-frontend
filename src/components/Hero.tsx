import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateCountdown = () => {
      const targetDate = new Date('2026-03-26T00:00:00').getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateCountdown();
    const timer = setInterval(calculateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
        style={{
          backgroundImage:
            'url("https://res.cloudinary.com/dtbgkad9m/image/upload/v1756218291/Home_page_vdni4x.jpg")',
        }}
        aria-hidden="true"
      />
      {/* Layered overlays for contrast */}
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="mx-auto max-w-4xl px-4 py-[clamp(4rem,8vh,6rem)] text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-3 bg-gradient-to-r from-white to-[#b0db9c] bg-clip-text text-transparent tracking-tight drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]">
            Achena Sukh
            <br />
          </h1>

          {/* Estd line */}
          <div className="mb-6 text-sm md:text-base font-semibold tracking-widest uppercase text-gray-200/90">
            Estd: 22/03/2020
          </div>

          <p className="text-lg md:text-2xl mb-10 text-gray-100/90 max-w-2xl mx-auto leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)]">
            A non-profitable charitable trust dedicated to helping the underprivileged and making a positive impact in the community.
            <br />
            Reg no. - IV-190400062/2021
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/donation"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#b0db9c] px-8 py-4 text-black font-semibold shadow-lg transition
                         hover:bg-white hover:shadow-[0_0_30px_rgba(176,219,156,0.6)]
                         active:scale-[0.99]
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b0db9c] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              aria-label="Donate Now"
            >
              <span>Donate Now</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="#attendance-form"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-red-500 px-8 py-4 text-black font-semibold shadow-lg transition
                         hover:bg-red-600 active:scale-[0.99]
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              aria-label="Blood Donar"
            >
              <span>Blood Donar</span>
            </a>
          </div>          
        </div>
      </div>

      {/* Subtle vignette corners for readability on wide screens */}
      <div className="pointer-events-none absolute inset-0 ring-0 [mask-image:radial-gradient(60%_60%_at_50%_50%,black,transparent)]" aria-hidden="true" />
    </section>
  );
};

export default Hero;


//updated