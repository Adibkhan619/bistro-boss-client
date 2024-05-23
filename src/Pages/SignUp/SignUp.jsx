import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from 'sweetalert2'
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../../components/SocialLogin";

const SignUp = () => {
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    const { createUser, updateUserProfile } = useContext(AuthContext);

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password).then((result) => {
            const user = result.user;
            updateUserProfile(name, photo)
            .then(() => {
                // create user entry in database
                const userInfo= {name, email}
                console.log(userInfo);
                axiosPublic.post("/users", userInfo)
                .then(res => {
                    console.log(res.data);
                    if(res.data.insertedId){
                         Swal.fire({
                title: 'Successfully Registered!',
                // text: 'Do you want to continue',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
              navigate('/')
                    }
                })
            })
           
            console.log(user);
        });
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut
                        assumenda excepturi exercitationem quasi. In deleniti
                        eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Name"
                                name="name"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="email"
                                name="email"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Image"
                                name="photo"
                                className="input input-bordered"
                                
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="password"
                                name="password"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">
                                Sign Up
                            </button>
                        </div>
                    </form>
                    <p className="px-5 py-2">Already have an account? Please <Link to="/login" className="text-blue-600"> Login</Link></p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
