'use client'

import Image from "next/image";
import Head from "next/head";

import { motion } from "framer-motion"
import { useEffect } from "react";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

import StatsSection from "./StatsSection";

import Aurora from "@/app/Aurora/Aurora";
import CountUp from "@/app/CountUp/CountUp";

import '../../globals.css'

export default function Home() {
  const totalBreached = 13500000000;
  
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

          <div className="flex justify-center px-4 w-[40vw]">
            <div className="flex h-[75px] w-full mr-2 ml-2 mb-5 bg-gray-600/80 backdrop-blur-md rounded-xl">

            </div>
          </div>
        </div>
      </div>
    </> 
  ); 
}