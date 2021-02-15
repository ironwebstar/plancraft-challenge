import React, { useEffect, useRef } from 'react';
import { IonContent } from '@ionic/react';

import { MessageType } from '../interfaces';
import MessageItem from './MessageItem';

interface Props {
  messages: MessageType[]
}

const Messages: React.FC<Props> = ({messages}: Props) => {
  const messagesEndRef = useRef<null | HTMLDivElement>(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(scrollToBottom, [messages]);

  return (
    <IonContent>
      {messages.map((message, index) =>
        <MessageItem
          message={message}
          key={index}
        />
      )}
      <div ref={messagesEndRef} />
    </IonContent>
  );
};
export default Messages;
