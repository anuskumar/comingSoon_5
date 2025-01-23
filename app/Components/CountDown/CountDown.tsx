"use client"
import React, { useEffect, useState } from 'react'

import styles from './CountDown.module.css'

interface CountDownTimeLeft {
     days?:number;
     hrs?:number,
     mins?:number,
     secs?:number
}


interface CountDownTimeProps {
    deadline: Date;
}

const INITIAL_TIME_LEFT = {days:0, hrs:0, mins:0, secs:0}

export const CountDown = (
    {deadline}:CountDownTimeProps
) => {

    const [timeLeft, setTimeLeft] = useState<CountDownTimeLeft>(INITIAL_TIME_LEFT)

    useEffect(() =>{
        setTimeLeft(calculateTimeLeft())

        const timer = setInterval(() =>{
            setTimeLeft(calculateTimeLeft())
        })
        return () => clearInterval(timer)
    }, [])


    function calculateTimeLeft():CountDownTimeLeft{
        let timeLeft: CountDownTimeLeft = {};
        const currentDate = new Date();
        const difference = deadline.getTime() - currentDate.getTime(); 
        


        if(difference > 0){
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 *24)),
                hrs: Math.floor((difference / (1000 *60 *60)) %24) ,
                mins: Math.floor((difference / 1000 / 60) % 60),
                secs: Math.floor((difference / 1000) % 60),
            }

        }
return timeLeft;
    }


  return (
    <div className={styles.CountDownWrapper}>
        <div className={styles.CountDownTimer}>
            
            <div className={styles.TimeContainer}>
                <span className={styles.value}>{timeLeft.days}</span>
                <span className={styles.uni}>Days</span>
            </div>            

            <span className={styles.Seprator}>:</span>

            <div className={styles.TimeContainer}>
                <span className={styles.value}>{timeLeft.hrs}</span>
                <span className={styles.uni}>Hrs</span>
            </div>            

            <span className={styles.Seprator}>:</span>

            <div className={styles.TimeContainer}>
                <span className={styles.value}>{timeLeft.mins}</span>
                <span className={styles.uni}>Min</span>
            </div>            

            <span className={styles.Seprator}>:</span>

            <div className={styles.TimeContainer}>
                <span className={styles.value}>{timeLeft.secs}</span>
                <span className={styles.uni}>Sec</span>
            </div>          

        </div>
    </div>
  )
}
