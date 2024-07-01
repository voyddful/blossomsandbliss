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
              document.getElementById('but').innerHTML = "Submitted!"
            })
          });
        });
    })
   
    
};


export default function Form(){
    return(
        <form method="POST" onSubmit={handle()} id="my-form" action="https://script.google.com/macros/s/AKfycbznHshyexexv8xelQMpy8Cs3D8hges5JMN-0NSG6u6H1bLyTn3Pk-Qe7PjI8SgF3Rxvcw/exec">
            <field name="name">
            <div className=" my-5">
                <label
                htmlFor="name"
                className="block mb-2 text-base  font-medium text-gray-900"
                >
                Name
                </label>
                <input
                type={"text"}
                id="Name"
                name="Name"
                className=" bg-pink-50 border border-gray-300 text-gray-600 text-sm rounded-lg block w-full p-2.5 "
                placeholder="Name"

                />
            </div>
            </field>
            <div className=" my-5">
                <label
                htmlFor="password"
                className="block mb-2 text-base font-medium text-gray-900"
                >
                Phone Number
                </label>
                <input
                type={"text"}
                id="Number"
                name="Number"
                className=" bg-pink-50 border border-gray-300 text-gray-600 text-sm rounded-lg block w-full p-2.5 "
                placeholder="Phone Number"
                />
            </div>
            <div className="my-5">
                <label
                htmlFor="password"
                className="block mb-2 text-base font-medium text-gray-900"
                >
                Age
                </label>
                <input
                type={"text"}
                id="Age"
                name="Age"
                className=" bg-pink-50 border border-gray-300 text-gray-600 text-sm rounded-lg block w-full p-2.5 "
                placeholder="Age"
                />
            </div>
            <div className=" my-5">
                <label
                htmlFor="Allergies"
                className="block mb-2 text-base  font-medium text-gray-900"
                >
                Allergies
                </label>
                <input
                type={"text"}
                id="Allergies"
                name="Allergies"
                className=" bg-pink-50 border border-gray-300 text-gray-600 text-sm rounded-lg block w-full p-2.5 "
                placeholder="Allergies"
                />
            </div>
            <button 
            type="submit"
            id="but"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                
                Submit
            </button>
                
        </form>

    )
}

