'use client'

import Image from "next/image";
import Head from "next/head";

import { useEffect } from "react";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

import StatsSection from "./StatsSection";

import Aurora from "@/app/Aurora/Aurora";
import CountUp from "@/app/CountUp/CountUp";
import confetti from 'canvas-confetti';

import '../../globals.css'
import { minimumLength, minLimit, ParticlesDensity, ParticlesNumber } from "@tsparticles/engine";

function isPasswordStrong(password: string) {
  return {
    minimumLength: password.length >= 12,
    hasUppercase: /[A-Z]/.test(password),
    hasLowercase: /[a-z]/.test(password),
    hasNumber: /[0-9]/.test(password),
    hasSymbol: /[^A-Za-z0-9]/.test(password),
  };
}

export default function Home() {
  const totalBreached = 13500000000;

  const [password, setPassword] = useState("");
  const result = isPasswordStrong(password);
  const allPassed = Object.values(result).every(Boolean);

  const [showBadge, setShowBadge] = useState(false);
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    if(isFirstRender) {
      setIsFirstRender(false);
      return;
    }

    if(showBadge) {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    }
  }, [showBadge]);
  
  return (
    <>
      <div className="fixed inset-0 -z-10">
        <Aurora
          colorStops={["#3a86ff", "#fb5607", "#ffbe0b"]}
          blend={3.0}
          amplitude={0.8}
          speed={0.2}
        />
      </div>

      <div className="flex flex-col m-7" style={{ fontFamily: "'Poppins', monospace"}}>
        <h1 className="font-semibold text-3xl">Secure Password</h1>

        <h1 className="font-semibold text-2xl mt-10">
            Why They Matter and How to Build One
        </h1>
        <p className="mt-3">
            Imagine this:
            You wake up one morning, grab your phone, and suddenly—you can't log in to your account. Your emails, files, even your game progress... gone. Why?
            Because someone figured out your password.
        </p>

        <h1 className="font-semibold text-2xl mt-10">
            The Story of a Weak Password
        </h1>
        <p className="mt-3">
            Meet Alex.
            He used “alex123” for everything—from his social media to his email. Why? Easy to remember. But guess what?
            Hackers love easy. Within minutes, a brute-force tool cracked his account. The rest? History.
        </p>

        <h1 className="font-semibold text-2xl mt-10">
            What Is a Secure Password?
        </h1>
        <p className="mt-3">
            A secure password is one that’s hard for both humans and computers to guess.
            It should be:

            <br/>
            <strong>Long (at least 12 characters)</strong>
            <br/><br/>
            <strong>Complex (mix of upper/lowercase, numbers, symbols)</strong>
            <br/><br/>
            <strong>Unique (never reused across different accounts)</strong>
        </p>

        <h1 className="font-semibold text-2xl mt-10">
            Think of It Like a Puzzle
        </h1>
        <p className="mt-3">
            A good password isn’t just random—it’s unpredictable.
            Think of <code className="bg-gray-500 rounded-sm"> "R!v3r$kyT1m#2025" </code>
            Hard to guess? Yes. Easy to remember if it relates to a memory? Also yes!
        </p>

        <h1 className="font-semibold text-2xl mt-10">
            Common Mistakes (Don't Do These!)
        </h1>
        <p className="mt-3">
            <br/>
            <strong>Using your name, birthday, or pet's name</strong>
            <br/><br/>
            <strong>Reusing the same password across websites</strong>
            <br/><br/>
            <strong>Using short passwords like "123456" or "password"</strong>
        </p>

        <StatsSection totalBreached={totalBreached} />

        <div className="flex flex-col mt-5 items-center text-center">
          <h1 className="font-semibold text-3xl">Practice Session</h1>
          <p className="mt-2">Let's practice creating a secure password for you by implementing the important things that must be in a password.</p>

          <div className="m-10"/>

          <div className="flex justify-center px-4 w-[300px]">
            <div className="flex h-[45px] w-full mr-2 ml-2 mb-5 bg-gray-600/80 backdrop-blur-md rounded-md">
              <input type="password" placeholder="Type password..." onChange={(e) => setPassword(e.target.value)} className="m-2 w-full"/>
            </div>
          </div>

          <div className="flex flex-col text-sm px-6 space-y-1 font-mono">
            <p className={result.minimumLength ? "text-green-400" : "text-red-500"}>• Min 12 characters</p>
            <p className={result.hasUppercase ? "text-green-400" : "text-red-500"}>• Uppercase letter</p>
            <p className={result.hasLowercase ? "text-green-400" : "text-red-500"}>• Lowercase letter</p>
            <p className={result.hasNumber ? "text-green-400" : "text-red-500"}>• Number</p>
            <p className={result.hasSymbol ? "text-green-400" : "text-red-500"}>• Symbol (!@#...)</p>
          </div>

          <div className="m-5"/>

          {allPassed && (
            <div className="flex mb-4">
              <div className="flex h-[40px] w-[150px] bg-blue-600 rounded-md text-center items-center justify-center">
                <a href="#" className="font-semibold text-[18px]" onClick={() => setShowBadge(true)}>
                  Done
                </a>
              </div>
            </div>
          )}

          {showBadge && (
            <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/40 transition-all duration-300">
              <div className="bg-gray-600/35 border-[2px] border-gray-800/60 text-white px-20 py-3 m-2 h-[300px] rounded-xl shadow-md text-xl font-semibold mr-3 ml-3">
                <h1 className="text-3xl font-bold mt-1">You got a</h1>
                <div className="flex items-center justify-center text-center">
                  <p className="font-normal font-mono mt-[75px]">The Locksmith <br/>Badge Award</p>
                </div>

                <div className="flex h-11 w-40 bg-blue-600 rounded-xl mt-12 items-center text-center justify-center">
                  <a onClick={() => setShowBadge(false)} href="../learn">
                    Claim
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </> 
  ); 
}