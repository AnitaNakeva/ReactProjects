import UserProfileImage from '../assets/breed_abyssinian_cat.jpg'
import RobotProfileImage from '../assets/robot.png'
import dayjs from 'dayjs';
import './ChatMessage.css';

export function ChatMessage({ message, sender }) {
    const time = dayjs().format('HH:mm');

    return (
        <div className={
        sender === 'user'
            ? 'chat-message-user'
            : 'chat-message-robot'
        }>
        {sender === 'robot' && (
            <img src={RobotProfileImage} className="chat-message-profile" />
        )}
        <div className="chat-message-text">
            {message}
            <div className='timeDiv'>
                {time}
            </div>
        </div>
        {sender === 'user' && (
            <img src={UserProfileImage} className="chat-message-profile" />
        )}
        </div>
    );
}