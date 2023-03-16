
import './App.css'

// components
import Header from './components/Header'
import LanguageSection from './components/LanguageSection'
import Welcome from './components/Welcome'
import GetStarted from './components/GetStarted'
import Footer from './components/Footer'
import Apply from './components/Apply'
import Visa from './components/Visa'

function App() {

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Visa />
        <Apply />
        <LanguageSection />
        <div className='wrapper'>
          <Welcome />
          <GetStarted />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
