import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

type Props = {
  children: JSX.Element;
};

const QueryProvider: React.FC<Props> = (props) => {
  const { children } = props;
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default QueryProvider;
