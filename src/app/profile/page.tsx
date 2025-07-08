'use client'

import { useEffect } from "react";
import { useState } from "react";

import Silk from "./Silk/Silk";

import { useCivicUser } from "../TitleBar";
import { useUser } from "@civic/auth/react";

import '../globals.css'

export default function Home() {
    const { isLoggedIn, email, username, id, user } = useCivicUser()

    return (
        <>
            <div className="fixed inset-0 -z-20 opacity-30">
                <Silk />
            </div>

            { isLoggedIn && (
                <div className="flex items-center justify-center">
                    <div className="flex flex-col h-40 w-[1000px] max-w-[890px] ml-3 mr-3 mt-3 bg-gray-700/40 rounded-lg backdrop-blur-xl">
                        <h1 className="flex font-semibold text-2xl mt-5 ml-5" style={{ fontFamily: "'Poppins', sans-serif"}}>{username}</h1>
                        <h1 className="flex text-xl ml-5 mt-1" style={{ fontFamily: "'Poppins', sans-serif"}}>{email}</h1>
                    </div>
                </div>
            )}

            { !isLoggedIn && (
                <div className="flex flex-col items-center justify-center text-center h-screen">
                    <h1 className="flex font-semibold text-2xl" style={{ fontFamily: "'Poppins', sans-serif" }}>No account detected, please login first to access the profile!</h1>
                    <h1 className="flex underline text-blue-600 mt-2 text-2xl" style={{ fontFamily: "'Poppins', sans-serif" }}><a href="https://hack-this-website.vercel.app">Back to Home</a></h1>
                </div>
            )}
        </> 
    ); 
}