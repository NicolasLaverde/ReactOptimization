import {Outlet} from 'react-router-dom'
import NavList from '../Navigation/NavList'

export default  function MainLayout(){
    return (
        <>
            <NavList />
            <main>
                <Outlet />
            </main>
        </>
    )
}