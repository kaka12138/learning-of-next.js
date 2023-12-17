"use client"
import { useRouter } from "next/navigation"
export default function AboutPage() {
  const router = useRouter()
  return <div>
    <h1>About Page under LT</h1>
    <button onClick={ () => router.push("/") }>Back Home</button>
  </div>
}
