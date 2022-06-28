import { Tooltip } from "antd";
import { QuestionCircleOutlined } from '@ant-design/icons';

type QAProps = {
    tips: string;
}

const QA = (props: QAProps) => {
    const { tips } = props
    return (
        <Tooltip title={tips}>
            <QuestionCircleOutlined />
        </Tooltip>
    )
}

export default QA;
