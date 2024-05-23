
import {  FaGoogle } from 'react-icons/fa';
// import AuthProvider from '../Provider/AuthProvider';
import useAuth from '../Hooks/useAuth';
const SocialLogin = () => {

    const {googleSignIn} = useAuth();

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(res => {
            console.log(res.user);
        })
    }
    return (
        <div className=''>
            <div className="divider mx-5"></div>
            <button onClick={handleGoogleSignIn} className="btn px-12 m-5">
                
                <FaGoogle></FaGoogle>
                Google
            </button>
        </div>
    );
};

export default SocialLogin;
