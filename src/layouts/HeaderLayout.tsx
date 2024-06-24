import { Button, Flex, Tooltip } from 'antd';
import { MoonOutlined, SunOutlined } from '@ant-design/icons';
import { THEME } from '../constants';
import { useAppSelector, useActions } from '../store';

const HeaderLayout = () => {
  const { theme } = useAppSelector(state => state.theme);
  const { toggleTheme } = useActions();
  const themeIcon = theme === THEME.LIGHT ? <MoonOutlined /> : <SunOutlined />;

  const clearStorage = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <Flex justify="end" align="center" style={{ height: 'inherit' }} gap={30}>
      <Button
        type="primary"
        icon={themeIcon}
        size="large"
        onClick={() => toggleTheme()}
      />
      <Button type="primary" size="large" onClick={clearStorage}>
        <Tooltip title="Очистить localStorage и перезагрузить страницу">
          Очистить хранилище
        </Tooltip>
      </Button>
    </Flex>
  );
};

export default HeaderLayout;
