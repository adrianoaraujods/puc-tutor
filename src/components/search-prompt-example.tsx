"use client";

import * as React from "react";

import { useSearchContext } from "fumadocs-ui/provider";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { SearchIcon } from "lucide-react";

export function SearchPromptExample({ prompts }: { prompts: string[] }) {
  const [displayText, setDisplayText] = React.useState("");
  const [currentPromptIndex, setCurrentPromptIndex] = React.useState(0);
  const [currentCharIndex, setCurrentCharIndex] = React.useState(0);
  const [isTyping, setIsTyping] = React.useState(true);
  const { setOpenSearch } = useSearchContext();

  // Controls the typing speed
  const typingSpeed = 50; // milliseconds per character
  const deletingSpeed = 20; // milliseconds per character
  const pauseBeforeDelete = 2000; // pause before deleting
  const pauseBeforeNextPrompt = 500; // pause before typing next prompt

  React.useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      // Typing animation
      if (currentCharIndex < prompts[currentPromptIndex].length) {
        timeout = setTimeout(() => {
          setDisplayText(
            prompts[currentPromptIndex].substring(0, currentCharIndex + 1)
          );
          setCurrentCharIndex(currentCharIndex + 1);
        }, typingSpeed);
      } else {
        // Finished typing, pause before deleting
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, pauseBeforeDelete);
      }
    } else {
      // Deleting animation
      if (currentCharIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayText(
            prompts[currentPromptIndex].substring(0, currentCharIndex - 1)
          );
          setCurrentCharIndex(currentCharIndex - 1);
        }, deletingSpeed);
      } else {
        // Finished deleting, move to next prompt
        timeout = setTimeout(() => {
          setCurrentPromptIndex((currentPromptIndex + 1) % prompts.length);
          setIsTyping(true);
        }, pauseBeforeNextPrompt);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentCharIndex, currentPromptIndex, isTyping, prompts]);

  return (
    <div className="relative mx-auto w-full max-w-2xl">
      <div className="group relative">
        {/* Outer glow effect */}
        <div className="from-primary/30 to-primary/30 absolute -inset-0.5 rounded-xl bg-gradient-to-r opacity-75 blur transition duration-1000 group-hover:opacity-100" />

        <div className="relative" onClick={() => setOpenSearch(true)}>
          <Input
            className="!border-primary/10 cursor-pointer rounded-xl border-2 py-6 pr-20 !text-lg text-ellipsis shadow-[0_4px_20px_rgba(36,101,237,0.2)] backdrop-blur-md focus-visible:ring-0 focus-visible:ring-offset-0"
            value={displayText}
            readOnly
          />

          <Button
            size="icon"
            className="bg-primary/90 hover:bg-primary absolute top-1/2 right-2 h-10 w-10 -translate-y-1/2 transform shadow-md backdrop-blur-md"
            aria-label="Send message"
          >
            <SearchIcon className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
