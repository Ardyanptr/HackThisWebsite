'use client'

import Image from "next/image";
import Head from "next/head";

import { motion } from "framer-motion"
import { useEffect } from "react";
import { useState } from "react";

import AOS from 'aos'
import 'aos/dist/aos.css'

import ShinyText from "../ShinyText/ShinyText";
import SplitText from "../SplitText/SplitText";
import Squares from "../Squares/Squares";

import '../globals.css'
import { none } from "@tsparticles/engine";

export default function Home() {

  return (
    <>
      <div className="fixed inset-0 -z-20 opacity-30">
        <Squares 
            speed={0.1} 
            squareSize={40}
            direction='down'
            borderColor='#fff'
            hoverFillColor='#222'
        />
      </div>

      <div className="flex flex-col items-center mt-30 text-wrap" style={{fontFamily: "'Poppins', monospace"}}>
        <ShinyText text="Learn" disabled={false} speed={2} className="text-3xl lg:text-6xl sm:text-5xl font-bold tracking-wide" />
      
        <SplitText
          text="Start your learning session here!"
          className="mt-5 w-xs text-center text-wrap text-sm sm:text-base sm:w-xl md:text-lg md:w-xl"
          delay={30}
          duration={1.5}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
      </div>

      <div className="flex group items-center justify-center mt-10 m-2">
        <div className="absolute mt-5 group-hover:mt-15 group-active:mt-15 transition-all duration-200 -z-10 h-[70px] max-w-full w-[40vh] bg-green-600 rounded-xl flex flex-col justify-end">
            <h1 className="flex justify-center mb-1" style={{ fontFamily: "'Poppins', monospace"}}>Start learning this</h1>
        </div>

        <div className="flex h-[70px] max-w-full w-[80vh] bg-gray-700 rounded-xl items-center">
            <div className="flex h-[55px] w-[55px] bg-gray-800 ml-2 rounded-xl items-center justify-center">
                <img src="padlock.png" className="size-8 mr-0.5 invert"></img>
            </div>
            
            <div className="flex flex-col ml-3">
                <h1 className="flex font-semibold font-mono text-sm">
                  <a href="session/password-protect">
                    Chapter 1: How to protect your account
                  </a>
                </h1>
            </div>
        </div>
      </div>

      <div className="flex group items-center justify-center mt-10 m-2">
        <div className="absolute mt-5 group-hover:mt-15 group-active:mt-15 transition-all duration-200 -z-10 h-[70px] max-w-full w-[40vh] bg-green-600 rounded-xl flex flex-col justify-end">
            <h1 className="flex justify-center mb-1" style={{ fontFamily: "'Poppins', monospace"}}>Start learning this</h1>
        </div>

        <div className="flex h-[70px] max-w-full w-[80vh] bg-gray-700 rounded-xl items-center">
            <div className="flex h-[55px] w-[55px] bg-gray-800 ml-2 rounded-xl items-center justify-center">
                <img src="padlock.png" className="size-8 mr-0.5 invert"></img>
            </div>
            
            <div className="flex flex-col ml-3">
                <h1 className="flex font-semibold font-mono text-sm">
                  <a href="session/phising">
                    Chapter 2: What's Phising?
                  </a>
                </h1>
            </div>
        </div>
      </div>
    </> 
  ); 
}