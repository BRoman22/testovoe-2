import { Flex, Button, Typography, Col } from 'antd';
import { useAppSelector, useActions } from '../store';
import { testMock, IQuestion } from '../constants';
import { useState } from 'react';

const Main = () => {
  const { current, questions } = useAppSelector(state => state.results);
  const showResultsButton =
    questions.length > 0 && current === questions.length;
  const [showMain, setShowMain] = useState(true);
  const { setTest } = useActions();
  const { Title, Text } = Typography;

  const { time, testQuestions } = testMock;
  // эмуляция получения теста с сервера
  const getTest = (time: number) => {
    setTest({
      questions: testQuestions,
      time: time > 0 ? Date.now() + time : 0,
      current: 0,
    });
  };

  return (
    <>
      {showMain ? (
        <>
          <Flex justify="center" gap={50} style={{ marginTop: 200 }}>
            <Button type="primary" size="large" onClick={() => getTest(time)}>
              Начать тест с таймером
            </Button>
            <Button type="primary" size="large" onClick={() => getTest(0)}>
              Начать тест без таймера
            </Button>
          </Flex>
          {showResultsButton && (
            <Flex justify="center" style={{ marginTop: 40 }}>
              <Button
                type="primary"
                size="large"
                onClick={() => setShowMain(!showMain)}
              >
                Посмотреть результаты
              </Button>
            </Flex>
          )}
        </>
      ) : (
        <>
          <Flex justify="center" vertical style={{ padding: '0 100px' }}>
            <Title level={2} style={{ margin: '30px auto' }}>
              Результаты теста :
            </Title>
            <Title level={5} style={{ margin: '0 auto' }}>
              Все вопросов: {questions.length}
            </Title>
            <Flex style={{ marginTop: 40 }}>
              {questions.map((question: IQuestion) => (
                <Col
                  key={question.key}
                  span={24 / questions.length}
                  style={{ marginTop: 40 }}
                >
                  <Title level={5} style={{ margin: '0 auto' }}>
                    {question.key + 1}. {question.title}
                  </Title>
                  <Text style={{ margin: '0 auto' }}>
                    Ваш ответ:{' '}
                    <Title level={5}>
                      {question.type !== 'multi'
                        ? question.userAnswer
                        : (question.userAnswer as string[]).join(', ')}
                    </Title>
                  </Text>
                </Col>
              ))}
            </Flex>
            <Button
              type="primary"
              size="large"
              style={{ margin: '60px auto 0', width: 'fit-content' }}
              onClick={() => setShowMain(!showMain)}
            >
              Вернуться
            </Button>
          </Flex>
        </>
      )}
    </>
  );
};

export default Main;
