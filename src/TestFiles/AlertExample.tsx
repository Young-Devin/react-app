import Alert from "../components/Alert";

function App() {
  return (
    <div>
      <Alert onClose={() => console.log("Test")}>
        Hello <span>World</span>
      </Alert>
    </div>
  );
}

export default App;
