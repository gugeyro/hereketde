import { useEffect, useState } from "react";
import "./App.css";
import { Card, CardContent } from "@/components/ui/Card";

function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (window?.Telegram?.WebApp?.initDataUnsafe?.user) {
      setUserData(window.Telegram.WebApp.initDataUnsafe.user);
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="absolute top-4 left-4 flex items-center space-x-2">
        <div className="relative w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center text-xl font-bold">
          {userData?.first_name?.charAt(0) || "?"}
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-[10px] bg-white px-1 rounded shadow text-gray-800">
            {userData?.first_name || "Guest"}
          </div>
        </div>
      </div>

      <Card>
        <CardContent>
          <h1 className="text-2xl font-bold mb-2">Welcome to Hereketde</h1>
          <p>Walk, earn tokens, and win prizes!</p>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
