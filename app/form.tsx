"use client"

import React, { useRef } from "react";
import { addTodo } from "./actions/action";
import Button from "./button";


export default function Form() {
    const ref = useRef<HTMLFormElement>(null);

    return (
        <form ref={ref} action={async formData =>{
            ref.current?.reset();
            // input validation here
           await addTodo(formData);
        }} className='flex flex-col w-[300px] m-16'>
                <input 
                  type="text"
                  name="name"
                  className='px-4 py-2 mb-3'
                  placeholder='Todo name'
                  required 
                />
                <Button/>
            </form>
    )
}