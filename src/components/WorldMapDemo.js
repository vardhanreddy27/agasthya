"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { MapPin, Building, Clock } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const contactDetails = {
  "India (Corporate Office)": {
    address:
      "Unit 3, Floor 20, One West Terminus, Financial District, Nanakramguda, Hyderabad, Telangana 500032",
    contacts: [
      {
        name: "Manvitha Reddy",
        phone: "+91 7075704167",
        email: "manvithareddy.nare@agasthya.co.in",
      },
    ],
  },
  UAE: {
    address:
      "DSO Headquarters Building, A–Wing 06A–07, Dubai Silicon Oasis, Sheikh Mohammed Bin Zayed Road, Dubai",
    contacts: [
      {
        name: "Sharath",
        phone: "+971 564037933",
        email: "sharath.p@futureascenttrade.com",
      },
    ],
  },
  UK: {
    address: "6, Reynolds Way, Croydon CRO 5JW, London",
    contacts: [
      {
        name: "Vijay Kumar",
        phone: "+44 7453884040",
        email: "vijay.dev@futureascenttrade.co.uk",
      },
    ],
  },
  Australia: {
    address: "1G, 528 Compton Road, Stretton QLD 4116, AU",
    contacts: [
      {
        name: "Manoj Sukumaran",
        phone: "+61 452345773",
        email: "manoj@futureascenttrade.com.au",
      },
    ],
  }, "New Zealand": {
    address: "75 Henry Road, Taupiri 3791, New Zealand", 
    contacts: [
      {
        name: "Tisson Thomas",
        phone: "+64 210357807",
        email: "tisson@futureascenttrade.com.au",

      },
    ],
  },
  Canada: {
    address: "310, 1480 Bishops Gate, Oakville, Ontario L6M 4N4",
    contacts: [
      {
        name: "Sunil Manne",
        phone: "+1 18184453135",
        email: "sunil.m@futureascenttrade.ca",
      },
    ],
  },
};

export function WorldMapDemo() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <h1 className="text-center pt-10 text-2xl sm:text-3xl font-bold">Contact Us</h1>
      <div className="w-full bg-white flex flex-col md:flex-row">
        {/* World Map */}
        <div className="w-full md:w-1/2 flex items-center justify-center mt-3 md:mt-0 md:h-[600px]">
          <div className="w-full h-[300px] sm:h-[400px] md:h-full relative">
            <Image
              src="/worldmap.png"
              alt="World Map"
              width={1000}
              height={600}
              className="w-full h-full object-contain"
              priority
            />
          </div>
        </div>

        {/* Contact Info */}
        <div className="w-full md:w-1/2 flex flex-col justify-center p-4 sm:p-6">
          <div className="bg-white w-full space-y-6">
            {/* Factory Address */}
            <div className="flex items-start gap-3">
              <MapPin className="text-gray-500" size={28} />
              <p className="text-sm sm:text-base">
                <strong>Factory Address:</strong>
                <br />
                Plot No 26/A, Industrial Park,
                <br />
                Narmala, Rajanna Sircilla Dt., Telangana 505304
              </p>
            </div>

            {/* Corporate Offices */}
            <div className="flex items-start gap-3">
              <Building className="text-gray-500 mt-1" size={28} />
              <div className="w-full">
                <p className="font-bold mb-2 text-sm sm:text-base">Corporate Offices</p>
                <Accordion type="single" collapsible className="w-full">
                  {Object.entries(contactDetails).map(([country, data], idx) => (
                    <AccordionItem key={idx} value={`item-${idx}`}>
<AccordionTrigger className="text-sm sm:text-base no-underline hover:no-underline">
                        {country}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-gray-700 space-y-2">
                        <p className="whitespace-pre-wrap">{data.address}</p>
                      {data.contacts.map((contact, i) => (
  <div key={i}>
    <p><strong>Name:</strong> {contact.name}</p>
    <p><strong>Phone:</strong> {contact.phone}</p>
    {contact.email && (
      <p className="break-words"><strong>Email:</strong> {contact.email}</p>
    )}
  </div>
))}

                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex items-start gap-3">
              <Clock className="text-gray-500" size={28} />
              <p className="text-sm sm:text-base">
                <strong>Monday–Friday:</strong> 9am – 6pm
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
