import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);

    const handlelogout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            // navigate("/") don't need to logout from hee onAuthState changed willl take care
        }).catch((error) => {
            navigate("/error");
            // An error happened.
        });

    }
//this  will checking the routing for logged in ,logged out ,null user 
    useEffect(() => {
      const unsubscribe =  onAuthStateChanged(auth, (user) => {
            //signin or signup this part will be exectuted we are storinng data of object of user,to check for authentication we are checking
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({
                    uid: uid,
                    email: email,
                    displayName: displayName,
                    photoURL: photoURL
                }));
                navigate("/browse")
            } else {
                // User is signed out
                dispatch(removeUser());
                navigate("/")
            }
        });
        // whenevrr my component  is unmount we we have to clear this Unsubscribe 
        return () => unsubscribe();
    }, [])

    return (
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
            <img className="w-44 "
                src={LOGO}
                alt="logo"
            />
            {user && (
                <div className="flex p-2">
                    <img
                        className="w-12 h-12 "
                        // src="https://img.icons8.com/ios-filled/50/ffffff/logout-rounded-left.png"
                        src={user?.photoURL}
                        alt="logo"
                    />
                    <button className="font-bold text-white"
                        onClick={handlelogout}>
                        SignOut
                    </button>

                </div>
            )}
        </div>
    )
}
export default Header