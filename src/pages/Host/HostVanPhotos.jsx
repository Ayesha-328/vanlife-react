import React from 'react'
import { useOutletContext } from 'react-router-dom';

function HostVanPhotos() {
  const {hostVanDetails}=useOutletContext();
  console.log(hostVanDetails);
  return (
    <img src={hostVanDetails.imageUrl} alt="host van" className="host-van-photo" />
  )
}

export default HostVanPhotos