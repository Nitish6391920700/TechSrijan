import React from 'react'
import classes from "./ContactUs.module.css"
import Button from "../common/Button/Button"

const ContactUs = () => {
  return (
    <>
    <div className={classes.background}>
      <div className={classes.card}>
        <div className={classes.contentContainer}>
          <div className={classes.textContent}>
            <h1 className={classes.heading}>Join Community</h1>
            <p className={classes.welcomeheading}>
            Welcome to TechSrijan'25
            </p>
            <p className={classes.description}>
            Stay tuned for all the latest updates, event announcements, and exclusive content related to Antaragni, our annual cultural extravaganza. Join us in celebrating creativity, talent, and the vibrant spirit of campus life. Don't miss out on any of the action. This is where the magic happens!
            </p>
            <div className={classes.button}>
              <Button label="Join WhatsApp Channel" />
            </div>
          </div>
          <div className={classes.imageContent}>
            <img
              src="https://cdn.pixabay.com/photo/2024/02/13/17/30/sailing-ship-8571483_1280.jpg"
              alt="Event Highlight"
              className={classes.image}
            />
          </div>
        </div>
      </div>
    </div>
  </>
  
  )
}

export default ContactUs