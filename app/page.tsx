import { ChatForm } from "@/components/chat-form"
import Image from 'next/image'

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <elevenlabs-convai agent-id="vTzrPDdFGrJXps6UDXoA"></elevenlabs-convai>
      <ChatForm />
    </main>
  )
}
