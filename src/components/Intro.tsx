const Intro = () => {
    return (
        <div className="border-1 border-stone-900 shadow-lg rounded-md overflow-hidden w-55">
        <div className='flex items-center justify-center flex-col text-center pt-20 pb-8'>
            <img 
                src="https://media.licdn.com/dms/image/D5603AQFBaHP3wnhDjg/profile-displayphoto-shrink_800_800/0/1682335051827?e=2147483647&v=beta&t=WA919VSP05g5Za_ciYoxGYv7WHD8YtABVNAiOFlNuKM"
                alt="portfolio" 
                className='w-48 h-48 object-cover m-5 rounded-full' 
                />
            <h1 className='text-4xl md:text-5xl mb-1 md:mb-3 font-bold' style={{color:'#3F83F8'}}>Alvienas Yandika</h1>
            <p className='text-base md:text-2xl mb-3 font-medium' style={{color:'white'}}>Software Engineer & Fullstack Web Developer</p>
        </div>
        </div>
    )
}

export default Intro