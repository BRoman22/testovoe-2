import { Layout } from 'antd';
import { RootLayoutHOC, HeaderLayout } from '.';

const RootLayout = () => {
  const { Header, Content } = Layout;
  const layoutStyle: React.CSSProperties = {
    minHeight: '100vh',
  };

  return (
    <Layout style={layoutStyle}>
      <Header>
        <HeaderLayout />
      </Header>
      <Content>
        <RootLayoutHOC />
      </Content>
    </Layout>
  );
};

export default RootLayout;
