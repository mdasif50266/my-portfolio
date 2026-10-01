"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { fieldControlClass } from "@/components/ui/Field";

type Message = { from: "user" | "bot"; text: string };

function replyTo(input: string) {
  const text = input.toLowerCase();
  if (text.includes("price") || text.includes("cost") || text.includes("budget")) {
    return "This prototype cannot quote. Use Contact on the main site and describe the work.";
  }
  if (text.includes("hours") || text.includes("open")) {
    return "Sample answer: support hours would be configured from your actual schedule.";
  }
  if (text.includes("human") || text.includes("agent")) {
    return "Handoff path: a real build would create a ticket and notify a person.";
  }
  return "Scripted reply: I only match a few keywords here (price, hours, human). A production bot would use your content and an API.";
}

export function ChatbotDemo() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      from: "bot",
      text: "Sample assistant. Try asking about price, hours, or a human agent.",
    },
  ]);

  function send() {
    const trimmed = input.trim();
    if (!trimmed) return;
    setMessages((current) => [
      ...current,
      { from: "user", text: trimmed },
      { from: "bot", text: replyTo(trimmed) },
    ]);
    setInput("");
  }

  return (
    <div className="flex h-[28rem] flex-col p-6 sm:p-8">
      <p className="text-xs uppercase tracking-[0.18em] text-accent">Chat UI prototype</p>
      <h2 className="mt-2 text-2xl font-semibold">Support chat</h2>
      <div className="mt-4 flex-1 space-y-3 overflow-y-auto rounded-lg border border-border p-4">
        {messages.map((message, index) => (
          <p
            key={`${message.from}-${index}`}
            className={
              message.from === "user"
                ? "ml-8 rounded-lg bg-accent/15 px-3 py-2 text-sm"
                : "mr-8 rounded-lg bg-white/[0.04] px-3 py-2 text-sm text-muted"
            }
          >
            {message.text}
          </p>
        ))}
      </div>
      <div className="mt-4 flex gap-2">
        <input
          className={fieldControlClass}
          value={input}
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              send();
            }
          }}
          placeholder="Type a sample question"
          aria-label="Chat message"
        />
        <Button type="button" size="sm" variant="accent" onClick={send}>
          Send
        </Button>
      </div>
    </div>
  );
}
