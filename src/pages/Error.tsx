import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className='text-center pt-24'>
      <h1 className='mb-8'>404</h1>
      <h2 className='mb-16'>page not found</h2>
      <Link
        to='/'
        className='bg-sec text-white px-4 py-3 capitalize rounded-md hover:bg-sec/70'
      >
        Back to homepage
      </Link>
    </section>
  )
}

export default Error
