
import React, {Suspense, lazy} from 'react';
import  Spinner  from '../../components/Spinner';


const LazyNavigation = lazy(()=>import ('../../components/Navigation'));
const LazyFooter = lazy(()=> import ('../../components/Footer'));

function AboutJedigar() {
    return (
        <div className="flex flex-col min-h-screen">
  <LazyNavigation />
  <Suspense fallback = {<Spinner/>}>
  <div className="flex-grow"> {/* This div expands to fill remaining vertical space */}
 
  <div className="container mx-auto py-12 p-20 text-primary-txt">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Jedigar Enterprises, Inc.</h1>
        <p className="indent-8 mb-4">The Jedigar Enterprises, Inc. is a company headed by Mr. Jessie D. Garcia. Its services include commercial printing, selling books and other instructional materials, and supplying school and office needs.</p>
        <p className="indent-8 mb-8">The company was founded on January 20, 1999, and duly registered with the Department of Trade and Industry. On March 19, 2009, Jedigar Enterprises was registered in the Securities and Exchange Commission as Jedigar Enterprises, Inc.</p>
        <h1 className="text-2xl font-bold mb-4">Mission</h1>
        <p className="indent-8 mb-8">It has for its mission of being a partner of government and industry sector in providing quality education to the pupils and students of the country.</p>
        <h1 className="text-2xl font-bold mb-4">Approved Supplementary Materials</h1>
        <div className="flex flex-wrap mb-8">
          <div className="w-1/2">
            <h3 className="text-xl font-bold mb-2">DepEd Order 112, s. 2009</h3>
            <ul>
              <li>Enjoying English (Workbook), Grade 1</li>
              <li>Enjoying English (Workbook), Grade 4</li>
              <li>Enjoying English (Workbook), Grade 5</li>
              <li>Enjoying Mathematics (Workbook), Grade 2</li>
              <li>Enjoying Mathematics (Workbook), Grade 4</li>
              <li>Enjoying Mathematics (Workbook), Grade 5</li>
            </ul>
          </div>
          <div className="w-1/2">
            <h3 className="text-xl font-bold mb-2">DepEd Order 48, s. 2011</h3>
            <ul>
              <li>Enjoying Science & Health (Workbook), Grade 3</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  </div>
    <LazyFooter/>
  </Suspense>
</div>
    )
}

export default AboutJedigar