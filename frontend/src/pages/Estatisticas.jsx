import { useEffect, useState } from "react";
import { getEstatisticas } from "../api";
import Spinner from "../components/Spinner";
import { Trophy, Star, Target } from "lucide-react";

export default function Estatisticas() {
const [estatisticas, setEstatisticas] = useState(null);

useEffect(() => {
const token = localStorage.getItem("token");
if (!token) return;

```
getEstatisticas(token)
  .then((data) => setEstatisticas(data))
  .catch(() => setEstatisticas([]));
```

}, []);

if (estatisticas === null)
return ( <div className="text-center p-10"> <Spinner /> </div>
);

return ( <div className="max-w-6xl mx-auto p-6 text-center"> <h1 className="text-4xl font-extrabold text-purple-800 mb-10">
Estatísticas do Campeonato </h1>

```
  <div className="grid md:grid-cols-3 gap-8">
    {estatisticas.map((e, i) => (
      <div
        key={e.id}
        className="bg-gradient-to-br from-purple-100 to-green-100 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
      >
        <div className="flex justify-center mb-3">
          {i === 0 ? (
            <Trophy className="text-yellow-500 w-10 h-10" />
          ) : i === 1 ? (
            <Star className="text-purple-600 w-10 h-10" />
          ) : (
            <Target className="text-green-600 w-10 h-10" />
          )}
        </div>
        <h2 className="text-2xl font-bold text-purple-800 mb-1">
          {e.jogadora}
        </h2>
        <p className="text-gray-600 mb-4">{e.time}</p>
        <div className="flex justify-around text-sm text-gray-700 font-semibold">
          <span>⚽ Gols: {e.gols}</span>
          <span>🎯 Assistências: {e.assistencias}</span>
          <span>🛡️ Defesas: {e.jogos}</span>
        </div>
      </div>
    ))}
  </div>
</div>


);
}
