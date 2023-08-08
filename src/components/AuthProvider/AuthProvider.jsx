"use client";

//dùng CSR bởi vì react context (ThemeProvider) ko sử dụng được ở server side

import { SessionProvider } from "next-auth/react";
import React from "react";

const AuthProvider = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
