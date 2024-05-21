import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import {
    loadCaptchaEnginge,
    LoadCanvasTemplate,
    validateCaptcha,
} from "react-simple-captcha";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
    const { logIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const [disabled, setDisabled] = useState(true);
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    // const captchaRef = useRef(null);

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        logIn(email, password)
            .then((result) => {
                const user = result.user;
                Swal.fire({
                    title: "Successfully Logged In!",
                    // text: 'Do you want to continue',
                    icon: "success",
                    confirmButtonText: "Cool",
                });
                navigate(from, { replace: true });
                console.log(user);
            })
            .catch((error) => {
                console.log(error);
                Swal.fire({
                    title: "Login Failed!",
                    // text: {error.message},
                    icon: "error",
                    confirmButtonText: "Cool",
                });
            });
    };

    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left ">
                    <h1>image</h1>
                    <img
                        className="w-96 z-10"
                        src="../../assets/others/authentication2.png"
                        alt=""
                    />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="email"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="password"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input
                                type="text"
                                onBlur={handleValidateCaptcha}
                                name="captcha"
                                placeholder="Type the captcha above"
                                className="input input-bordered"
                                required
                            />
                            {/* <button
                                // onBlur={handleValidateCaptcha}
                                className="btn btn-xs mt-2"
                            >
                                Validate
                            </button> */}
                        </div>
                        <div className="form-control mt-6">
                            <button
                                type="submit"
                                disabled={disabled}
                                className="btn btn-primary"
                            >
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
