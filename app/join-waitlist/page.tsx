'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Script from 'next/script';

export default function JoinWaitlist() {
  return (
    <>
      <link 
        rel="stylesheet" 
        type="text/css" 
        href="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.css"
      />
      <Script 
        src="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js"
        strategy="afterInteractive"
      />
      
      <div className="min-h-screen bg-zinc-900">
        <div className="px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/images/smalllogo.png"
                alt="Logo"
                width={80}
                height={80}
                className="mx-auto mb-8"
              />
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Join the Waitlist
              </h1>

              <div className="mt-10 flex justify-center">
                {/* GetWaitlist Widget Container */}
                <div 
                  id="getWaitlistContainer" 
                  data-waitlist_id="22882" 
                  data-widget_type="WIDGET_1"
                  className="w-full max-w-md mx-auto"
                  style={{ display: 'flex', justifyContent: 'center' }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
} 