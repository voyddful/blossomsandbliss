import Image from 'next/image';
import Form from './components.js'

export default function page(){
  return(
    <main className=' my-auto text- playwrite-no-100 text-black' >
      {/*pc version*/}
      <section className='hidden lg:grid h-screen p-5' style={{backgroundImage: `url(${'/blissv2.png'})`, backgroundSize: '100%'}}>
        <div className=' bg-orange-400/30 h-max p-5 my-auto grid grid-cols-2'>
          <div className='text-center content-center mb-4'>
              <h1 className=' text-7xl mb-2' id="test"> Blossoms And Bliss</h1>
              <h1 className=' text-3xl'> The function will be held on [date] at [location]</h1>
            
          </div>
          <div className='text-center'>
            <h1 className='text-3xl mb-6'>RSVP Here:</h1>
            <Form/>
          </div>
        </div>
      </section>
      {/*mobile version*/}
      <section className='lg:hidden h-screen p-5 bg-white content-center' style={{backgroundImage: `url(${'/blossomsv2.png'})`, backgroundSize: 'cover'}}>
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

