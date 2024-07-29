// import node module libraries
import Link from 'next/link';
import { useState } from 'react'
import { Row, Col, Card, Image, Modal, Button, Form, Badge } from 'react-bootstrap';

const SparksGained = () => { 

    return (
        <div className="sparks-gained-cntnt">
        <div className="card"> 
          <div className="card-body">
            <div className="mb-6">
              <h4 className="mb-1">Sparks Gained</h4>
            </div>

            <div className="sparks-gained-hdr">
                <div className="lft-spark">
                <Image src="/images/sparks.png" className="" alt="" />
                <div className="lft-cntnt">
                   <h4>Total Sparks</h4>
                    <p>740</p>    
                </div>
                </div>

                <div className="rgt-spark">
                    <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#sparks-update">Update</button>
                </div>
            </div>

            <div className="sparks-history">
              <div className="mb-6">
                <h4>Sparks Gained History</h4>
              </div>
                <table className="table w-100">
                    <thead>
                      <th>Date</th>                                  
                      <th>Reason</th>                                 
                      <th>Amount</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="spark-date">
                            <h6>July 24, 2024</h6>
                            <p><span className="text-muted">10:00 AM</span></p>
                          </div>  
                        </td>

                        <td className="spark-rsn">
                          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </td>
                          <td>
                            <div className="spark-amt">                                              
                              <p>40</p>
                              <Image src="/images/sparks.png" className="" alt="" />
                            </div>
                          </td>
                 
                       
                      </tr>
                      <tr>
                        <td>
                          <div className="spark-date">
                            <h6>July 24, 2024</h6>
                            <p><span className="text-muted">10:00 AM</span></p>
                          </div>  
                        </td>

                        <td className="spark-rsn">
                          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </td>
                          <td>
                            <div className="spark-amt">                                              
                              <p>40</p>
                              <Image src="/images/sparks.png" className="" alt="" />
                            </div>
                          </td>
                 
                       
                      </tr>
                      <tr>
                        <td>
                          <div className="spark-date">
                            <h6>July 24, 2024</h6>
                            <p><span className="text-muted">10:00 AM</span></p>
                          </div>  
                        </td>

                        <td className="spark-rsn">
                          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </td>
                          <td>
                            <div className="spark-amt">                                              
                              <p>40</p>
                              <Image src="/images/sparks.png" className="" alt="" />
                            </div>
                          </td>
                 
                       
                      </tr>
                      <tr>
                        <td>
                          <div className="spark-date">
                            <h6>July 24, 2024</h6>
                            <p><span className="text-muted">10:00 AM</span></p>
                          </div>  
                        </td>

                        <td className="spark-rsn">
                          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </td>
                          <td>
                            <div className="spark-amt">                                              
                              <p>40</p>
                              <Image src="/images/sparks.png" className="" alt="" />
                            </div>
                          </td>
                 
                       
                      </tr>
                      <tr>
                        <td>
                          <div className="spark-date">
                            <h6>July 24, 2024</h6>
                            <p><span className="text-muted">10:00 AM</span></p>
                          </div>  
                        </td>

                        <td className="spark-rsn">
                          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </td>
                          <td>
                            <div className="spark-amt">                                              
                              <p>40</p>
                              <Image src="/images/sparks.png" className="" alt="" />
                            </div>
                          </td>
                 
                       
                      </tr>
                      

                    </tbody>
                </table>
            </div>

          </div>
        </div>
    </div>
    )
}

export default SparksGained