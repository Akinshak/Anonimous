import { useParams } from 'react-router-dom'

const NewMessage = () => {
  const { user } = useParams()

  return (
    <section className='bg-pry w-[90%] max-w-md mx-auto my-20 py-6 px-4 rounded-md'>
      <h2 className='text-center font-extrabold'>Write a message...</h2>
      <p className='mt-20 capitalize text-base'>
        send <span className='font-bold'>{user}</span> an anonymous message
      </p>
      <form className='mt-12'>
        <div className='relative'>
          <textarea
            rows={5}
            id='message'
            className='block px-2.5 pb-2.5 pt-4 w-full text-base text-sec bg-transparent rounded-lg border border-sec appearance-none focus:outline-none focus:ring-0 focus:border-sec resize-none peer'
            placeholder=' '
          />
          <label
            htmlFor='message'
            className='absolute text-base text-sec duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-pry px-2 peer-focus:px-2 peer-focus:text-sec peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1'
          >
            Enter your message
          </label>
        </div>{' '}
        <div className='flex items-center justify-center mt-4'>
          <button
            type='submit'
            className='trans bg-sec text-white w-full py-2.5 rounded-full hover:bg-sec/70'
          >
            Send Message
          </button>
        </div>
      </form>
      <p className='text-sm mt-4 mb-12'>
        By using this service, you agree to our Privacy Policy, Terms of Service
        and any related policies.
      </p>
      <div className='w-full h-0.5 bg-sec'></div>
    </section>
  )
}

export default NewMessage
