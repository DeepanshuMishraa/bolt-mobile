import Link from "next/link"
import { Button } from "./ui/button"

const Appbar = () => {
  return (
    <div className="flex items-center justify-between p-4 font-normal">
      <Link href="/" className="text-xl font-semibold">
        holt.new
      </Link>
      <div>
        <Button variant="outline">Login</Button>
      </div>
    </div>
  )
}

export default Appbar
