import React from 'react'
import {BsGithub} from 'react-icons/bs';
import {FaGoogleDrive,FaLinkedinIn,FaMobileAlt} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';

const Footer = () => {

  const footerValues = [
    {
      id:"1",
      hrefValue:"https://github.com/gokulkrishna-m",
      titleValue:"gokulkrishna-m",
      Symbol:<BsGithub/>
    },
    {
      id:"2",
      hrefValue:"https://tinyurl.com/gokulkrishnamanikumar",
      titleValue:"gokulkrishnamResume",
      Symbol:<FaGoogleDrive/>
    },
    {
      id:"3",
      hrefValue:"https://www.linkedin.com/in/gokulkrishna-manikumar/",
      titleValue:"gokulkrishna-manikumar",
      Symbol:<FaLinkedinIn/>
    },
    {
      id:"4",
      hrefValue:"tel:+91-8883921406",
      titleValue:"call 8883921406",
      Symbol:<FaMobileAlt/>
    },
    {
      id:"5",
      hrefValue:"mailto:gokulkrishnamanikumar@gmail.com",
      titleValue:"Mail to: Gokul Krishna ManiKumar",
      Symbol:<HiOutlineMail/>
    }
  ]

  return (
    <footer className=''>
      <div className="footer">
          <div className="row">
            <ul>
              {
                footerValues.map((value)=>(
                  <li className='text-lg' key={value.id}>
                    <a href={value.hrefValue} title={value.titleValue} target="_blank" rel='noopener noreferrer'>{value.Symbol}</a>
                  </li>
                ))
              }
            </ul>
          </div>
      </div>
    </footer>
  )
}

export default Footer