import React from 'react'
import {BiCalendar} from 'react-icons/bi';
import {HiOutlineBuildingOffice} from 'react-icons/hi2'

const Experience = () => {

  // const expValues = [
  //   {
  //     id:"1",
  //     designation:"<b>Associate Consultant</b> - TMT",
  //     date:"October 2021 - present<BiCalendar size={20}/>",
  //     symbol:<HiOutlineBuildingOffice size={25}/>,
  //     orgUrl:"https://atos.net/en/",
  //     orgTitle:"Atos",
  //     orgName:"Atos",
  //     orgLoc:"Chennai, India",
  //     jobDesc:"Designed and flexible and scalable data models in Product Information Management (PIM) that facilitated operation, maintenance, and management of sales channels."
  //   },
  //   {
  //     id:"2",
  //     designation:"<b>Associate Consultant</b> - TMT",
  //     date:"October 2021 - present<BiCalendar size={20}/>",
  //     symbol:<HiOutlineBuildingOffice size={25}/>,
  //     orgUrl:"https://atos.net/en/",
  //     orgTitle:"Atos",
  //     orgName:"Atos",
  //     orgLoc:"Chennai, India",
  //     jobDesc:"Designed and flexible and scalable data models in Product Information Management (PIM) that facilitated operation, maintenance, and management of sales channels."
  //   },
  //   {
  //     id:"3",
  //     designation:"<b>Associate Consultant</b> - TMT",
  //     date:"October 2021 - present<BiCalendar size={20}/>",
  //     symbol:<HiOutlineBuildingOffice size={25}/>,
  //     orgUrl:"https://atos.net/en/",
  //     orgTitle:"Atos",
  //     orgName:"Atos",
  //     orgLoc:"Chennai, India",
  //     jobDesc:"Designed and flexible and scalable data models in Product Information Management (PIM) that facilitated operation, maintenance, and management of sales channels."
  //   }
  // ]

  return (
    <>
    <div className='font-medium mt-4 text-sm text-left leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1'>
      <h3 className='text-center'>MY EXPERIENCES</h3>
      {/* <table style={{width:'100%',border: "3px solid red",borderCollapse:'collapse'}} className='border-collapse border border-slate-400'>
      <tbody>
          <tr>
            <td className='border border-slate-300' style={{width:'50%'}}><b>Associate Consultant</b> - TMT</td>
            <td>
                <span className='reactIcon' style={{justifyContent:'right'}}>
                  October 2021 - present
                  <BiCalendar size={20}/>
                </span>
            </td>
          </tr>
      </tbody>
      </table> */}
      <table style={{width:'100%'}}>
          <tbody>
            <tr>
                <td><b>Associate Consultant</b> - TMT</td>
                <td>
                  <span className='reactIcon' style={{justifyContent:'right'}}>
                      October 2021 - present
                      <BiCalendar size={20}/>
                  </span>
                </td>
            </tr>
          </tbody>
      </table>
      <div>
          <span className='reactIcon'>
            <HiOutlineBuildingOffice size={25}/>
            <a href="https://atos.net/en/" title="Atos" target="_blank" rel='noopener noreferrer' className='text-black'>Atos</a>, Chennai, India
          </span>
      </div>
      <div className=''>
          Designed and flexible and scalable data models in Product Information Management (PIM) that facilitated operation, maintenance, and management of sales channels.
      </div>
      <hr>
      </hr>
      <table style={{width:'100%'}}>
          <tbody>
            <tr>
                <td><b>Associate Consultant</b> - Banking</td>
                <td>
                  <span className='reactIcon' style={{justifyContent:'right'}}>
                      November 2020 - October 2021
                      <BiCalendar size={20}/>
                  </span>
                </td>
            </tr>
          </tbody>
      </table>
      <div>
          <span className='reactIcon'>
            <HiOutlineBuildingOffice size={25}/>
            <a href="https://www.intellectdesign.com/" title="Intellect Design Arena" target="_blank" rel='noopener noreferrer' className='text-black'>Intellect Design Arena</a>, Chennai, India
          </span>
      </div>
      <div className=''>
          Designed and Build Core Banking application for Indian regions using Java/J2EE technologies.<br></br>Product Engineer at <a href="https://www.igcb.com/" className='text-black' title="iGCB" rel='noopener noreferrer' target="_blank">Intellect Global Consumer Banking Unit</a>.
      </div>
      <hr>
      </hr>
      <table style={{width:'100%'}}>
          <tbody>
            <tr>
                <td><b>Software Engineer</b> - Insurance</td>
                <td>
                  <span className='reactIcon' style={{justifyContent:'right'}}>
                      January 2019 - October 2020
                      <BiCalendar size={20}/>
                  </span>
                </td>
            </tr>
          </tbody>
      </table>
      <div>
          <span className='reactIcon'>
            <HiOutlineBuildingOffice size={25}/>
            <a href="https://in.go-db.com/index.html" title="GoDB-Tech" target="_blank" rel='noopener noreferrer' className='text-black'>GoDB Tech</a>, Chennai, India
          </span>
      </div>
      <div>
          Designed and Developed an Insurance application products such as Medical, Two - Wheeler, Private Car, Commercial Vehicle, COVID-19 for Indian regions using Java/J2EE technologies.
      </div>
    </div>
    </>
  )
}

export default Experience