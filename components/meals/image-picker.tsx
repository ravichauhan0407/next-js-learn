"use client";

import { useRef } from "react"

export default function ImagePicker(){
       const fileRef=useRef<any>();

       const handleClick=()=>{
        fileRef.current.click()
       }

       return <>
           <input name='image' accept=".png, .jpeg, .jpg" type="file" ref={fileRef} style={{display:'none'}}/>
           <button onClick={handleClick} className="p-3 theme-bg rounded-md">Pick a image</button>
       </>
}