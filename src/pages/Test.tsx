import { useAppSelector, useActions } from '../store';
import { IQuestion } from '../constants';
import { EditOutlined } from '@ant-design/icons';
import {
  App,
  Flex,
  Button,
  Col,
  Typography,
  Radio,
  Form,
  Space,
  FormProps,
  Checkbox,
  Input,
} from 'antd';

type FieldType = {
  [key: number]: string;
};

const getTime = (times: number) => {
  const minutes = Math.floor(times / 60);
  const seconds = times % 60;
  return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
};

const typeQuestionSelect = (question: IQuestion) => {
  return (
    <Radio.Group>
      <Space direction="vertical">
        {question.answers?.map(answer => (
          <Radio value={answer} key={answer}>
            {answer}
          </Radio>
        ))}
      </Space>
    </Radio.Group>
  );
};

const typeQuestionMulti = (question: IQuestion) => {
  return (
    <Checkbox.Group>
      <Space direction="vertical">
        {question.answers?.map(answer => (
          <Checkbox value={answer} key={answer}>
            {answer}
          </Checkbox>
        ))}
      </Space>
    </Checkbox.Group>
  );
};

const typeQuestionText = () => {
  return <Input suffix={<EditOutlined />} />;
};

const typeQuestionTextArea = () => {
  return (
    <Input.TextArea
      autoSize={{ minRows: 1, maxRows: 6 }}
      showCount
      maxLength={100}
    />
  );
};

const Test = () => {
  const { themeConfig } = useAppSelector(state => state.theme);
  const { questions, current, time } = useAppSelector(state => state.results);
  const { timer } = useAppSelector(state => state.timer);
  const { setTest, setTimer } = useActions();
  const { message } = App.useApp();
  const [form] = Form.useForm();

  const onFinish: FormProps<FieldType>['onFinish'] = values => {
    const updatedQuestions = [...questions];
    updatedQuestions[current] = {
      ...updatedQuestions[current],
      userAnswer: values[current],
    };

    if (current === questions.length - 1) {
      message.success('Тест завершен!');
      setTimer(-1);
      setTest({
        questions: updatedQuestions,
        current: current + 1,
        time: -1,
      });
    } else {
      setTest({
        questions: updatedQuestions,
        current: current + 1,
        time,
      });
    }
  };

  const steps = questions.map(question => {
    return {
      key: question.key,
      content: (
        <>
          <Typography.Title level={3} style={{ marginBottom: '30px' }}>
            {question.title}
          </Typography.Title>
          <Form.Item
            name={question.key}
            rules={[
              {
                required: question.required,
                message: 'Выберите или напишите ответ',
              },
            ]}
          >
            {question.type === 'select' && typeQuestionSelect(question)}
            {question.type === 'multi' && typeQuestionMulti(question)}
            {question.type === 'text' && typeQuestionText()}
            {question.type === 'textarea' && typeQuestionTextArea()}
          </Form.Item>
        </>
      ),
    };
  });

  return (
    <Flex vertical align="center" style={{ padding: '30px' }}>
      {timer >= 0 && (
        <Typography.Title level={4}>{getTime(timer)}</Typography.Title>
      )}
      <Flex gap={6} justify="center">
        {steps?.map(step => (
          <Col
            key={step.key}
            style={{
              width: 40,
              height: 8,
              borderRadius: 4,
              background:
                current >= step.key ? themeConfig.token.colorPrimary : 'gray',
            }}
          />
        ))}
      </Flex>
      <Form
        form={form}
        style={{ margin: '80px auto 0' }}
        onFinish={onFinish}
        autoComplete="off"
      >
        {steps[current]?.content}
        <Button htmlType="submit" type="primary" style={{ marginTop: 20 }}>
          Ответить
        </Button>
      </Form>
    </Flex>
  );
};

export default Test;
