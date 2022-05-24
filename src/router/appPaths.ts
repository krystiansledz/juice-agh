const AppPaths = {
  BaseUrl: () => `/`,
  Login: () => `/login`,
  Register: () => `/register`,
  ForgotPassword: () => `/forgot-password`,
  ChangePassword: (uuid: string) => `/reset-password/${uuid}`,
  Profile: () => `/profile`,
  Events: () => `/events`,
};

export default AppPaths;
