const CommuteQuestionnaires = () => {

    return (
        <div className='electricity-ques'>
            <div className='mt-5 mb-5 d-flex align-items-center justify-content-between'>
                <h3>Users's Summary Commute</h3>
                <h3>Incomplete</h3>
            </div>

            <div className='answers-list-sec' >
                <div className='row row-gap-5'>
                    {/* <div className='col-sm-4'>
                        <div className='answer-card card-bg uppr-card' data-bs-toggle="modal" data-bs-target="#bhk-mddl">
                            <img src="/images/bhk.svg" />
                            <h4>3.5</h4>
                            <p>BHK</p>
                        </div>
                    </div> */}

                    {/* <div className='col-sm-4'>
                        <div className='answer-card card-bg uppr-card' data-bs-toggle="modal" data-bs-target="#devices-mddl">
                            <img src="/images/elec-devices.jpg" />
                            <h4>15</h4>
                            <p>Devices</p>
                        </div>
                    </div> */}

                    {/* <div className='col-sm-4' >
                        <div className='answer-card card-bg uppr-card' data-bs-toggle="modal" data-bs-target="#kwh-mddl">
                            <img src="/images/kwh.jpg" />
                            <h4>400</h4>
                            <p>KWH</p>
                        </div>
                    </div> */}

                    <div className='col-sm-4'>
                        <div className='answer-card card-bg'>
                            <h4 className='givenAns'>141008</h4>
                            <p className='givenQue'>What's your office zipcode?</p>
                        </div>
                    </div>

                    <div className='col-sm-4'>
                        <div className='answer-card card-bg'>
                            <h4 className='givenAns'>Infosys Wing A</h4>
                            <p className='givenQue'>
                                What's your office buiding?
                            </p>
                        </div>
                    </div>

                    <div className='col-sm-4'>
                        <div className='answer-card card-bg'>
                            <h4 className='givenAns'>6</h4>
                            <p className='givenQue'>
                                How many weeks per year are you out of the office?
                            </p>
                        </div>
                    </div>

                    <div className='col-sm-4'>
                        <div className='answer-card card-bg'>
                            <h4 className='givenAns'>25 Miles</h4>
                            <p className='givenQue'>What is the average distance  you travel to work one way ?</p>
                        </div>
                    </div>

                    <div className='col-sm-4'>
                        <div className='answer-card card-bg h-100'>
                            <h4 className='givenAns'>5</h4>
                            <p className='givenQue'>How many days of the week do you go to offce?</p>
                        </div>
                    </div>

                    {/* <div className='col-sm-4'>
                        <div className='answer-card card-bg'>
                            <h4 className='givenAns'>Public transport, Taxi/Rideshare, Own vehicle</h4>
                            <p className='givenQue'>Choose  the mode of transport your use</p>
                        </div>
                    </div> */}
                </div>

                <div className='mt-5 mb-5'>
                    <h3>Commute Details</h3>
                </div>

                <div className='row row-gap-5'>

                    <div className='col-sm-4'>
                        <div className='answer-card card-bg'>
                            <h4 className='givenAns'>Public transport</h4>
                            <ul className='applince-list'>
                                <li>
                                    <div>
                                        <p className='appli-nme'>Auto Rickshaw</p>
                                    </div>
                                    <span className='appli-qty'>1 Day</span>
                                </li>

                                {/* <li>
                                    <div>
                                        <p className='appli-nme'>Metro / mono-rail</p>
                                    </div>
                                    <span className='appli-qty'>03</span>
                                </li> */}

                                {/* <li>
                                    <div>
                                        <p className='appli-nme'>Suburban rail</p>
                                    </div>
                                    <span className='appli-qty'>03</span>
                                </li> */}
                                {/* <li>
                                    <div>
                                        <p className='appli-nme'>Bus</p>
                                    </div>
                                    <span className='appli-qty'>01</span>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                    <div className='col-sm-4'>
                        <div className='answer-card card-bg'>
                            <h4 className='givenAns'>Taxi/rideshare</h4>
                            <ul className='applince-list'>
                                <li>
                                    <div>
                                        <p className='appli-nme'>Auto Rickshaw</p>
                                        <p className='appli-nme-sub'>2 passengers</p>
                                    </div>
                                    <span className='appli-qty'>2 Days</span>
                                </li>

                                <li>
                                    <div>
                                        <p className='appli-nme'>Bike</p>
                                        {/* <p className='appli-nme-sub'>2 passengers</p> */}
                                    </div>
                                    <span className='appli-qty'>0</span>
                                </li>

                                <li>
                                    <div>
                                        <p className='appli-nme'>Car</p>
                                        <p className='appli-nme-sub'>1 passenger</p>
                                    </div>
                                    <span className='appli-qty'>1 Day</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='col-sm-4'>
                        <div className='answer-card card-bg'>
                            <h4 className='givenAns'>Own vehicle</h4>
                            <ul className='applince-list'>
                                <li>
                                    <div>
                                        <p className='appli-nme'>Scooter</p>
                                        {/* <p className='appli-nme-sub'>2 passengers</p> */}
                                    </div>
                                    <span className='appli-qty'>0</span>
                                </li>

                                <li>
                                    <div>
                                        <p className='appli-nme'>Motorbike</p>
                                        {/* <p className='appli-nme-sub'>2 passengers</p> */}
                                    </div>
                                    <span className='appli-qty'>0</span>
                                </li>

                                <li>
                                    <div>
                                        <p className='appli-nme'>Car</p>
                                        <p className='appli-nme-sub'>Hatchback, eV, self-driven</p>
                                    </div>
                                    <span className='appli-qty'>1</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

            {/* modals */}

            <div className="modal fade" id="devices-mddl" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Electric Devices</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className='answer-card'>
                                <h4 className='givenAns'>Appliances Details</h4>
                                <ul className='applince-list'>
                                    <li>
                                        <div>
                                            <p className='appli-nme'>Lights</p>
                                            <p className='appli-nme-sub'>2 CFLs , 1 Tubelight ,  2 Incandescent</p>
                                        </div>
                                        <span className='appli-qty'>05</span>
                                    </li>

                                    <li>
                                        <div>
                                            <p className='appli-nme'>Fans</p>
                                            <p className='appli-nme-sub'>2 BLDC , 1 AC</p>
                                        </div>
                                        <span className='appli-qty'>03</span>
                                    </li>

                                    <li>
                                        <div>
                                            <p className='appli-nme'>Air conditioners</p>
                                            <p className='appli-nme-sub'>1 Split AC, 2 Window AC
                                            </p>
                                        </div>
                                        <span className='appli-qty'>03</span>
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

            <div className="modal fade" id="kwh-mddl" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">KWH</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className='answer-card'>
                                <h4 className='givenAns'>KWH Details</h4>
                                <ul className='applince-list kwh-mdl'>
                                    <li>
                                        <span className='appli-nme'>Living Room</span>
                                        <span className='appli-qty'>100 kWH</span>
                                    </li>

                                    <li>
                                        <span className='appli-nme'>Bedroom-1</span>
                                        <span className='appli-qty'>70 KWH</span>
                                    </li>

                                    <li>
                                        <span className='appli-nme'>Bedroom-2</span>
                                        <span className='appli-qty'>70 KWH</span>
                                    </li>

                                    <li>
                                        <span className='appli-nme'>Staff Room</span>
                                        <span className='appli-qty'>80 KWH</span>
                                    </li>

                                    <li>
                                        <span className='appli-nme'>Rest of the house</span>
                                        <span className='appli-qty'>60 KWH</span>
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

            <div className="modal fade" id="bhk-mddl" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                    <li>
                                        <span className='appli-nme'>Living Room</span>
                                        <span className='appli-qty'>01</span>
                                    </li>

                                    <li>
                                        <span className='appli-nme'>Bedroom</span>
                                        <span className='appli-qty'>02</span>
                                    </li>

                                    <li>
                                        <span className='appli-nme'>Staff Room</span>
                                        <span className='appli-qty'>02</span>
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

        </div>
    )
}

export default CommuteQuestionnaires