import Base from "@layouts/Baseof";
import React, { useState } from "react";
import { useRouter } from 'next/router';
import ChooseFavorite from "@layouts/components/PopupFavorite";
export default function Login() {
  const router = useRouter();
  const  [favories,isFavories] = useState(false);
  const onLogin = () => {
    isFavories(true);
  }
  
  return (
    <>
      <Base>
        <div className="flex justify-center items-center">
          <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 w-[400px] h-[600px] rounded-[10px] mt-[50px] border-[1px] border-[#f0f2f4] shadow-md">
            <div class="sm:mx-auto sm:w-full sm:max-w-sm">
              {/* <img class="mx-auto h-10 w-auto" src="/images/logo_horizontal.png" alt="Your Company"/> */}
              <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in</h2>
            </div>

            <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form class="space-y-6" action="#" method="POST">
                <div>
                  <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email</label>
                  <div class="mt-2">
                    <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                  </div>
                </div>
                <div>
                  <label for="password1" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                  <div class="mt-2">
                    <input id="password1" name="password" type="password" autocomplete="password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                  </div>
                </div>
                <div>
                  <button type="submit" class="flex w-full justify-center rounded-md bg-blue-500 hover:bg-blue-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={onLogin}>Sign in</button>
                </div>
                <p class="mt-5 text-center text-sm text-gray-500">
                Not a member?
                </p>
                <div>
                  <button class="flex w-full justify-center rounded-md bg-yellow-500  hover:bg-yellow-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={() => router.push('/authen/register')}>Register</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {favories && <ChooseFavorite/> }
      </Base>
    </>
  )
}
