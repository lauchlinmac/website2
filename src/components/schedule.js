import React from "react"
import { Link } from "gatsby"

const navbar = ()=>{
 return(  <div>
<ul className="schedule">
        <li className="day">
          Wednesday
          </li>
          <li className="item">
              Speed Work
          </li>         
        </ul>
        <ul className="schedule">
        <li className="day">
          Thursday</li>
          <li className="item">
              Sonder 6k
          </li>
        </ul>
        <ul className="schedule">
        <li className="day">
          Saturday</li><li className="item">
              Long Run
          </li>
        </ul>
        </div>
)
}

export default navbar;