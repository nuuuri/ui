import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

import styled from '@emotion/styled';

const Container = styled.div`
  display: grid;
  grid-template-areas:
    'header header'
    'sidebar main';
  grid-template-rows: 60px auto;
  grid-template-columns: 240px auto;
  row-gap: 40px;
  width: 100vw;
  height: 100vh;
`;

const Header = styled.header`
  grid-area: header;
  width: 100%;
  height: 100%;
  box-shadow:
    1px 2px 0 rgba(0, 0, 0, 0.03),
    0 1px 6px -1px rgba(0, 0, 0, 0.02),
    0 2px 4px 0 rgba(0, 0, 0, 0.02);
`;

const Sidebar = styled.div`
  grid-area: sidebar;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-right: 1px solid #e2e2e2;
`;

const Main = styled.main`
  grid-area: main;
  padding: 0 40px;
`;

const components = [
  {
    name: 'Main',
    path: '/',
  },
  {
    name: 'Button',
    path: '/button',
  },
];

export default function Layout() {
  const current = components.find((comp) => comp.path === window.location.pathname);

  return (
    <Container>
      <Header />
      <Sidebar>
        {components.map((comp) => (
          <Link key={comp.name} to={comp.path}>
            <button>{comp.name}</button>
          </Link>
        ))}
      </Sidebar>
      <Main>
        <Suspense fallback={'loading...'}>
          <h1>{current?.name}</h1>
          <Outlet />
        </Suspense>
      </Main>
    </Container>
  );
}
