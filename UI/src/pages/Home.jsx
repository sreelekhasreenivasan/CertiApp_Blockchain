import React, { useState } from 'react'
import {Link} from 'react-router-dom';

const Home = () => {
    
    const [signer, setSigner] = useState('');

    async function connectWithMetamask() {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      console.log(signer);
  
      if (signer) {
        alert(`The address ${signer.address} is connected!`);
        setSigner(signer);
      } else {
        alert("Error Occure!")
      }
    }
  
  
    return (
      <div className="w-full h-screen">
        <div
          className="bg-cover bg-center h-full bg-fixed relative"
          style={{
            backgroundImage: "url('/Images/—Pngtree—yellow cute graduation season display_1142461.jpg')",
          }}
        >
          <h3 className="text-white  pt-44 ml-12 font-extrabold text-3xl md:text-4xl leading-snug mb-6">
            Transform Achievements into<span ></span>
          </h3 >

          <h3 className="ml-32 font-extrabold text-3xl text-yellow-900">
          Verifiable Digital Certificates
          </h3>
          <div className='flex'> 
          <h3 className="ml-80 mt-8 font-extrabold text-3xl text-white">
          With CertyHub..
          </h3>
    
          <button
            onClick={connectWithMetamask}
            className="bg-red-900 ml-20 mt-6  text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-yellow-600 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          ><Link to={'/issue'}>
            Get Started
            </Link></button>
          </div>
        </div>
      </div>
    );
    
    
    
}

export default Home