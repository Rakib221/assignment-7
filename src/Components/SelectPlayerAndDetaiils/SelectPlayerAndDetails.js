import React from 'react';
import AllPlayersAndCoach from '../AllPlayers/AllPlayersAndCoach';
import fakeData from '../FakeData/Data.json';
import TotalPlyersAndCost from '../TotalPlayersAndCost/TotalPlyersAndCost';
import {useState} from 'react';

const SelectPlayerAndDetails = () => {
    const [details,setDetails] = useState([]);
    const [coachDetails,setCoachDetails] = useState([]);
    const handleAddPlayer = (man) => {
        if (man.current === "active") {
                    if (details.length<11) {
                        const newDetails = [...details,man];
                        let deleteDuplicate = [...new Set(newDetails)]
                        setDetails(deleteDuplicate);
                    }
                    else{
                        alert("11 have selected");
                    }
        }
        else{
                coachDetails.shift();
                const newCoachDetails = [...coachDetails,man];
                setCoachDetails(newCoachDetails);   
        }
    }
    return (
        <div>
            <div className="row">
                <div className="col-lg-2">

                </div>
                <div className="col-lg-3">
                    {
                       fakeData.map(player=><AllPlayersAndCoach handleAddPlayer = {handleAddPlayer} player={player}></AllPlayersAndCoach>)
                    }
                </div>
                <div className="col-lg-2">

                </div>
                <div className="col-lg-4">
                    <TotalPlyersAndCost coachDetails={coachDetails} details={details}></TotalPlyersAndCost>
                </div>
                <div className="col-lg-1">

                </div>
            </div>
        </div>
    );
};

export default SelectPlayerAndDetails;