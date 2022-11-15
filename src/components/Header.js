import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './Authentication/AuthProvider';

const Header = () => {
    const { user, logout } = useContext(AuthContext)
    //SignOut
    const handleSignOut = () => {
        logout()
            .then(() => {

            })
            .catch(error => console.error(error))
    }

    const menuItems = <>
        <li className='font-semibold'><Link to='/'>Home</Link></li>
        <li className='font-semibold'><Link to='/blog'>Blog</Link></li>
        {
            user?.email ?
                <>
                    <li className='font-semibold'><Link to='/myreviews'>My Reviews</Link></li>
                    <li className='font-semibold'><Link to='/addservice'>Add Service</Link></li>
                    <li onClick={handleSignOut} className='font-semibold'><Link to='/'>Logout</Link></li></>

                : <>
                    <li className='font-semibold'><Link to='/login'>Login</Link></li>
                    <li className='font-semibold'><Link to='/signup'>Sign Up</Link></li></>
        }



    </>
    return (
        <div>
            <div className="navbar h-32 mb-4 pt-8 bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-2xl">
                        <img className='w-20 rounded-md mr-2' src="https://i.graphicmama.com/blog/wp-content/uploads/2019/10/08140842/Best-Photography-Logo-Ideas-Example-Carrie-Chase-Photography-Logo.jpg" alt="" />Dream <span className='ml-2 text-4xl font-bold text-orange-800'>World</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>

                </div>
                <div className="navbar-end">
                    {
                        user?.displayName ?
                            <><p className='text-semibold mr-2'>{user.displayName}</p></> :
                            <><p className='text-semibold mr-2'>{user?.email}</p></>
                    }
                    <div className="w-10 rounded-full">

                        {
                            user?.photoURL ?
                                <>
                                    <img src={user.photoURL} alt="wait" ></img></>
                                : <p></p>
                        }


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;