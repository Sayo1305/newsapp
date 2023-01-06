import React from "react"
import { useNavigate } from "react-router-dom"
const Login=()=>{
   const navigator=useNavigate();

   return(
<div class="relative flex h-full w-full bg-blue-50">
  <div class="h-screen w-screen bg-black">
    <div class="mx-auto flex h-full w-full flex-col justify-center text-white xl:w-1/2">
      <div className="text-5xl">
        <p >Welcome to OMNI</p>
        
      </div>
     
      <div className="mt-20 ">
        <form>
          <div>
            <label class="mb-2.5 block font-extrabold" for="email">Email</label>
            <input type="email" id="email" class="inline-block w-full rounded-full bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow placeholder:opacity-30" placeholder="mail@user.com" />
          </div>
          <div class="mt-4">
            <label class="mb-2.5 block font-extrabold" for="email">Password</label>
            <input type="password" id="email" class="inline-block w-full rounded-full bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow" />
          </div>
          <div class="mt-4 flex w-full flex-col justify-between sm:flex-row">
      {/* rememberme */}
            <div><input type="checkbox" id="remember" /><label for="remember" class="mx-2 text-sm">Remember me</label></div>
            {/* <!-- Forgot password --> */}
            <div>
              <a href="#" class="text-sm hover:text-gray-200">Forgot password</a>
            </div>
          </div>
          <div class="my-10">
            <button  onclick={()=>{navigator("/home")}} class="w-full rounded-full bg-orange-600 p-4 hover:bg-orange-800">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div class="h-screen w-screen bg-black">
    {/* <img className="h-full w-full" /> */}
  </div>
</div>
)
}
export default Login