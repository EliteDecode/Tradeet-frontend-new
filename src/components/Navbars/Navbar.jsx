import React,{ useState ,useEffect } from 'react';
import { MainNav, MobileMainNav} from "./MainNav";
import { LoginNav, MobileLoginNav } from "./LoginNav";


const Navbar = () => {
    const breakpoint = 990;

    const [isMobile, setIsMobile] = useState(window.innerWidth <= breakpoint);

  
  
    useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth <= breakpoint);
  
      window.addEventListener('resize', handleResize);
  
      return () => window.removeEventListener('resize', handleResize);
    }, [breakpoint]);
  return (
    <div className=''>
      {/* { test == '/dashboard' && isMobile && <MobileLoginNav/>  } */}
      {/* { test == '/dashboard' && !isMobile && <LoginNav/>} */}
      { isMobile  && <MobileMainNav/> }
      { !isMobile && <MainNav/>}
      
    </div>
  )
}

export default Navbar
