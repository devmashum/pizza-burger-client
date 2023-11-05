import { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../utils/useAuth';
import Swal from 'sweetalert2';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [photo, setPhoto] = useState('');

    const { createUser, user } = useAuth();
    console.log(user);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await createUser(email, password, name, photo);
            console.log('created');
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Thanks for Your Registration',
                showConfirmButton: false,
                timer: 2500
            })
        }
        catch (err) {
            console.log(err)
            Swal.fire({
                position: 'top-center',
                icon: 'warning',
                title: 'You have already an account',
                showConfirmButton: false,
                timer: 2500
            })
        }
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Registration</h1>
                    <p className="py-6">Welcome to our platform! The registration page is your gateway to a world of possibilities. By creating an account, you unlock numerous benefits and access to a wealth of features designed to enhance your experience.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" className="input input-bordered" required
                                onBlur={(e) => setName(e.target.value)} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required
                                onBlur={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="Photo URL" className="input input-bordered" required
                                onBlur={(e) => setPhoto(e.target.value)} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required
                                onBlur={(e) => setPassword(e.target.value)} />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Registration</button>
                        </div>
                        <p className='font-bold'>Have already an account! <Link className="text-red-400 font-bold" to={'/login'}>Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;