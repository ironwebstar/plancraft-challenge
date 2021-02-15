import { MessageType } from '../interfaces';
import './MessageItem.css';

interface Props {
  message: MessageType;
}

const MessageItem: React.FC<Props> = ({ message }) => {
  return (
    <div className="chat-item">
      {
        message.sent
        ? <div className="chat-message">
            <div className="right-bubble">
              <span className="msg-name">Me</span>
              <span className="msg-date">
                {
                  new Intl.DateTimeFormat("en-GB", {
                    year: 'numeric',
                    month: 'numeric',
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                    second: "numeric"
                  }).format(message.timestamp)
                }
              </span>
              <p>{message.message}</p>
            </div>
          </div>
        : <div className="chat-message">
            <div className="left-bubble">
              <span className="msg-name">Joe</span>
              <span className="msg-date">
                {
                  new Intl.DateTimeFormat("en-GB", {
                    year: 'numeric',
                    month: 'numeric',
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                    second: "numeric"
                  }).format(message.timestamp)
                }
              </span>
              <p>{message.message}</p>
            </div>
          </div>
      }
    </div>
  );
};

export default MessageItem;
