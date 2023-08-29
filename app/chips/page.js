'use client'
import NavBar from '@/app/components/NavBar'
import Chips from '@/app/chips/Chips'

export default function ChipsPage() {
  return (
    <>
      <NavBar />
      <div className='container mx-auto flex flex-wrap gap-2 p-4 text-gray-800'>

      <Chips />
      </div>
    </>
  )
}