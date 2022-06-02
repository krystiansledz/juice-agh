import { useNavigate, useSearchParams } from "react-router-dom";
import { useIsAuthenticated } from "../../auth/provider";
import { useEffect } from "react";
import AppPaths from "../../router/appPaths";

const useNextLocation = () => {
  const navigate = useNavigate();
  const isAuthenticated = useIsAuthenticated();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const nextLocation = searchParams.get("next");
    if (isAuthenticated) {
      if (nextLocation) navigate(nextLocation);
      else navigate(AppPaths.BaseUrl());
    }
  }, [searchParams, isAuthenticated]);
};

export default useNextLocation;
