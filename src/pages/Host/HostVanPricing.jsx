import React from 'react'
import { useOutletContext } from 'react-router-dom';

function HostVanPricing() {
  const {hostVanDetails}=useOutletContext();
  console.log(hostVanDetails);
  return (
    <div className="van-price">
    <h3 className="price heading">${hostVanDetails.price}</h3>
    <span>/day</span>
  </div>
  )
}

export default HostVanPricing