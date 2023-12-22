import Image from 'next/image'
import Link from 'next/link'
import { photos } from "./data"

export default function Home() {
  return <>
    <h1>Home Page</h1>
    <ul>
      <li><Link href="/login">Login Page</Link></li>
      <li><Link href="/about">About Page</Link></li>
      <li><Link href="/contact">Contact Page</Link></li>
      <li><Link href="/layoutvstemplate">LayoutvsTemplate Page</Link></li>
    </ul>
    <h2>拦截路由Demo</h2>
    <div className="flex">
      { 
        photos.map((item) => <Link key={item.id} href={`/photos/${item.id}`}><img width="100" src={ item.src }/></Link>) 
      }
    </div>    
  </>
}
