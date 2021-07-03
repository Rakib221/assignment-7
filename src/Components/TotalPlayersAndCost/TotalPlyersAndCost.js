import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEuroSign } from '@fortawesome/free-solid-svg-icons';
const TotalPlyersAndCost = (props) => {
    console.log(props);
            // console.log(props.details[0].name);
            // for(let i = 0; i < props.details.length; i++) {
            //         var selectSinglePlayer = props.details[i];
            // }
            let total = 0;
            for(let i = 0;i<props.details.length;i++){
                const singlePlayerSalary = props.details[i];
                total = total + singlePlayerSalary.salary;
            }
    return (
        <div>
            <div className="row" style={{position:"fixed",top:70,marginBottom:"100px",backgroundColor:"red",padding:"5px 55px"}}>
                <div>
                   <h2>Details: </h2>
                   <p><b>Total players:{props.details.length}</b></p>
                   <p><b>Total players cost:{total} </b><FontAwesomeIcon icon={faEuroSign} /></p>
                </div>
            </div>
            <div className="row" id="player-div" style={{marginTop:"100px"}}>
                <h3 className="text-danger">Select your players(only 11)</h3>
                <div>
                {
                    props.details.map(detail =>
                        <div className="d-flex justify-content-center align-items-center">
                            <p><img style={{width:"100px",height:"120px"}} src={detail.image} alt="" /></p>
                            <p className="px-5">Salary: <b>{detail.salary}<FontAwesomeIcon icon={faEuroSign} /></b></p>
                        </div>
                    )
                }
                </div>
                <div>
                    <h3 className="text-danger">Select your coach(only 1):</h3>
                    {
                        props.coachDetails.map(
                            coach=><div>
                                <img src={coach.image} style={{width:"200px",height:"240px"}} />
                                <br />
                                <h4>{coach.name}</h4>
                                <p><b>Coach salary:{coach.salary}<FontAwesomeIcon icon={faEuroSign} /></b></p>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className="row">

            </div>
        </div>
    );
};

export default TotalPlyersAndCost;