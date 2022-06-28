import { Input } from "antd";
import './App.css';
import QA from "./components/QA";

const { Search } = Input;

function App() {
  const tips = "密码必须由6-20位英文字母,符号或数字组成"
  return (
    <div className="app">
      <span>请输入密码: </span>
      <QA tips={tips} />
      <Search
        placeholder="请输入"
        enterButton="确认"
        style={{ width: "80%" }}
      />
    </div>
  );
}

export default App;
