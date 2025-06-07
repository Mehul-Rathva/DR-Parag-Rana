import React, { FormEvent, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    reason: ''
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    try {
      // You can replace this with your preferred email service implementation
      const mailtoLink = `mailto:askdrparag@gmail.com?subject=New Appointment Request&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0APreferred Date: ${formData.date}%0D%0AReason: ${formData.reason}`;
      window.location.href = mailtoLink;
      
      // Clear form after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        reason: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      alert('There was an error sending your appointment request. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Information</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Get in touch to schedule a consultation or learn more about our services
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <Card className="backdrop-blur-md bg-white/30 border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-gray-800">Contact Details</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-white/50 backdrop-blur-sm p-2 rounded-full mr-4 shadow-inner">
                      <Phone className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Phone</p>
                      <a href="tel:+0265-2395950,2395750,
                         9512222561" 
                         className="text-gray-700 hover:text-primary transition-colors">
                         0265-2395950,2395750,
                         9512222561
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-white/50 backdrop-blur-sm p-2 rounded-full mr-4 shadow-inner">
                      <Mail className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Email</p>
                      <a href="mailto:askdrparag@gmail.com" className="text-gray-700 hover:text-primary transition-colors">
                        askdrparag@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-white/50 backdrop-blur-sm p-2 rounded-full mr-4 shadow-inner">
                      <MapPin className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Location</p>
                      <address className="text-gray-700 not-italic">
                        Dev Medical Hospital<br />
                        S-9 to 15,Dev Commercial Center<br />
                        Nr.Race Cource Circle/Natubhai Centre,<br />
                        Gotri Road, Vadodara - 390 021,<br/>
                        Gujrat(INDIA)
                      </address>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-white/50 backdrop-blur-sm p-2 rounded-full mr-4 shadow-inner">
                      <Clock className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Consultation Hours</p>
                      <div className="text-gray-700">
                        <p>Monday - Friday: 10:00 AM - 1:00 PM & 5:00 PM - 7:00 PM</p>
                        <p>Saturday: 10:00 AM - 1:00 PM</p>
                        <p className="text-sm text-medical-bright-blue mt-2">Emergency services available 24/7</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-2">
            <Card className="backdrop-blur-md bg-white/30 border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-gray-800">Request a Consultation</h3>
                
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="font-medium text-sm text-gray-800">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        placeholder="Your full name"
                        required
                        className="bg-white/50 backdrop-blur-sm border-white/30 focus:border-primary/50 transition-all"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="font-medium text-sm text-gray-800">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your email address"
                        required
                        className="bg-white/50 backdrop-blur-sm border-white/30 focus:border-primary/50 transition-all"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="font-medium text-sm text-gray-800">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        placeholder="Your phone number"
                        required
                        className="bg-white/50 backdrop-blur-sm border-white/30 focus:border-primary/50 transition-all"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="date" className="font-medium text-sm text-gray-800">
                        Preferred Date
                      </label>
                      <Input
                        id="date"
                        type="date"
                        required
                        className="bg-white/50 backdrop-blur-sm border-white/30 focus:border-primary/50 transition-all"
                        value={formData.date}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="reason" className="font-medium text-sm text-gray-800">
                      Medical Concern
                    </label>
                    <Textarea
                      id="reason"
                      placeholder="Please briefly describe your medical concern or reason for consultation"
                      rows={4}
                      required
                      className="bg-white/50 backdrop-blur-sm border-white/30 focus:border-primary/50 transition-all"
                      value={formData.reason}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-sm text-gray-600">
                      * Our team will review your request and contact you to confirm the consultation timing.
                    </p>
                    <Button type="submit" className="w-full md:w-auto bg-primary/90 hover:bg-primary backdrop-blur-sm transition-all duration-300">
                      <Stethoscope className="w-4 h-4 mr-2" />
                      Request Consultation
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
