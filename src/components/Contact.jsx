import React, {useRef, useState} from 'react';
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc/index.js';
import { slideIn } from '../utils/motion.js';
import SweetAlert from "react-bootstrap-sweetalert";
import {EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY} from "../../config.js";

const Contact = () => {
  //  Use the reference from the form, properties on the jsx
  const formRef = useRef();

  //  Track the user state of the form, initially it will be empty with the input fields
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })

    // Track the sweet alert so when the form, setForm is valid it'll render as such
  const [showAlert, setShowAlert] = useState(false) // shows the alert
  const [alertText, setAlertText] = useState('')    // sets the alert text to the user
  const [alertType, setAlertType] = useState('success') // shows the failure or success type

  //  Track the loading state of the email being sent to us back
  const [loading, setLoading] = useState(false)

  //  Function to handle a change when the user starts typing into the form itself
  const handleChange = (e) => {
    // get the value, and get the target on the input labels
    const { target } = e;
    const { name, value } = target

    // finally, send the ...form props to the value of the input label type
    setForm({
    ...form,
    [name]: value,
  })
}

  //  Function to handle the user when they click the 'submit' button on the form
  const handleSubmit = (e) => {
    //  stop the browser from refreshing, we will handle the behavior
    e.preventDefault()
    setLoading(true)

    // validate the message and email fields aren't empty
    if(!form.message || !form.email || !form.name) {
        setLoading(false)
        setAlertType('error')
        setAlertText('Please fill out all input values such as your name, email, and message body completely' )
        setShowAlert(true)
        return ; //exits the function without sending anything
    }

    // Added hidden emailKeys so GitHub doesn't steal them, or get publicly leaked
    emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Jesus Perez",
          from_email: form.email,
          to_email: "jesusariasthedeveloper@gmail.com",
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY
        )
        //  After the email has been sent with the passed values and to our EmailJS, thank user then reset form to empty again
        .then(() => {
          setLoading(false)
          setAlertType("success")
          setAlertText(`Thank you ${form.name}, I will get back to your message as soon as possible!`)
          setShowAlert(true)
            setForm({
                name: "",
                email: "",
                message: "",
            })
        }, (error) => {
          // when an error occurs, log to the console and alert the user something went wrong
          setLoading(false)
          setAlertType("error")
          setAlertText('Something went wrong, please make sure you are inputting correct email endings and/or name and message. Otherwise please email contact@jesusperez.dev manually to report any issues')
          setShowAlert(true)
          console.log(error)
        })
  }

  //  Render the Contact Component Below
  return (
      <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
        <motion.div
            variants={slideIn('left', 'tween', 0.25, 1)}
            className="flex-[0.75] bg-black-300 p-8 rounded-2x1"
        >
          <p className={`${styles.sectionSubText}`}>
            Get in Touch...
          </p>
          <h3 className={`${styles.sectionHeadText}`}>
            Contact Me
          </h3>

          {/*FORM BELOW*/}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            {/* Name Label, Title, and PlaceHolder*/}
            <label className="flex flex-col">
              <span className="text-white-300 font-medium mb-4">Name</span>
              <input type="text" name="name" autoComplete="off"
                     value={form.name} onChange={handleChange}
                     placeholder="Enter your name here..."

                     className="bg-slate-800 py-4 px-6 placeholder:text-white-400 text-white rounded-lg outlined none border-none font-medium"
              />
            </label>

            {/* Email Label, Title, and PlaceHolder*/}
            <label className="flex flex-col">
              <span className="text-white-300 font-medium mb-4">Email</span>
              <input type="email" name="email" autoComplete="off"
                     value={form.email} onChange={handleChange}
                     placeholder="Enter your email here..."
                     className="bg-slate-800 py-4 px-6 placeholder:text-white-300 text-white rounded-lg outlined none border-none font-medium"
              />
            </label>

            {/* Message Label, Title, and PlaceHolder*/}
            <label className="flex flex-col">
              <span className="text-white-300 font-medium mb-4">Message</span>
              <textarea rows="7" name="message"
                     value={form.message} onChange={handleChange}
                     placeholder="Write your message here..."
                     className="bg-slate-800 py-4 px-6 placeholder:text-white-300 text-white rounded-lg outlined none border-none font-medium"
              />
            </label>

            <button
                type="submit"
                className="bg-slate-800 py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
            >
              {loading ? 'Sending...': 'Send'}
            </button>
          </form>
            {/* SWEETALERT COMPONENT */}
            {showAlert && (
                <SweetAlert
                    title={alertType === "success" ? "Email Sent!" : "Error"}
                    onConfirm={() => {
                        console.log("User confirmed the action!")
                        setShowAlert(false)
                    }}
                    onCancel={() => {
                        console.log("User canceled the action")
                        setShowAlert(false)
                    }}
                >
                    {alertText}
                </SweetAlert>
            )}
        </motion.div>

        {/* Animate the Earth to the right on large screens, on top on mobile devices*/}
        <motion.div
            variants={slideIn('right', 'tween', 0.25, 1)}
            className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>
  )
}

export default SectionWrapper(Contact, "contact")