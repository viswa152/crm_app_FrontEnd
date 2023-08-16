import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { env } from './Config'

function Products() {
    const navigateto = useNavigate()
    const [data,setdata] = useState([])
    const [isloading,setLoading] = useState(false)
    useEffect(()=>{
        LoadeData()
    },[])
    let LoadeData = async () =>{
        setLoading(true)
     let products = await axios.get(`${env.api}/products`)
            setdata(products.data)
            setLoading(false)
        }
     console.log(data)
    
    let deletedata = async (id) =>{
        try {
            setLoading(true)
            await axios.delete(`${env.api}/products/${id}`)
            LoadeData()
            setLoading(false)
            toast('product Removed',{
                className:"tost-massage"
             })
            
        } catch (error) {
            toast('product not Removed',{
                className:"tost-massage"
             })
        }
    }
    let logout=()=>{
        window.localStorage.clear()
        navigateto('/')

    }
    return (
        <div>
             <div className='side-div text-center'>
                <div>
                    <img src='' className='admin-logo'></img>
                    <h5 className='text text-light'>Freshworks CRM</h5>
                </div>
                <div className='side_list_div'>
                  <h5><i class="bi bi-people p-2"></i><Link className='li-link text-light' to={'/ViewEmployess'}>Employees</Link></h5>
                  <h5><i class="bi bi-person-check p-2"></i><Link className='li-link text-light' to={'/ViewCustomers'}>Customers</Link></h5>
                  <h5><i class="bi bi-browser-edge p-2"></i><Link className='li-link text-light' to={'/Products'}>Products</Link></h5>
                </div>
             </div>
             <div className=' sticky-top bg-light text'>
                <div className='navbar container'>
                <img src='https://images.businessnewsdaily.com/app/uploads/2022/08/01033318/freshworkscrm_logo.jpg' style={{width:"50px",borderRadius:"5px"}}></img>
                <h5 style={{color:"#623fe1"}}>Freshworks CRM</h5>
                <div>
                    <ul className='navbar nav-list'>
                        <li className='me-5' onClick={logout}>Log Out</li>
                        <Link to={'/AddProducts'} className='edit_btn mt-2'>AddProducts</Link>
                    </ul>
                </div>
                    
                </div>
            </div>
             <div className='card-div' style={{marginLeft:"12%"}}>
             <div className='container text-center mt-5 table-responsive' style={{ boxShadow: "2px 2px 20px lightGray", borderRadius: "3PX" }}>
                {

             isloading?<h1>Loading....</h1>:
             data.map((data)=>{
                return(
                    
                                 <div className='card-div text-center '>
                                 <div className='product-card col-lg-6'>
                                    <img src={data.Imgurl} className='pr-img'></img>
                                     <h2 className='pr-h2'>{data.Name}</h2>
                                     <h5 className='pr-h2'>{data.Uses}</h5>
                                     <h5 className='pr-h2'>{data.Subject}</h5>
                                     <h5 className='pr-h2'>{data.description}</h5>
                                 </div>
                    
                             </div>

                )
             })
                }
            </div>

            </div>
           
        </div>
    )
}

export default Products