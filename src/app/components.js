'use client'
import * as React from 'react';

export function handle(){
    React.useEffect(() => {
         window.addEventListener("load", function() {
    const form = document.getElementById('my-form');
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const data = new FormData(form);
      const action = e.target.action;
      fetch(action, {
        method: 'POST',
        body: data,
      })
      .then(() => {   
        
        document.getElementById('my-form').reset();
      })
    });
  });
    })
   
    
};


export default function Form(){
    return(
        <form method='post' onSubmit={handle()} id="my-form" action="https://script.google.com/macros/s/AKfycbz0naa-n3CIewNUnTzyI5jCQO7QhYMcq5445akVVcfKjqP8gD2frg7r3EBgbY1YZFwF5A/exec" className="max-w-3xl lg:grid lg:grid-cols-4 lg:gap-8 mx-auto">
            <field name="name">
            <div className=" my-5">
                <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900"
                >
                Name
                </label>
                <input
                type={"text"}
                id="Name"
                name="Name"
                className=" bg-pink-50 border border-gray-300 text-gray-600 text-sm rounded-lg block w-full p-2.5 "
                placeholder="name"

                />
            </div>
            </field>
            <div className=" my-5">
                <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900"
                >
                Phone Number
                </label>
                <input
                type={"text"}
                id="Number"
                name="Number"
                className=" bg-pink-50 border border-gray-300 text-gray-600 text-sm rounded-lg block w-full p-2.5 "
                placeholder="phone number"
                />
            </div>
            <div className="my-5">
                <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900"
                >
                Age
                </label>
                <input
                type={"text"}
                id="Age"
                name="Age"
                className=" bg-pink-50 border border-gray-300 text-gray-600 text-sm rounded-lg block w-full p-2.5 "
                placeholder="age"
                />
            </div>
            <button 
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                
                Submit
            </button>
                
        </form>

    )
}

