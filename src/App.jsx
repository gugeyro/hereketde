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
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-white text-center space-y-6">
      <h1 className="text-3xl font-bold">Добро пожаловать в HEREKETDE</h1>
      <p className="text-lg text-gray-700">Привет, {username}! 👟</p>

      <div className="bg-gray-100 p-4 rounded-xl shadow-md w-full max-w-xs space-y-2 text-left">
        <p>👟 <strong>Кроссовки:</strong> 2</p>
        <p>⚡ <strong>Энергия:</strong> 2</p>
        <p>💰 <strong>Токены:</strong> 15</p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 pt-4">
        <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg">
          🚶 Начать ходьбу
        </button>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg">
          🎁 Открыть сундук
        </button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">
          ➕ Взять в аренду
        </button>
        <button className="bg-gray-700 hover:bg-gray-800 text-white py-2 px-4 rounded-lg">
          🛒 Магазин
        </button>
      </div>
    </div>
  )
}

export default App
