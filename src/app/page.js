import Image from 'next/image';
import Form from './components.js'

export default function page(){
  return(
    <main className=' my-auto text- playwrite-no-100 text-black' >
      
      {/*mobile version*/}
      <section className=" h-screen p-5 bg-white content-center bg-cover bg-right lg:bg-top lg:bg-cover bg-[url('/blossomsv2.png')] lg:bg-[url('/blissv2.png')]" >
        <div className="mx-auto text-center text-black bg-pink-300/ max-w-7xl">
          <div className=' rounded-2xl bg-orange-400/70 h-max p-5 my-auto grid'>
            <h1 className=' text-5xl mb-2' id="test"> Blossoms And Bliss</h1>
            <h1 className=' text-2xl'> The function will be held on [date] at [location]</h1>

            <h1 className='text-3xl mb-6'>RSVP Here:</h1>
            <Form/>
            
          </div>
        </div>
      </section>
    </main>
  )
}

