import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Calendar, 
  Building2, 
  Stethoscope, 
  Microscope, 
  Trophy, 
  Users 
} from "lucide-react";

const hospitalFeatures = [
  {
    id: 1,
    icon: Building2,
    title: "State-of-the-art Facility",
    description: "Modern infrastructure with the latest medical equipment and comfortable patient rooms"
  },
  {
    id: 2,
    icon: Stethoscope,
    title: "Specialized Departments",
    description: "Comprehensive healthcare with specialized departments covering all major medical fields"
  },
  {
    id: 3,
    icon: Microscope,
    title: "Advanced Diagnostics",
    description: "Cutting-edge diagnostic facilities with rapid and accurate results"
  },
  {
    id: 4,
    icon: Calendar,
    title: "24/7 Emergency Care",
    description: "Round-the-clock emergency services with rapid response teams"
  },
  {
    id: 5,
    icon: Trophy,
    title: "Accredited Excellence",
    description: "Nationally recognized for quality healthcare and patient safety standards"
  },
  {
    id: 6,
    icon: Users,
    title: "Expert Medical Team",
    description: "Team of highly qualified specialists and experienced healthcare professionals"
  }
];

const Hospital = () => {
  return (
    <section id="hospital" className="section-padding bg-medical-soft-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Dev Medical Hospital</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            A center of excellence providing comprehensive healthcare services
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div>
            <img
              src="/dev hospital 1.png"
              alt="Dev Medical Hospital Building"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-4">About Our Hospital</h3>
            <p className="text-gray-700 mb-6">
              Dev Medical Hospital is a premier healthcare institution committed to providing exceptional medical care with compassion and expertise. Established in 1995, our hospital has grown to become a trusted name in healthcare, serving thousands of patients each year with our comprehensive medical services.
            </p>
            <p className="text-gray-700">
              Located in the heart of the city with excellent accessibility, our hospital combines cutting-edge technology with a patient-centered approach. Our team of experienced physicians, including Dr. Parag Rana, works collaboratively to deliver personalized treatment plans and ensure the best possible outcomes for our patients.
            </p>
          </div>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hospitalFeatures.map((feature) => (
            <Card 
              key={feature.id} 
              className="backdrop-blur-md bg-white/30 border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-white/40 group"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-white/50 backdrop-blur-sm p-3 rounded-full mr-4 shadow-inner group-hover:bg-white/70 transition-all duration-300">
                    <feature.icon className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
                </div>
                <p className="text-gray-700">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hospital;
