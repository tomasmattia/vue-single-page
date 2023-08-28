'use client'
import Navbar from '@/components/navbar'
import ChipsComponent from '@/app/chips/ChipsComponent'

export default function Chips() {
  return (
    <>
      <Navbar />
      <div className='container mx-auto flex flex-wrap gap-2 p-4 text-gray-800'>

      <ChipsComponent />
      </div>
    </>
  )
}