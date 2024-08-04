import { useState } from 'react';

function Header() {
    const [count, setCount] = useState(0)
  
  return (
    <>
      <header>
        <div>
          <h1>Charles Boyle</h1>
        </div>
        <div>
          <nav className="navigation">
        
            <a href="https://www.linkedin.com/in/charles-boyle-37a770243/">LinkedIn</a>
          </nav>
        </div>
      </header>
      </>
    )
  }
   export default Header;