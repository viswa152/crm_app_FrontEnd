import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import { env } from '../Config'

function Forgot() {
    const navigateto = useNavigate()
    const formik = useFormik({
        initialValues: {
            Email: "",
        },
        onSubmit: async values => {
            try {
                await axios.post(`${env.api}/forgot`,values)
                navigateto('/login')
                toast("Reset link send Successfully",{
                    className:"tost-massage"
                 })
                
            } catch (error) {
                toast("User Not Available",{
                    className:"tost-massage"
                 })
            }
        }
    })
  return (
    <div>
    <div className='bg-light sticky-top'>
        <div className=' sticky-top bg-light'>
            <div className='navbar container'>
                <img src='https://images.businessnewsdaily.com/app/uploads/2022/08/01033318/freshworkscrm_logo.jpg' style={{ width: "50px", borderRadius: "5px" }}></img>
                <div>
                    <ul className='navbar nav-list'>
                        <li className='me-5'><Link className='li-link-auth' to={'/Login'}>Login</Link></li>
                        <li className='me-5'><Link className='li-link-auth ' to={'/SignIn'}>SignUp</Link></li>
                    </ul>
                </div>

            </div>
        </div>
    </div>
    <div className='content-div-auth'>
        <div className=' content text container'>
            <div className='col-12'>
                <h1 className='pt-3 text' style={{ fontSize: "70px" }}>The real customer centric CRM</h1>
                <h4 className='pt-2 text' style={{ fontSize: "50px" }}>Track leads, close opportunities
                    and get accurate forecasts.</h4>
                <div>
                    <button className='mt-3 content-btn'>Start Now - It's Free</button>
                    <p style={{ fontSize: "20px" }} className='mt-3 text'>Free,forever,with unlimited users.</p>
                </div>
            </div>
        </div>

    </div>
    <div className='d-flex justify-content-center'>
        <form className='col-lg-3 container auth 'onSubmit={formik.handleSubmit}>
            <div className='text-center mb-5'>
                <img src='https://images.businessnewsdaily.com/app/uploads/2022/08/01033318/freshworkscrm_logo.jpg' style={{ width: "50px", borderRadius: "5px" }}></img>
                <h4>fluentCRM</h4>
            </div>
            <input name='Email' placeholder='Email' className='form-control mb-5' onChange={formik.handleChange} value={formik.values.Email}></input>
            <div class="d-grid gap-2 mt-2 text-center">
                <button class="edit_btn" type="submit">Send Email</button>
                <Link to={'/'}class="edit_btn" type="submit">Close</Link>
            </div>
        </form>

    </div>

</div>
  )
}

export default Forgot