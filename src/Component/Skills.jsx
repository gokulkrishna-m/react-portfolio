import React from 'react'
import {FaReact,FaHtml5} from 'react-icons/fa6'
import {SiSpringboot} from 'react-icons/si'
import {DiBootstrap,DiDatabase} from 'react-icons/di'
import {BiLogoJavascript,BiLogoJquery} from 'react-icons/bi'
import {GrCertificate} from 'react-icons/gr'

const Skills = () => {

  const tableValue = [
    {
      id:"1",
      s1:<FaReact size={30}/>,
      n1:"React",
      s2:<SiSpringboot size={30}/>,
      n2:"SpringBoot"
    },
    {
      id:"2",
      s1:<FaHtml5 size={30}/>,
      n1:"HTML",
      s2:<DiBootstrap size={30}/>,
      n2:"BootStrap"
    },
    {
      id:"3",
      s1:<BiLogoJavascript size={30}/>,
      n1:"JavaScript",
      s2:<BiLogoJquery size={30}/>,
      n2:"Jquery"
    },
    {
      id:"4",
      s1:<DiDatabase size={30}/>,
      n1:"MySQL,PostgreSQL",
      s2:"",
      n2:""
    }
  ]

  const certValue = [
   {
      id:"1",
      s1:<GrCertificate size={30}/>,
      url:"https://www.hackerrank.com/certificates/9fa6b2a8115c",
      title:"SQL (Basic)-HackerRank",
      by:"HackerRank",
   },
   {
      id:"2",
      s1:<GrCertificate size={30}/>,
      url:"https://www.udemy.com/certificate/UC-6NLPQNBT/",
      title:"The Complete Python Masterclass-Udemy",
      by:"Udemy",
   }
  ]

  return (
   <>
   <h3>I am really good at</h3>
   <div className='mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1'>
      <table>
         <tbody>
            {tableValue.map((value)=>(
            // <tr key={value.id}>
            //    <td style={{width:'50px'}}><span className='text-3xl'>{value.s1}</span></td>
            //    <td style={{width:'50px'}} className='text-lg'>{value.n1}</td>
            //    <td style={{width:'50px'}}><span className='text-3xl'>{value.s2}</span></td> 
            //    <td style={{width:'50px'}} className='text-lg'>{value.n2}</td>
            // </tr>
            <tr key={value.id}>
               <td style={{width:'50px'}}><span className='reactIcon text-xl'>{value.s1}{value.n1}</span></td>
               <td style={{width:'50px'}}><span className='reactIcon text-xl'>{value.s2}{value.n2}</span></td>
            </tr>
            ))}
            {/* <tr>
               <td>
                  <span className='reactIcon'>
                     <DiDatabase size={30}/>
                  </span>
               </td>
               <td style={{columnSpan:'2'}}>MySQL,PostgreSQL</td>
            </tr> */}
         </tbody>
      </table>
      <hr>
      </hr>
   </div>
   <div className='mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1'>
      <h3>CERTIFICATIONS</h3>
      <table>
         <tbody>
            {
               certValue.map((value)=>(
                  <tr key={value.id}>
                     <td><span className='reactIcon text-lg text-left'>{value.s1}<a href={value.url} className='text-black no-underline' rel='noopener noreferrer' title="credential" target="_blank">{value.title}</a></span></td>
                     {/* <td style={{width:'50px'}}><span className='reactIcon text-xl'>{value.s2}{value.n2}</span></td> */}
                  </tr>
               ))
            }
            {/* <tr>
               <td style={{}}>
                  <span className='text-3xl'>
                     <GrCertificate/>
                  </span>
               </td>
               <td style={{}} className='text-lg'><a href='https://www.hackerrank.com/certificates/9fa6b2a8115c' className='text-black' rel='noopener noreferrer' title="credential" target="_blank">SQL (Basic)</a> - HackerRank</td>
            </tr>
            <tr>
               <td style={{}}>
                  <span className='text-3xl'>
                     <GrCertificate/>
                  </span>
               </td>
               <td style={{}} className='text-lg'><a href='https://www.udemy.com/certificate/UC-6NLPQNBT/' className='text-black' rel='noopener noreferrer' title="credential" target="_blank">The Complete Python Masterclass: Learn Python From Scratch</a> - Udemy</td>
            </tr> */}
         </tbody>
      </table>
   </div>
   </>
  )
}

export default Skills