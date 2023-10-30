const Timeline = () => {
  return (
    <div className='border-2 shadow-xl rounded-xl overflow-hidden justify-center pr-10 pl-10' style={{ width: '100%', margin: 'auto', background: 'white' }}>
      <div className='flex pt-6 pb-6'>
        <div className="w-1/2">
          <p className='text-base md:text-2xl mb-3 font-medium'>
            Frontend Development 
          </p>
          <p className="text-base md:text-xl mb-3">React JS</p>
          <p className="text-base md:text-xl mb-3">Next JS</p>
          <p className="text-base md:text-xl mb-3">Tailwind CSS</p>
          <p className="text-base md:text-xl mb-3">Bootstrap</p>
          <p className="text-base md:text-xl mb-3">Redux</p>
        </div>
        <div className="w-1/2">
          <p className='text-base md:text-2xl mb-3 font-medium'>
            Backend Development
          </p>
          <p className="text-base md:text-xl mb-3">Express JS</p>
          <p className="text-base md:text-xl mb-3">Node JS</p>
          <p className="text-base md:text-xl mb-3">Laravel</p>
          <p className="text-base md:text-xl mb-3">Postgre SQL</p>
          <p className="text-base md:text-xl mb-3">MySQL</p>
        </div>
      </div>
    </div>
  )
}

export default Timeline