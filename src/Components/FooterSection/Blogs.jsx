import React, {useEffect} from "react"
import { useLocation } from "react-router-dom";

const Blogs = () => {
  const location = useLocation();
  
    // Scroll to top when route changes
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);
  return (
    <div>
      <h1 style={{textAlign:"center", margin:"150px"}}>This Page is Under Construction..</h1>
    </div>
  );
}
export default Blogs