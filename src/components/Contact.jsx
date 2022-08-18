import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
      <form method='POST' action="https://getform.io/f/46e36895-d82e-42b2-89d4-bef91cb77736" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8 text-center'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
            <p className='text-gray-300 py-4'>// Complete el formulario abajo o envíeme un email - <span className='font-sans'>repmlm01@gmail.com</span></p>
        </div>
        <input type="text" placeholder='Nombre' name='name' className='bg-[#ccd6f6] p-2 rounded-md' />
        <input type="text" placeholder='Email' name='email' className='my-4 p-2 bg-[#ccd6f6] rounded-md' />
        <textarea name="message" rows="10" placeholder='Message' className='bg-[#ccd6f6] p-2 rounded-md'></textarea>
        <button className='text-white border-2 hover:bg-pink-900 hover:border-pink-600 duration-300 px-4 py-3 my-8 mx-auto flex items-center'>¡Trabajemos juntos!</button>
      </form>
    </div>
  )
}

export default Contact
