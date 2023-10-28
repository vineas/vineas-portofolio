import { useState } from 'react'
import Intro from './components/Intro'
import Portofolio from './components/Portofolio'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [activeTab, setActiveTab] = useState('About');

  const handleClick = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <>
      <Intro />
      <div className='flex items-center justify-center flex-col text-center pt-5 pb-8'>
        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
          
        <li className="mr-2">
            <a
              href="#"
              onClick={() => handleClick('About')}
              className={`inline-block p-4 ${activeTab === 'About'
                ? 'text-blue-600 bg-gray-100'
                : 'text-gray-500 hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300'
                } rounded-t-lg`}
            >
              About
            </a>
          </li>

          <li className="mr-2">
            <a
              href="#"
              onClick={() => handleClick('Portofolio')}
              className={`inline-block p-4 ${activeTab === 'Portofolio'
                ? 'text-blue-600 bg-gray-100'
                : 'text-gray-500 hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300'
                } rounded-t-lg`}
            >
              Portofolio
            </a>
          </li>

          <li className="mr-2">
            <a
              href="#"
              onClick={() => handleClick('Contact')}
              className={`inline-block p-4 ${activeTab === 'Contact'
                ? 'text-blue-600 bg-gray-100'
                : 'text-gray-500 hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300'
                } rounded-t-lg`}
            >
              Contact
            </a>
          </li>
        </ul>
        
        {activeTab === 'Portofolio' && <Portofolio />}
        {activeTab === 'About' && <Timeline />}
        {activeTab === 'Contact' && <Contact />}
      </div>
      
      <Footer />
    </>
  )
}

export default App
