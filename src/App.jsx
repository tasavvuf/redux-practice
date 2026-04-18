import ResultGrid from "./components/ResultGrid"
import Searchbar from "./components/Searchbar"
import Tabs from "./components/Tabs"

function App() {

  return (
    <div className=' px-6 min-h-screen w-full text-white bg-black ' >
      <Searchbar/>
      <Tabs />
      <ResultGrid/>
    </div>
  )
}

export default App