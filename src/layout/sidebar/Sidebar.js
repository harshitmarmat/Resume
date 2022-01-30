import classes from './Sidebar.module.css';
import toggle from '../../assets/image/next.png';
import { useState } from 'react';
import user from '../../assets/image/user.png';
import contact from '../../assets/image/contact.png';
import education from '../../assets/image/education.png';
import experience from '../../assets/image/experience.png';
import introduction from '../../assets/image/introduction.png';
import projects from '../../assets/image/projects.png';
import skills from '../../assets/image/skills.png';





const Sidebar = () => {
    const [isWideBar, setIsWideBar] = useState(false);

    const toggleHandler = ()=>{
        console.log(isWideBar);
        setIsWideBar(!isWideBar);
    }

    const toggleContainer = isWideBar?classes.wideContainer:classes.container;
    const toggleSideIcon = isWideBar?classes.closeSideIcon:classes.sideicon;
    const toggleIntro = isWideBar?classes.wideIntro:classes.intro;
    const toggleMenu = isWideBar?classes.wideMenu:classes.menu;

    return(
        <div className={toggleContainer}>
            <img onClick={toggleHandler} className={toggleSideIcon} src={toggle} alt='toggle button'/>
            <div className={classes['content-box']}>
                <div className={toggleIntro}>
                    <ul>
                        <li><h2>Harshit</h2></li>
                        <li className={classes.email}>mharhit323@gmail.com</li>
                    </ul>
                    <div>
                        <img src={user} alt='profile-pic'/>
                    </div>
                </div>
                <div className={toggleMenu}>
                    <ul>
                        <li>
                            <img src={introduction} alt='introduction'/>
                            <p>Introduction</p>
                        </li>
                        <li>
                            <img src={education} alt='education'/>
                            <p>Education</p>
                        </li>
                        <li>
                            <img src={experience} alt='exp'/>
                            <p>Experience</p>
                        </li>
                        <li>
                            <img src={projects} alt='project'/>
                            <p>Projects</p>
                        </li>
                        <li>
                            <img src={skills}  alt='skills'/>
                            <p>Skills</p>
                        </li>
                        <li>
                            <img src={contact} alt='alt'/>
                            <p>Contact</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;