const Timeline = () => {
  return (
    <div className='flex items-center justify-center flex-col text-center pt-10 pb-8'>
      <p className="text-sm max-w-xl mb-6 ">
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
            </p>
    </div>
  )
}

export default Timeline