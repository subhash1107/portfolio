import React from 'react'
import AsideBar from './AsideBar'
import Main from './Main'

const Body = () => {
  return (
    <>
    <div className='max-w-[1000px] md:mx-4 lg:mx-auto md:my-10 flex gap-4'>
        <aside className='md:w-1/4 md:block hidden'>
        <AsideBar/>
        </aside>
        <main className='md:w-3/4 min-h-[100vh] md:min-h-0 w-full bg-[#222831] rounded-xl'>
        <Main/>
        </main>

    </div>
    </>
  )
}

export default Body