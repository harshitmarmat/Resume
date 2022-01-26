import classes from './Sidebar.module.css'
import toggle from '../../assets/image/next.png'

const Sidebar = () => {
    return(
        <div className={classes.container}>
            <img className={classes.sideicon} src={toggle}/>
            <div className={classes['content-box']}>
            </div>
        </div>
    )
}

export default Sidebar;