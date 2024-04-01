import { NavLink } from "react-router-dom";
import classes from './NavList.module.css'

export default  function NavList(){
    return(
        <header className={classes.header}>
            <nav>

        <ul className={classes.list}>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? classes.active : undefined
                    }
                    end
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="counter-bigtime">
                    Counter Big time
                </NavLink>
            </li>
            <li>
                <NavLink to="counter-solution">
                    Counter Optimization
                </NavLink>
            </li>
        </ul>
            </nav>
        </header>
    )
}