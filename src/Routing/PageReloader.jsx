import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PageReloader = () => {
  const location = useLocation();

  useEffect(() => {
    window.location.reload();
  }, [location.pathname]);

  return null;
};

export default PageReloader 