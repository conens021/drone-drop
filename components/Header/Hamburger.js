import { useState } from "react";
import { useDispatch } from "react-redux";

function Hamburger({ styles }) {

    const dispatch = useDispatch()

    const toggleSideBar = () => {
        dispatch({ type: "TOGGLE_SIDEBAR", sideBarOpen: true })
        console.log('calling function')
    }

    return (
        <div
            onClick={toggleSideBar}
            className={styles.hamburger}>
        </div>
    );
}

export default Hamburger;