import profileImg from '../assets/alvienas.jpeg';

const Intro = () => {
    return (
        <div className='flex items-center justify-center flex-col text-center pt-20 pb-8'>
            <img 
                src={profileImg} 
                alt="portfolio" 
                className='w-48 h-48 object-cover m-5 rounded-full' 
                />
            <h1 className='text-4xl md:text-7xl mb-1 md:mb-3 font-bold'>Alvienas Yandika</h1>
            <p className='text-base md:text-xl mb-3 font-medium'>Software Engineer & Fullstack Web Developer</p>
            {/* <p className="text-sm max-w-xl mb-6 font-bold">
                I'm an indie full-stack developer and content creator building my
                version of the digital world one step at a time. All coding projects
                are built from the ground up, from planning and designing all the way
                to solving real-life problems with code.
                <br />
                All video content is built the same way, from ideation and planning,
                all the way to finalizing the content with artistic touches. I publish
                that content on my Github{' '}
                <a
                    href="https://github.com/vineas"
                    target="_blank"
                    className="text-cyan-600 hover:underline underline-offset-1 decoration-2 decoration-red-600"
                    rel="noreferrer noopener"
                >
                    Vineas
                </a>{' '}
                to more than 400k subscribers.
            </p> */}
        </div>
    )
}

export default Intro