import React from 'react'

export default  function Register() {
  return (

    <div className='flex justify-center items-center min-h-screen w-full  bg-[#917FB3] bg-cover bg-no-repeat bg-center'>
      <div className=" flex relative w-[420px] h-[600px] bg-transparent  border-[2px] border-spacing-[2px] border-solid border-black rounded-e-[20px] rounded-s-[20px]  ring-offset-30 justify-center items-center">
          <form action="#" method="get" id="form1"> 
          
           <h2 className='relative text-[2em] decoration-white text-center' >Registation</h2>

            <div className="relative mt-[10px] mr-0 w-[300px] border-b-[1px] border-solid border-black">
              <span className='absolute right-[8px] decoration-white text-[24px] top-[2px]'>
                <ion-icon name="person-circle-outline"></ion-icon>
              </span>
              <input id="default_filledd" className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-md text-black bg-transparent border-0 border-b-1 appearance-none   focus:outline-none focus:ring-0 peer" placeholder=" " type="text" required />
              <label for="default_filledd" className="absolute text-[16px] duration-300 transform -translate-y-4 scale-75 top-4  z-10 origin-[0] left-8   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-5">Username</label>
            </div>

            <div className="relative mt-[10px] mr-0 w-[300px] border-b-[1px] border-solid border-black">
              <span className='absolute right-[8px] decoration-white text-[24px] top-[2px]'>
                <ion-icon name="mail-outline"></ion-icon>
              </span>
              <input id="default_filled" className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-md text-black bg-transparent border-0 border-b-1 appearance-none   focus:outline-none focus:ring-0 peer" placeholder=" " type="email" required />
              <label for="default_filled" className="absolute text-[16px] duration-300 transform -translate-y-4 scale-75 top-4  z-10 origin-[0] left-8   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-5">Em@il</label>
            </div>

            <div className="relative mt-[10px] mr-0 w-[300px] border-b-[1px] border-solid border-black">
              <span className='absolute right-[8px] decoration-white text-[24px] top-[2px]'>
                <ion-icon name="call-outline"></ion-icon>
              </span>
              <input id="default_fille" className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-md text-black bg-transparent border-0 border-b-1 appearance-none   focus:outline-none focus:ring-0 peer" placeholder=" " type="number" required />
              <label for="default_fille" className="absolute text-[16px] duration-300 transform -translate-y-4 scale-75 top-4  z-10 origin-[0] left-8   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-5">Mobile Number</label>
            </div>

            <div className="relative mt-[10px] mr-0 w-[300px] border-b-[1px] border-solid border-black">
              <span className='absolute right-[8px] decoration-white text-[24px] top-[2px]'>
                <ion-icon name="lock-closed-outline"></ion-icon>
              </span>
              <input id="default_fill" className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-md text-black bg-transparent border-0 border-b-1 appearance-none   focus:outline-none focus:ring-0 peer" placeholder=" " type="password" required />
              <label for="default_fill" className="absolute text-[16px] duration-300 transform -translate-y-4 scale-75 top-4  z-10 origin-[0] left-8   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-5 cursor-">Create Password</label>
            </div>

            <div className="relative mt-[10px] mr-0 w-[300px] border-b-[1px] border-solid border-black">
              <span className='absolute right-[8px] decoration-white text-[24px] top-[2px]'>
                <ion-icon name="lock-closed-outline"></ion-icon>
              </span>
              <input id="default_fil" className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-md text-black bg-transparent border-0 border-b-1 appearance-none   focus:outline-none focus:ring-0 peer" placeholder=" " type="password" required />
              <label for="default_fil" className="absolute text-[16px] duration-300 transform -translate-y-4 scale-75 top-4  z-10 origin-[0] left-8   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-5">Conform Password</label>
            </div>

            <div className="text-[14.4px] text-black font-[500] mt-[15px] ml-[15px] flex justify-between">
              <label className=' decoration-white' for="">
                <input className=' accent-black mr-[20px]' type="checkbox" required />
                I agree to the terms & conditions</label>
            </div>
            <br />
            <button type="submit" className="w-full h-[45px] rounded-[40px] bg-black border-none outline-none cursor-pointer text-[16px] font-[500] text-white" form="form1" value="submit">Register</button>
            <div className="text-[14.4px] text-black align-text-bottom font-[500] mt-[8px] ml-[20px] pl-[20px]">
              <p>Already have an account?<a className='text-black  no-underline font-[600] hover:underline' href="#">Login</a></p>
            </div>
            </form>
      </div>
      <script src="login.js"></script>
            <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
            <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    </div>
  )
}

