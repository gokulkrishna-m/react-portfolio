import React from 'react'
// import {BiCalendar} from 'react-icons/bi';

const Project = () => {
  return (
    <>
        <div className='font-medium mt-4 text-sm text-left  leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1'>
            {/* text-left */}
            {/* <div>Project Name (Org Name) Duration</div>
            <div>Project Desc </div> */}

            <table style={{width:'100%'}}>
                <tbody>
                    <tr>
                        <td><b className='text-xl'>Unify Software Solutions</b> - (Mitel Networks)</td>
                        <td>
                            <span className='reactIcon' style={{justifyContent:'right'}}>
                                2021 - present
                            </span>
                        </td>
                    </tr>
                    {/* <tr>
                        <td className=''>Unify is a communication’s provider that develops, deploys, and manages unified communications, network infrastructure and security, managed and professional services for large, medium, and small enterprises, both directly and via partners.</td>
                        <td>.</td>
                    </tr> */}
                </tbody>
            </table>
            <div className='flex text-justify'>Unify is a communication’s provider that develops, deploys, and manages unified communications, network infrastructure and security.</div>
            <div className='flex text-justify'>Delivers professional services for large, medium, and small enterprises both directly and via partners.</div>
            <hr />

            <table style={{width:'100%'}}>
                <tbody>
                    <tr>
                        <td><b className='text-xl'>Quantum Central Banking Solution</b> - (RBI)</td>
                        <td>
                            <span className='reactIcon' style={{justifyContent:'right'}}>
                                2020 - 2021
                            </span>
                        </td>
                    </tr>
                    {/* <tr>
                        <td className=''>Unify is a communication’s provider that develops, deploys, and manages unified communications, network infrastructure and security, managed and professional services for large, medium, and small enterprises, both directly and via partners.</td>
                        <td>.</td>
                    </tr> */}
                </tbody>
            </table>
            <div className='flex text-justify'>iGCB unit is known for core retail banking comprises of modules like Budget, Branch Inventory, Bank Reports, Fixed Assets, Transactions, etc.</div>
            <div className='flex text-justify'>QCBS is a web application clustered with different module.  iGCB is categorized into five sub products.</div>
            <hr />

            <table style={{width:'100%'}}>
                <tbody>
                    <tr>
                        <td><b className='text-xl'>IPDS General Insurance</b> - (TATA AIG)</td>
                        <td>
                            <span className='reactIcon' style={{justifyContent:'right'}}>
                                2019 - 2020
                            </span>
                        </td>
                    </tr>
                    {/* <tr>
                        <td className=''>Unify is a communication’s provider that develops, deploys, and manages unified communications, network infrastructure and security, managed and professional services for large, medium, and small enterprises, both directly and via partners.</td>
                        <td>.</td>
                    </tr> */}
                </tbody>
            </table>
            <div className='flex text-justify'>Web application incorporates several products known for Personal Life, Medical, Motor Vehicle, House Property which owned by TATA groups</div>
            <div className='flex text-justify'>It helps customers to purchase policy by self or via interaction with the Telecaller.</div>
            <hr />
            
            <h4 className='text-center'>Minor Projects</h4>

            <table style={{width:'100%'}}>
                <tbody>
                    <tr>
                        <td><b className='text-xl'>Todo</b> (React, SpringBoot) - The application that can manage our goals and day to day activities.</td>
                    </tr>
                    <tr>
                        <td><b className='text-xl'>Weather</b> (React, OpenWeatherMap Api) - The application will provide users with real-time weather information, forecasts, and other weather-related data.</td>
                    </tr>
                </tbody>
            </table>
        </div>    
    </>
  )
}

export default Project