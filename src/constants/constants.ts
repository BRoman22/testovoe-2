import { ITest } from './types';

export const STORAGE = {
  TEST: 'test',
  THEMES: 'themes',
};

export const THEME = {
  DARK: 'dark',
  LIGHT: 'light',
};

export const testMock = {
  time: 20000 as ITest['time'],
  testQuestions: [
    {
      key: 0,
      title: 'А вы знали что тут можно переключить тему?',
      required: true,
      type: 'select',
      answers: ['Да', 'Нет'],
      userAnswer: '',
    },
    {
      key: 1,
      title: 'А вы знали что тут можно переключить тему?',
      required: true,
      type: 'multi',
      answers: ['В верхнем правом углу', 'Да', 'Нет', 'Ого!'],
      userAnswer: '',
    },
    {
      key: 2,
      title: 'А вы знали что тут можно переключить тему?',
      required: true,
      type: 'text',
      answers: [],
      userAnswer: '',
    },
    {
      key: 3,
      title: 'А тут валидация отключена',
      required: false,
      type: 'textarea',
      answers: [],
      userAnswer: '',
    },
  ] as ITest['questions'],
};
