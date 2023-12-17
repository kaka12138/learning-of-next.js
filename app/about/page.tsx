"use client"
import { useState } from "react"
import { notFound } from "next/navigation"
async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  return {
    message: "Hello About Page"
  }
}

// For Loading
// export default async function Page() {
//   const { message } = await getData()
//   return <h1>{ message }</h1>
// }

// For Error

// export default function Page() {
//   const [error, setError] = useState(false)

//   const handleError = () => {
//     setError(true)
//   }

//   return <>{ error ? Error() : <button onClick={ handleError }>Get Error</button> }</>
// }

// For Not Found
export default function Page() {
  // 调用notFound函数，让next/navigation捕获到该页面(about)自定义的not-found页面，不使用全局的not-found页面
  notFound()
  return <></>
}
