import { useState, useRef, useEffect } from "react";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import TypingIndicator from "./TypingIndicator";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: "1",
    text: "Olá! 👋 Bem-vindo ao BetAssist. Sou seu assistente pessoal para apostas esportivas. Como posso ajudá-lo hoje?",
    isBot: true,
    timestamp: new Date(),
  },
  {
    id: "2",
    text: "Posso ajudar com:\n• Análise de odds e probabilidades\n• Dicas de apostas\n• Estatísticas de times e jogadores\n• Estratégias de apostas\n\nO que você gostaria de saber?",
    isBot: true,
    timestamp: new Date(),
  },
];

const BOT_RESPONSES = [
  "Ótima pergunta! Com base nas estatísticas recentes, posso te ajudar a analisar essa partida. 📊",
  "Interessante! Vou buscar as informações mais atualizadas para você. 🔍",
  "Baseado em análises estatísticas, aqui está o que encontrei sobre esse jogo. ⚽",
  "Excelente escolha de partida! Deixe-me te dar alguns insights importantes. 📈",
  "Entendo seu interesse! Vou te passar uma análise detalhada. 🎯",
];

const ChatContainer = () => {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newMessage]);
    setIsTyping(true);

    // Simula resposta do bot
    setTimeout(() => {
      const randomResponse =
        BOT_RESPONSES[Math.floor(Math.random() * BOT_RESPONSES.length)];
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: randomResponse,
        isBot: true,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500 + Math.random() * 1000);
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 overflow-y-auto">
        <div className="container mx-auto px-4 py-6">
          {messages.map((message) => (
            <ChatMessage
              key={message.id}
              message={message.text}
              isBot={message.isBot}
              timestamp={message.timestamp}
            />
          ))}
          {isTyping && <TypingIndicator />}
          <div ref={messagesEndRef} />
        </div>
      </div>
      
      <ChatInput onSendMessage={handleSendMessage} disabled={isTyping} />
    </div>
  );
};

export default ChatContainer;
