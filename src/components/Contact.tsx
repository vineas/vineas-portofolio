// import Title from "./Title";

const Contact = () => {
  return (
    <div className='border-2 shadow-xl rounded-xl overflow-hidden justify-center pr-10 pl-10' style={{ width: '100%', margin: 'auto', background:'white' }}>
      <div className="flex flex-col mt-10 mb-10 mx-auto">
         <div className="flex justify-center items-center">
            <form
               action="https://getform.io/f/(customSlugHere)"
               method="POST"
               className="flex flex-col w-full md:w-7/12"
            >
               {/* <Title>Contact</Title> */}
               <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
               />
               <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
               />
               <textarea
                  name="message"
                  placeholder="Message"
                  rows={10}
                  className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
               />
               <button
                  type="button"
                  className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md hover:stroke-white"
               >
                  Work With Me
               </button>
            </form>
         </div>
      </div>
      </div>
  )
}

export default Contact;