import './index.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Main from './components/Main/Main'

function App() {
  return (
    <div className="container flex flex-col h-screen">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
