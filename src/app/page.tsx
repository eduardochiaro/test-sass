import Image from 'next/image'
import Component from './Component'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
			This page use `app` folder
			<Component/>
    </main>
  )
}
