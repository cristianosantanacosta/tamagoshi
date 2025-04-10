import { useEffect, useState } from 'react'

function App() {
  const [hunger, setHunger] = useState(50)
  const [happiness, setHappiness] = useState(50)
  const [energy, setEnergy] = useState(50)
  const [time, setTime] = useState(new Date())
  const [clicks, setClicks] = useState(0)
  const [isBorn, setIsBorn] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const handleEggClick = () => {
    const newClicks = clicks + 1
    setClicks(newClicks)
    if (newClicks >= 3) {
      setIsBorn(true)
    }
  }

  const feed = () => {
    setHunger(prev => Math.max(0, prev - 10))
    setEnergy(prev => Math.min(100, prev + 5))
  }

  const play = () => {
    setHappiness(prev => Math.min(100, prev + 10))
    setEnergy(prev => Math.max(0, prev - 10))
    setHunger(prev => Math.min(100, prev + 5))
  }

  const sleep = () => {
    setEnergy(prev => Math.min(100, prev + 20))
    setHunger(prev => Math.min(100, prev + 10))
  }

  const reset = () => {
    setHunger(50)
    setHappiness(50)
    setEnergy(50)
    setClicks(0)
    setIsBorn(false)
  }

  const formatTime = (date) => date.toLocaleTimeString()

  return (
    <div style={styles.container}>
      <style>{keyframes}</style>

      <div style={styles.containerTama}>

      {!isBorn ? (
          <div
            style={{ ...styles.egg, animation: 'wiggle 1s infinite' }}
            onClick={handleEggClick}
          />
        ) : (
          <div style={{ ...styles.petEmoji, animation: 'walk 4s infinite alternate linear' }}>
            🐣
          </div>
        )}

      <div style={styles.status}>
        <p>Fome: {hunger}%</p>
        <p>Felicidade: {happiness}%</p>
        <p>Energia: {energy}%</p>
      </div>
      </div>
      
      <div style={styles.drawer}>
      <h1>Tamagotchi</h1>
      <div style={styles.clock}>⏰ {formatTime(time)}</div>
        <h3>🎮 Ações</h3>
        <button style={styles.btnGreen} onClick={feed}>🍎 Alimentar</button>
        <button style={styles.btnBlue} onClick={play}>⚽ Brincar</button>
        <button style={styles.btnOrange} onClick={sleep}>😴 Dormir</button>
        <button style={styles.btnGray} onClick={reset}>🔄 Resetar</button>
      </div>
    </div>
  )
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '2rem',
    fontFamily: 'sans-serif',
    position: 'relative',
    paddingRight: '200px', 
  },
  containerTama: {
    textAlign: 'center',
    paddingLeft: '200px',
    marginTop: '2rem',
    fontFamily: 'sans-serif',
    position: 'relative',
    paddingRight: '100px', 
  },
  clock: {
    fontSize: '1.2rem',
    marginBottom: '1rem',
    color: '#555',
  },
  egg: {
    width: '100px',
    height: '130px',
    margin: '0 auto 1rem',
    backgroundColor: '#fff',
    border: '5px solid #999',
    borderRadius: '50% 50% 45% 45%',
    cursor: 'pointer',
  },
  petEmoji: {
    fontSize: '80px',
    marginTop: '1rem',
    position: 'relative',
  },
  status: {
    margin: '1rem auto',
    fontSize: '1.2rem',
  },
  drawer: {
    position: 'fixed',
    top: '0',
    right: '0',
    width: '180px',
    height: '100vh',
    backgroundColor: '#f4f4f4',
    borderLeft: '2px solid #ccc',
    padding: '1rem',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    textAlign: 'left',
  },
  btnGreen: {
    padding: '0.6rem',
    fontSize: '0.9rem',
    border: 'none',
    borderRadius: '6px',
    backgroundColor: '#4caf50',
    color: 'white',
    cursor: 'pointer',
  },
  btnBlue: {
    padding: '0.6rem',
    fontSize: '0.9rem',
    border: 'none',
    borderRadius: '6px',
    backgroundColor: '#2196f3',
    color: 'white',
    cursor: 'pointer',
  },
  btnOrange: {
    padding: '0.6rem',
    fontSize: '0.9rem',
    border: 'none',
    borderRadius: '6px',
    backgroundColor: '#ff9800',
    color: 'white',
    cursor: 'pointer',
  },
  btnGray: {
    padding: '0.6rem',
    fontSize: '0.9rem',
    border: 'none',
    borderRadius: '6px',
    backgroundColor: '#9e9e9e',
    color: 'white',
    cursor: 'pointer',
  },
}

const keyframes = `
@keyframes wiggle {
  0% { transform: rotate(0deg); }
  25% { transform: rotate(3deg); }
  50% { transform: rotate(-3deg); }
  75% { transform: rotate(2deg); }
  100% { transform: rotate(0deg); }
}

@keyframes walk {
  0% { left: 0; }
  100% { left: calc(100% - 100px); }
}
`

export default App
