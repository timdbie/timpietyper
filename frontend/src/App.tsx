import './index.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Button from './components/Button'
import Select from './components/Select'

function App() {
  return (
    <div className="container flex flex-col h-screen">
      <Header />
      <div className="flex-1 flex">
        <Select
          icon="mingcute:settings-6-line"
          backgroundColor='#FFCBCB'
          iconColor='#FF4949'
        >
          <button className="px-2">Time</button>
          <button className="px-2">Words</button>
          <button className="px-2">Sentences</button>
        </Select>

        <Select
          icon="mingcute:dashboard-4-line"
          backgroundColor='#B9D9FF'
          iconColor='#6EAFFC'
        >
          <button className="px-2">15</button>
          <button className="px-2">30</button>
          <button className="px-2">60</button>
        </Select>

        <Button
          label='Multiplayer'
          icon="mingcute:game-2-line"
          backgroundColor='#5CFA88'
        />
      </div>
      <Footer />
    </div>
  )
}

export default App
