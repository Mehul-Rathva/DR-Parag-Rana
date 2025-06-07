import React from "react";
import { Calendar, Award, BookOpen, FileText, Medal, PresentationIcon } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-medical-soft-blue/30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-medical-soft-blue/20 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block px-4 py-1 bg-medical-soft-blue text-medical-bright-blue rounded-full text-sm font-medium mb-4">
            Professional Background
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Dr. Parag Rana</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            A dedicated physician with extensive experience in internal medicine, diabetes management, and cardiology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="hover-card-effect">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-medical-bright-blue to-primary rounded-lg blur opacity-10"></div>
              <img
                src="/parag.png"
                alt="Dr. Parag Rana in clinical setting"
                className="rounded-lg shadow-lg w-full h-auto relative z-10"
              />
            </div>
          </div>
          
          <div className="space-y-6 animate-fade-in">
            <div>
              <h3 className="text-2xl font-semibold mb-3 flex items-center text-gray-800">
                <span className="bg-medical-soft-blue p-2 rounded-full mr-3 inline-block">
                  <BookOpen className="text-medical-bright-blue" size={20} />
                </span>
                Dr. Parag's Journey
              </h3>
              <p className="text-gray-700 pl-12">
                Dr. Parag Rana completed his MD Medicine from M.S. University Vadodara in 1997. He then pursued a fellowship in noninvasive cardiology from U.N. Mehta Institute of Cardiology, Ahmedabad. Dr. Parag has extensive experience as an ICU physician at Civil Hospital Bhuj during the earthquake. He is the founder of Dev Medical Hospital in Vadodara where he practices.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-3 flex items-center text-gray-800">
                <span className="bg-medical-soft-blue p-2 rounded-full mr-3 inline-block">
                  <Calendar className="text-medical-bright-blue" size={20} />
                </span>
                Years of Medical Excellence
              </h3>
              <p className="text-gray-700 pl-12">
                With over two decades of experience, Dr. Parag Rana has established himself as a trusted physician in the field of Diabetes-cardiology and internal medicine. His dedication to patient care and continuous learning sets him apart.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-3 flex items-center text-gray-800">
                <span className="bg-medical-soft-blue p-2 rounded-full mr-3 inline-block">
                  <Award className="text-medical-bright-blue" size={20} />
                </span>
                Specialties
              </h3>
              <ul className="list-none space-y-2 text-gray-700 pl-12">
                {["Internal Medicine", "Diabetes Management", "Cardiovascular Health", "Preventive Healthcare", "ICU Care"].map((specialty, index) => (
                  <li key={index} className="flex items-center">
                    <span className="h-2 w-2 bg-medical-bright-blue rounded-full mr-2"></span>
                    {specialty}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-wrap gap-6 pl-12 pt-4">
              <div className="flex items-center backdrop-blur-md bg-white/30 border border-white/30 p-3 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-white/40">
                <div className="bg-white/50 backdrop-blur-sm p-2 rounded-full mr-2 shadow-inner">
                  <Medal className="text-medical-bright-blue" size={20} />
                </div>
                <span className="text-gray-700 font-medium">Multiple Fellowships</span>
              </div>
              <div className="flex items-center backdrop-blur-md bg-white/30 border border-white/30 p-3 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-white/40">
                <div className="bg-white/50 backdrop-blur-sm p-2 rounded-full mr-2 shadow-inner">
                  <FileText className="text-medical-bright-blue" size={20} />
                </div>
                <span className="text-gray-700 font-medium">International Publications</span>
              </div>
              <div className="flex items-center backdrop-blur-md bg-white/30 border border-white/30 p-3 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-white/40">
                <div className="bg-white/50 backdrop-blur-sm p-2 rounded-full mr-2 shadow-inner">
                  <PresentationIcon className="text-medical-bright-blue" size={20} />
                </div>
                <span className="text-gray-700 font-medium">20+ Lectures per Year</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
