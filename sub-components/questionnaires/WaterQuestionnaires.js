// import node module libraries
import Link from 'next/link';
import { Row, Col, Card, Image, Modal, Button, Form, Badge } from 'react-bootstrap';
import React, { useState, useEffect } from "react";

const WaterQuestionnaires = () => { 

const [waterconsumption,setConsumtionwater] = useState('')
const [consumption,setConsumtion] = useState('')


 useEffect(() => {
   getconsumption()
    getconsumptionforwater()
  }, [])


   const getconsumption = async () => {
   const urlObj = typeof window !== "undefined" ? new URL(window.location.href) : '';

   const pathname =  urlObj ? urlObj.pathname : '';
const id = pathname.split('/').pop();
console.log(id); 

                        const token = typeof window !== 'undefined' ? localStorage.getItem('token') : '';

     const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/user/electricityConsumption/${id}`, {
          method: 'GET',
          headers: {
          'Authorization': `Bearer ${token}`,

        }
        
        });
        const data = await res.json();
        console.log(data)
        if(res.ok){
            setConsumtion(data.data)

        }

 
  }

        const getconsumptionforwater = async () => {
   const urlObj = typeof window !== "undefined" ? new URL(window.location.href) : '';

   const pathname =  urlObj ? urlObj.pathname : '';
const id = pathname.split('/').pop();
console.log(id); 

                        const token = typeof window !== 'undefined' ? localStorage.getItem('token') : '';

     const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/user/waterConsumption/${id}`, {
          method: 'GET',
          headers: {
          'Authorization': `Bearer ${token}`,

        }
        
        });
        const data = await res.json();
        console.log(data)
        if(res.ok){
            setConsumtionwater(data.data)

        }

 
  }
    return (      
        <>
        <div className='water-ques'>
        <div className='mt-5 mb-5'>
            <h3>Users's Summary</h3>                  
        </div>                                 

        <div className='answers-list-sec' >
            <div className='row row-gap-5'>
                <div className='col-sm-4'>
                    <div className='answer-card card-bg uppr-card' data-bs-toggle="modal" data-bs-target="#bhk2-mddl">
                        <img src="/images/bhk.svg" />  
                        <h4>{consumption?.no_of_rooms}</h4>
                        <p>BHK</p>
                    </div>  
                </div>

            <div className='col-sm-4'>
                <div className='answer-card card-bg uppr-card'  data-bs-toggle="modal" data-bs-target="#fittings-mddl">
                    <img src="/images/tap.png" />  
                    <h4>{waterconsumption?.total_fittings}</h4>
                    <p>Fittings</p>
                </div>  
            </div>

            <div className='col-sm-4' >
                <div className='answer-card card-bg uppr-card' data-bs-toggle="modal" data-bs-target="#used-water-mddl">
                    <img src="/images/water.png" />  
                    <h4>{waterconsumption?.water_usage_per_year}</h4>
                    <p>Litres/year</p>
                </div>  
            </div>

            <div className='col-sm-4'>
                <div className='answer-card card-bg'>
                    <h4 className='givenAns'>{waterconsumption?.total_fittings}</h4>
                    <p className='givenQue'>How many fittings do you have at home ?</p>
                </div>  
            </div>

            <div className='col-sm-4'>
                <div className='answer-card card-bg'>
                    <h4 className='givenAns'>{waterconsumption?.no_of_person_usage_toilet}</h4>
                    <p className='givenQue'>                                                
                    How many people use the single flush toilet?
                    </p>
                </div>  
            </div>

            <div className='col-sm-4'>
                <div className='answer-card card-bg'>
                    <h4 className='givenAns'>{waterconsumption?.container_water_hold_capacity} L</h4>
                    <p className='givenQue'>                                                   
                    What is your container size?
                    </p>
                </div>  
            </div>

            <div className='col-sm-4'>
                <div className='answer-card card-bg'>
                    <h4 className='givenAns'>Taps ({waterconsumption?.tap_water_flow_per_minute}s)</h4>
                    <h4 className='givenAns'>Showers ({waterconsumption?.shower_head_water_flow_per_minute}s)</h4>
                    <p className='givenQue'>                                                   
                        Let’s measure the time it takes to fill it 
                    </p>
                </div>  
            </div>

           
        </div>

            <div className='mt-5 mb-5'>
                <h3>Fitting Details</h3>                  
            </div>   

            <div className='row row-gap-5'>                                               

            <div className='col-sm-4'>
                <div className='answer-card card-bg'>
                    <h4 className='givenAns'>Home</h4>
                    <ul className='applince-list'>
                        <li>
                            <div>
                                <p className='appli-nme'>Taps</p>
                                <p className='appli-nme-sub'>({waterconsumption?.tap_water_flow_per_minute}/15s)</p>
                            </div>
                            <span className='appli-qty'>{waterconsumption?.taps_count}</span>
                        </li>

                        <li>
                            <div>
                                <p className='appli-nme'>Sower heads</p>
                                <p className='appli-nme-sub'>({waterconsumption?.shower_head_water_flow_per_minute}/15s)</p>
                            </div>                                    
                            <span className='appli-qty'>{waterconsumption?.shower_head_count}</span>
                        </li>

                        <li>
                             <div>
                                <p className='appli-nme'>Single-flush toilets</p>
                            
                            </div>
                            <span className='appli-qty'>{waterconsumption?.single_flush_toilet}</span>
                        </li>
                    </ul>
                </div>  
            </div>


        </div> 

        </div>    

     

    </div>
   
       {/* modals */}


   <div className="modal fade" id="bhk2-mddl" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
       <div className="modal-dialog">
       <div className="modal-content">
           <div className="modal-header">
           <h1 className="modal-title fs-5" id="exampleModalLabel">BHK</h1>
           <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
           </div>
           <div className="modal-body">
           <div className='answer-card'>
               <h4 className='givenAns'>BHK Details</h4>
               <ul className='applince-list kwh-mdl'>
                  {consumption?.rooms_detail?.map((item, index) => (
                                <li>
                                    <span className='appli-nme'>{item.name}</span>
                                    
                                </li>
                                ))}                  
               </ul>
           </div> 
           </div>
           <div className="modal-footer">             
           <button type="button" className="btn btn-outline-white" data-bs-dismiss="modal">Close</button>
           </div>
       </div>
       </div>
   </div> 

   <div className="modal fade" id="fittings-mddl" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
       <div className="modal-dialog">
       <div className="modal-content">
           <div className="modal-header">
           <h1 className="modal-title fs-5" id="exampleModalLabel">Fittings</h1>
           <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
           </div>
           <div className="modal-body">
           <div className='answer-card'>
               <h4 className='givenAns'>Fittings Details</h4>
               <ul className='applince-list'>
                        <li>
                            <div>
                                <p className='appli-nme'>Taps</p>
                                <p className='appli-nme-sub'>({waterconsumption?.tap_water_flow_per_minute}ml/15s)</p>
                            </div>
                            <span className='appli-qty'>{waterconsumption?.taps_count}</span>
                        </li>

                        <li>
                            <div>
                                <p className='appli-nme'>Shower heads</p>
                                <p className='appli-nme-sub'>({waterconsumption?.shower_head_water_flow_per_minute}ml/15s)</p>
                            </div>                                    
                            <span className='appli-qty'>{waterconsumption?.shower_head_count}</span>
                        </li>

                        <li>
                             <div>
                                <p className='appli-nme'>Single-flush toilets</p>
                            
                            </div>
                            <span className='appli-qty'>{waterconsumption?.single_flush_toilet}</span>
                        </li>
                    </ul>
           </div> 
           </div>
           <div className="modal-footer">             
           <button type="button" className="btn btn-outline-white" data-bs-dismiss="modal">Close</button>
           </div>
       </div>
       </div>
   </div> 

   <div className="modal fade" id="used-water-mddl" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
       <div className="modal-dialog">
       <div className="modal-content">
           <div className="modal-header">
           <h1 className="modal-title fs-5" id="exampleModalLabel">Used Water</h1>
           <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
           </div>
           <div className="modal-body">
           <div className='answer-card'>
               <h4 className='givenAns'>Details</h4>

                <div>
                                <p className='appli-nme'>Total water consumption</p>
                            </div>
                                                        <span className='appli-qty'>{waterconsumption?.water_usage_per_year}L</span>

             
             {/*  <ul className='applince-list'>
                        <li>
                            <div>
                                <p className='appli-nme'>Taps</p>
                            </div>
                            <span className='appli-qty'>500L</span>
                        </li>

                        <li>
                            <div>
                                <p className='appli-nme'>Shower heads</p>
                            </div>                                    
                            <span className='appli-qty'>1000L</span>
                        </li>

                        <li>
                             <div>
                                <p className='appli-nme'>Single-flush toilets</p>
                            
                            </div>
                            <span className='appli-qty'>2000L</span>
                        </li>
                    </ul>*/}
           </div> 
           </div>
           <div className="modal-footer">             
           <button type="button" className="btn btn-outline-white" data-bs-dismiss="modal">Close</button>
           </div>
       </div>
       </div>
   </div> 

      </>
      
    )
}

export default WaterQuestionnaires