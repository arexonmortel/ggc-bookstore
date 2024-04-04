
import React, {Suspense, lazy} from 'react';
import  Spinner  from '../../components/Spinner';


const LazyNavigation = lazy(()=>import ('../../components/Navigation'));
const LazyFooter = lazy(()=> import ('../../components/Footer'));

function AboutB2g2() {
    return (
        <div className="flex flex-col min-h-screen">
  <LazyNavigation />
  <Suspense fallback = {<Spinner/>}>
  <div className="flex-grow"> {/* This div expands to fill remaining vertical space */}

  <div className="container mx-auto py-12 p-20 text-primary-txt">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">B2G2 Enterprises, Inc.</h1>
        <p className="indent-8 mb-12">The B2G2 Enterprises is a company first registered with the Department of Trade and Industry on September 27, 2002. On March 31, 2009, it was registered in the Securities of Exchange Commission as B2G2 Enterprises, Inc.</p>
        <h1 className="text-2xl font-bold mb-4">Mission</h1>
        <p className="indent-8 mb-12">B2G2 Enterprises, Inc. envisions to partner the Department of Education (DepEd) in the field of pre-school and elementary education. In line with this mission, it strives to prepare educational textbooks and other instructional materials, both in print and non-print.</p>
        <h1 className="text-2xl font-bold mb-8">Approved Supplementary Materials</h1>
        <div className="flex flex-wrap mb-8">
          <div className="w-1/2">
            <h3 className="text-xl font-bold mb-2 ">DepEd Order 112, s. 2009</h3>
            <p>SciENERGY (TIMSS Based Learning Materials)</p>
            <p className='mb-8 font-extralight text-author-txt'>For Elementary Level</p>
            <ul className='list-decimal list-inside text-left pl-32'>
              <li>Module 1: Bones and Muscles</li>
              <li>Module 2: Digestion</li>
              <li>Module 3: Animals</li>
              <li>Module 4: Plants</li>
              <li>Module 5: Matter</li>
              <li>Module 6: Force</li>
              <li>Module 7: Moodule 7 Energy</li>
              <li>Module 8: Earth</li>
              <li>Module 9: Weather</li>
              <li>Module 10: Soil</li>
              <li>Teacher’s Guide</li>
            </ul>
          </div>
          <div className="w-1/2">
            <h3 className="text-xl font-bold mb-2">DepEd Order 48, s. 2011</h3>
            <p>M Power (TIMSS Based Learning Materials)</p>
            <p className='mb-8 font-extralight text-author-txt'>For Elementary Level</p>
            <ul className='list-decimal list-inside text-left pl-32'>
              <li>Module 1: Whole Numbers</li>
              <li>Module 2: Fractions</li>
              <li>Module 3: Ratios and Proportions</li>
              <li>Module 4: Geometry</li>
              <li>Module 5: Measurement</li>
              <li>Module 6: Graphs</li>
              <li>Module 7: Probability</li>
              <li>Module 8: Pattern and Relationships</li>
              <li>Teacher’s Guide</li>
            </ul>
          </div>
        </div>
        <div>
            <h3 className="text-xl font-bold mb-2">DepEd Order 48, s. 2011</h3>
            <p>Fun with Sounds and Letters, Volume 1, Clusters 1 to 9</p>
            <ul>
              <li>Fun with Sounds and Letters Volume 1, Clusters 1 and 2</li>
              <li>Fun with Sounds and Letters Volume 1, Clusters 3 and 4</li>
              <li>Fun with Sounds and Letters Volume 1, Clusters 5 and 6</li>
              <li>Fun with Sounds and Letters Volume 1, Clusters 7 and 8</li>
              <li>Fun with Sounds and Letters Volume 1, Cluster 9</li>
              <li>Writing for the New Generation - Kinder</li>
              <li>Writing for the New Generation - Preparatory</li>
              <li>English for the New Generation - Kinder</li>
            </ul>
          </div>
      </div>
    </div>
  </div>
    <LazyFooter/>
  </Suspense>
</div>
    )
}

export default AboutB2g2