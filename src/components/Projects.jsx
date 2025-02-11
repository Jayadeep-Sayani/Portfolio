import React from 'react'

export const Projects = () => {
  return (
    <div className='projects' id="projects">
      <h1>My Works</h1>
      <div className="line-with-diamond">
        <div className="diamond"></div>
      </div>
      <div className="center-projects" >
        <div className="projects-container">
          <div className="project one">
            <div className="border">
              <img src="/Portfolio/Petal.png" alt="Project 1" />
              <div className="info">
                <h4 className="project-type">HACKATHON PROJECT</h4>
                <h3>Petal</h3>
                <p>Aimed towards those that deal with stress in their daily life, this application <span>aims to improve mental health</span>. The app contains breathing animations and exercises, daily journaling, morning mediation and more!</p>
                <button>
                  <a href="https://solf.glitch.me" target="_blank" rel="noreferrer">View Project</a>
                </button>
              </div>
            </div>
          </div>
          <div className="project two">
            <div className="border">
              <img src="/Portfolio/recook.png" alt="Project 2" />
              <div className="info">
                <h4 className="project-type">SOLO PROJECT</h4>
                <h3>Recook</h3>
                <p>Aimed towards those with a cooking passion, The website <span>provides recipes for all demographics</span>. There are many options for vegetarians, vegans and gluten-free options available. You can favorite recipes, comment on recipes and more!</p>
                <button>
                  <a href="https://recook-f2990.web.app/" target="_blank" rel="noreferrer">View Project</a>
                </button>
              </div>
            </div>
          </div>

          <div className="project three">
            <div className="border">
              <img src="/Portfolio/physical.png" alt="Project 2" />
              <div className="info">
                <h4 className="project-type">PHYSICAL PROJECT</h4>
                <h3>FTC - ROBOT</h3>
                <p>As a programmer of the Senior team, I was <br></br><span>in charge of control systems</span> of the robot. I implemented controls to fit the drivers' requests. I was also <span>experimenting with autonomous systems</span> and <span>image detection</span>.</p>
                <button>
                  <a href="https://ftc-events.firstinspires.org/team/22557" target="_blank" rel="noreferrer">View Team</a>
                </button>
              </div>
            </div>
          </div>


          <div className="project four">
            <div className="border">
              <img src="/Portfolio/timetable.jpg" alt="Project 2" />
              <div className="info">
                <h4 className="project-type">GROUP PROJECT</h4>
                <h3>Timetabling Problem</h3>
                <p>I built an algorithm to <span>assign schedules to students</span> for the next year. I took in account of the spots available, the prerequisites and alternative courses. <span>Experimenting with genetic algorithms</span> in the process.</p>
                <button>
                  <a href="https://github.com/raphael-64/TimeTabling" target="_blank" rel="noreferrer">View Project</a>
                </button>
              </div>
            </div>
          </div>

          <div className="project five">
            <div className="border">
              <img src="/Portfolio/studybuddies.png" alt="Project 2" />
              <div className="info">
                <h4 className="project-type">A.I. PROJECT</h4>
                <h3>StudyBuddies</h3>
                <p>Aimed towards elementary school students, the app provides a fun and interesting way to test your knowledge. You just have to input a topic as the prompt and the app connects to OpenAI API for some multiple choice questions. You can recieve coins for completing quizzes, and even buy pets!</p>
                <button>
                  <a href="https://github.com/PABLO-HACKERS/studybuddies" target="_blank" rel="noreferrer">View Project</a>
                </button>
              </div>
            </div>
          </div>

          <div className="project six">
            <div className="border">
              <img src="/Portfolio/vikestudies.jpg" alt="Project 2" />
              <div className="info">
                <h4 className="project-type">CURRENT PROJECT</h4>
                <h3>Vikestudies</h3>
                <p>Aimed towards first year students at UVic, the app solves the very problem that I had, making study groups as a first year student. The app provides a way to <span>create and join study groups</span>. You can filter through groups based on the courses, major, year and more!</p>
                <button>
                  <a target="_blank" rel="noreferrer">Project in Progress</a>
                </button>
              </div>
            </div>
          </div>


        </div>
      </div>
  </div>
  )
}
