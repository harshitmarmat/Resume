import Sidebar from "./sidebar/Sidebar"

const Layout = (props) =>{
    return(
        <Sidebar>
            {props.children}
        </Sidebar>
    )
}

export default Layout;