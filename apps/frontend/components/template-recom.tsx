import { Button } from "./ui/button"


const templates = [
  {
    name: "Build a chess app"
  },
  {
    name: "Build a todo app"
  },
  {
    name: "Create a weather application"
  },
  {
    name: "Create instagram clone"
  }
]

export const TemplateButton = () => {
  return (
    <div className="flex items-center gap-3 justify-center">
      {templates.map((temp, key) => (
        <Button key={key} className="font-normal rounded-full" variant="outline">{temp.name}</Button>
      ))}
    </div>
  )
}
