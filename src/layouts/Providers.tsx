import { App, ConfigProvider } from 'antd';
import { RouterProvider } from 'react-router-dom';
import { useAppSelector } from '../store';
import { router } from '../constants';

const MyApp = () => (
  <App>
    <Providers />
  </App>
);

const Providers = () => {
  const { themeConfig } = useAppSelector(state => state.theme);
  return (
    <ConfigProvider theme={themeConfig}>
      <RouterProvider router={router} />
    </ConfigProvider>
  );
};

export default MyApp;
