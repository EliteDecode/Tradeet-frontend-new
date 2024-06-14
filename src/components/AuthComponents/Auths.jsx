import React from 'react'
import AuthsHeader from './AuthsHeader'
import { Outlet, ScrollRestoration } from 'react-router-dom'

const Auths = () => {
  return (
    <>
      <AuthsHeader />
      <ScrollRestoration />
      <Outlet />
    </>
  );
}

export default Auths
