import React from 'react'

const Signup = () => {
  return (
<div class="bg-grey-lighter min-h-screen flex flex-col">
            <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
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
                        class="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
                    >Create Account</button>

                    <div class="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the 
                        <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Terms of Service
                        </a> and 
                        <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Privacy Policy
                        </a>
                    </div>
                </div>

                <div class="text-grey-dark mt-6">
                    Already have an account? 
                    <button class="no-underline border-b border-blue text-blue" href="../login/">
                        Log in
                    </button>
                </div>
            </div>
        </div>
  )}
  //login
//   <!-- component -->
// <div class="relative flex h-full w-full">
//   <div class="h-screen w-1/2 bg-black">
//     <div class="mx-auto flex h-full w-2/3 flex-col justify-center text-white xl:w-1/2">
//       <div>
//         <p class="text-2xl">Login|</p>
//         <p>please login to continue|</p>
//       </div>
//       <div class="my-6">
//         <button class="flex w-full justify-center rounded-3xl border-none bg-white p-1 text-black hover:bg-gray-200 sm:p-2"><img src="https://freesvg.org/img/1534129544.png" class="mr-2 w-6 object-fill" />Sign in with Google</button>
//       </div>
//       <div>
//         <fieldset class="border-t border-solid border-gray-600">
//           <legend class="mx-auto px-2 text-center text-sm">Or login via our secure system</legend>
//         </fieldset>
//       </div>
//       <div class="mt-10">
//         <form>
//           <div>
//             <label class="mb-2.5 block font-extrabold" for="email">Email</label>
//             <input type="email" id="email" class="inline-block w-full rounded-full bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow placeholder:opacity-30" placeholder="mail@user.com" />
//           </div>
//           <div class="mt-4">
//             <label class="mb-2.5 block font-extrabold" for="email">Password</label>
//             <input type="password" id="email" class="inline-block w-full rounded-full bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow" />
//           </div>
//           <div class="mt-4 flex w-full flex-col justify-between sm:flex-row">
//             <!-- Remember me -->
//             <div><input type="checkbox" id="remember" /><label for="remember" class="mx-2 text-sm">Remember me</label></div>
//             <!-- Forgot password -->
//             <div>
//               <a href="#" class="text-sm hover:text-gray-200">Forgot password</a>
//             </div>
//           </div>
//           <div class="my-10">
//             <button class="w-full rounded-full bg-orange-600 p-5 hover:bg-orange-800">Login</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   </div>
//   <div class="h-screen w-1/2 bg-blue-600">
//     <img src="https://images.pexels.com/photos/2523959/pexels-photo-2523959.jpeg" class="h-full w-full" />
//   </div>
// </div>
  export default Signup