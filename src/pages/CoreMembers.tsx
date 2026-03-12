import React, { useState, useEffect } from 'react';
import { Phone, Users } from 'lucide-react';
import Header from '../components/Header';
import coreMembersData from '../pages/coremembers.json';

const CoreMembers = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    setMembers(coreMembersData || []);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0f12] via-[#0b1110] to-black" />
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gradient-to-tr from-[#b0db9c]/30 via-[#78e0dc]/25 to-[#b0db9c]/20 blur-3xl" />
        <div className="container mx-auto px-4 relative">
          <div className="py-24">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-3">Our Core Members</h1>
            <p className="text-lg text-gray-300">Meet all our dedicated team members</p>
          </div>
        </div>
      </section>

      {/* Members Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {members.map((member) => (
            <article
              key={member._id || member.id}
              className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6 transition-all duration-300 hover:border-[#b0db9c]/50 hover:shadow-[0_10px_40px_rgba(176,219,156,0.12)]"
            >
              <div className="flex justify-center mb-4">
                <div className="h-24 w-24 rounded-full p-[2px] bg-gradient-to-tr from-[#b0db9c] via-[#78e0dc] to-[#b0db9c]">
                  <div className="h-full w-full rounded-full overflow-hidden ring-2 ring-white/20">
                    <img
                      src={member.imageUrl}
                      alt={member.name}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.03]"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-[#b0db9c]">{member.position}</p>
                <dl className="mt-4 space-y-2 text-sm">
                  {member.phone && (
                    <div className="flex items-center justify-center gap-2 text-gray-300">
                      <Phone className="w-4 h-4 text-[#b0db9c]" aria-hidden="true" />
                      <dd>
                        <a href={`tel:${String(member.phone).replace(/\s+/g, '')}`} className="hover:text-[#b0db9c] underline transition">
                          {member.phone}
                        </a>
                      </dd>
                    </div>
                  )}
                  {member.blood && (
                    <div className="flex items-center justify-center gap-2 text-gray-400">
                      <Users className="w-4 h-4 text-[#b0db9c]" aria-hidden="true" />
                      <dd>Blood Group: {member.blood}</dd>
                    </div>
                  )}
                </dl>
              </div>
            </article>
          ))}
        </div>
      </section>

    </div>
  );
};

export default CoreMembers;