
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Achievements from "@/components/Achievements";
import Lectures from "@/components/Lectures";
import Hospital from "@/components/Hospital";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <About />
      <Achievements />
      <Lectures />
      <Hospital />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
