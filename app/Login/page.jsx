"use client"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"


const Login = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-6">
      <Input type="email" placeholder="Email"/>
      <Input type="password" placeholder="Password"/>
      <Button onClick={() => {alert("Pulsado")}}>Login</Button>
    </div>
  )
}

export default Login;
