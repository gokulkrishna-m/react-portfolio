import React from 'react'
import {BiCalendar} from 'react-icons/bi';
import {HiOutlineBuildingOffice} from 'react-icons/hi2'

const Experience = () => {

  const expValues = [
    {
      id:"1",
      designation:"Associate Consultant",
	    domain:"TMT",
      date:"Oct 2021 - present",
	    calendar:<BiCalendar size={20}/>,
      symbol:<HiOutlineBuildingOffice size={25}/>,
      orgUrl:"https://atos.net/en/",
      orgTitle:"Atos",
      orgName:"Atos",
      orgLoc:"Chennai, India",
      jobDesc:"Designed and flexible and scalable data models in Product Information Management (PIM) that facilitated operation, maintenance, and management of sales channels.",
      jobDesc1:""
    },
    {
      id:"2",
      designation:"Associate Consultant",
	    domain:"Banking",
      date:"Nov 2020 - Oct 2021",
	    calendar:<BiCalendar size={20}/>,
      symbol:<HiOutlineBuildingOffice size={25}/>,
      orgUrl:"https://www.intellectdesign.com/",
      orgTitle:"Intellect Design Arena",
      orgName:"Intellect Design Arena",
      orgLoc:"Chennai, India",
      jobDesc:"Designed and Build Core Banking application for Indian regions using Java/J2EE technologies.",
      jobDesc1:<><br></br>{`Product Engineer at `}<a href='https://www.igcb.com/' className='text-black' title='iGCB' rel='noopener noreferrer' target='_blank'>{`Intellect Global Consumer Banking Unit`}</a>.</>
    },
    {
      id:"3",
      designation:"Software Engineer",
	    domain:"Insurance",
      date:"Jan 2019 - Oct 2020",
	    calendar:<BiCalendar size={20}/>,
      symbol:<HiOutlineBuildingOffice size={25}/>,
      orgUrl:"https://in.go-db.com/index.html",
      orgTitle:"GoDB-Tech",
      orgName:"GoDB Tech",
      orgLoc:"Chennai, India",
      jobDesc:"Designed and Developed an Insurance application products such as Medical, Two - Wheeler, Private Car, Commercial Vehicle, COVID-19 for Indian regions using Java/J2EE technologies.",
      jobDesc1:""
    }
  ]

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
      {
        expValues.map((value)=>(<div key={value.id}>
          <table style={{width:'100%'}}>
              <tbody>
                <tr>
                    <td><b>{value.designation}</b> - {value.domain}</td>
                    <td>
                      <span className='reactIcon' style={{justifyContent:'right'}}>
                          {value.date}
                          {value.calendar}
                      </span>
                    </td>
                </tr>
              </tbody>
          </table>
          <div>
              <span className='reactIcon'>
                <HiOutlineBuildingOffice size={25}/>
                <a href={value.orgUrl} title={value.orgTitle} target="_blank" rel='noopener noreferrer' className='text-black'>{value.orgName}</a>, {value.orgLoc}
              </span>
          </div>
          <div className=''>
              {value.jobDesc}
              {value.jobDesc1}
          </div>
          <hr>
          </hr>
        </div>))
      }
      {/* <table style={{width:'100%'}}>
          <tbody>
            <tr>
                <td><b>Associate Consultant</b> - TMT</td>
                <td>
                  <span className='reactIcon' style={{justifyContent:'right'}}>
                      Oct 2021 - present
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
                      Nov 2020 - Oct 2021
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
                      Jan 2019 - Oct 2020
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
      </div> */}
    </div>
    </>
  )
}

export default Experience