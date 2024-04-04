import rectangle from '../assets/rectangle-oval.svg'
import circle from '../assets/circle.svg'
import girl from '../assets/girl.svg'

function SideCover () {
    return (
        <div className='relative  h-full '>
<div className="max-w-2xl mx-auto p-6 pt-32">
  <h1 className="text-3xl text-primary-txt mb-4">Let us Get in <span className=' font-bold'>Touch!</span></h1>
  <p className="text-lg text-primary-txt mb-4 w-96">
    Have a question or need assistance? Reach out to us via email, phone, or the contact form below. 
    We are eager to assist you.
  </p>
  <p className="text-lg text-primary-txt mb-4 font-semibold">Nice hearing from you!</p>
</div>

                <img src={rectangle} alt="Rectangle" className=' w-80 absolute top-[-7rem] right-0'/>
                <img src={rectangle} alt="Rectangle" className=' w-80 absolute top-[60%] left-[65%] transform -translate-x-1/2 -translate-y-1/2'/>
                {/* Circle image */}
                <img src={circle} alt="circle" className=" w-[26rem] absolute top-[70%] left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                {/* Girl image */}
                <img src={girl} alt="girl" className=" w-80 absolute bottom-0 left-1/2 transform -translate-x-1/2" />
        </div>
    )
}

export default SideCover;