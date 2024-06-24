export interface IThemeConfig {
  token: { [key: string]: string };
  components: { [key: string]: { [key: string]: string } };
}

export interface IQuestion {
  key: number;
  title: string;
  required?: boolean;
  type: 'select' | 'multi' | 'text' | 'textarea';
  answers?: string[];
  userAnswer?: string | string[];
}

export interface ITest {
  time: number;
  questions: IQuestion[];
  current: number;
}
