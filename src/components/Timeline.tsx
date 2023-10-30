const Timeline = () => {
  return (
    <div className='overflow-hidden justify-center pr-10 pl-10' style={{ width: '100%', margin: 'auto'}}>
      <div className='flex flex-col md: flex-row items-center justify-center pt-6 pb-6'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <div className="p-6">
            <p className='text-base md:text-2xl mb-1 font-medium'style={{color: '#3F83F8' }}>
              Frontend Development
            </p>
            <p className="text-base md:text-xl mb-3" style={{color: 'white' }}>React JS</p>
            <p className="text-base md:text-xl mb-3" style={{color: 'white' }}>Next JS</p>
            <p className="text-base md:text-xl mb-3" style={{color: 'white' }}>Tailwind CSS</p>
            <p className="text-base md:text-xl mb-3" style={{color: 'white' }}>Bootstrap</p>
            <p className="text-base md:text-xl" style={{color: 'white' }}>Redux</p>
          </div>
          <div className="p-6">
            <p className='text-base md:text-2xl mb-1 font-medium'style={{color: '#3F83F8' }} >
              Backend Development
            </p>
            <p className="text-base md:text-xl mb-3" style={{color: 'white' }}>Express JS</p>
            <p className="text-base md:text-xl mb-3" style={{color: 'white' }}>Node JS</p>
            <p className="text-base md:text-xl mb-3" style={{color: 'white' }}>Laravel</p>
            <p className="text-base md:text-xl mb-3" style={{color: 'white' }}>Postgre SQL</p>
            <p className="text-base md:text-xl" style={{color: 'white' }}>MySQL</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Timeline