'use client'
import * as React from 'react';



export function handle(){
    React.useEffect(() => {
        window.addEventListener("load", function() {
            
            
          const form = document.getElementById('my-form');
          
          form.addEventListener("submit", function(e) {
            document.getElementById('check').removeAttribute("class")
            document.getElementById('check').setAttribute("class", "hidden")
            document.getElementById('add').removeAttribute("class")
            document.getElementById('add').setAttribute("class", "hidden")
            document.getElementById('loading').removeAttribute("class")
            document.getElementById('loading').setAttribute("class", "content-center ml-1 w-5 h-5 text-black animate-spin fill-gray-200")
            document.getElementById('but').setAttribute("disabled", "true")
            document.getElementById('butt').innerHTML = "Loading..."
            e.preventDefault();
            const data = new FormData(form);
            const action = e.target.action;
            fetch(action, {
              method: 'POST',
              body: data,
            })
            .then(() => {   
                document.getElementById('but').removeAttribute("disabled")
                document.getElementById('loading').removeAttribute("class")
                document.getElementById('loading').setAttribute("class", "hidden")
                document.getElementById('check').removeAttribute("class")
                document.getElementById('check').setAttribute("class", "w-5 h-5 fill-white")
                document.getElementById('my-form').reset();
                document.getElementById('butt').innerHTML = "Submitted!"
            })
          });
        });
    })
   
    
};


export default function Form(){
    return(
        <form method="POST" onSubmit={handle()} id="my-form" action="https://script.google.com/macros/s/AKfycbznHshyexexv8xelQMpy8Cs3D8hges5JMN-0NSG6u6H1bLyTn3Pk-Qe7PjI8SgF3Rxvcw/exec">
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
            <div className=" my-5">
                <label
                htmlFor="password"
                className="block mb-2 text-base font-medium text-gray-900"
                >
                Memories
                </label>
                <textarea
                type={"text"}
                id="Memories"
                name="Memories"
                className=" bg-pink-50 border border-gray-300 text-gray-600 text-sm rounded-lg block w-full p-2.5 "
                placeholder="Please share an experience you have shared with Alexus. (Be mindful, memories will be shared at the function!)"
                />
            </div>
            <div className=" my-5">
                <label
                htmlFor="password"
                className="block mb-2 text-base font-medium text-gray-900"
                >
                Any Questions?
                </label>
                <input
                type={"text"}
                id="Questions"
                name="Questions"
                className=" bg-pink-50 border border-gray-300 text-gray-600 text-sm rounded-lg block w-full p-2.5 "
                placeholder="Questions?"
                />
            </div>
            <button 
            type="submit"
            id="but"
            
            className=" text-white grid items-center grid-cols-4 mx-auto bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 lg:text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                <svg id="loading" aria-hidden="true" className="hidden content-center w-5 h-5 text-black fill-gray-200" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
                <svg id="check" className="hidden" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M18 14a1 1 0 1 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2v-2Z" clipRule="evenodd"/>
                    <path fillRule="evenodd" d="M15.026 21.534A9.994 9.994 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2c2.51 0 4.802.924 6.558 2.45l-7.635 7.636L7.707 8.87a1 1 0 0 0-1.414 1.414l3.923 3.923a1 1 0 0 0 1.414 0l8.3-8.3A9.956 9.956 0 0 1 22 12a9.994 9.994 0 0 1-.466 3.026A2.49 2.49 0 0 0 20 14.5h-.5V14a2.5 2.5 0 0 0-5 0v.5H14a2.5 2.5 0 0 0 0 5h.5v.5c0 .578.196 1.11.526 1.534Z" clipRule="evenodd"/>
                </svg>

                <svg id="add" className="content-center mx-auto w-5 h-5 fill-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4.243a1 1 0 1 0-2 0V11H7.757a1 1 0 1 0 0 2H11v3.243a1 1 0 1 0 2 0V13h3.243a1 1 0 1 0 0-2H13V7.757Z" clipRule="evenodd"/>
                </svg>

                <p id="butt" className=' col-span-3  content-center'>Submit</p>
            </button>
                
        </form>

    )
}

