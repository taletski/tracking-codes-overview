import "./App.css";
import { Space, Button } from "antd";

function App() {
  return (
    <Space direction="vertical" align="center" className="main-container">
      <Button type="primary">{"Emulate Click"}</Button>
      <Button type="default" danger>
        {"Emulate Error"}
      </Button>
    </Space>
  );
}

export default App;
