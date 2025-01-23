"use client"
import React, { useState, useEffect } from 'react'

import styles from './SliderBg.module.css'  

// For Components
import { CountDown } from '../CountDown/CountDown'


const countdownDate = new Date('2025-05-19T23:18:07')

export const SliderBg = () => {

    const [currentImgIndex, setCurrentImgIndex] = useState(0)



    // For Images Path
    const ImgPath = [
        '/assets/flower_Coming_Soon1.jpg',
        '/assets/flower_Coming_Soon2.jpg', 
    ]

    // Function T o Go To The Next Image
    const nextImg = () => {
        setCurrentImgIndex((prevIndex) => (prevIndex + 1) % ImgPath.length)
    }
    // Function To Go To The Previous Image
    const prevImg = () => {
        setCurrentImgIndex((prevIndex) => (prevIndex - 1 + ImgPath.length) % ImgPath.length)
    }

    // Now Lets Change Bg Automatically
    useEffect(() => {
        const intervalId = setInterval(() => {
            nextImg()
        }, 5000) // Change Img In Every 5 Sec

        return () => clearInterval(intervalId)
    }, [])

  return (
    <div className={styles.SliderBg}>
        <div>
            <div className={styles.Content1}> 
                <div>
                <h6>E.</h6>
                <p>Nature Lover</p> 
                </div>
            </div>
             <div>
                 <img src={ImgPath[currentImgIndex]} alt="" />
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
        <div className={styles.SliderControllers}>
                <button
                    onClick={prevImg}
                    className={styles.PrevButton}>⬅</button>
                <button
                    onClick={nextImg}
                    className={styles.NextButton}>➡</button>
            </div>
    </div>
  )
}
