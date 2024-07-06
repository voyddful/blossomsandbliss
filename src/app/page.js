import Image from 'next/image';
import Form from './components.js'

export default function page(){
  return(
    <main className=' my-auto  text-black' >
      
      {/*mobile version*/}
      <section className=" justify-center items-center flex min-h-screen p-8 bg-white bg-cover bg-right  xl:bg-cover bg-[url('/blossomsv2.png')] lg:bg-[url('/blissv2.png')]" >
        <div className=" text-center text-black max-w-7xl">
          <div className='mx-auto overflow-auto rounded-2xl bg-orange-400/70 h-max p-5 my-auto grid'>
            <h1 className=' text-lg mb-4 playwrite-no-100' id="test "><span className='text-2xl'>Blossoms And Bliss:</span><br/> An Evening Blooming with Elegance and Joy</h1>
            <h1 className=' text-2xl my-1' id="test"> Alexus Birthday Celebration</h1>
            <h1 className=' text-sm'> The function will be held on <span className=' underline'>July 27th 2024 from 6-9pm.</span></h1>
            <h1 className='text-sm'>location: <a href="https://www.google.com/maps/place/1083+Austin+Ave+NE,+Atlanta,+GA+30307/@33.7619716,-84.3550701,17z/data=!3m1!4b1!4m6!3m5!1s0x88f506aa2471172b:0x80cd3712f280919e!8m2!3d33.7619716!4d-84.3524952!16s%2Fg%2F11bw3xnj77?entry=ttu" className='underline'>1083 Austin Ave NE, Atlanta, GA 30307</a></h1>
            <h3 className='text-sm '>Dress code: dress to impress or business casual, children do not have a dress code.</h3>
            <h3 className='text-sm font-bold'>Please Be On Time. Something Special Is Planned and You Will Not Want To Miss It.</h3>

            <h1 className='text-3xl my-6'>RSVP Here:</h1>
           
            <Form/>
            
            
            
          </div>
        </div>
      </section>
    </main>
  )
}

