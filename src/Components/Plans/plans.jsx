import React from 'react'
import {plansData} from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'
import './plans.css'

const Plans = () => {
  return (
    <div className="plansContainer">
        <div className="plansHeader" style={{gap: '2rem'}}>
            <span className='stroke-text'>Ready to Start</span>
            <span>Your journy</span>
            <span className='stroke-text'>With us</span>
        </div>

        {/* plans */}
        <div className="plans">
        {plansData.map((plans, i)=>(
          <div className="plan" key={i}>
            {plans.icon}
            <span>{plans.name}</span>
            <span>$ {plans.price}</span>

            {/* planFeatures */}
            <div className="planFeatures">
              {plans.features.map((feature, i)=>(
                <div className="feature">
                  <img src={whiteTick} alt="" />
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>
            {/* end planFeatures */}
            <div>
                <span>View more details-></span>
              </div>
              <button className="btn"> Join now </button>
          </div>
        ))}
        </div>
        {/* end plans */}
    </div>
  )
};

export default Plans;