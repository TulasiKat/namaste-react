import React from 'react';

const ContactUs = () => {
  return (
    <div className='p-4 m-auto bg-gray-100'>
       <h1 className='font-bold text-3xl p-4 m-4 text-center'>contact Us</h1>
    <form className='border border-black p-4'>
      <label>Username: <input type="text" className="m-4 p-4 border border-solid border-black rounded-md"  placeholder='Enter name here..'/> </label> 
      <label >Message: <input type="text" className="m-4 p-4 border border-solid border-black rounded-md"  placeholder='Enter desc here..'/> </label> 
      <button className='filter-btn bg-green-50 hover:bg-green-100 rounded-md m-4 p-4 border border-solid border-black' >Submit</button>
     
    </form>
    </div>
  
  )
}

export default ContactUs