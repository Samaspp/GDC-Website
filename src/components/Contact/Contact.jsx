import React from 'react'
import './Contact.css'
import logo from '../../assets/croppedlogo.png';

function Contact() {
  return (
      <div className='flex flex-col py-4 px-6 w-3/4 mx-auto  h-4/5 bg-black bg-opacity-30 border border-black max-w-screen-md md:w-2/5'>
        <img src={logo} alt='logo' className='rounded-full md:h-20 object-contain  items-center h-0 pb-2'/>
        <h2 className="sm:mb-3 font-navfont md: text-2xl sm:text-3xl text-white ">CONTACT US</h2>
        <p className='mb-4  font-light text-center text-gray-300 sm:text-xl text-sm'>Get in touch with us!</p>
        <form action="#">
          <div className="flex sm:flex-row flex-col">
            <div className='sm:w-1/2 sm:pr-2'>
              <label  for ="firstName" className="text-white hidden"> First Name:</label>
              <input  type="text" className='shadow-sm text-white text-sm rounded-sm block w-full p-2.5  bg-gray-400 bg-opacity-20'  id="fname" placeholder='First Name'required/>
            </div>
            <div className='sm:w-1/2 sm:pl-2 mt-4 sm:mt-0 '>
              <label  for ="lastName" className="text-white hidden">Last Name: </label> 
              <input  type="text" className='shadow-sm bg-gray-400 bg-opacity-20 text-white text-sm rounded-sm block w-full p-2.5 '  id="lname" placeholder='Last Name'required/>
            </div>
          </div>
          <div className='pt-4'>
              <label  for ="email" className="text-white hidden">Email: </label> 
              <input  type="email" className='shadow-sm bg-gray-400 bg-opacity-20 text-white text-sm rounded-sm block w-full p-2.5 '  id="email" placeholder='Email'required/>
            </div>
            <div className='pt-4'>
              <label  for ="phoneNumber" className="text-white hidden">Phone Number: </label> 
              <input  type="text" className='shadow-sm bg-gray-400 bg-opacity-20 text-white text-sm rounded-sm block w-full p-2.5 '  id="phonenumber" placeholder='Phone Number'/>
            </div>
            <div className='py-4'>
              <label  for ="message" className="text-white hidden">Message </label> 
              <textarea  rows="6" className='text- shadow-sm bg-gray-400 bg-opacity-20 text-white text-sm rounded-sm block w-full p-3 h-32 '  id="message" placeholder='Message'required/>
            </div>
        </form>
        <div className='w-full'>
          <button type="submit" className='items-center align-center my-2 p-2 text-sm text-white w-1/5  bg-yellow-500 bg-opacity-1 rounded-3xl shadow-sm hover:bg-yellow-600 drop-shadow-sm '>Send {'>'}</button>
        </div>
    </div>
  )
}

export default Contact