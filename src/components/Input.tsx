'use client'

import { useRef } from "react"

export default function InputBox () {
    const inputRef = useRef<HTMLInputElement>(null)
    return (
        <input type="text" ref={inputRef} required placeholder="website url " className=" text-black px-5 py-1 rounded-md" />
    )
}