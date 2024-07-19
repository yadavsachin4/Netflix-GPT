import React, { useEffect } from "react";
import { auth } from "./utils/Firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removerUser } from "./utils/userSlice";
import { toggleGptSearchView } from "./utils/GptSlice";
import { SUPPORTED_LANGUAGE } from "./utils/constants";
import lang from "./utils/languageConstants";
import { ChangeLanguage } from "./utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showgptSearch = useSelector((store) => store.gpt.showgptSearch);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        dispatch(removerUser())
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;

        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removerUser);
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };
  const handleLanguagechange = (e) => {
    dispatch(ChangeLanguage(e.target.value));
  };
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between  ">
      <img
        className="w-24 md:w-44 mx-auto md:mx-0  -my-2"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />

      {user && (
        <div className="flex p-2 justify-between">
          {showgptSearch && (
            <select
              className="my-2 p-1 md:p-2 md:m-2 bg-gray-900 text-white text-sm md:text-lg"
              onChange={handleLanguagechange}
            >
              {SUPPORTED_LANGUAGE.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="py-2 px-2 my-3 md:py-2 md:px-4  md:mx-4  md:my-2 bg-purple-800 text-white text-sm  md:text-lg rounded-lg"
            onClick={handleGptSearchClick}
          >
            {showgptSearch ? "HomePage" : "GPT Search"}
          </button>
          <img
            className="hidden md:block w-12 h-12 "
            alt="usericon"
            src="https://cdn.iconscout.com/icon/premium/png-512-thumb/avatar-random-person-man-58401.png?f=webp&w=512"
          />
          <button onClick={handleSignout} className="font-bold text-white">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
