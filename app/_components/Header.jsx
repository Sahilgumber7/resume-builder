import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div>
        <section className="flex  sm:flex-col-1 md:flex-col-2 items-center">
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-3xl font-extrabold sm:text-5xl">
        Understand User Flow.
        <strong className="font-extrabold text-blue-500 sm:block"> Increase Conversion. </strong>
      </h1>

      <p className="mt-4 sm:text-xl/relaxed">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
        numquam ea!
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a className="block w-full rounded bg-black/100 px-12 py-3 text-sm font-medium text-white shadow hover:bg-black/70 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
          href="/sign-in">
          Get Started
        </a>
      </div>
    </div>
  </div>
  <Image src="/resume.webp" alt="sample" className="mx-auto max-w-xl" width={400} height={360} />
</section>
      
    </div>
  )
}

export default Header
