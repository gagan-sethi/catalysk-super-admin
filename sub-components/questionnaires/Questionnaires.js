// import node module libraries
import CommuteQuestionnaires from './CommuteQuestionnaires';
import ElectricQuestionnaires from './ElectricQuestionnaires';
import WaterQuestionnaires from './WaterQuestionnaires';

const Questionnaires = () => {

    return (
        <div className='questions-tab-cntnt'>


            {/* nav */}

            {/* <div className='questions-tabs cstm-accordian'>
                <nav className='cstm-tabs'>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                        <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#electricity" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Electricity</button>
                        <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#water" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Water</button>
                        <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#commute" type="button" role="tab" aria-controls="nav-contact" aria-selected="false" disabled>Commute</button>
                    </div>
                </nav>

                <div class="tab-content" id="nav-tabContent">


                    <div class="tab-pane fade show active" id="electricity" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
                        <ElectricQuestionnaires />
                    </div>

                    <div class="tab-pane fade" id="water" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
                        <WaterQuestionnaires />
                    </div>
                    <div class="tab-pane fade" id="commute" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">...</div>

                </div>

            </div> */}
            {/* nav */}

            <div className='questions-tabs cstm-accordian'>
                <nav className='cstm-tabs'>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                        <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#electricity" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Electricity</button>
                        <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#water" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Water</button>
                        <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#commute" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Commute</button>
                    </div>
                </nav>

                <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="electricity" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
                        {/* Electricity-Questions-Content */}
                        <ElectricQuestionnaires />
                    </div>

                    <div class="tab-pane fade" id="water" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
                        <WaterQuestionnaires />
                    </div>

                    <div class="tab-pane fade" id="commute" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">
                        <CommuteQuestionnaires />
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Questionnaires