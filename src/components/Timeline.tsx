const Timeline = () => {
  return (
    <div className='border-2 shadow-xl rounded-xl overflow-hidden justify-center pr-10 pl-10' style={{ width: '100%', margin: 'auto', background: 'white' }}>
      <div className='flex flex-col md: flex-row items-center justify-center pt-6 pb-6'>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
  <div className="p-6">
    <p className='text-base md:text-2xl mb-1 font-medium'>
      Frontend Development
    </p>
    <p className="text-base md:text-xl mb-3">React JS</p>
    <p className="text-base md:text-xl mb-3">Next JS</p>
    <p className="text-base md:text-xl mb-3">Tailwind CSS</p>
    <p className="text-base md:text-xl mb-3">Bootstrap</p>
    <p className="text-base md:text-xl ">Redux</p>
  </div>
  <div className="p-6">
    <p className='text-base md:text-2xl mb-1 font-medium'>
      Backend Development
    </p>
    <p className="text-base md:text-xl mb-3">Express JS</p>
    <p className="text-base md:text-xl mb-3">Node JS</p>
    <p className="text-base md:text-xl mb-3">Laravel</p>
    <p className="text-base md:text-xl mb-3">Postgre SQL</p>
    <p className="text-base md:text-xl">MySQL</p>
  </div>
</div>

      </div>
    </div>
  )
}

export default Timeline