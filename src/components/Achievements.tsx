import React from "react";
import { Award, Trophy, Star, Medal, BadgeCheck, FileText, CalendarCheck, Badge } from "lucide-react";

const achievements = [
  {
    id: 1,
    title: "Fellowship by American College of Physicians (FACP)",
    organization: "American College of Physicians",
    year: "March 2024",
    location: "Boston",
    description: "Awarded prestigious fellowship for contributions to the field of medicine",
    icon: <Trophy className="h-8 w-8" />,
    color: "from-blue-500 to-cyan-400"
  },
  {
    id: 2,
    title: "Fellowship by Diabetes India",
    organization: "Diabetes India",
    year: "January 2024",
    location: "Bhuvneshwar",
    description: "Recognized for excellence in diabetes care and management",
    icon: <Award className="h-8 w-8" />,
    color: "from-purple-500 to-pink-400"
  },
  {
    id: 3,
    title: "Fellowship by Indian Society of Cardiology (FISC)",
    organization: "Indian Society of Cardiology",
    year: "October 2023",
    location: "India",
    description: "Honored for contributions to cardiology practice and research",
    icon: <Medal className="h-8 w-8" />,
    color: "from-amber-500 to-orange-400"
  },
  {
    id: 4,
    title: "Fellowship by Indian Society of Hypertension (FISH)",
    organization: "Indian Society of Hypertension",
    year: "September 2023",
    location: "India",
    description: "Recognition for expertise in hypertension management",
    icon: <Star className="h-8 w-8" />,
    color: "from-emerald-500 to-green-400"
  },
  {
    id: 5,
    title: "Fellowship by Indian College of Physicians (FICP)",
    organization: "Indian College of Physicians",
    year: "February 2024",
    location: "India",
    description: "Honored at the annual conference of Association of Physicians",
    icon: <Badge className="h-8 w-8" />,
    color: "from-sky-500 to-blue-400"
  },
  {
    id: 6,
    title: "My FM Award",
    organization: "Divya Bhaskar Media Group",
    year: "2022",
    location: "Vadodara",
    description: "Recognized for contributions to diabetes care in Vadodara",
    icon: <Trophy className="h-8 w-8" />,
    color: "from-rose-500 to-red-400"
  },
  {
    id: 7,
    title: "Post Graduate Diploma in Diabetes Management",
    organization: "Middlesex University",
    year: "2021",
    location: "UK",
    description: "Advanced certification in diabetes care and management",
    icon: <FileText className="h-8 w-8" />,
    color: "from-indigo-500 to-violet-400"
  },
  {
    id: 8,
    title: "NABH Certification",
    organization: "National Accreditation Board for Hospitals",
    year: "2018",
    location: "India",
    description: "First nursing home in the area to receive entry-level NABH certification",
    icon: <BadgeCheck className="h-8 w-8" />,
    color: "from-teal-500 to-green-400"
  },
  {
    id: 9,
    title: "Speaker Level Certification",
    organization: "American Diabetes Association",
    year: "2016",
    location: "Asia Pacific",
    description: "Certified in the Train the Trainer programme at Asia Pacific ADA meeting",
    icon: <CalendarCheck className="h-8 w-8" />,
    color: "from-orange-500 to-amber-400"
  }
];

const publications = [
  {
    id: 1,
    title: "The Polycap Trial",
    journal: "The Lancet",
    year: "2019",
    description: "One of 13 research sites in the famous Polycap trial published by Salim Yusuf from McMaster University, Canada"
  },
  {
    id: 2,
    title: "Heart Disease in Women",
    journal: "India Today",
    year: "February 14, 2022",
    description: "Featured article on cardiovascular health issues specific to women"
  },
  {
    id: 3,
    title: "Landmark Trial on Diabetes Burden",
    journal: "National Research Initiative",
    year: "2020",
    description: "Participated in nationwide study assessing diabetes prevalence in India"
  },
  {
    id: 4,
    title: "Ongoing Research: Enteric Fever Study",
    journal: "National Collaborative Study",
    year: "Current",
    description: "Currently participating in a nationwide study on Enteric fever"
  }
];

