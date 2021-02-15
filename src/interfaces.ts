export interface MessageType  {
  message: string;
  timestamp: number;
  sent: boolean
}
export interface StoreType  {
  messages: MessageType[]
}
