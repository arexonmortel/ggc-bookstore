
import React, {Suspense, lazy} from 'react';
import  Spinner  from '../../components/Spinner';
import { useSpring, animated } from '@react-spring/web'


const LazyNavigation = lazy(()=>import ('../../components/Navigation'));
const LazyFooter = lazy(()=> import ('../../components/Footer'));

function AboutMerryland() {
    const springs = useSpring({
        from: { y: 200, opacity:0 },
        to: { y: 0, opacity:1},
        config: { duration: 700 }
      })
    return (
        <div className="flex flex-col min-h-screen">
  <LazyNavigation />
  <Suspense fallback = {<Spinner/>}>
  <animated.div style={{...springs}}>
  <div className="flex-grow"> {/* This div expands to fill remaining vertical space */}
  <div className="container mx-auto py-12 p-20 text-primary-txt">
            {/* Company Profile Section */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-center">Merryland Publishing Corporation</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <p className="mb-4 indent-8">The MPC was conceived by the grand matriarch of the family, Ms. Ligaya B. Garcia, as a result of her extensive experience in curriculum/textbook writing both for the government and private sectors. The idea was even strengthened by the collaborative efforts of her children who were knowledgeable in textbook writing, in computer technology, in printing production, and in marketing. Furthermore, the whole concept was blest by the grand patriarch, the Rev. Timoteo B. Garcia.</p>
                        <p className="mb-4 indent-8">Initially, it was organized as a family corporation and was registered with the Securities and Exchange Commission on January 14, 1988. The original incorporators were Ligaya B. Garcia, Ruth G. de Lara, Samuel B. Garcia, Noel B. Garcia, Bethel G. Garcia and Timoteo B. Garcia, Jr. Another son, Romulo B. Garcia was excluded due to some legal and corporate constraints, inasmuch as he was abroad and has adopted American citizenship. Nevertheless, his physical absence was offsetted by his assistance to the company in terms of international concerns.</p>
                        <p className="mb-4 indent-8">At the outset of the operations, all the incorporators had their respective duties - Ms. Ligaya and Ms. Ruth were in-charge of the preparation of the manuscripts; Ms. Bethel acted as the office manager; Mr. Noel looked into the needed computer applications; Mr. Timoteo, Jr. helped in the post-press production; and Mr. Samuel provided the support services in food and transportation. The company started with typesetting services for the materials being prepared. Later on, it accomodated the typeseting requirements of other printing firms and publishers.
</p>
                    </div>
                    <div>
                        <p className="mb-4 indent-8">After eleven years, things happened which affected the corporation. Some of the incorporators decided to put up their own companies in line with their areas of expertise. Ms. Ruth put up her own consulting firm; Mr. Samuel opened two meat stalls in the nearby market; Mr. Noel was very much needed in his placement agency; and Mr. Timoteo, Jr. put up his small carinderia. What was left of the original incorporators were Ms. Ligaya and Ms. Bethel. Another welcome event was the coming home of Mr. Jessie, the husband of Bethel, who has finished his work contract in the Middle East.</p>
                        <p className="mb-4 indent-8">In view of these developments, Jessie and Bethel decided to buy out the shares of the other incorporators. In their lieu, their children Liza Lei, Mark Lawrence and Jeb Crevin were made new incorporators. Since then, the MPC has been managed by the husband and wife team.</p>
                        <p className="mb-4 indent-8">	With the present organizational set-up, the company developed and prospered. More books were published.</p>
                    </div>
                </div>
            </section>

            {/* Mission and Vision Section */}
            <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">The Vision-Mission-Goals of the MPC
</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
                    <div>
                        <h3 className="text-xl font-bold mb-4">Our Mission</h3>
                        <p className="mb-4">In light of this vision, the MPC, as a publisher and creator/producer of information technology resources, upholds its commitment to Philippine education by developing direct structural relationships with the  DepEd in order to become the primary provider of IT/multimedia instructional models.
</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Our Vision</h3>
                        <p className="mb-4">Become a major partner of the Department of Education (DepEd) in providing quality education as it confronts the challenges and opportunities of the 21st century.</p>
                    </div>
                </div>
            </section>

            {/* Goals Section */}
            <section className="mb-12 ">
                <h2 className="text-2xl font-bold mb-6 text-center">Goals</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
                <div>
                        <ol className='list-disc' >
                            <li>To provide the appropriate infrastructure in the development and production of educational materials, both print and non-print.</li>
                            <li>To develop the human resources of the company in order to sustain the operation of the company.</li>
                            <li>To keep abreast with current trends nationally and globally.</li>
                            <li>To institute appropriate reforms.</li>
                        </ol>
                    </div>
                    <div>
                        <ol className='list-disc'>
                            <li>To practice ethical standards in the performance of the jobs of the company.</li>
                            <li>To encourage research and development of innovative products and services.</li>
                            <li>To do business locally and internationally in accordance with existing laws and 		regulations.</li>
                            <li>To evaluate performance regularity.</li>
                           
                        </ol>
                    </div>
                </div>
            </section>
             {/* Published Material Section */}
             <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-center">The Published Materials (Print and Non-Print) and Other Services</h2>
                <p className="text-center mb-8 px-72">	To date, MPC has published the following supplementary materials which have been approved by the DepEd for use in public elementary and secondary schools..</p>

              <div>
              <h2 className="text-2xl font-bold text-center">DepEd Approved Supplementary Books</h2>
              <h2 className="text-2xl text-center mb-8 text-author-txt">(DepEd Order No. 112, 2. 2009)</h2>
                </div>  
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">DepEd Approved Supplementary Books</h3>
                        <ol className='list-decimal list-inside'>
                            <li>Mimi and the Mouse</li>
                            <li>Under the Sea</li>
                            <li>The Bubbly Bumblebee</li>
                            <li>Tippity Top Super Top</li>
                            <li>Annie Ant</li>
                            <li>Eggy Egg</li>
                            <li>A Perfect Picnic Day</li>
                            <li>Fanny and the Fireflies</li>
                            <li>Ducky Duck and Her Friends</li>
                            <li>Nina and Nanny Naty</li>
                            <li>Orange Octa</li>
                            <li>Henny Hen’s New Hat</li>
                            <li>Rene and Ronnie</li>
                            <li>Cami Cat and the Cuckoo Bird</li>
                            <li>Ibaloy, the Good Igorot Boy</li>
                            <li>The Proud Lilac Lily</li>
                            <li>Joy-joy, the Jolly Boy</li>
                            <li>Kenny Kangaroo</li>
                            <li>Quack!</li>
                            <li>Up Up Bella Umbrella</li>
                            <li>Vilma’s Vineyard Workers</li>
                            <li>Zed, the Zoomy Zebra</li>
                            <li>Yuri, the Yellow Vinta</li>
                            <li>The Magic Box</li>
                            <li>Winnie and Her Three Wishes</li>
                            <li>BRIGHT Teacher’s Guide Part I</li>
                            <li>BRIGHT Teacher’s Guide Part II</li>
                        </ol>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">SciLINKS (TIMSS Based Learning Materials)</h3>
                        <ol className='list-decimal'>
                            <li>Module 1: The Cell</li>
                            <li>Module 2:	Cell Division</li>
                            <li>Module 3:	Tour of the Cell</li>
                            <li>Module 4:	Movements of Materials In and Out of the Cell</li>
                            <li>Module 5:	Atomic Structure</li>
                            <li>Module 6:	Changes in Properties</li>
                            <li>Module 7:	Digestion</li>
                            <li>Module 8:	Circulatory System</li>
                            <li>Module 9:	The DNA</li>
                            <li>Module 10:	Ecosystem</li>
                            <li>Module 11:	Food Chain and Food Pyramid</li>
                            <li>Module 12:	Photosynthesis</li>
                            <li>Module 13:	Human Ancestry</li>
                            <li>Module 14:	Evolution and Natural Selection</li>
                            <li>Module 15:	The Earth, Sun and Moon</li>
                            <li>Module 16:	The Stars</li>
                            <li>Module 17:	Pollution</li>
                            <li>Module 18:	The Atmosphere</li>
                            <li>Teacher’s Guide</li>
                        </ol>
                    </div>
                </div>
                
                <div className="my-8 text-center px-48 mb-8">
                    <p className='mb-4'>Aside from printing of textbooks and supplementary books, the MPC produces commercial works - brochures, souvenir programs, yearbooks, newsletters, handbooks, folders, office forms, election materials and other promotional items. While MPC caters to domestic requirements, it continuously develops international linkages.</p>
                    <p className='mb-4'>The MPC already ventured on non-print materials, specifically, the multimedia materials in CDs. These classroom-based and interactive materials includes 51 titles in English, Mathematics, and Science for the elementary level and 4 titles in English, Chemistry, and Geography for the secondary schools. All the CDs can be marketed in the Philippines by the MPC as it now holds an exclusive territorial distributorship from iT21 SIngapore.</p>
                    <p className='mb-12'>To adapt these imported Singapore materials to Philippine conditions, the MPC prepared teacher’s manuals based on the DepEd Philippine Elementary Learning Competencies/Philippine Secondary Schools Learning Competencies (PELC/PSSLC) and corresponding worktexts to provide the pupils and students more time to comprehend the lessons and to provide additional information, as well.
</p>
                </div>
                
                {/* Clientele Section */}
                <h2 className="text-2xl font-bold mb-6 text-center">Clientele</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
                    <div className='text-center'>
                        <p className='mb-4'>The biggest client of the MPC is the Department of Education (DepEd) because of the textbooks and supplementary materials approved for government use. </p>
                        <p className='mb-4'>The MPC also caters to the printing requirements of churches and related institutions such as the United Church of Christ in the Philippines (UCCP), the United Methodist Church (UMC); the National Council of Churches in the Philippines (NCCP); the Institute of Religion and Culture (IRC); and  the Malabon International Baptist Academy.</p>
                    </div>
                    <div>
                        <p className='mb-4'>	Other commercial works and receipts of other small-to-medium-sized companies are likewise served by the MPC. Clients abroad include the World Council of Churches (WCC) based in Geneva, Switzerland; Christian Conference of Asia in Hongkong; Zinelle International in San Francisco, USA; and Red Camp Resources, Inc. in Guam..</p>
                    </div>
                </div>
            </section>
        </div>

  </div>
  </animated.div>
    <LazyFooter/>
  </Suspense>
</div>
    )
}

export default AboutMerryland