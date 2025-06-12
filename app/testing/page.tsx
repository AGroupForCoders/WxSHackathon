import RootLayout from "../layout";
import {Button} from "@/components/primitives/Button";

export default function Testing() {
  return(
    <div className="grid place-items-center min-h-screen">
      <div className="flex flex-col tracking-tight">
        <h1 className="font-bold text-3xl">agfc goated</h1>
        <h2 className="font-semibold text-3xl">lorem ipsum dolor sit amet, sdhaidgfsjchzdbxkjcngzdjf</h2>

        <div className="flex gap-4">
          <Button variant={{style: "primary", color: "primary"}}>Hello</Button>
          <Button variant={{style: "secondary", color: "primary"}}>Hello</Button>
        </div>
      </div>
    </div>
  )
}
