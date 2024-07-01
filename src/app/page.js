import Image from 'next/image';
import Form from './components.js'

export default function page(){
  return(
    <main className=' my-auto text- playwrite-no-100 text-black' >
      
      {/*mobile version*/}
      <section className=" h-screen p-5 bg-white content-center bg-cover bg-right lg:bg-top lg:bg-cover bg-[url('/blossomsv2.png')] lg:bg-[url('/blissv2.png')]" >
        <div className="mx-auto text-center text-black bg-pink-300/ max-w-7xl">
          <div className=' rounded-2xl bg-orange-400/70 h-max p-5 my-auto grid'>
            <h1 className=' text-5xl mb-4' id="test"> Blossoms And Bliss</h1>
            <h1 className=' text-2xl'> The function will be held on <span className=' underline'>July 27th 2024</span> at <a href="https://www.google.com/maps/place/1083+Austin+Ave+NE,+Atlanta,+GA+30307/@33.7619716,-84.3550701,17z/data=!3m1!4b1!4m6!3m5!1s0x88f506aa2471172b:0x80cd3712f280919e!8m2!3d33.7619716!4d-84.3524952!16s%2Fg%2F11bw3xnj77?entry=ttu" className='underline'>1083 Austin Ave NE, Atlanta, GA 30307</a></h1>

            <h1 className='text-3xl my-6'>RSVP Here:</h1>
            <Form/>
            
          </div>
        </div>
      </section>
    </main>
  )
}

