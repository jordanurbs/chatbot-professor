import { ChatForm } from "@/components/chat-form"
import Image from 'next/image'

export default function Page() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Position the widget in a fixed, absolute position */}
      <div className="absolute left-0 top-0 z-10 opacity-0">
        {/* @ts-ignore - Custom element from ElevenLabs */}
        <elevenlabs-convai agent-id="vTzrPDdFGrJXps6UDXoA"></elevenlabs-convai>
      </div>
      
      {/* ChatForm takes up the full viewport */}
      <ChatForm className="h-full" />
    </div>
  )
}
