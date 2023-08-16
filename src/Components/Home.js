import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { env } from "./Config";

function Home() {
  const [data, setdata] = useState([]);
  const [isloading, setLoading] = useState(false);
  useEffect(() => {
    LoadeData();
  }, []);
  let LoadeData = async () => {
    setLoading(true);
    let products = await axios.get(`${env.api}/products`);
    setdata(products.data);
    setLoading(false);
  };
  console.log(data);
  return (
    <div>
      <div className="bg-light sticky-top">
        <div className=" sticky-top bg-light">
          <div className="navbar container">
            <img
              src="https://images.businessnewsdaily.com/app/uploads/2022/08/01033318/freshworkscrm_logo.jpg"
              style={{ width: "150px", height: "100px", borderRadius: "5px" }}
            ></img>
            <div>
              <ul className="navbar nav-list">
                <li className="me-5">
                  <Link className="li-link-auth" to={"/Login"}>
                    Login
                  </Link>
                </li>
                <li className="me-5">
                  <Link className="li-link-auth " to={"/SignIn"}>
                    SignUp
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="content-div">
        <div className=" content text container">
          <div className="col-12">
            <h1 className="pt-3 text" style={{ fontSize: "25px" ,color:"white"}}>
              The real CRM used for Enhancing Customer Relationship
            </h1>
            <h4 className="pt-2 text" style={{ fontSize: "25px",color:"white" }}>
              Tracking leads,opportunities and get Perfect forecasts.
            </h4>
            <h4 className="pt-3" style={{color:"white"}}>
              Bring the very best out of your customer-facing teams with robust
              automation, comprehensive analytics, personalized solutions, and
              more. Sign up and get started in no time—the fastest
              implementation in the enterprise CRM market.
            </h4>

            <div>
              <Link
                to={"/SignIn"}
                className="mt-3 content-btn text-light li-link-auth"
              >
                Start Now - It's Free
              </Link>
             
            </div>
          </div>
        </div>
      </div>

      <div>
        <div
          className="container text-center mt-5 table-responsive"
          style={{ boxShadow: "2px 2px 20px lightGray", borderRadius: "3PX" }}
        >
          {isloading ? (
            <h1>Loading....</h1>
          ) : (
            data.map((data) => {
              return (
                <div className="card-div text-center ">
                  <div className="product-card col-lg-6">
                    <img src={data.Imgurl} className="pr-img"></img>
                    <h2 className="pr-h2">{data.Name}</h2>
                    <h5 className="pr-h2">{data.Uses}</h5>
                    <h5 className="pr-h2">{data.Subject}</h5>
                    <h5 className="pr-h2">{data.description}</h5>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
      {/* <div className='home-div-2 text-center'>
                <div className=' clearfix'>
                <img src='admin2.png' className='home-img col-md-6 float-md-end mb-3 ms-md-3 '></img>
            </div>
            <div style={{ height: "15rem" }}>

            </div>
            <div className=' clearfix'>

                <img src='user.png' className='home-img col-md-6 float-md-start mb-3 ms-md-3 me-5'></img>

            </div>
            <div style={{ height: "15rem" }}>

            </div>
            <div className=' clearfix'>

                <img src='admin.png' className='home-img col-md-6 float-md-end mb-3 ms-md-3'></img>
            </div>
 

            </div> */}
      
    </div>
  );
}

export default Home;
