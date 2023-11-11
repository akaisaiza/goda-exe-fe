import Base from "@layouts/Baseof";
import React from "react";
import { useRouter } from 'next/router';
import swal from 'sweetalert'

export default function ChooseFavorite() {
  const router = useRouter();
  const onSuccess = () => {
    swal("Wellcome to Goda Website", "Login success", "success")
      .then((value) => {
        router.push('/')
      });
  }
  return (
    <>
      <div class=" min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover" id="modal-id">
        <div class="absolute bg-black opacity-80 inset-0 z-0"></div>
        <div class="w-full max-w-2xl p-5 relative mx-auto my-auto rounded-xl shadow-lg bg-white">
          <h3 class="text-center text-2xl font-bold">Choose Favorite</h3>
          <div className="flex justify-center w-full h-[300px] items-center">
            <div className="w-full max-w-[700px] flex justify-between">
                  <img className="w-[150px] h-[150px] hover:scale-[1.3] transition-all cursor-pointer" src="/images/fa1.png" onClick={onSuccess} />
                  <img className="w-[150px] h-[150px] hover:scale-[1.3] transition-all cursor-pointer" src="/images/fa2.png" onClick={onSuccess} />
                  <img className="w-[150px] h-[150px] hover:scale-[1.3] transition-all cursor-pointer" src="/images/fa3.png" onClick={onSuccess} />
                  <img className="w-[150px] h-[150px] hover:scale-[1.3] transition-all cursor-pointer" src="/images/fa4.png" onClick={onSuccess} />
                </div>
          </div>
        </div>
      </div>
    </>
  )
}
