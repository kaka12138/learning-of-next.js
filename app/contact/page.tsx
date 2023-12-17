import { use } from "react"

async function getData() {
  await new Promise(reslove => setTimeout(reslove, 4000))
  return {
    message: "Hello Contact Page"
  }
}

export default function contactPage() {
  const { message } = use(getData())
  return <h1>{ message }</h1>
}
