import { SendIcon } from "lucide-react"
import { Button } from "./ui/button"
import { Textarea } from "./ui/textarea"
import { TemplateButton } from "./template-recom"



const Prompt = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] p-4 space-y-6">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold">What do you want to build?</h1>
        <p className="text-gray-500 mt-2">Prompt, click generate and watch your app come to life</p>
      </div>

      <div className="w-full md:w-[70%] lg:w-[50%] mx-auto">
        <Textarea
          placeholder="Create a todo application"
          rows={10}
          className="resize-none focus:ring-2 transition-all"
        />
        <div className="mt-4">
          <div className="flex justify-end">
            <Button className="px-4 py-2 transition-all hover:scale-105">
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
