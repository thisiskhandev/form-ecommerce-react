import React from "react";
import Navigation from "./components/Navigation";
import { Button, Space } from "antd";
const App = () => {
  return (
    <React.Fragment>
      <Navigation />
      <Space wrap>
        <Button type="primary">Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
      </Space>
    </React.Fragment>
  );
};

export default App;