const positions = [
  {
    id: 1,
    title: "Secretary",
    organization: "Association of Physicians of Vadodara"
  },
  {
    id: 2,
    title: "Secretary",
    organization: "IDCM (Indian Diabetes of Cardio Metabolic Association)"
  },
  {
    id: 3,
    title: "Member",
    organization: "American Diabetes Association"
  },
  {
    id: 4,
    title: "Member",
    organization: "American College of Physicians"
  },
  {
    id: 5,
    title: "Licensed Physician",
    organization: "Medical Council of India"
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="section-padding relative bg-gradient-to-b from-white to-medical-soft-blue/20">
      <div className="container mx-auto px-4 relative">
        {/* Background decorations */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-medical-sky-blue/10 animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-56 h-56 rounded-full bg-medical-bright-blue/10 animate-pulse"></div>
        </div>
        
        <div className="max-w-3xl mx-auto text-center mb-16 relative">
          <span className="inline-block px-4 py-1 bg-medical-soft-blue text-medical-bright-blue rounded-full text-sm font-medium mb-4">Recognition & Research</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Achievements & Contributions</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-medical-sky-blue to-medical-bright-blue mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Professional accolades, research work, and organizational affiliations throughout Dr. Rana's distinguished medical career
          </p>
        </div>
        
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-medical-bright-blue to-primary bg-clip-text text-transparent">
            Awards & Distinctions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className="relative overflow-hidden rounded-xl backdrop-blur-md bg-gradient-to-br from-white/40 to-white/10 border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-300 p-6 group hover:from-white/50 hover:to-white/20"
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-20 transition-opacity duration-300 group-hover:opacity-30"
                  style={{ backgroundImage: `linear-gradient(to right, ${achievement.color})` }}
                />
                <div className="absolute -inset-1 bg-gradient-to-r opacity-10 blur-xl transition-opacity duration-300 group-hover:opacity-20"
                  style={{ backgroundImage: `linear-gradient(to right, ${achievement.color})` }}
                />
                <div className="relative z-10">
                  <div className="bg-gradient-to-br from-white/70 to-white/30 backdrop-blur-sm p-3 rounded-full w-fit mb-4 shadow-inner group-hover:from-white/80 group-hover:to-white/40 transition-all duration-300">
                    {achievement.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-medical-bright-blue transition-colors duration-300">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600 mb-2 group-hover:text-gray-700 transition-colors duration-300">
                    {achievement.organization}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mb-3 bg-white/30 rounded-full px-3 py-1 w-fit">
                    <span className="mr-2">{achievement.location}</span>
                    <span className="text-medical-bright-blue">•</span>
                    <span className="ml-2">{achievement.year}</span>
                  </div>
                  <p className="text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                    {achievement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-20">
          <div className="bg-gradient-to-br from-white/40 to-white/10 backdrop-blur-md rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-white/30 hover:from-white/50 hover:to-white/20">
            <h3 className="text-2xl font-bold mb-6 flex items-center bg-gradient-to-r from-medical-bright-blue to-primary bg-clip-text text-transparent">
              <div className="bg-gradient-to-br from-white/70 to-white/30 backdrop-blur-sm p-2 rounded-full mr-3 shadow-inner">
                <FileText className="text-medical-bright-blue" size={24} />
              </div>
              Publications & Research
            </h3>
            <div className="space-y-6">
              {publications.map((pub) => (
                <div 
                  key={pub.id} 
                  className="border-l-4 border-medical-bright-blue pl-4 hover:bg-white/40 p-3 rounded-r-lg transition-all duration-300 backdrop-blur-sm"
                >
                  <h4 className="font-semibold text-lg text-gray-800">{pub.title}</h4>
                  <p className="text-medical-bright-blue text-sm">{pub.journal}, {pub.year}</p>
                  <p className="text-gray-700 mt-2">{pub.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white/30 backdrop-blur-md rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-white/30 mt-12">
            <h3 className="text-2xl font-bold mb-6 flex items-center text-gray-800">
              <div className="bg-white/50 backdrop-blur-sm p-2 rounded-full mr-3 shadow-inner">
                <BadgeCheck className="text-medical-bright-blue" size={24} />
              </div>
              Professional Positions & Memberships
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {positions.map((position) => (
                <div 
                  key={position.id} 
                  className="flex items-center p-4 rounded-lg bg-white/40 backdrop-blur-sm hover:bg-white/50 transition-all duration-300 border border-white/30"
                >
                  <div className="bg-white/70 rounded-full p-2 shadow-inner mr-4">
                    <Medal className="text-medical-bright-blue h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{position.title}</h4>
                    <p className="text-gray-700">{position.organization}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 border border-white/30 rounded-lg bg-white/40 backdrop-blur-sm">
              <h4 className="font-semibold flex items-center text-gray-800">
                <div className="bg-white/70 rounded-full p-2 shadow-inner mr-2">
                  <CalendarCheck className="text-medical-bright-blue" size={18} />
                </div>
                ADA Conference Attendance
              </h4>
              <p className="text-gray-700 mt-3">
                Attended Asia Pacific American Diabetes Association (ADA) meetings from 2008 to 2016, followed by ADA conferences in San Diego (2017, 2023), Orlando (2018), San Francisco (2019), and New Orleans (2022).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
