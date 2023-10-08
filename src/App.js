import './App.css'
import { useRef } from "react"
import React from 'react'
import ScrollToTop from "./components/ScrollToTop"

const App = () => {
  const about = useRef(null)
  const experience = useRef(null)
  const projects = useRef(null)
  const contact = useRef(null)

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    })
  }
  return (
    <>
      <ScrollToTop />
      <div className="title-page">
        <h3 onClick={()=>scrollToSection(about)}className="about-me-button">About Me</h3>
        <h3 onClick={()=>scrollToSection(experience)}className="experience-button">Experience and Education</h3>
        <h3 onClick={()=>scrollToSection(projects)}className="projects-button">Projects</h3>
        <h3 onClick={()=>scrollToSection(contact)}className="contact-button">Contact Me</h3>
        <h1 className="title">Welcome to my Portfolio</h1>
        <img src="./title-pic.jpeg" width={500} height={650}  alt="Dre standing in front of a latin art mural"></img>
        <h2 className="name">Dre Lopez Delgado</h2>
      </div>
      <div className="about-me-text">
        <h2 ref={about}>About Me</h2>
        <img src="./about-me-pic.jpeg" width={500} height={500} alt="Dre in front of a brick wall"></img>
        <p>
        I am a native of Ciudad Juarez, Mexico, a vibrant border city that has shaped my perspective on life and culture. I embarked on my academic journey with a passion for the natural world, earning a bachelor's degree in biology. Throughout my studies, I delved deep into the intricacies of life and the environment, fostering a profound curiosity about the intersection of technology and biology.
        <br></br>
        <br></br>
        My current endeavor involves learning how to code, a skill that I believe will serve as a powerful tool in bridging the gap between these two seemingly disparate fields. This journey is driven by my ultimate career goal of harnessing technology to enhance our understanding of biology, whether through cutting-edge research, data analysis, or innovative solutions that improve healthcare and environmental conservation.
        <br></br>
        <br></br>
        I am excited to embark on this path of discovery, where I can leverage my diverse background to make meaningful contributions to the world of science and technology. 
        <br></br>
        <br></br>
        In addition to my academic pursuits and passion for biology and technology, I also have a practical side rooted in healthcare. Prior to delving into coding, I worked as a Certified Nursing Assistant (CNA). This experience provided me with a unique perspective on the healthcare industry, giving me firsthand insight into patient care, the importance of data-driven decision-making, and the potential for technology to revolutionize healthcare delivery.
        <br></br>
        <br></br>
        As a CNA, I witnessed the daily challenges faced by healthcare professionals and patients alike. This experience has fueled my desire to merge my biology background with technology to create solutions that can streamline healthcare processes, improve patient outcomes, and make healthcare more accessible and efficient.
        <br></br>
        <br></br>
        My journey is not just about acquiring coding skills; it's about using these skills to make a tangible impact on the world, particularly in the fields of biology and healthcare. I am determined to bridge the gap between these two domains, drawing from my diverse experiences and education to create innovative solutions that have the potential to transform lives and advance our understanding of the natural world. The fusion of biology, technology, and healthcare is where my true passion lies, and I am excited to see where this journey will take me in the future.
        </p>
      </div>
      <div ref={experience}     className="experience-page">
        <h2>Experience and Education</h2>
        <h3>Mount Mercy University</h3>
        <p> During my pursuit of a bachelor's degree in biology at Mount Mercy University, I not only excelled academically but also actively engaged in campus life, fostering a well-rounded college experience. Beyond the classroom, I was a dedicated member of the women's soccer team, where I honed my teamwork, discipline, and determination on the field. This experience taught me valuable life skills that complemented my academic journey.
        <br></br>
        <br></br>
        My involvement extended beyond athletics as I also served as a member of the Student Government Association (SGA). This role allowed me to connect with my peers, advocate for student needs, and contribute to the vibrant campus community. My dedication and commitment to the betterment of the university community were recognized when I was honored with the President's Award. This award celebrated my tenacity, dedication, compassion, and heart, traits that I carry with me in all aspects of my life.
        <br></br>
        <br></br>
        Throughout my time at Mount Mercy University, I maintained a strong academic record, reflecting my unwavering commitment to learning and growth. My academic achievements, combined with my involvement in campus activities, reinforced my belief in the importance of a holistic education that encompasses both intellectual and personal development. These experiences have laid a strong foundation for my journey to bridge the worlds of technology and biology, driven by a desire to make a meaningful impact on society.</p>
        <h3>LEARN Academy</h3>
        <p>My journey to bridge technology and biology has taken an exciting turn as I embark on a new chapter in my life. I am currently enrolled in a Full Stack Web Developer bootcamp at LEARN Academy, where I am immersing myself in the world of coding. This program marks the beginning of a thrilling adventure into the realm of technology, as I strive to acquire the skills and knowledge necessary to merge my passion for biology with the power of web development.
        <br></br>
        <br></br>
        In this intensive bootcamp, I am learning a comprehensive set of web development technologies, including HTML, CSS, JavaScript, React JS, Ruby, Ruby on Rails, and PostgreSQL. These tools are the building blocks of modern web applications, and I am enthusiastic about mastering them to create innovative solutions at the intersection of biology and technology. This immersive learning experience represents the first step toward realizing my vision of a future where technology and biology work harmoniously to address some of society's most pressing challenges. I am excited to embrace the challenges, grow as a developer, and ultimately contribute to the advancement of both biology and healthcare through the fusion of these two distinct yet interconnected worlds.
        </p>
      </div>
      <h2 ref={projects}className="project-title">Projects</h2>
      <div className="project-images">
        <img src="./placeholderLC.png" width={350} height={350}></img>
        <img src="./placeholderLC.png" width={350} height={350}></img>
        <img src="./placeholderLC.png" width={350} height={350}></img>
      </div>
      <div>
        <h2 ref={contact}className="contact-me-page">Contact Me</h2>
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
    </>
  )
}

export default App
