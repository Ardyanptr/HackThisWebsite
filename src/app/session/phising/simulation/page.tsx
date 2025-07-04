'use client'

import { useEffect, useState } from "react";
import Beams from './Beams/Beams';
import { CLIENT_STATIC_FILES_RUNTIME_AMP } from "next/dist/shared/lib/constants";

import confetti from "canvas-confetti";

export default function Home() {
    const [showSplash, setShowSplash] = useState(true);
    const [showHacked, setShowHacked] = useState(false);
    const [showBadge, setShowBadge] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        const timeout = setTimeout(() => setShowSplash(false), 3500);
        return() => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        if(showHacked) {
            setShowBadge(true);
            const timeout = setTimeout(() => setShowBadge(false), 5500);
            confetti({
                particleCount: 120,
                spread: 80,
                origin: { y: 0.6 }
            });
            return (
                clearTimeout(timeout)
            )
        }
    }, [showHacked]);

    useEffect(() => {
        const timeout = setTimeout(() => setShowBadge(false), 3500);
        return() => clearTimeout(timeout);
    }, []);

    return (
        <>
            {showSplash && (
            <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center text-green-500 font-mono text-center px-4">
                <div className="animate-pulse text-3xl">Loading...</div>
                <p className="mt-6 text-sm text-gray-400">⚠️ You are entering a simulated hacker environment. Type anything you want, except your own account, again <strong>This is only a SIMULATION not a REAL FORM!</strong></p>
            </div>
            )}

            <div className="fixed inset-0 -z-10 overflow-hidden">
                <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                    <Beams
                        beamWidth={2}
                        beamHeight={15}
                        beamNumber={12}
                        lightColor="#ffffff"
                        speed={1}
                        noiseIntensity={1.75}
                        scale={0.2}
                        rotation={-10}
                    />
                </div>
            </div>

            <div className="flex min-h-screen text-black items-center justify-center">
                <div className="flex items-center justify-center align-middle">
                    <div className="w-full max-w-md max-h-[96vh] bg-gray-800/50 border-[2px] border-gray-500/30 rounded-md p-2 shadow-md shadow-black/50 text-white overflow-y-auto">
                        <form className="flex flex-col gap-4 p-4">
                        <h1 className="text-3xl font-bold text-center text-white">HTW Login 2025</h1>

                        <input
                            type="email"
                            placeholder="Email Address"
                            onChange={(e) => setEmail(e.target.value)}
                            className="bg-gray-900/60 border border-gray-700 rounded-md p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            className="bg-gray-900/60 border border-gray-700 rounded-md p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                        />

                        <button
                            type="submit"
                            onClick={() => setShowHacked(true)}
                            className="bg-gradient-to-r from-red-600 to-red-400 hover:brightness-125 text-white font-semibold py-2 px-4 rounded-md transition-all duration-300"
                        >
                            <a href="#" onClick={() => setShowHacked(true)}>
                                Login
                            </a>
                        </button>

                        <p className="text-sm text-center text-gray-400 mt-2">
                            This is a simulation. No real data is collected.
                        </p>
                        </form>

                        {showHacked && (
                            <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center text-green-500 font-mono text-center px-4">
                                <h1 className="text-2xl mb-4">Hacker side terminal</h1>
                                <p className="animate-pulse">Accessing account...</p>
                                <div className="mt-6 bg-green-900/300 p-4 rounded-md border border-green-500 w-full max-w-md">
                                    <p><strong>Email:</strong> {email}</p>
                                    <p><strong>Password:</strong> {password}</p>
                                </div>
                                <p className="text-xs text-gray-400 mt-4">This is a fake terminal. No real data is recorded</p>
                            </div>
                        )}

                        {showBadge && (
                            <div className="fixed inset-0 z-50 flex items-center justify-center text-center backdrop-blur-md bg-black/40 transition-all duration-300 m-7" style={{ fontFamily: "'Poppins', sans-serif"}}>
                                <div className="bg-gray-600/35 border-[2px] border-gray-800/60 text-white px-20 py-3 m-2 h-[300px] rounded-xl shadow-md text-xl font-semibold mr-3 ml-3">
                                    <h1 className="text-3xl font-bold mt-1">You got a</h1>
                                        <div className="flex items-center justify-center text-center">
                                            <p className="font-normal font-mono mt-[50px]">The Anti-Phising <br/>Badge Award</p>
                                        </div>

                                        <div className="flex h-11 w-40 bg-blue-600 rounded-xl mt-10 items-center text-center justify-center">
                                    <a onClick={() => setShowBadge(false)} href="../../learn">
                                        Claim
                                    </a>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </> 
    ); 
}