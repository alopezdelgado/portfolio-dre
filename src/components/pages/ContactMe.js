import React from 'react'

const ContactMe = () => {
    return(
    <div>
        <h2 className="contact-me-page">Contact Me</h2>
        <img src="./contact-me-pic.png" width={300} height={350}></img>
        <div className="contact-info">
        <p>North Liberty, IA</p>
        <p>andrealdelgado_99@outlook.com</p>
        <a href="https://www.linkedin.com/in/andrea-lopez-/">
        <img src="./linked-in-icon.webp" width={30} height={30}></img>
        </a>
        <a href="https://github.com/alopezdelgado">
        <img src="./github-icon.webp" width={30} height={30}></img>
        </a>
        </div>  
    </div>
    )
}

export default ContactMe