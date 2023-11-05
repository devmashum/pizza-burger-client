
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/images/logo-8249611_640.png'
const Header = () => {
    const navLinks = <>


        <NavLink className={({ isActive }) => isActive ? 'btn btn-primary text-base font-bold text-white ml-10' : 'btn-ghost btn text-base font-bold text-white ml-10'} to={'/'}>Home</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'btn btn-primary text-base font-bold text-white' : 'btn-ghost btn text-base font-bold text-white'} to={'/allfooditems'}>All Foods</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'btn btn-primary text-base font-bold text-white' : 'btn-ghost btn text-base font-bold text-white'} to={'/blog'}>Blog</NavLink>

        <NavLink className={({ isActive }) => isActive ? 'btn btn-primary text-base font-bold text-white' : 'btn-ghost btn text-base font-bold text-white'} to={'/about'}>About</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'btn btn-primary text-base font-bold text-white' : 'btn-ghost btn text-base font-bold text-white'} to={'/contact'}>Contact</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'btn btn-primary text-base font-bold text-white' : 'btn-ghost btn text-base font-bold text-white'} to={'/profile'}>Profile</NavLink>



    </>
    return (
        <div >
            <div className="navbar bg-neutral">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost bg-slate-800 text-white w-20 lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu bg-neutral border border-white menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <Link to={'/'}>
                        <div className='flex justify-center items-center'>
                            <img className='w-40 h-30 ml-5  ' src={logo} alt="" />
                            <p className=' text-gray-800 hover: p-3 font-extrabold bg-base-200 rounded-xl hover:bg-yellow-400 hover:text-white '>
                                <span>Y</span> <br />
                                <span>A</span> <br />
                                <span>M</span> <br />
                                <span>Y</span> <br />
                                <span>A</span> <br />
                                <span>M</span> <br />
                            </p>
                        </div>
                    </Link>

                </div>
                <div className="navbar-center hidden lg:flex">
                    {navLinks}
                </div>

                <div className="navbar-end">

                    <NavLink className={({ isActive }) => isActive ? 'btn btn-warning text-base font-bold text-white lg:mr-20 mr-12' : 'btn-ghost btn text-base font-bold text-white lg:mr-20'} to={'/login'}>Login</NavLink>
                </div>
            </div>

        </div>
    );
};

export default Header;