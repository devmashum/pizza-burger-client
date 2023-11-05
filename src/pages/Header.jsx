
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/images/logo-8249611_640.png'
import useAuth from '../utils/useAuth';
import { MdOutlineLogout } from 'react-icons/md';
import { TbUserPentagon } from 'react-icons/tb';
const Header = () => {
    const { user, logout } = useAuth();
    const navLinks = <>


        <NavLink className={({ isActive }) => isActive ? 'btn btn-primary text-base font-bold text-white lg:ml-10' : 'btn-ghost btn text-base font-bold text-white lg:ml-10'} to={'/'}>Home</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'btn btn-primary text-base font-bold text-white' : 'btn-ghost btn text-base font-bold text-white'} to={'/allfooditems'}>All Foods</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'btn btn-primary text-base font-bold text-white' : 'btn-ghost btn text-base font-bold text-white'} to={'/blog'}>Blog</NavLink>

        <NavLink className={({ isActive }) => isActive ? 'btn btn-primary text-base font-bold text-white' : 'btn-ghost btn text-base font-bold text-white'} to={'/about'}>About</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'btn btn-primary text-base font-bold text-white' : 'btn-ghost btn text-base font-bold text-white'} to={'/contact'}>Contact</NavLink>



    </>
    return (
        <div >
            <div className="navbar bg-neutral">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost bg-slate-800 text-white w-20 lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu bg-neutral border border-white menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52 items-start">
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

                {/* <div className="navbar-end">

                    <NavLink className={({ isActive }) => isActive ? 'btn btn-warning text-base font-bold text-white lg:mr-20 mr-12' : 'btn-ghost btn text-base font-bold text-white lg:mr-20'} to={'/login'}>Login</NavLink>
                </div> */}
                <div className='navbar-end'>

                    {/* {
                        user?.email ? <NavLink className={({ isActive }) => isActive ? 'font-bold text-white dropdown' : 'btn-ghost btn text-base font-bold text-white'} to={'/profile'}><button className='btn btn-outline btn-info lg:mr-10 text-3xl'><TbUserPentagon /></button></NavLink> :
                            (<NavLink className={({ isActive }) => isActive ? 'btn btn-outline btn-info hidden' : 'btn btn-outline btn-info hidden'} to={'/profile'}>Profile</NavLink>)

                    }; */}
                    {/* {
                        user?.email ? <NavLink className={({ isActive }) => isActive ? 'font-bold text-white dropdown' : 'btn-ghost btn text-base font-bold text-white'} ><button tabIndex={0} className='btn btn-outline btn-info lg:mr-10 text-3xl'><TbUserPentagon /></button></NavLink> :
                            (<NavLink className={({ isActive }) => isActive ? 'btn btn-outline btn-info hidden' : 'btn btn-outline btn-info hidden'} >Profile</NavLink>)

                    }; */}
                    <div className="dropdown mr-2">
                        <label tabIndex={0} className="">
                            {
                                user?.email ? <NavLink className={({ isActive }) => isActive ? 'font-bold text-white dropdown ' : 'btn-ghost btn text-base font-bold text-white'}><button tabIndex={0} className='btn btn-outline btn-info lg:mr-10 text-3xl'><TbUserPentagon /></button></NavLink> :
                                    (<NavLink className={({ isActive }) => isActive ? 'btn btn-outline btn-info hidden' : 'btn btn-outline btn-info hidden'} >Profile</NavLink>)

                            }
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1]  shadow bg-slate-800 text-white rounded-box w-40 lg:w-52 ">

                            <li>
                                <a><Link to={'/additems'}>Add a food item</Link></a>
                                <hr />
                                <a><Link to={'/addeditems'}>My added food items</Link></a>
                                <hr />
                                <a><Link to={'/ordereditems'}>My ordered food items</Link></a>

                            </li>

                        </ul>
                    </div>
                    {
                        user?.email ? <button onClick={logout} className='btn btn-secondary lg:mr-10 text-2xl'><MdOutlineLogout /></button> :
                            (<NavLink className={({ isActive }) => isActive ? 'btn btn-outline btn-info' : 'btn btn-outline btn-info'} to={'/login'}>Login</NavLink>)
                    }
                </div>


            </div>




        </div>



    );
};

export default Header;