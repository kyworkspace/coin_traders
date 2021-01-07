import React from "react";
import { storiesOf } from "@storybook/react";

storiesOf("UI/Flex", module).addWithJSX("flexDirection 예제", () => (
  <div>
    <h4>flexDirection : 'row'</h4>
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ border: "1px red solid", padding: 30 }}>BOX1</div>
      <div style={{ border: "1px red solid", padding: 30 }}>BOX2</div>
      <div style={{ border: "1px red solid", padding: 30 }}>BOX3</div>
    </div>
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ border: "1px red solid", padding: 30 }}>BOX1</div>
      <div style={{ border: "1px red solid", padding: 30 }}>BOX2</div>
      <div style={{ border: "1px red solid", padding: 30 }}>BOX3</div>
    </div>
    <h4>flexDirection : 'COLUMN'</h4>
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ border: "1px red solid", padding: 30 }}>BOX1</div>
      <div style={{ border: "1px red solid", padding: 30 }}>BOX2</div>
      <div style={{ border: "1px red solid", padding: 30 }}>BOX3</div>
    </div>
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ border: "1px red solid", padding: 30 }}>BOX1</div>
      <div style={{ border: "1px red solid", padding: 30 }}>BOX2</div>
      <div style={{ border: "1px red solid", padding: 30 }}>BOX3</div>
    </div>
  </div>
));
