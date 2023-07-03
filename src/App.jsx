import { useState } from 'react'

import '../src/styles/global.css'

import { ThemeCard, CTABtn  } from './components/atoms'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div>

      <ThemeCard
        title='React'
        color='blue'
        img='src\assets\react.svg'
      />

      <br />
  
      <CTABtn
        btnTxt={`click me`}
      />

    </div>
  )
}

export default App
