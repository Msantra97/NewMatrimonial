import React from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'


export default function Contact() {
  return (
    <div>
<Nav/>
    
<div className='flex flex-auto justify-center w-full h-[660px] bg-[#917FB3]'>
        <div className="container">
            <h2>Contact Us</h2>
            <div className="row100">
                <div className="col">
                    <div className="inputbox">
                        <input type="text" name="" required="required"/>
                        <span className="text">First Name</span>
                        <span className="link"></span>
                    </div>
                </div>
                <div className="col">
                    <div className="inputbox">
                        <input type="text" name="" required="required"/>
                        <span className="text">Last Name</span>
                        <span className="link"></span>
                    </div>
                </div>
            </div>
            <div className="row100">
                <div className="col">
                    <div className="inputbox">
                        <input type="text" name="" required="required"/>
                        <span className="text">Email</span>
                        <span className="link"></span>
                    </div>
                </div>

                <div className="col">
                    <div className="inputbox">
                        <input type="text" name="" required="required"/>
                        <span className="text">Mobile</span>
                        <span className="link"></span>
                    </div>
                </div>
            </div>
            <div className="row100">
                <div className="col">
                    <div className="inputbox textarea">
                        <textarea required="required"></textarea>
                        <span className="text">Type Your Message Here</span>
                        <span className="link"></span>
                    </div>
                </div>
            </div>
            <div className="row100">
                <div className="col">
                    <input type="submit" value="Send"/>
                </div>
            </div>
    
    </div>
    </div>
    <Footer/>
    </div>
  )
}