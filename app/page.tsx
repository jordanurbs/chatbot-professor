import { ChatForm } from "@/components/chat-form"
import Image from 'next/image'

export default function Page() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Position the widget in a fixed position that doesn't overlap with the chat */}
      <div className="absolute right-4 bottom-20 z-20">
        {/* @ts-ignore - Custom element from ElevenLabs */}
        <elevenlabs-convai agent-id="vTzrPDdFGrJXps6UDXoA"></elevenlabs-convai>
      </div>
      
      {/* ChatForm takes up the full viewport */}
      <ChatForm className="h-full" />
    </div>
  )
}
