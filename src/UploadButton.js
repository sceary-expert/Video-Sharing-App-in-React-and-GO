import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import jsonData from './data.json';


export default function UploadButton() {
  const [imageurl, setImageurl] = useState("");
  const [imageWait, setImageWait] = useState(false);
  const preset_key = "";
  const cloud_name = "dugqxbyvg";
  const handleImage = async (e) => {
    const files = e.target.files;
    console.log(files[0]);

    const formData = new FormData();
    formData.append('file', files[0]);

    formData.append('upload_preset', 'project_1');
    setImageWait(true)
    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dh5cpqscd/video/upload",
        formData
      );
      const data = response.data;
      setImageWait(false)
      setImageurl(data.secure_url);
      console.log(data.secure_url)
    } catch (error) {
      console.error(error);
    }

  }
  const dataPost = async (e) => {
    e.preventDefault();
    //save image url
      const res = await axios.post(`https://loomi-backend-private.onrender.com/create-url`, {
              'url': imageurl
            })
            console.log(res)
            if (res) {                 
              console.log("posted url")
            //   navigate("/otp");    
            } 
    

  }
  return (

    <div className='flex'>
        
        <div className=" ml-auto relative mb-6" data-te-input-wrapper-init>
                    <input
                      type="file" name="imageurl"
                      className="peer block min-h-[auto] w-full rounded border-1 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear"
                      id="exampleFormControlInput22"
                      placeholder="Upload Image" onChange={handleImage} />

                  </div>
                  <div className="text-center lg:text-left">

                  {imageWait == true ? <div role="status">
                    <svg ariaHidden="true" className="w-8 h-8 mr-2 green animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                    : <button
                      type="submit"
                      className="inline-block rounded bg-primary text-black px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                      data-te-ripple-init
                      data-te-ripple-color="black" onClick={dataPost}>Upload

                    </button>}

           </div>
    </div>
  )
}
