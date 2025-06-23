
import React  from 'react'

import styles from './SliderBg.module.css'  

// For Components
import { CountDown } from '../CountDown/CountDown'


const countdownDate = new Date('2025-05-19T23:18:07')

export const SliderBg = () => {

   

  return (
    <div className={styles.SliderBg}>
        <div>
            <div className={styles.Content1}> 
                <div>
                <h6>Petrise</h6>
                {/* <p>Nature Lover</p>  */}
                </div>
            </div>
             <div>
                  <video
                   autoPlay muted loop
                   src="/assets/video.mp4"></video>
             </div>
             <div className={styles.Overlay}></div>
        </div>
        <div className={styles.MainContent}>
          <div>
          <h6>Easy Groups of Companies</h6>
          <h5>Coming Soon</h5> 
         

            <CountDown
             deadline={countdownDate}
            />

          </div>
        </div>
       
    </div>
  )
}
