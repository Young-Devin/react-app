import { useState } from "react";
import ButtonV2 from "../components/ButtonV2";
import Alert from "../components/Alert";

let text = "I have been clicked";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>This is an alert</Alert>
      )}
      <ButtonV2 text={text} onClick={() => setAlertVisible(true)}>
        Click Me
      </ButtonV2>
    </div>
  );
}

export default App;
