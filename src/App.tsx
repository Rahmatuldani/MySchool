import config from "./config/config";

function App() {
  document.title = config.title
  return (
    <>App Page</>
  );
}

export default App;