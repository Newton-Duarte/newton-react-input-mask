import { useState } from "react";
import { MaskedInput } from "./MaskedInput";
import "./styles.css";

export default function App() {
  const [cpf, setCpf] = useState("");

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <MaskedInput
        value={cpf}
        onChange={(event) => setCpf(event.target.value)}
      />
      <pre>{cpf}</pre>
    </div>
  );
}
