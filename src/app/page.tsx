'use client'

import Image from "next/image";
import Head from "next/head";

import { motion } from "framer-motion"
import { useEffect } from "react";
import { useState } from "react";

import AOS from 'aos'
import 'aos/dist/aos.css'

import Aurora from './Aurora/Aurora'
import ShinyText from "./ShinyText/ShinyText";
import SplitText from "./SplitText/SplitText";
import BlurText from "./BlurText/BlurText";
import FadeContent from "./FadeContent/FadeContent";
import AnimatedContent from "./AnimatedContent/AnimatedContent";

import './globals.css'

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const [show, setShow] = useState(false);

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
      </Head>

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
          <a href="rules" className="font-semibold opacity-80 active:text-2xl active:text-blue-50 active:opacity-100 hover:text-2xl hover:text-blue-50 hover:opacity-100 transition-all duration-300 cursor-pointer" style={{ fontFamily: "'Poppins', monoscpace" }}>Rules</a>
          <a href="#get-started" className="font-semibold opacity-80 active:text-2xl active:text-blue-50 active:opacity-100 hover:text-2xl hover:text-blue-50 hover:opacity-100 transition-all duration-300 cursor-pointer" style={{ fontFamily: "'Poppins', monoscpace" }}>Get Started</a>
          <a href="#about-us" className="font-semibold opacity-80 active:text-2xl active:text-blue-50 active:opacity-100 hover:text-2xl hover:text-blue-50 hover:opacity-100 transition-all duration-300 cursor-pointer" style={{ fontFamily: "'Poppins', monoscpace" }}>About</a>
        </div>
      </div>

      <div className="flex flex-col items-center mt-30 text-wrap" style={{fontFamily: "'Poppins', monospace"}}>
        <ShinyText text="HackThisWebsite" disabled={false} speed={2} className="text-3xl lg:text-6xl sm:text-5xl font-bold tracking-wide" />
      
        <SplitText
          text="A cyber arena where hackers worldwide push their limits and break through boundaries."
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

      <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
          <div className="flex justify-center items-center md:gap-10 gap-5 px-4">
          <div role="button" tabIndex={0} className="inline-flex items-center ml-2 bg-blue-600 h-12 w-45 sm:w-50 text-center justify-center rounded-md text-[18px] mt-10 hover:scale-110 hover:rotate-3 active:scale-110 active:rotate-3 transition duration-250" style={{ fontFamily: "'Poppins'"}}>
            <a href="#get-started">
              Get Started
            </a>
          </div>

          <div role="button" tabIndex={0} className="inline-flex items-center mr-2 bg-gray-500/20 h-12 w-45 sm:w-50 text-center justify-center rounded-md text-[18px] mt-10 hover:scale-110 hover:rotate-3 active:scale-110 active:rotate-3 transition duration-250 backdrop-blur-2xl border-solid border-white border-1" style={{ fontFamily: "'Poppins'"}}>
            <a href="rules">
              Rules
            </a>
          </div>
        </div>
      </FadeContent>

      <FadeContent blur={true} duration={1500} easing="ease-out" initialOpacity={0}>
          <div className="flex flex-col md:flex-row items-center md:justify-center md:items-start gap-6 overflow-x-auto md:overflow-x-auto overflow-y-auto max-h-screen px-4 py-8 mt-10">
    
          {/* Card 1 */}
          <div className="w-full max-w-md h-[300px] bg-white/10 backdrop-blur-md border-1 border-white/30 rounded-xl shadow-lg p-6 flex flex-col gap-3 hover:-translate-y-5 transition-all duration-500">
            <h2 className="text-xl font-bold text-white">📌 About</h2>
            <p className="text-sm text-white">
              The target audience of this website is beginner hackers who <strong>want to learn how to hack</strong> websites — legally and ethically. For more information, please read the rules by click button below!
            </p>
            <button className="mt-auto px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition shadow-md shadow-black/30 shadow-">
              <a href="rules">
                Read the Rules
              </a>
            </button>
          </div>

          {/* Card 2 */}
          <div className="w-full max-w-md h-[300px] bg-white/10 backdrop-blur-md border-1 border-white/30 rounded-xl shadow-lg p-6 flex flex-col gap-3 hover:-translate-y-5 transition-all duration-500">
            <h2 className="text-xl font-bold text-white">🛠️ Live Target Mode</h2>
            <p className="text-sm text-white">
              This website responds in real-time whenever you try to exploit it — like a real hack, but still safe & legal. 🔒⚡.
            </p>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setShow(true);
              }}
              className="mt-auto text-blue-400 text-sm hover:underline text-shadow-md shadow-black"
            >
              🔍 What's Real-Time?
            </a>  
          </div>

          {/* Card 3 */}
          <div className="w-full max-w-md h-[300px] bg-white/10 backdrop-blur-md border-1 border-white/30 rounded-xl shadow-lg p-6 flex flex-col gap-3 hover:-translate-y-5 transition-all duration-500">
            <h2 className="text-xl font-bold text-white">🎈 Happy Hacking</h2>
            <p className="list-disc list-inside text-sm text-white">
              Enjoy this website, and hack this website dear ethics hacker! I appreciate everyone that open this website, thanks all!
            </p>
          </div>

        </div>
      </FadeContent>

      {show && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/40 p-4 overflow-y-auto">
          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            duration={1.0}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={1.1}
            threshold={0.2}
            delay={0}
          >
            <div className="w-full max-w-md max-h-[96vh] bg-gray-100/10 border-[2px] border-gray-500/30 rounded-md p-2 shadow-md shadow-black/50 text-white overflow-y-auto">
              <h1 className="flex font-semibold mb-2" style={{ fontFamily: "'Poppins', monospace"}}>What's Real-Time?</h1>
              <p className="text-sm leading-relaxed text-white" style={{ fontFamily: "'Poppins', monospace"}}>
                Imagine you're chatting with a friend, and their reply pops up instantly—without you refreshing the page or clicking anything. That’s called <span className="font-semibold text-blue-400">real-time</span>.
                In simple terms, real-time means data is updated immediately, the moment something happens. No delays, no page reloads. It's a live, continuous connection between the user and the server, keeping everything synced in real-time.
                <br /><br />
                In HackThisWeb, this means when you earn a badge or complete a challenge, the result is instantly shown. You don’t have to refresh or wait—it just happens.
                <br /><br />
                Real-time systems often use technologies like <span className="font-mono text-green-600">WebSockets</span>, <span className="font-mono text-green-600">Firebase</span>, or <span className="font-mono text-green-600">Supabase Realtime</span> to maintain a persistent connection, allowing instant communication between the browser and the backend.
                This approach creates a faster, more interactive experience, especially in apps where live updates matter—like messaging, live dashboards, multiplayer games.
              </p>

              <div className="flex font-semibold mt-5 mb-1 h-10 w-20 items-center text-center justify-center">
                <a onClick={(e) => {
                  e.preventDefault();
                  setShow(false);
                }} href="#" className="flex font-semibold h-10 w-20 bg-red-500/70 border-[2px] border-red-400 rounded-lg text-center items-center justify-center">
                  Close
                </a>
              </div>

              
            </div>
          </AnimatedContent>
        </div>
      )}

      <div className="sm:h-[200px] h-[100px]"></div>

      <h1 data-aos="zoom-in" className="flex text-center items-center justify-center text-1xl sm:text-3xl mr-2 ml-2 font-semibold" style={{ fontFamily: "'Poppins', monospace"}}>This website is specifically targeted at beginner hackers who want to try hacking websites legally and safely.</h1>
    
      <div className="h-[100px]"></div>

      <section id="about-us">
        <div className="flex text-white items-center justify-center">
          <div className="bg-blue-600 text-white text-center items-center w-25 h-6 rounded-4xl font-semibold text-[16px]" style={{ fontFamily: "'Poppins', monospace"}}>
            About Us
          </div>
        </div>

        <div className="flex items-center justify-center text-center mt-5" style={{ fontFamily: "'Poppins', monospace"}}>
          <p className="max-w-[1760px] mt-2 ml-2">
            Hi there! My name is Ardyan, and I built this website all by myself — right from Indonesia!<br/><br/>
            HackThisWeb is made to help anyone <strong>(yes, even kids!)</strong> understand how to <strong>stay safe</strong> online.<br/><br/>
            You’ll find fun little simulations that teach you what hackers might do — and how to protect yourself.
          </p>
        </div>
      </section>

      <section id="how-it-works">
        <div className="flex text-white items-center justify-center mt-15">
          <div className="bg-blue-600 text-white text-center items-center w-35 h-6 rounded-4xl font-semibold text-[16px]" style={{ fontFamily: "'Poppins', monospace"}}>
            How it Works?
          </div>
        </div>

        <div className="flex items-center justify-center text-center mt-5" style={{ fontFamily: "'Poppins', monospace"}}>
          <p className="max-w-[1760px] mt-2 ml-2">
            Start by click <strong>Let's Learn</strong> on the next section<br/>
            You will be learning some interactive lessons, when you done with the lesson, you will get a temporary badge (When you refresh or get out from this website the badge will be disappear)!<br/>
            After you done with the lessons, you can start practicing how hackers do that, and how we can protect the data from the hackers!<br/>
          </p>
        </div>
      </section>

      <section id="get-started">
        <div className="flex text-white items-center justify-center mt-15">
          <div className="bg-green-500 text-white text-center items-center w-30 h-6 rounded-4xl font-semibold text-[16px]" style={{ fontFamily: "'Poppins', monospace"}}>
            Get Started
          </div>
        </div>

        <div className="flex items-center justify-center text-center mt-5" style={{ fontFamily: "'Poppins', monospace"}}>
          <p className="max-w-[1760px] mt-2 ml-2">
            Are you ready for the lessons? The choices are in your hand!<br/>
            <strong>Are you ready?</strong>
          </p>
        </div>

        <div className="w-full flex justify-center">
          <div className="flex justify-center items-center mt-10 text-center bg-green-500/30 border-[2px] border-green-600 w-[200px] h-[50px] font-semibold text-[20px] rounded-xl hover:scale-[1.1] hover:rotate-2 active:scale-[1.1] active:rotate-2 transition-all duration-250">
            <a href="#" className="flex items-center justify-center" style={{ fontFamily: "'Poppins', monospace"}}>
              Let's Learn
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center text-center mt-2" style={{ fontFamily: "'Poppins', monospace"}}>
          <p className="max-w-[1760px] mt-2 ml-2">
            <strong>It's all free! I promise!</strong>
          </p>
        </div>
      </section>
 
      <div className="flex flex-col mt-10 w-full bg-gray-800 justify-center items-center text-center">
        <h1 className="flex font-semibold mt-5" style={{ fontFamily: "'Poppins', monospace"}}>OELabs - HackThisWeb © 2025-2026</h1>
        <h1 className="flex font-semibold mt-5 max-w-75" style={{ fontFamily: "'Poppins', monospace"}}>Originated and Created by Ardyan Ardasyah right in Indonesia</h1>

        <p className="mt-5 px-5 font-mono">This website are protected under MIT License as included on LICENSE in GitHub. Thank You!</p>

        <div className="h-5"/>
      </div>
    </> 
  ); 
}