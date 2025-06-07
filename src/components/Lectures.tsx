import React, { useState } from "react";
import { 
  Calendar, 
  PresentationIcon, 
  MapPin, 
  Search, 
  CalendarDays,
  FileText 
} from "lucide-react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const lectures = [
  {
    id: 1,
    title: "Ultra long insulins, out with the old, in with the new",
    event: "RSSDI 2023 Diabetica State Level Conference",
    location: "Gandhinagar",
    date: "March 2023",
    type: "Speaker"
  },
  {
    id: 2,
    title: "Session Chair",
    event: "10th Annual Conference of DRWA",
    location: "Calcutta",
    date: "3rd June 2023",
    type: "Chairperson"
  },
  {
    id: 3,
    title: "ADA 2023 Updates",
    event: "IDCM Annual National Conference",
    location: "Hotel Sayaji, Vadodara",
    date: "14th July 2023",
    type: "Speaker"
  },
  {
    id: 4,
    title: "ADA 2022 update on diabetes and fatty liver",
    event: "IDCM Conference",
    location: "Hotel Sayaji, Vadodara",
    date: "July 2022",
    type: "Speaker"
  },
  {
    id: 5,
    title: "Maintaining glycemic harmony with newer insulins",
    event: "Diabetes Management Symposium",
    location: "Vadodara",
    date: "August 2022",
    type: "Speaker"
  },
  {
    id: 6,
    title: "Envisaging the role of basal insulins in diabetes management",
    event: "Clinical Practice Update",
    location: "Vadodara",
    date: "August 2022",
    type: "Speaker"
  },
  {
    id: 7,
    title: "Hypoglycemia; implications on optimum insulinisation",
    event: "Diabetes Care Workshop",
    location: "Vadodara",
    date: "August 2022",
    type: "Speaker"
  },
  {
    id: 8,
    title: "ADA 2022 update for physicians",
    event: "Physician Education Series",
    location: "Fern Hotel Akota",
    date: "2nd September 2022",
    type: "Speaker"
  },
  {
    id: 9,
    title: "Targeting HbA1c; one size does not fit all",
    event: "Precision Medicine Conference",
    location: "Vadodara",
    date: "September 2022",
    type: "Speaker"
  },
  {
    id: 10,
    title: "Achieving total control with Insulin coformulation, A patient centric approach",
    event: "Patient Care Symposium",
    location: "Vadodara",
    date: "October 2022",
    type: "Speaker"
  },
  {
    id: 11,
    title: "Type 2 Diabetes Management and COVID-19, charting pathway through Total control",
    event: "COVID-19 and Comorbidities Conference",
    location: "Vadodara",
    date: "November 2022",
    type: "Speaker"
  },
  {
    id: 12,
    title: "Gen 2:basal insulin :outcomes in various patient profiles",
    event: "Insulin Management Workshop",
    location: "Vadodara",
    date: "December 2022",
    type: "Speaker"
  },
  {
    id: 13,
    title: "Session Chair on newer cardiovascular drugs",
    event: "National Conference of Indian Society of Cardiology",
    location: "India",
    date: "October 2023",
    type: "Chairperson"
  },
  {
    id: 14,
    title: "Insulin Initiation Hacks",
    event: "Ahmedabad Physicians Association",
    location: "Ahmedabad",
    date: "October 23, 2023",
    type: "Panelist"
  },
  {
    id: 15,
    title: "Session Chair",
    event: "Bankers Cardcon Annual Conference",
    location: "India",
    date: "October 26, 2023",
    type: "Chairperson"
  },
  {
    id: 16,
    title: "Newer Cardiovascular Drugs",
    event: "Cardiovascular Medicine Update",
    location: "Vadodara",
    date: "October 27, 2023",
    type: "Speaker"
  },
  {
    id: 17,
    title: "Public Awareness Campaign",
    event: "RSSDI Awareness Campaign at Dear Zindagi Senior Care",
    location: "Vadodara",
    date: "November 5, 2023",
    type: "Campaign Leader"
  },
  {
    id: 18,
    title: "Timely concepts: advances in basal insulin therapy",
    event: "5th Conference of Pregnancy Study Group",
    location: "Ahmedabad",
    date: "December 2023",
    type: "Speaker"
  },
  {
    id: 19,
    title: "Statins and PCKS 9 inhibitions - first line of therapy for Hypercholesterolemia",
    event: "Swasthyacon 2024",
    location: "Ahmedabad",
    date: "January 2024",
    type: "Speaker"
  },
  {
    id: 20,
    title: "Session Chair",
    event: "JIC 2024 Conference",
    location: "CIMS MARINGO Hospital, Ahmedabad",
    date: "January 2024",
    type: "Chairperson"
  },
  {
    id: 21,
    title: "Rapporteur in Paediatric Diabetes Symposium",
    event: "Diabetes India 2024 Conference",
    location: "Bhuvneshwar",
    date: "January 2024",
    type: "Rapporteur"
  },
  {
    id: 22,
    title: "Session Chair",
    event: "ACP Outreach Program",
    location: "India",
    date: "February 11, 2024",
    type: "Chairperson"
  },
  {
    id: 23,
    title: "Precision in practice: unveiling the varied attributes of a coformulation",
    event: "Clinical Practice Symposium",
    location: "Vadodara",
    date: "February 2, 2024",
    type: "Speaker"
  },
  {
    id: 24,
    title: "Insulin Workshop",
    event: "2024 RSSDI Diabetica State Level Conference",
    location: "Surat",
    date: "March 2024",
    type: "Workshop Leader"
  }
];

