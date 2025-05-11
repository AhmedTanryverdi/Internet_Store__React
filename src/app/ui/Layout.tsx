import React from 'react';
import { Header } from '../../widgets/header/Header';
import { Outlet } from 'react-router-dom';

export const Layout: React.FC = (): React.JSX.Element => {
  return (
    <>
    <Header />
    <Outlet />
    </>
  )
}
