import { useEffect, useState } from 'react'
import WebApp from '@twa-dev/sdk'

function App() {
  const [username, setUsername] = useState('')

  useEffect(() => {
    WebApp.ready()
    const user = WebApp.initDataUnsafe?.user
    if (user) {
      setUsername(user.first_name)
    }
  }, [])

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-4">
      <h1 className="text-2xl font-bold mb-4">Добро пожаловать в HEREKETDE</h1>
      {username
        ? <p className="text-lg">Привет, {username}! 👋</p>
        : <p className="text-gray-500">Открой это приложение из Telegram</p>}
    </div>
  )
}

export default App
