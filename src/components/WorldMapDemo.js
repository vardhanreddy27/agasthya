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
        name: "Shiva",
        phone: "+91 97044 66110",
        email: "shiva.k@agasthya.co.in",
      },
    ],
  },
  UAE: {
    address:
      "DSO Headquarters Building, A–Wing 06A–07, Dubai Silicon Oasis, Sheikh Mohammed Bin Zayed Road, Dubai",
    contacts: [
      {
        name: "Shaik Abdul Rahman",
        phone: "+971 54588 2601",
        email: "rahman@agasthya.co.in",
      },
    ],
  },
  UK: {
    address: "6, Reynolds Way, Croydon CRO 5JW, London",
    contacts: [
      {
        name: "Vijay Kumar",
        phone: "+44 7453 884040",
        email: "vijay.dev@futureascenttrade.co.uk",
      },
    ],
  },
  Australia: {
    address: "1G, 528 Compton Road, Stretton QLD 4116, AU",
    contacts: [
      {
        name: "Ram Babu",
        phone: "+61 452 260 006",
        email: "rambabu@agasthya.co.in",
      },
    ],
  },
  Canada: {
    address: "310, 1480 Bishops Gate, Oakville, Ontario L6M 4N4",
    contacts: [
      {
        name: "Krishna",
        phone: "+1 647 875 8286",
        email: "krishna@agasthya.co.in",
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
      <h1 className="text-center pt-14 text-3xl font-bold">Contact Us</h1>
      <div className="w-full bg-white flex flex-col md:flex-row">
        {/* World Map */}
        <div className="w-full md:w-1/2 h-[600px] flex items-center justify-center">
          <div className="w-full h-full relative">
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
        <div className="w-full md:w-1/2 flex flex-col justify-center p-6">
          <div className="bg-white p-6 w-full space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="text-gray-500" size={36} />
              <p>
                <strong>Factory Address:</strong>
                <br />
                Plot No 26/A, Industrial Park,
                <br />
                Narmala, Rajanna Sircilla Dt., Telangana 505304
              </p>
            </div>

            <div className="flex items-start gap-4">
              <Building className="text-gray-500 mt-1" size={36} />
              <div className="w-full">
                <p className="font-bold mb-2">Corporate Offices</p>
                <Accordion type="single" collapsible className="w-full">
                  {Object.entries(contactDetails).map(([country, data], idx) => (
                    <AccordionItem key={idx} value={`item-${idx}`}>
                      <AccordionTrigger className="no-underline hover:no-underline decoration-transparent">
                        {country}
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-2">{data.address}</p>
                        {data.contacts.map((contact, i) => (
                          <div key={i} className="mb-4 text-sm text-gray-700">
                            <p><strong>Name:</strong> {contact.name}</p>
                            <p><strong>Phone:</strong> {contact.phone}</p>
                            <p><strong>Email:</strong> {contact.email}</p>
                          </div>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Clock className="text-gray-500" />
              <p>
                <strong>Monday–Friday:</strong> 9am – 6pm
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}