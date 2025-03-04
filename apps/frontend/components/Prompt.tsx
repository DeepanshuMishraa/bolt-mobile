'use client'

import { SendIcon } from "lucide-react"
import { Button } from "./ui/button"
import { Textarea } from "./ui/textarea"
import { TemplateButton } from "./template-recom"
import { useState } from "react"
import axios from "axios"
import { useAuth } from "@clerk/nextjs"

const Prompt = () => {
  const [prompt, setPrompt] = useState("");
  const { getToken } = useAuth()

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] p-4 space-y-6 ml-4">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          What do you want to build?
        </h1>
        <p className="text-muted-foreground mt-2">
          Prompt, click generate and watch your app come to life
        </p>
      </div>

      <div className="w-full md:w-[70%] lg:w-[50%] mx-auto">
        <Textarea
          placeholder="Create a todo application"
          rows={10}
          onChange={(e) => {
            setPrompt(e.target.value);
          }}
          className="resize-none focus:ring-2 transition-all bg-card/50"
        />
        <div className="mt-4">
          <div className="flex justify-end">
            <Button
              onClick={async () => {
                try {
                  const token = await getToken();

                  if (!token) {
                    console.error('No token available');
                    return;
                  }

                  const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/project`, {
                    prompt
                  }, {
                    headers: {
                      Authorization: `Bearer ${token}`
                    }
                  });
                  console.log(response.data);
                } catch (error) {
                  console.error('Error making request:', error);
                }
              }}
              className="px-4 py-2 transition-all hover:scale-105"
            >
              <SendIcon className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
      <TemplateButton />
    </div>
  )
}

export default Prompt
