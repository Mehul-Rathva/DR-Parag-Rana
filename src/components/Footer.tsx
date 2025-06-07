import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Dr. Parag Rana</h3>
            <p className="text-gray-300 mb-4">
              MD in Medicine, General Physician at Dev Medical Hospital with over 20 years of clinical experience.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-white">About Dr. Parag</a>
              </li>
              <li>
                <a href="#achievements" className="text-gray-300 hover:text-white">Achievements</a>
              </li>
              <li>
                <a href="#lectures" className="text-gray-300 hover:text-white">Lectures & Conferences</a>
              </li>
              <li>
                <a href="#hospital" className="text-gray-300 hover:text-white">Hospital Information</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white">Contact & Appointments</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex">
                <Phone className="text-medical-bright-blue mr-3" size={20} />
                <a href="tel:+0265-2395950,2395750,9512222561" className="text-gray-300 hover:text-white">
                  0265-2395950,2395750,
                  9512222561
                </a>
              </li>
              <li className="flex">
                <Mail className="text-medical-bright-blue mr-3" size={20} />
                <a href="mailto:askdrparag@gmail.com" className="text-gray-300 hover:text-white">
                  askdrparag@gmail.com
                </a>
              </li>
              <li className="flex">
                <MapPin className="text-medical-bright-blue mr-3" size={20} />
                <span className="text-gray-300">
                  Dev Medical Hospital<br />
                  S-9 to 15,Dev Commercial Center<br />
                  Nr.Race Cource Circle/Natubhai Centre,<br />
                  Gotri Road, Vadodara - 390 021,<br/>
                  Gujrat(INDIA)
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Dr. Parag Rana. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
