import { Loading, Overlay } from '@alifd/next';
import { useEffect, useState } from 'react';
import BasicLayout from '../BasicLayout';
import UserLayout from '../UserLayout';

export default function FrameworkLayout(props: {
  children: React.ReactNode;
  pathname: string;
  appLeave: { path: string };
  appEnter: { path: string };
}) {
  const [init, setInit] = useState(false);
  const { pathname, children, appLeave, appEnter } = props;
  const Layout = pathname === '/login' ? UserLayout : BasicLayout;

  useEffect(() => {
    console.log('当前的pathname是：', `「${pathname}」`);
  }, [pathname]);

  // 当某些前置逻辑在处理时不想直接渲染children，就拿不到pathname
  if (!init) {
    return (
      <Overlay align="cc cc" visible>
        <Loading />
      </Overlay>
    );
  }

  return <Layout pathname={pathname}>{children}</Layout>;
}
