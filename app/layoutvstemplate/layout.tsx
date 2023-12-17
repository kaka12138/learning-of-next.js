'use client';
import { useState } from "react"
import Link from "next/link"
export default function LayoutVsTemplateL({ children }: { children: React.ReactNode}) {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>
        <Link href="/layoutvstemplate/about">About</Link>
        <Link href="/layoutvstemplate/settings">Settings</Link>
      </div>
      <h1>Layout { count }</h1>
      <button onClick={ () => setCount(count + 1) }>Increment</button>
      { children }
    </>
  )
}
