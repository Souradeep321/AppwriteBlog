import conf from './conf/conf'

function App() {
  console.log(conf.appWriteUrl);
  
  return (
    <h1 className="text-4xl font-bold underline text-center bg-pink-400">
      Hello world!
    </h1>
  )
}

export default App
