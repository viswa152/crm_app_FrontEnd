import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

function AdminNav() {
    const navigateto = useNavigate()
    const params = useParams()
    let logout=()=>{
        window.localStorage.clear()
        navigateto('/')

    }
  return (
    <div className=' sticky-top bg-light text'>
    <div className='navbar container'>
    <img src='https://images.businessnewsdaily.com/app/uploads/2022/08/01033318/freshworkscrm_logo.jpg' style={{width:"50px",borderRadius:"5px"}}></img>
    <h5 style={{color:"#623fe1"}}>Freshworks CRM</h5>
    <div>
        <ul className='navbar nav-list'>
            <li className='me-5'>{params.name}</li>
            <li className='me-5'><Link className='li-link' to={'/manageadmin'} style={{color:"#7742e6"}}>Mange Admin</Link></li>
            <li className='me-5 ' onClick={logout}>Log Out</li>
        </ul>
    </div>
        
    </div>
</div>
  )
}

export default AdminNav