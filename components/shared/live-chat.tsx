"use client"

import { useState, useEffect } from "react"
import { MessageCircle, X, Send, Phone, Clock } from "lucide-react"
import Image from "next/image"

export function LiveChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean; time: string }>>([])
  const [isClient, setIsClient] = useState(false)

  // Initialize messages on client to avoid hydration mismatch
  useEffect(() => {
    setIsClient(true)
    setMessages([
      {
        text: "Hi there! Welcome to KAM Mechanical. How can we help you today?",
        isUser: false,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ])
  }, [])

  const handleSend = () => {
    if (!message.trim()) return
    
    const newMessage = {
      text: message,
      isUser: true,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
    
    setMessages([...messages, newMessage])
    setMessage("")
    
    // Simulated auto-response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: "Thanks for your message! A team member will respond shortly. For urgent matters, please call us at (504) 648-6777. We proudly serve the Greater New Orleans area.",
        isUser: false,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }])
    }, 1000)
  }

  return (
    <>
      {/* Chat Widget Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg transition-all duration-300 ${
          isOpen 
            ? "bg-charcoal border border-border hover:border-gold/50" 
            : "bg-gold hover:bg-gold-light gold-glow"
        }`}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-warm" />
        ) : (
          <MessageCircle className="w-6 h-6 text-pitch" />
        )}
      </button>
      
      {/* Chat Window */}
      <div
        className={`fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-3rem)] bg-charcoal border border-border rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ${
          isOpen 
            ? "opacity-100 translate-y-0 pointer-events-auto" 
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="bg-pitch p-4 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Image
                src="/images/kam-logo.png"
                alt="KAM"
                width={48}
                height={48}
                className="w-12 h-12 rounded-full"
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-pitch rounded-full" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-warm">KAM Support</h3>
              <div className="flex items-center gap-1 text-xs text-green-500">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                Online now
              </div>
            </div>
          </div>
        </div>
        
        {/* Quick Actions */}
        <div className="p-3 border-b border-border flex gap-2">
          <a 
            href="tel:+15046486777"
            className="flex-1 flex items-center justify-center gap-2 py-2 bg-gold/10 border border-gold/30 rounded-lg text-gold text-sm hover:bg-gold/20 transition-colors"
          >
            <Phone className="w-4 h-4" />
            (504) 648-6777
          </a>
          <div className="flex-1 flex items-center justify-center gap-2 py-2 bg-pitch border border-border rounded-lg text-steel text-sm">
            <Clock className="w-4 h-4" />
            ~2 min wait
          </div>
        </div>
        
        {/* Messages */}
        <div className="h-64 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                  msg.isUser
                    ? 'bg-gold text-pitch rounded-br-md'
                    : 'bg-pitch text-warm rounded-bl-md'
                }`}
              >
                <p className="text-sm leading-relaxed">{msg.text}</p>
                <span className={`text-xs mt-1 block ${msg.isUser ? 'text-pitch/70' : 'text-steel'}`}>
                  {msg.time}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Input */}
        <div className="p-4 border-t border-border">
          <form 
            onSubmit={(e) => { e.preventDefault(); handleSend(); }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 bg-pitch border border-border rounded-lg px-4 py-2.5 text-warm placeholder:text-steel focus:outline-none focus:border-gold/50 transition-colors"
            />
            <button
              type="submit"
              disabled={!message.trim()}
              className="p-2.5 bg-gold rounded-lg text-pitch hover:bg-gold-light disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              aria-label="Send message"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
          <p className="text-xs text-steel text-center mt-2">
            By chatting, you agree to our privacy policy
          </p>
        </div>
      </div>
    </>
  )
}
