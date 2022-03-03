import { useState } from "react";

import { MobileBurgerContainer, MobileBurger, NavBckg , NavigationList, NavigationListCnt} from "./MobileBurgerStyle";

const MobileNavigation = ()=> {
    const [ opened , setOpened] = useState(false);  

    function navigationAction() {
        setOpened(!opened);
    } 

    return (
        <MobileBurgerContainer>
            <NavBckg openedBurger={opened} />
            {/* <div style={{"width":'200px', position:"absolute", height:"200px", backgroundColor:"red"}}></div> */}
            <MobileBurger openedBurger={opened} onClick={navigationAction}></MobileBurger>
           <NavigationListCnt openedBurger={opened}>
                <NavigationList>
                    <li><a href="#projects" onClick={navigationAction}>Projects</a></li>
                    <li><a href="#tech" onClick={navigationAction}>Technologies</a></li>
                    <li><a href="#resources" onClick={navigationAction}>Resources</a></li>
                    <li><a href="#about" onClick={navigationAction}>About</a></li>
                </NavigationList>
            </NavigationListCnt>
        </MobileBurgerContainer>
    )
}

export default MobileNavigation;