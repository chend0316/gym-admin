import React from 'react'

interface LayoutProps {
  header: React.ReactNode;
  leftMenu: React.ReactNode;
  body: React.ReactNode;
}

export function Layout({ header, leftMenu, body }: LayoutProps) {
  return (
    <>
      <nav className='w-full h-12 order-gray-50 border fixed top-0'>
        {header}
      </nav>
      <div className=' pt-12 h-screen flex flex-row'>
        <div className=' w-48 h-full'>
          {leftMenu}
        </div>
        <div className='flex-grow'>
          <h1 className="">
            {body}
          </h1>
        </div>
      </div>
    </>
  )
}
