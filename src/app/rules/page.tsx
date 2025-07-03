'use client'

import Image from "next/image";
import Head from "next/head";

import { motion } from "framer-motion"
import { useEffect } from "react";
import { useState } from "react";

import AOS from 'aos'
import 'aos/dist/aos.css'

import ClickSpark from '../ClickSpark/ClickSpark'
import Aurora from '../Aurora/Aurora'
import ShinyText from "../ShinyText/ShinyText";
import SplitText from "../SplitText/SplitText";
import BlurText from "../BlurText/BlurText";
import FadeContent from "../FadeContent/FadeContent";
import RotatingText from "../RotatingText/RotatingText";
import ScrollFloat from "../ScrollFloat/ScrollFloat";
import AnimatedContent from "../AnimatedContent/AnimatedContent";

import '../globals.css'
import { none } from "@tsparticles/engine";

export default function Home() {

  return (
    <>
      <div className="fixed inset-0 -z-10">
        <Aurora
          colorStops={["#ae2012", "#e9d8a6", "#0a9396"]}
          blend={3.0}
          amplitude={0.8}
          speed={0.2}
        />
      </div>

      <div className="relative z-10">
        <div className="absolute left-5 top-1 font-semibold mt-3.5 items-center justify-center" style={{ fontFamily: "'Poppins'"}}>
          <BlurText
            text="OELabs"
            delay={0}
            animateBy="letters"
            direction="top"
            className="text-2xl hidden sm:flex"
          />
        </div>

        <div className="flex justify-center space-x-15 mt-0 h-15 items-center">
          <p className="font-semibold opacity-80 active:text-2xl active:text-blue-50 active:opacity-100 hover:text-2xl hover:text-blue-50 hover:opacity-100 transition-all duration-300 cursor-pointer" style={{ fontFamily: "'Poppins', monoscpace" }}>Rules</p>
        </div>
      </div>

      <div className="flex flex-col items-center mt-30 text-wrap" style={{fontFamily: "'Poppins', monospace"}}>
        <ShinyText text="Rules" disabled={false} speed={2} className="text-3xl lg:text-6xl sm:text-5xl font-bold tracking-wide" />
      
        <SplitText
          text="Read the rules carefully. Okay!"
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

      <div className="flex justify-center items-center mt-10 px-4">
        <div className="w-full max-w-[800px] h-[50vh] bg-gray-600/20 backdrop-blur-2xl border-[3px] border-gray-600/10 rounded-md shadow-md">
          {/* Close, Minimize, Resize, Apple Style */}
          <div className="flex flex-row m-2 gap-2">
            <div className="h-3 w-3 bg-red-600/95 rounded-full"/>
            <div className="h-3 w-3 bg-orange-600/95 rounded-full"/>
            <div className="h-3 w-3 bg-green-600/95 rounded-full"/>
          </div>

          {/* Content */}

          <div className="font-mono m-2 gap-2 mt-3 ml-4">
            <h1>
              guest@user ~ % <span className="font-semibold">show-rules.tsx</span>
            </h1>

            <p className="ml-10 font-semibold ">
              [1]: Respect the website
            </p>
            <p className="ml-10 font-semibold ">
              [2]: Use logic over the luck
            </p>
            <p className="ml-10 font-semibold ">
              [3]: Stay ethics
            </p>
            <p className="ml-10 font-semibold ">
              [4]: No cheat, no exploit
            </p>
            <p className="ml-10 font-semibold ">
              [5]: Real-Time progress
            </p>
            <p className="ml-10 font-semibold ">
              [6]: Learn with fun things
            </p>

            <p className="ml-0 font-semibold ">
              [:/]: Done. executed within <span className="text-blue-600">1ms</span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mt-20">
        <div className="h-5 w-25 bg-blue-600 rounded-full text-center items-center justify-center">
          <p className="flex items-center justify-center font-semibold" style={{ fontFamily: "'Poppins', monospace", fontSize: "14px"}}>
            It's Easy
          </p>
        </div>

        <p className="flex mt-2 font-semibold items-center justify-center text-center" style={{ fontFamily: "'Poppins', monospace", fontSize: "15px"}}>It's easy right? I hope you can understand (: <br/> Understand?</p>
        <a href=".." className="mt-2 underline" style={{ fontFamily: "'Poppins', monospace" }}>Go back to home</a>
      </div>
    </> 
  ); 

  {/*
              [2]: Use logic over the luck
              [3]: Stay ethics
              [4]: No cheat, no exploit
              [5]: Real-Time progress
              [6]: Learn with fun things
    */}
}