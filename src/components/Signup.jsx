import React from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const navigator=useNavigate();
  return (
<div class="bg-black min-h-screen flex flex-col">
            <div class=" mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div class="bg-white px-6 py-8  text-black w-full">
                    <h1 class="mb-8 text-3xl text-center">Sign up</h1>
                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="fullname"
                        placeholder="Full Name" />

                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" />

                    <input 
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" />
                    <input 
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="confirm_password"
                        placeholder="Confirm Password" />

                    <button
                        type="submit"
                        class="w-full text-center py-3 rounded bg-green text-black hover:bg-green focus:outline-none my-1" onclick={navigator('/login')}
                    >Create Account</button>

                    <div class="text-center text-sm text-black mt-4">
                        By signing up, you agree to the  Terms of Service and  Privacy Policy
                       
                    </div>
                </div>

                <div class="text-white mt-6">
                    Already have an account? 
                    <button class="no-underline border-b border-blue text-white" href="../login/">
                        Log in
                    </button>
                
                </div>
            </div>
        </div>
  )}

  export default Signup