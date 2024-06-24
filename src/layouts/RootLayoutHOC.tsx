import { App } from 'antd';
import { useAppSelector, useActions } from '../store';
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const RootLayoutHOC = () => {
  const { questions, current, time } = useAppSelector(state => state.results);
  const { timer } = useAppSelector(state => state.timer);
  const { setTimer } = useActions();
  const navigate = useNavigate();
  const { message } = App.useApp();
  const remainingTime = Math.round((time - Date.now()) / 1000);

  useEffect(() => {
    // timer init
    if (remainingTime > 0) setTimer(remainingTime);

    // navigation
    const hasAnswers = current === questions.length;
    const goToMain = time > 0 ? hasAnswers || !(remainingTime > 0) : hasAnswers;

    goToMain
      ? navigate('/', { replace: true })
      : navigate('/test', { replace: true });
  }, [current, questions, time, remainingTime]);

  // start timer
  useEffect(() => {
    if (timer > 0) {
      const timerId = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(timerId);
    }
    if (timer === 0) {
      message.error('Время вышло!');
      setTimer(-1);
    }
  }, [timer]);

  return <Outlet />;
};

export default RootLayoutHOC;
