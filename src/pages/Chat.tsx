import React, { useEffect, useReducer, useRef, useState } from 'react';
import {
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonTextarea,
  IonItem,
  IonIcon,
  IonFabButton,
  IonFooter,
  IonContent,
  IonAvatar,
  IonLabel
} from '@ionic/react';
import { send } from 'ionicons/icons';
import styled from 'styled-components';

import { MessageType, StoreType } from '../interfaces';
import Messages from '../components/Messages';

const initialState: StoreType = {
  messages: [
    {
      message: 'Test Message 1',
      timestamp: 1613341963,
      sent: true
    },
    {
      message: 'Test Message 2',
      timestamp: 1613342963,
      sent: false
    },
  ]
};

function reducer(state: StoreType, action: {type: string; payload: MessageType}) {
  switch (action.type) {
    case 'add':
      return {
        messages: state.messages.concat(action.payload)
      };
    default:
      throw new Error();
  }
}

const Chat: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [state, dispatch] = useReducer(reducer, initialState);
  const { messages } = state;

  const handleSend = () => {
    if (text) {
      dispatch({
        type: 'add',
        payload: {
          message: text,
          timestamp: Date.now(),
          sent: true
        },
      });
    }
    setText('');
  };

  const handleKeyPress = (event:React.KeyboardEvent<HTMLIonTextareaElement>) => {
    if (event.shiftKey && event.key === "Enter") {
      handleSend();
    }
  }

  return (
    <ChatWrapper>
      <IonHeader
        style={{background: 'white', padding: '8px'}}
      >
        <IonToolbar>
          <IonAvatar
            slot="start"
            class="ion-justify-content-center ion-align-items-center"
            style={{display: 'flex'}}
          >
            <img
              src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
              style={{width: '36px', height: '36px'}}
            />
          </IonAvatar>
          <IonTitle>Joe Biden</IonTitle>
        </IonToolbar>
      </IonHeader>
      <Messages messages={messages} />
      <IonFooter>
        <IonItem>
          <ChatInput
            placeholder="Enter more information here..."
            clearOnEdit={true}
            value={text}
            rows={1}
            autofocus={true}
            spellcheck={true}
            onIonChange={e => setText(e.detail.value!)}
            onKeyPress={handleKeyPress}
          />
          <ChatSendButton icon-only item-rights size="small" onClick={handleSend}>
            <IonIcon icon={send} />
          </ChatSendButton>
        </IonItem>
      </IonFooter>
    </ChatWrapper>
  );
};

export default Chat;

const ChatWrapper = styled(IonPage)`
  background: #eee;
`;

const ChatInput = styled(IonTextarea)`
  border-radius: 20px;
  border: 1px solid #eee;
  margin: 10px 0;
  padding: 6px 12px;
`;

const ChatSendButton = styled(IonFabButton)`
  margin: 15px 0 10px 10px;
`;