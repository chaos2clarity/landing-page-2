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
      
      <div className="min-h-screen bg-white">
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
            <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
          </div>

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
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Join the Waitlist
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Be among the first to experience Clarity - the next generation of scientific note-taking.
                Sign up now and get early access when we launch.
              </p>

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

          <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
            <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
          </div>
        </div>
      </div>
    </>
  );
} 