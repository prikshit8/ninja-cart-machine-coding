import TabPane from "./component/TabPane";
import Tabs from "./component/Tabs";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Tabs defaultActiveKey="1">
        <TabPane key={1} tab={"tab 1"}>
          content of tab 1
        </TabPane>
        <TabPane key={2} tab={"tab 2"}>
          content of tab 2
        </TabPane>
        <TabPane key={3} tab={"tab 3"}>
          content of tab 3
        </TabPane>
      </Tabs>
    </div>
  );
}
