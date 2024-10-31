
import { useSelector } from 'react-redux';
import Chat from '../../components/chat/Chat'
import List from '../../components/list/List'
import './profilePage.scss'
import { useNavigate } from 'react-router-dom';


export default function ProfilePage() {
    const navigate = useNavigate();

    const user = useSelector((state) => state.user.user);

    const updateProfile = () => {
        navigate('/update')
    };

  return (
    <div className='profilePage'>
    <div className="details">
        <div className="wrapper">
            <div className="title">
                <h1>User Information</h1>
                <button onClick={updateProfile}>Update Profile</button>
            </div>
            <div className="info">
                <span>Avartar:
                <img src={user.image} alt="" />
                </span>
                <span>Name: <b>{user.username}</b></span>
            </div>
            <div className="title">
                <h1>My List</h1>
                <button>Create New Post</button>
            </div>
                <List />
            <div className="title">
                <h1>Save List</h1>
            </div>
                <List />
        </div>
    </div>
    <div className="chatContainer">
        <div className="wrapper">
            <Chat />
        </div>
    </div>
    </div>
  )
}
