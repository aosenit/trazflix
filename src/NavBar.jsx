import React, { useEffect, useState } from 'react';
import './NavBar.css';
import { useHistory } from 'react-router-dom';
function NavBar() {
  const history = useHistory();
  const [show, setShow] = useState(false);

  const transitionNavigation = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', transitionNavigation);

    return () => {
      window.removeEventListener('scroll', transitionNavigation);
    };
  }, []);

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <div className="nav__content">
        <h1 onClick={() => history.push('./')} className="nav__logo">
          TRAZfLIX
        </h1>

        <img
          onClick={() => history.push('/profile')}
          className="nav__avatar"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-yQFL1YOsN3esm6p1jB1HT-Q6qKtxtZqh9LGwMDIgDCy-p54eMf8jdGSN6yZUeySqseA&usqp=CAU"
          alt=""
        />
      </div>
    </div>
  );
}

export default NavBar;
