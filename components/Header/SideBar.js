import { Box, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Aside } from "../UI/Aside";

function SideBar({ sidebarOpen = false }) {

    const dispatch = useDispatch();

    const closeSideBar = () => {
        dispatch({ type: 'TOGGLE_SIDEBAR', sideBarOpen: false })
    }

    return (
        <Aside active={sidebarOpen}>
            <Box className='top'>
                <div className='sidebar-logo'>LOGO</div>
                <div className='close-icon' onClick={closeSideBar}></div>
            </Box>
            <ul className='sidebar-items'>
                <li>HOME</li>
                <li>Track your order</li>
                <li>Contact</li>
                <li>About Us</li>
                <li>Bla Us</li>
                <li>Contac Us</li>
            </ul>
            <Box className='sidebar-button'>
                <button role="button">Start Building</button>
            </Box>
        </Aside>
    );
}

export default SideBar;