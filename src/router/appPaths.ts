const AppPaths = {
  BaseUrl: () => `/`,
  Admin: () => `/admin`,
  Login: () => `/admin/login`,
  Register: () => `/admin/register`,
  ForgotPassword: () => `/admin/forgot-password`,
  ChangePassword: (uuid: string) => `/admin/reset-password/${uuid}`,
  Profile: () => `/admin/profile`,
  Events: (admin: boolean = false) => (admin ? `/admin/events` : `/events`),
  ResearchGroups: (admin: boolean = false) =>
    admin ? `/admin/research-groups` : `/research-groups`,
};

export default AppPaths;
