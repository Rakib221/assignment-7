import React from 'react';
import './AllPlayersAndCoach.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faEuroSign } from '@fortawesome/free-solid-svg-icons';

const AllPlayersAndCoach = (props) => {
    const {id,name,position,image,salary,nationality,club} = props.player;
    return (
        <div>
            <div className="row">
                <div className="p-5 card-style m-2 rounded" style={{width:"18rem"}} >
                    <h4 className="text-center">{name}</h4>
                    <br />
                    <div className="align-image d-flex justify-content-center align-items-center">
                        <img style={{width:"200px",height:"250px"}} src={image} alt="" />
                    </div>
                    <br />
                    <p className="text-center fw-bold">Position:{position}</p>
                    <p className="text-center fw-bold">Salary:{salary}<FontAwesomeIcon icon={faEuroSign} /></p>
                    <p className="text-center fw-bold">Nationality:{nationality}</p>
                    <p className="text-center fw-bold">Club:{club}</p>
                    <div className="align-image d-flex justify-content-center align-items-center">
                        <button onClick={()=>props.handleAddPlayer(props.player)} className="text-center" type="button" class="btn btn-danger"><FontAwesomeIcon icon={faPlus} /> ADD PLAYER</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllPlayersAndCoach;