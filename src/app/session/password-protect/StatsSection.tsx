'use client'

import CountUp from "@/app/CountUp/CountUp"
import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"

export default function StatsSection({ totalBreached }: { totalBreached: number }) {
    const { ref, inView } = useInView({ triggerOnce: true })
    const [start, setStart] = useState(false)

    useEffect(() => {
        if (inView) setStart(true)
    }, [inView])

    return (
        <div ref={ref} className="flex flex-col mt-10 text-center mb-10">
            {start && (
                <CountUp from={0} to={totalBreached} separator="." direction="up" duration={0.8} className="font-semibold text-2xl"/>
            )}
            <p className="text-sm">
                Account has been hacked. <strong>Based on real-world public breach estimation.</strong>
            </p>
        </div>
    )
}
