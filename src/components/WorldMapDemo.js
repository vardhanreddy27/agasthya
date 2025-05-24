import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { WorldMap } from './WorldMap';
import { MapPin, Building, Mail, Phone, Clock } from 'lucide-react';

export function WorldMapDemo() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (<>
        <h1 className='text-center  pt-14 text-3xl font-bold'>Contact Us</h1>

    <div className="bg-white w-full flex flex-col md:flex-row ">
      {/* Left Side: World Map */}
      <div className="w-full md:w-1/2 flex items-center justify-center">
 <WorldMap
  dots={[
    { start: { lat: 3.3850, lng: 78.4867 }, end: { lat: 25.276987, lng: 55.296249 } }, // UAE (Dubai)
    { start: { lat: 3.3850, lng: 78.4867 }, end: { lat: 25.3548, lng: 51.1839 } },     // Qatar (Doha)
    { start: { lat: 3.3850, lng: 78.4867 }, end: { lat: 21.5126, lng: 55.9233 } },     // Oman (Muscat)
    { start: { lat: 3.3850, lng: 78.4867 }, end: { lat: -30.2744, lng: 132.7751 } },   // Australia
    { start: { lat: 3.3850, lng: 78.4867 }, end: { lat: 56.1304, lng: -106.3468 } },   // Canada
    { start: { lat: 3.3850, lng: 78.4867 }, end: { lat: -30.5595, lng: 22.9375 } },    // South Africa
  ]}
/>


      </div>
      
      {/* Right Side: Contact Details */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-8 text-center md:text-left">
        <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md space-y-4">
          <div className="flex items-center space-x-4">
            <MapPin className="text-gray-500" size={50}/>
            <p><strong>Factory Address:</strong><br/>Plot No 26/A, Industrial Park, Narmala, Rajanna Sircilla Dt., Telangana. 505304</p>
          </div>
          <div className="flex items-center space-x-4">
            <Building className="text-gray-500" size={50}/>
            <p><strong>Corporate Office:</strong><br/>Unit 3, Floor 20, One West Terminus, Financial District, Nanakramguda, Hyderabad, Telangana 500032</p>
          </div>
          <div className="flex items-center space-x-4">
            <Mail className="text-gray-500" />
            <p><strong>Email:</strong> info@agasthya.co.in</p>
          </div>
          <div className="flex items-center space-x-4">
            <Phone className="text-gray-500" />
            <p><strong>Ph:</strong> +91 70757 04167</p>
          </div>
          <div className="flex items-center space-x-4">
            <Clock className="text-gray-500" />
            <p><strong>Monday—Friday:</strong> 9am — 6pm</p>
          </div>
        </div>
      </div>
    </div></>
  );
}
