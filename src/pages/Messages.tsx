import { Link } from 'react-router-dom'

const Messages = () => {
  return (
    <section className='bg-pry w-[90%] max-w-md mx-auto my-20 py-6 px-4 rounded-md grid gap-6'>
      <h2 className='text-center font-extrabold mb-20'>My Messages</h2>
      <article className='bg-sec text-gray-300 p-4 rounded-md'>
        <div>
          <span className='text-[14px] font-bold'>Message:</span>
          <br />
          <p className='text-[14px]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            impedit porro consectetur aliquid delectus!
          </p>
        </div>
        <h4 className='mt-4'>
          - Anonymous <span>[12th October, 2023]</span>
        </h4>
        <div className='flex items-center justify-center mt-4'>
          <button className='trans w-[70%] mx-auto bg-pry text-center text-sec py-1 rounded-md hover:bg-pry/60'>
            Delete
          </button>
        </div>
      </article>
      <article className='bg-sec text-gray-300 p-4 rounded-md'>
        <div>
          <span className='text-[14px] font-bold'>Message:</span>
          <br />
          <p className='text-[14px]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            impedit porro consectetur aliquid delectus!
          </p>
        </div>
        <h4 className='mt-4'>
          - Anonymous <span>[12th October, 2023]</span>
        </h4>
        <div className='flex items-center justify-center mt-4'>
          <button className='trans w-[70%] mx-auto bg-pry text-center text-sec py-1 rounded-md hover:bg-pry/60'>
            Delete
          </button>
        </div>
      </article>
      <article className='bg-sec text-gray-300 p-4 rounded-md'>
        <div>
          <span className='text-[14px] font-bold'>Message:</span>
          <br />
          <p className='text-[14px]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            impedit porro consectetur aliquid delectus!
          </p>
        </div>
        <h4 className='mt-4'>
          - Anonymous <span>[12th October, 2023]</span>
        </h4>
        <div className='flex items-center justify-center mt-4'>
          <button className='trans w-[70%] mx-auto bg-pry text-center text-sec py-1 rounded-md hover:bg-pry/60'>
            Delete
          </button>
        </div>
      </article>
      <div className='w-full h-0.5 bg-sec'></div>
      <Link
        to='/'
        className='trans w-[70%] mx-auto bg-sec text-center text-white py-1 rounded-md hover:bg-sec/60'
      >
        Back To Homepage
      </Link>
    </section>
  )
}

export default Messages
