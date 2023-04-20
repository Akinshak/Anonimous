import { Link } from 'react-router-dom'

import { CopyToClipboard } from 'react-copy-to-clipboard'
import { BiCopy } from 'react-icons/bi'
import { FaArrowRight, FaShare } from 'react-icons/fa'
import { toast } from 'react-toastify'

const Home = () => {
  const link = 'https://tifee-msg.com'
  return (
    <section className='bg-pry w-[90%] max-w-md mx-auto mt-20 py-6 px-4 rounded-md'>
      <h2 className='text-center font-extrabold'>Tifee's Profile</h2>
      <span className='flex justify-center items-center gap-4 text-sm py-4'>
        {link}
        <CopyToClipboard
          text={link}
          onCopy={() => toast.success('Copied to Clipboard')}
        >
          <button>
            <BiCopy />
          </button>
        </CopyToClipboard>
      </span>
      <span className='text-base'>
        Share your profile link to your friends, then click view messages to
        check their responses.
      </span>
      <div className='flex items-center justify-center mt-12'>
        <Link
          to='/messages'
          className='trans w-[70%] mx-auto bg-sec text-center text-white py-3 rounded-full hover:bg-sec/70'
        >
          View Messages <FaArrowRight />
        </Link>
      </div>
      <div className='flex items-center justify-center mt-4'>
        <button className='trans w-[70%] mx-auto bg-sec text-center text-white py-3 rounded-full hover:bg-sec/70'>
          Share your profile <FaShare />
        </button>
      </div>
      <div className='h-0.5 w-full bg-sec mt-12'></div>
    </section>
  )
}

export default Home
