import React from "react"
import { Link } from "gatsby"

const navbar = ()=>{
 return(   <ul className="navlist">
        <li>
            <Link to="newsletter">Newsletter</Link>
        </li><li>

            <Link to="thisWeek">This Week</Link>
        </li>
    </ul>)
}

export default navbar;