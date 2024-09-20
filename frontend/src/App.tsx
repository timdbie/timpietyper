import './index.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Bar from './components/Bar/Bar'
import Typer from './components/Typer/Typer'

function App() {
  return (
    <div className="container flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 justify-center items-center">
        <Bar />
        <Typer />
      </div>
      <Footer />
    </div>
  )
}

export default App
