import classes from './Sidebar.module.css'
import toggle from '../../assets/image/next.png'
import { useState } from 'react'

const Sidebar = () => {
    const [isWideBar, setIsWideBar] = useState(false);

    const toggleHandler = ()=>{
        console.log(isWideBar);
        setIsWideBar(!isWideBar);
    }

    const toggleClass = isWideBar?classes.wideContainer:classes.container;
    const toggleIcon = isWideBar?classes.closeSideIcon:classes.sideicon;

    return(
        <div className={toggleClass}>
            <img onClick={toggleHandler} className={toggleIcon} src={toggle} alt='toggle button'/>
            <div className={classes['content-box']}>
            </div>
        </div>
    )
}

export default Sidebar;