const historicEvents = [
  {
    id: 1,
    title: "Master of Ceremony",
    event: "Mid Annual APG (Association of Physicians of Gujarat)",
    location: "Bhuj",
    date: "1998",
    description: "Served as the master of ceremony for this important regional medical conference"
  },
  {
    id: 2,
    title: "Master of Ceremony",
    event: "Annual APG",
    location: "Vadodara",
    date: "1999",
    description: "Served as the master of ceremony for the annual physician gathering"
  }
];

const Lectures = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");

  const filteredLectures = lectures.filter(lecture => {
    const matchesSearch = lecture.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        lecture.event.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        lecture.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (filter === "all") return matchesSearch;
    return matchesSearch && lecture.type.toLowerCase() === filter.toLowerCase();
  });

  const years = ["2024", "2023", "2022", "Earlier"];
  
  return (
    <section id="lectures" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block px-4 py-1 bg-medical-soft-blue text-medical-bright-blue rounded-full text-sm font-medium mb-4">
            Knowledge Sharing
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Lectures & Conferences</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-medical-sky-blue to-medical-bright-blue mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Dr. Parag Rana regularly shares his expertise at prestigious medical conferences and educational events
          </p>
        </div>
        
        <div className="mb-8 flex flex-col md:flex-row gap-4 items-center">
          <div className="relative w-full md:w-1/2">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search lectures..."
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-medical-bright-blue"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex gap-2 flex-wrap justify-center w-full md:w-auto">
            <Button 
              variant={filter === "all" ? "default" : "outline"} 
              size="sm"
              onClick={() => setFilter("all")}
              className="rounded-full min-w-[80px]"
            >
              All
            </Button>
            <Button 
              variant={filter === "speaker" ? "default" : "outline"} 
              size="sm"
              onClick={() => setFilter("speaker")}
              className="rounded-full min-w-[100px]"
            >
              <PresentationIcon className="mr-1" size={16} /> Speaker
            </Button>
            <Button 
              variant={filter === "chairperson" ? "default" : "outline"} 
              size="sm"
              onClick={() => setFilter("chairperson")}
              className="rounded-full min-w-[100px]"
            >
              Chairperson
            </Button>
            <Button 
              variant={filter === "panelist" ? "default" : "outline"} 
              size="sm"
              onClick={() => setFilter("panelist")}
              className="rounded-full min-w-[90px]"
            >
              Panelist
            </Button>
          </div>
        </div>
        
        <div className="mb-10 overflow-x-auto bg-white rounded-xl shadow-md max-w-full">
          <div className="min-w-[800px] lg:min-w-full"> {/* Horizontal scroll container for mobile */}
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-1/4">Title</TableHead>
                  <TableHead className="w-1/4">Event</TableHead>
                  <TableHead className="w-1/6">Location</TableHead>
                  <TableHead className="w-1/6">Date</TableHead>
                  <TableHead className="w-1/6">Role</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredLectures.length > 0 ? (
                  filteredLectures.map((lecture) => (
                    <TableRow key={lecture.id} className="hover:bg-medical-soft-blue/10">
                      <TableCell className="font-medium max-w-[250px] truncate">{lecture.title}</TableCell>
                      <TableCell className="max-w-[250px] truncate">{lecture.event}</TableCell>
                      <TableCell className="flex items-center whitespace-nowrap">
                        <MapPin className="mr-1 text-medical-bright-blue flex-shrink-0" size={16} /> {lecture.location}
                      </TableCell>
                      <TableCell>
                        <span className="flex items-center whitespace-nowrap">
                          <CalendarDays className="mr-1 text-medical-bright-blue flex-shrink-0" size={16} /> {lecture.date}
                        </span>
                      </TableCell>
                      <TableCell>
                        <span className="bg-medical-soft-blue text-medical-bright-blue px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap">
                          {lecture.type}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center py-8">
                      No lectures match your search criteria
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>

        <div className="my-12">
          <h3 className="text-2xl font-bold mb-6 text-center flex items-center justify-center">
            <CalendarDays className="mr-2 text-medical-bright-blue" />
            Notable Historical Engagements
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {historicEvents.map((event) => (
              <Card key={event.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-3">
                    <span className="bg-medical-soft-blue text-primary-foreground px-4 py-1 rounded-full text-sm font-medium w-fit">
                      {event.date}
                    </span>
                    <FileText className="text-medical-bright-blue hidden sm:block" size={20} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                  <div className="space-y-1 text-gray-600">
                    <p className="font-medium">{event.event}</p>
                    <p className="flex items-center">
                      <MapPin className="mr-1 text-medical-bright-blue flex-shrink-0" size={16} /> {event.location}
                    </p>
                    <p className="mt-3 text-sm">{event.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lectures;
