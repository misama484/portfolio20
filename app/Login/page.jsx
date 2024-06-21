"use client"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const handlePassword = () => {
  alert("Pulsado")
}

const Login = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-6">
      <Input type="email" placeholder="Email"/>
      <Input type="password" placeholder="Password"/>
      <Button onClick={() => {handlePassword}}>Login</Button>
    </div>
  )
}

export default Login;
