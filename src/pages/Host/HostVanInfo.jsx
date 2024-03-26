import React from 'react';
import { useOutletContext } from 'react-router-dom';

function HostVanInfo() {
  const {hostVanDetails}=useOutletContext();
  console.log(hostVanDetails);
  return (
    <div className="host-van-info-container">
      <div className="info">
        <h4 className="title">Name: </h4>
        <p className="desc">{hostVanDetails.name}</p>
      </div>
      <div className="info">
        <h4 className="title">Category: </h4>
        <p className="desc">{hostVanDetails.type}</p>
      </div>
      <div className="info">
        <h4 className="title">Description: </h4>
        <p className="desc">{hostVanDetails.description}</p>
      </div>
      <div className="info">
        <h4 className="title">Visibility: </h4>
        <p className="desc">Public</p>
      </div>
    </div>
  )
}

export default HostVanInfo