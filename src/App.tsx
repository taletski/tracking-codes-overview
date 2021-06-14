import "./App.css";
import { Space, Button } from "antd";

import { jitsuClient } from "@jitsu/sdk-js";

const jitsu = jitsuClient({
  key: "js.cehd6u5zn5ie6q1m6xfvis.cy7fgc3w4gstlctl6ndzp",
});

jitsu.set({ target: "WEB_APP" });

function App() {
  return (
    <Space direction="vertical" align="center" className="main-container">
      <Button
        type="primary"
        onClick={(event) =>
          jitsu.track("Primary button click", {
            rawEvent: event.nativeEvent,
          })
        }
      >
        {"Primary Button"}
      </Button>
      <Button
        type="default"
        onClick={(event) =>
          jitsu.track("Error button click", {
            rawEvent: JSON.stringify(event.nativeEvent),
          })
        }
        danger
      >
        {"Error Button"}
      </Button>
    </Space>
  );
}

export default App;
