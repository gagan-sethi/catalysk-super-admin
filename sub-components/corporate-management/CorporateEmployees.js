// import node module libraries
import Link from 'next/link';
import { Col, Row, Card, Form } from 'react-bootstrap';

const CorporateEmployees = () => {
  return (
    <div className="general-tabs-cntnt only-view">
    <div className="card">
      <div className="card-body">
      <div className="mb-6 d-flex justify-content-between align-items-center">
        <h4 className="mb-1">Corporate Employees</h4>
        {/* <span class="individual-tag">Individual</span> */}
     </div>
              
     <div className="table-div">            
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">Sr. No.</th>
                        <th scope="col">Employee ID</th>
                        <th scope="col">Full Name</th>                     
                        <th scope="col">Email	</th>
                        <th scope="col">Phone Number</th> 
                        <th scope="col">Addreess</th>                
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>

                      <tr>
                        <th scope="row">01</th>
                        <th>CAT622539585</th>
                        <td className="text-nowrap">Pardeep Singla</td>
                        <td>pardeep.singla@gmail.com</td>                     
                        <td className="nmbr-td">+91-9874563652</td>                   
                        <td className="adrs-td">
                          1234 Main Street, Suite 100
                          San Francisco, CA 94105
                          USA
                        </td>
                        <td className="action-td">
                          <div className="dropdown">
                              <span
                                className="cstmDropdown dropdown-toggle"              
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                              <i className="fe fe-more-vertical"></i>
                              </span>
                              <ul className="dropdown-menu">
                                <li>
                                  <Link className="dropdown-item" href="#">
                                     View
                                  </Link>
                                </li>                              
                              </ul>

                          </div>
                        </td>                   
                      </tr>   

                      <tr>
                        <th scope="row">02</th>
                        <th>CAT622539585</th>
                        <td className="text-nowrap">Pardeep Singla</td>
                        <td>pardeep.singla@gmail.com</td>                     
                        <td className="nmbr-td">+91-9874563652</td>                   
                        <td className="adrs-td">
                          1234 Main Street, Suite 100
                          San Francisco, CA 94105
                          USA
                        </td>     
                        <td className="action-td">
                          <div className="dropdown">
                              <span
                                className="cstmDropdown dropdown-toggle"              
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                              <i className="fe fe-more-vertical"></i>
                              </span>
                              <ul className="dropdown-menu">
                                <li>
                                  <Link className="dropdown-item" href="#">
                                     View
                                  </Link>
                                </li>                              
                              </ul>

                          </div>
                        </td>                     
                      </tr>    


                      <tr>
                        <th scope="row">03</th>
                        <th>CAT622539585</th>
                        <td className="text-nowrap">Pardeep Singla</td>
                        <td>pardeep.singla@gmail.com</td>                     
                        <td className="nmbr-td">+91-9874563652</td>                   
                        <td className="adrs-td">
                          1234 Main Street, Suite 100
                          San Francisco, CA 94105
                          USA
                        </td>    
                        <td className="action-td">
                          <div className="dropdown">
                              <span
                                className="cstmDropdown dropdown-toggle"              
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                              <i className="fe fe-more-vertical"></i>
                              </span>
                              <ul className="dropdown-menu">
                                <li>
                                  <Link className="dropdown-item" href="#">
                                     View
                                  </Link>
                                </li>                              
                              </ul>

                          </div>
                        </td>                      
                      </tr>   

                      <tr>
                        <th scope="row">04</th>
                        <th>CAT622539585</th>
                        <td className="text-nowrap">Pardeep Singla</td>
                        <td>pardeep.singla@gmail.com</td>                     
                        <td className="nmbr-td">+91-9874563652</td>                   
                        <td className="adrs-td">
                          1234 Main Street, Suite 100
                          San Francisco, CA 94105
                          USA
                        </td>      
                        <td className="action-td">
                          <div className="dropdown">
                              <span
                                className="cstmDropdown dropdown-toggle"              
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                              <i className="fe fe-more-vertical"></i>
                              </span>
                              <ul className="dropdown-menu">
                                <li>
                                  <Link className="dropdown-item" href="#">
                                     View
                                  </Link>
                                </li>                              
                              </ul>

                          </div>
                        </td>                    
                      </tr>  

                     <tr>
                        <th scope="row">06</th>
                        <th>CAT622539585</th>
                        <td className="text-nowrap">Pardeep Singla</td>
                        <td>pardeep.singla@gmail.com</td>                     
                        <td className="nmbr-td">+91-9874563652</td>                   
                        <td className="adrs-td">
                          1234 Main Street, Suite 100
                          San Francisco, CA 94105
                          USA
                        </td>     
                        <td className="action-td">
                          <div className="dropdown">
                              <span
                                className="cstmDropdown dropdown-toggle"              
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                              <i className="fe fe-more-vertical"></i>
                              </span>
                              <ul className="dropdown-menu">
                                <li>
                                  <Link className="dropdown-item" href="#">
                                     View
                                  </Link>
                                </li>                              
                              </ul>

                          </div>
                        </td>                     
                      </tr> 

                      <tr>
                        <th scope="row">07</th>
                        <th>CAT622539585</th>
                        <td className="text-nowrap">Pardeep Singla</td>
                        <td>pardeep.singla@gmail.com</td>                     
                        <td className="nmbr-td">+91-9874563652</td>                   
                        <td className="adrs-td">
                          1234 Main Street, Suite 100
                          San Francisco, CA 94105
                          USA
                        </td>  
                        <td className="action-td">
                          <div className="dropdown">
                              <span
                                className="cstmDropdown dropdown-toggle"              
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                              <i className="fe fe-more-vertical"></i>
                              </span>
                              <ul className="dropdown-menu">
                                <li>
                                  <Link className="dropdown-item" href="#">
                                     View
                                  </Link>
                                </li>                              
                              </ul>

                          </div>
                        </td>                        
                      </tr>   
                    
                    </tbody>
                  </table>             

                </div>
                <div className="pagination-div">              
                   <nav aria-label="...">                    
                      <ul class="pagination">
                        <li class="page-item disabled">
                          <span class="page-link">Previous</span>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item active">
                          <span class="page-link">
                            2
                            <span class="sr-only">(current)</span>
                          </span>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                          <a class="page-link" href="#">Next</a>
                        </li>
                      </ul>

                    </nav>
                 </div>
              </div>  

      </div>
    </div>
                
</div>
  )
}

export default CorporateEmployees