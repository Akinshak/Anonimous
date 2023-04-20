type Props = {
  setLogin: any
}

function Register({ setLogin }: Props) {
  return (
    <section className='my-20 w-[90%] max-w-2xl mx-auto'>
      <div className='text-center'>
        <h2 className='font-bold'>Hello!</h2>
        <h4 className='font-semibold pt-4'>sign up to get started</h4>
      </div>
      <form className='mt-12 w-[90%] max-w-sm mx-auto grid gap-4'>
        <div className='relative'>
          <input
            type='email'
            id='email'
            className='block px-2.5 pb-2.5 pt-4 w-full text-sm text-sec bg-transparent rounded-lg border border-pry appearance-none focus:outline-none focus:ring-0 focus:border-sec peer'
            placeholder=' '
          />
          <label
            htmlFor='email'
            className='absolute text-sm text-sec duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#f9fcf8]  px-2 peer-focus:px-2 peer-focus:text-sec peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1'
          >
            Email
          </label>
        </div>
        <div className='relative'>
          <input
            type='text'
            id='username'
            className='block px-2.5 pb-2.5 pt-4 w-full text-sm text-sec bg-transparent rounded-lg border border-pry appearance-none focus:outline-none focus:ring-0 focus:border-sec peer'
            placeholder=' '
          />
          <label
            htmlFor='username'
            className='absolute text-sm text-sec duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#f9fcf8]  px-2 peer-focus:px-2 peer-focus:text-sec peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1'
          >
            User Name
          </label>
        </div>
        <div className='relative'>
          <input
            type='password'
            id='password'
            className='block px-2.5 pb-2.5 pt-4 w-full text-sm text-sec bg-transparent rounded-lg border border-pry appearance-none focus:outline-none focus:ring-0 focus:border-sec peer'
            placeholder=' '
          />
          <label
            htmlFor='password'
            className='absolute text-sm text-sec duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#f9fcf8]  px-2 peer-focus:px-2 peer-focus:text-sec peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1'
          >
            Password
          </label>
        </div>

        <div className='flex items-center justify-center'>
          <button
            type='submit'
            className='trans bg-sec text-white w-full py-2.5 rounded-full hover:bg-sec/70'
          >
            Login
          </button>
        </div>
      </form>
      <div className='text-center mt-8 text-black'>
        <h4>
          Already have an account?{' '}
          <button className='text-sec' onClick={() => setLogin(true)}>
            Log In
          </button>
        </h4>
      </div>
    </section>
  )
}

export default Register
