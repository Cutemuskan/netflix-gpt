import { useState, useRef } from "react"
import Header from "./Header"
import { checkValidData } from "../utils/validate.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { navigate, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice.js";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errormessage, setErrorMessage] = useState(null)
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const username = useRef(null)
    const email = useRef(null); //it create a refernce to my inout for email 
    const password = useRef(null);


    // validation for signin and signup
    const handleButtonClick = () => {
        // validate the form data
        // console.log(email.current.value); //this give the object of ref hooks => email.current.value
        // console.log(password.current.value);
        // console.log(username.current.value);
        const message = checkValidData(email?.current?.value, password?.current?.value, username?.current?.value);
        setErrorMessage(message);
        if (message) return;
        // Sign/SignUP Logic
        if (!isSignInForm) {
            //sign up logic
            createUserWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    // after creating user ,called update profile api
                    updateProfile(user, {
                        displayName: "username?.current?.value",
                        photoURL: "https://avatars.githubusercontent.com/u/91940806?v=4"
                    }).then(() => {
                        // Profile updated!
                        // again we are updating the displayName and phot url. here using auth bcj it have updated value and user have created value info
                        const { uid, email, password, displayName, photoURL } = auth.currentUser;
                        dispatch(addUser({
                            uid: uid,
                            email: email,
                            password: password,
                            displayName: displayName,
                            photoURL: photoURL
                        }));
                        navigate("/browse");
                    }).catch((error) => {
                        setErrorMessage(error.errorMessage);
                    });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "- " + errorMessage);
                });

        } else {
            //sign in logic
            signInWithEmailAndPassword(auth, email?.current?.value, password?.current?.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log('succesfully SIGNIN', user);
                    navigate("/browse");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
                });

        }

    }

    const toggleSignInform = () => {
        setIsSignInForm(!isSignInForm);

    }

    return (
        <div>
            <Header />
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/8200f588-2e93-4c95-8eab-ebba17821657/web/IN-en-20250616-TRIFECTA-perspective_9cbc87b2-d9bb-4fa8-9f8f-a4fe8fc72545_large.jpg"
                    alt="logo"
                />
            </div>
            <form
                onSubmit={(e) => e.preventDefault()}
                className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
                <h1 className="font-bold text-3xl py-4">
                    {/* Sign In */}
                    {isSignInForm ? "Sign In " : "Sign Up"}
                </h1>

                {!isSignInForm && (
                    <input
                        ref={username}
                        type="text"
                        placeholder="Full Name"
                        className="p-4 my-3 w-full bg-gray-800"
                    />
                )}
                <input
                    ref={email}
                    type="text"
                    placeholder="Email Address"
                    className="p-4 my-3 w-full bg-gray-800"
                />
                <input
                    ref={password}
                    type="password"
                    placeholder="Password"
                    className="p-4 my-3 w-full bg-gray-800"
                />
                <p className="text-red-500 font-bold text-lg py-2">
                    {errormessage}
                </p>
                <button className="p-4 my-5 bg-red-700 w-full rounded-lg"
                    onClick={handleButtonClick}
                >
                    {/* Sign In  */}
                    {isSignInForm ? "Sign In " : "Sign Up"}
                </button>
                {/* signup button change to sign Up form instead of sign In */}
                <p className="py-4 cursor-pointer" onClick={toggleSignInform}>
                    {/* New to Netflix?Sign up now. */}
                    {isSignInForm ? "New to Netflix? Sign up now. " : "Already registered? Sign In Now"}
                </p>


            </form>

        </div>
    )
}
export default Login