import React, { useEffect } from 'react'
import SetLocalstorage from './components/SetLocalstorage'

function App() {
  const [language, setLanguage] = React.useState(
    () => window.localStorage.getItem('language') || ''
  )
  const [count, setCount] = React.useState(
    () => Number(window.localStorage.getItem('count')) || 0
  )

  useEffect(() => {
    window.localStorage.setItem('language', language)
  }, [language])

  useEffect(() => {
    window.localStorage.setItem('count', count)
  }, [count])

  return (
    <div >
      <label>Language</label>
      <input type="text" value={language} onChange={(e) => setLanguage(e.target.value)} />
      <label >Your Language {language}</label>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
}

export default App;
