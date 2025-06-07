"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { MapPin, Building, Mail, Phone, Clock } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const corporateOffices = [
  {
    country: "India (Corporate Office)",
    address:
      "Unit 3, Floor 20, One West Terminus, Financial District, Nanakramguda, Hyderabad, Telangana 500032",
  },
  {
    country: "UAE",
    address:
      "DSO Headquarters Building, A–Wing 06A–07, Dubai Silicon Oasis, Sheikh Mohammed Bin Zayed Road, Dubai",
  },
  {
    country: "UK",
    address: "6, Reynolds Way, Croydon CRO 5JW, London",
  },
  {
    country: "Australia",
    address: "1G, 528 Compton Road, Stretton QLD 4116, AU",
  },
  {
    country: "Canada",
    address: "310, 1480 Bishops Gate, Oakville, Ontario L6M 4N4",
  },
];

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
        {/* Static World Map Image without cropping */}
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
        <div className="w-full md:w-1/2 flex flex-col  justify-center p-6">
          <div className="bg-white p-6 w-full  space-y-6">
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
                  {corporateOffices.map((office, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="no-underline hover:no-underline decoration-transparent">
                        {office.country}
                      </AccordionTrigger>
                      <AccordionContent>{office.address}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="text-gray-500" />
              <p>
                <strong>Email:</strong> info@agasthya.co.in
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="text-gray-500" />
              <p>
                <strong>Ph:</strong> +91 70757 04167
              </p>
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
