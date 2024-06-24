import { Typography, Layout } from 'antd';
import { useRouteError, ErrorResponse } from 'react-router-dom';

const layoutStyle: React.CSSProperties = {
  minHeight: '100vh',
  alignItems: 'center',
  justifyContent: 'center',
};

const NotFound = () => {
  const error = useRouteError() as ErrorResponse;

  return (
    <Layout style={layoutStyle}>
      <Typography.Title type="danger">{error.statusText}</Typography.Title>
    </Layout>
  );
};

export default NotFound;
