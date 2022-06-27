import {Input} from "antd";

const {Search} = Input;

const QA = () => {
    return (
        <div style={{width: "500px"}}>
            <div>请输入姓名:</div>
            <Search
                placeholder="input search text"
                enterButton="Search"
                size="large"
                style={{width: "80%"}}
            />
        </div>
    )
}

export default QA;
