'use client'

import Image from "next/image";
import Head from "next/head";

import { useEffect } from "react";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

import Aurora from "@/app/Aurora/Aurora";
import CountUp from "@/app/CountUp/CountUp";
import confetti from 'canvas-confetti';

import '../../globals.css'


export default function Home() {
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

      <div className="flex flex-col m-7 overflow-x-hidden" style={{ fontFamily: "'Poppins', monospace"}}>
        <h1 className="font-semibold text-3xl">Phising</h1>

        <h1 className="font-semibold text-2xl mt-10">
            A Digital Trap Disguised as Trust
        </h1>
        <p className="mt-3">
            Imagine this scenario:
            You open your email and see a message from your bank. It looks official—logo, layout, signature—everything feels legit. It says there's been suspicious activity on your account and you need to click a link to verify your identity.

            You panic a little, click the link, and enter your credentials.
            Boom—your account has been compromised.

            What happened? You’ve just been phished.
        </p>

        <h1 className="font-semibold text-2xl mt-10">
            What is Phishing?
        </h1>
        <p className="mt-3">
            Phishing is a form of social engineering attack where cybercriminals trick individuals into revealing sensitive information—such as passwords, credit card numbers, or personal data—by pretending to be someone trustworthy.

            These attacks usually come through:

            Emails

            Text messages (a.k.a. smishing)

            Phone calls (vishing)

            Fake websites that mimic real ones

            The attacker’s goal?
            To exploit trust. And the scariest part?
            Phishing doesn’t exploit technology—it exploits human nature.
        </p>

        <h1 className="font-semibold text-2xl mt-10">
            The Psychology Behind It
        </h1>
        <p className="mt-3">
            Phishing works because it's built around urgency and fear:

            "Your account will be locked in 24 hours!"
            "Someone tried to access your account—click here to secure it!"

            These messages are designed to bypass rational thinking.
            Your brain skips analysis and goes straight into action—click first, think later.
        </p>

        <h1 className="font-semibold text-2xl mt-10">
            Real-World Example: Netflix Phishing
        </h1>
        <p className="mt-3">
            A widely seen example was a phishing campaign targeting Netflix users.

            Victims received emails saying:

            “Your payment failed. Please update your billing information.”

            The email had Netflix branding, but the link led to a fake login page.
            People entered their data—credit cards, passwords—and it all went to the attacker.

            Lesson: Even companies with global trust are weaponized by phishers.
        </p>

        <h1 className="font-semibold text-2xl mt-10">
            How to Spot Phishing Attempts
        </h1>
        <div className="mt-3 w-full overflow-x-auto">
            <table className="min-w-[600px] border border-gray-700 text-left">
                <thead>
                <tr className="bg-gray-700/40">
                    <th className="px-4 py-2">⚠️ Sign</th>
                    <th className="px-4 py-2">Description</th>
                </tr>
                </thead>
                <tbody>
                <tr className="border-t border-gray-600">
                    <td className="px-4 py-2">🚨 Urgency</td>
                    <td className="px-4 py-2">“Act now or lose access!”</td>
                </tr>
                <tr className="border-t border-gray-600">
                    <td className="px-4 py-2">✍️ Typos</td>
                    <td className="px-4 py-2">Grammar/spelling mistakes, weird tone</td>
                </tr>
                <tr className="border-t border-gray-600">
                    <td className="px-4 py-2">🔗 Suspicious URLs</td>
                    <td className="px-4 py-2">Hover over links—are they legit?</td>
                </tr>
                <tr className="border-t border-gray-600">
                    <td className="px-4 py-2">🕵️‍♂️ Too Good to Be True</td>
                    <td className="px-4 py-2">“You’ve won an iPhone 15!”—uh, no.</td>
                </tr>
                <tr className="border-t border-gray-600">
                    <td className="px-4 py-2">✉️ Strange sender</td>
                    <td className="px-4 py-2">Emails from weird domains</td>
                </tr>
                </tbody>
            </table>
        </div>

        <h1 className="font-semibold text-2xl mt-10">
            How to Protect Yourself
        </h1>
        <p className="mt-3">
            Never click links from unknown sources
            Always verify URLs by hovering over them.
            <br/><br/>

            Use two-factor authentication (2FA)
            Even if your password gets leaked, they still need your second factor.
            <br/><br/>

            Check email addresses carefully
            security@netflix.com is not the same as security@netfliix-support.co.
            <br/><br/>

            Educate yourself and others
            Phishing is often successful not because people are dumb—but because they’re unaware.
            <br/><br/>
        </p>

        <h1 className="font-semibold text-2xl mt-10">
            Final Thoughts
        </h1>
        <p className="mt-3">
            Phishing is no longer just an “IT problem”—it’s a real-world threat to anyone using the internet.
            It’s not about whether you’re tech-savvy or not—it’s about staying alert.

            When in doubt, pause before you click.
            Because on the internet, not everything is what it seems.
            <br/><br/>
        </p>

        <div className="flex flex-col mt-5 items-center text-center">
          <h1 className="font-semibold text-3xl">Practice Session</h1>
          <p className="mt-2">Let's practice how to prevent phising for your account, and try the phising simulator from how a hackers can steal data.</p>

          <div className="m-5"/>

          <div className="flex items-center justify-center text-center mb-10">
            <div className="flex h-[45px] w-[150px] bg-blue-600 rounded-lg items-center text-center justify-center">
                <a href="phising/simulation" className="font-semibold text-[20px]">Let's Go</a>
            </div>
          </div>
        </div>
      </div>
    </> 
  ); 
}