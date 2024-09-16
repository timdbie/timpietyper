import './index.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Button from './components/Button'

function App() {
  return (
    <div className="container flex flex-col h-screen">
      <Header />
      <div className="flex-1">
        <Button 
          label='hello world'
        />
      </div>
      <Footer />
    </div>
  )
}

export default App
