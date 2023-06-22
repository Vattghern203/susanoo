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
  
      <CTABtn name="fernamdo" />

    </div>
  )
}

export default App
