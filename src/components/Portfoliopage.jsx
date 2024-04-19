import { useState } from 'react';
import NavTabs from './NavTabs';
import AboutPage from '../pages/AboutPage';
import Resume from '../pages/Resume';
import contact from '../pages/contact'
export default function Portfoliopage() {
  const [currentPage, setCurrentPage] = useState('AboutPage');

  const renderPage = () => {
   
    if (currentPage === 'AboutPage') {
      return <AboutPage />;
    }

    if (currentPage === 'Resume') {
      return <Resume />;
    }

    if (currentPage === 'contact') {
      return <contact />;
    }

    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
     
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
     
      <main className="mx-3">{renderPage()}</main>

    </div>

    
  );
}
