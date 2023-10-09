import React from 'react'
import gk from '../img/gk.jpg';
import {GrLocationPin} from 'react-icons/gr'

const About = () => {
    const desc = [
        {
            id:"1",
            value:"Hands-on experience on product design and development roles as well as good exposure in support and maintenance of applications."
        },
        {
            id:"2",
            value:"Proficient in the technology stack of Java SpringBoot, Webservices - REST."
        },
        {
            id:"3",
            value:"Hands-on experience in modern web technologies like Bootstrap, Responsive Web Design, Ajax, JQuery-JSON."
        },
        {
            id:"4",
            value:"Significant knowledge in web framework and Back-end development."
        },
        {
            id:"5",
            value:"Exposure to Business Domains like Banking, TMT and Insurance."
        }
    ]
  return (
    <>
        <main className="py-10 px-4 sm:p-6 md:py-10 md:px-8 text-black">
            <div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
                <div className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
                    <p className="text-sm leading-4 font-medium text-white sm:text-slate-500 dark:sm:text-slate-400">Associate Consultant, Atos</p>
                    <h1 className="mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-white">Gokul Krishna ManiKumar</h1>
                </div>
                <div className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
                    <img src={gk} alt="" className="w-55 h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full" loading="lazy"/>
                </div>
                <dl className="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
                    <dt className="sr-only">Location</dt>
                    <dd className="flex items-center font-bold">
                        <GrLocationPin/>
                        Chennai, India
                    </dd>
                </dl>
                <div className='mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1'>
                    <ul className="list-outside text-left font-medium">
                        {
                            desc.map((desc)=>(
                                <li key={desc.id}>{desc.value}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </main>
    </>
  )
}

export default About