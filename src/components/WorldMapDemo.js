"use client";

import { useEffect, useState } from "react";
import { WorldMap } from "./WorldMap";
import {
  MapPin,
  Building,
  Mail,
  Phone,
  Clock,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


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
        {/* World Map */}
   {/* World Map */}
<div className="w-full md:w-1/2 flex items-center justify-center h-[600px]">
  <WorldMap
    dots={[
      { start: { lat: 3.385, lng: 78.4867 }, end: { lat: 25.276987, lng: 55.296249 } },
      { start: { lat: 3.385, lng: 78.4867 }, end: { lat: 51.5072, lng: -0.1276 } },
      { start: { lat: 3.385, lng: 78.4867 }, end: { lat: -32.4698, lng: 144.0251 } },
      { start: { lat: 3.385, lng: 78.4867 }, end: { lat: 43.4675, lng: -79.6877 } },
    ]}
  />
</div>


        {/* Contact Info */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6">
          <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md space-y-6">
            {/* Factory */}
            <div className="flex items-start gap-4">
              <MapPin className="text-gray-500" size={36} />
              <p>
                <strong>Factory Address:</strong><br />
                Plot No 26/A, Industrial Park,<br />
                Narmala, Rajanna Sircilla Dt., Telangana 505304
              </p>
            </div>

            {/* Corporate Offices Accordion */}
            <div className="flex items-start gap-4">
              <Building className="text-gray-500 mt-1" size={36} />
              <div className="w-full">
                <p className="font-bold mb-2">Corporate Offices</p>
                <Accordion type="single" collapsible className="w-full">
                  {corporateOffices.map((office, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="no-underline hover:no-underline decoration-transparent">{office.country}</AccordionTrigger>
                      <AccordionContent>{office.address}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <Mail className="text-gray-500" />
              <p><strong>Email:</strong> info@agasthya.co.in</p>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <Phone className="text-gray-500" />
              <p><strong>Ph:</strong> +91 70757 04167</p>
            </div>

            {/* Working Hours */}
            <div className="flex items-center gap-4">
              <Clock className="text-gray-500" />
              <p><strong>Monday–Friday:</strong> 9am – 6pm</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
