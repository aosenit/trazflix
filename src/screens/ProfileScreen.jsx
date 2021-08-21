import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';
import NavBar from '../NavBar';
import './profileScreen.css';

function ProfileScreen() {
  const user = useSelector(selectUser);

  return (
    <div className="profileScreen">
      <NavBar />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-yQFL1YOsN3esm6p1jB1HT-Q6qKtxtZqh9LGwMDIgDCy-p54eMf8jdGSN6yZUeySqseA&usqp=CAU"
            alt=""
          />

          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <h3></h3>
            </div>
            <button
              onClick={() => auth.signOut()}
              className="profileScreen__signOut"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
