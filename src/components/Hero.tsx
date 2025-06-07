import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Stethoscope } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-medical-soft-blue via-white to-white min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-medical-sky-blue/10 animate-pulse" />
        <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-primary/10 animate-pulse" />
        <div className="absolute top-40 left-1/4 w-32 h-32 rounded-full bg-medical-bright-blue/5 animate-pulse" />
      </div>
      
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="order-2 md:order-1 animate-fade-in">
          <span className="inline-block px-4 py-1 bg-medical-soft-blue text-medical-bright-blue rounded-full text-sm font-medium mb-6 transform transition-transform hover:scale-105">
            MD in Medicine, Diabetes & Cardiology Specialist
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
            Dr. Parag <span className="text-medical-bright-blue">Rana</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-lg">
            With over 25 years of expertise in diabetes management and cardiology, 
            I am committed to providing evidence-based, compassionate care at 
            Dev Medical Hospital in Vadodara.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="rounded-full group transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-xl bg-gradient-to-r from-medical-bright-blue to-primary" asChild>
              <a href="#contact" className="flex items-center">
                <Stethoscope className="mr-2 h-5 w-5" />
                Get Consultation
                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full border-2 hover:bg-medical-soft-blue/50 transition-all duration-300" asChild>
              <a href="#about">Learn More</a>
            </Button>
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center md:justify-end relative animate-fade-in">
          <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden shadow-xl animate-float">
            <img
              src="/parag main.png"
              alt="Dr. Parag Rana"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 right-0 md:-bottom-4 md:right-4 bg-white px-6 py-3 rounded-lg shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
            <span className="text-lg font-bold text-medical-bright-blue">25+ Years</span>
            <p className="text-sm text-gray-600">of Excellence</p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export default Hero;
