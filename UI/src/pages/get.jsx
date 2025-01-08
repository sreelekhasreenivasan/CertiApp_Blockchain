import React, { useState } from 'react'
import ABI from '../assets/CertiApp.json'
import address from '../assets/deployed_addresses.json'

const get = () => {

  const [data, setData] = useState('')

    async function getCertificate() {
        const id = document.getElementById('ID').value;
        console.log(id);
    
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
    
        const abi = ABI.abi;
        const cAddress = address['CertModule#CertiApp'];
    
        const certiInstance = new ethers.Contract(cAddress, abi, signer);//make instance
        console.log(certiInstance);
    
    
        const tx = await certiInstance.Certificates(id);
        console.log(tx);
        setData(tx)
    
      }

      
      return (
        <div className="w-full h-screen bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/Images/—Pngtree—yellow cute graduation season display_1142461.jpg')" }}>
          <div className="w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
            
            <div className="shadow-lg p-8 rounded-lg bg-white max-w-lg mx-auto space-y-6">
              <div className="flex flex-col space-y-4">
                <label htmlFor="ID" className="text-gray-700 font-medium">
                  Enter your ID:
                </label>
                <div className="flex items-center space-x-4">
                  <input
                    type="number"
                    id="ID"
                    name="id"
                    className="shadow-md px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 flex-grow"
                  />
                  <button
                    type="button"
                    onClick={getCertificate}
                    className="bg-yellow-500 text-white px-6 py-3 rounded-lg shadow-lg uppercase hover:bg-yellow-600 transform hover:scale-105 transition-all duration-300"
                  >
                    Get Certificate
                  </button>
                </div>
              </div>
            </div>
      
            {data && (
              <div className="shadow-lg p-8 rounded-lg bg-white max-w-lg mx-auto mt-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Certificate
                </h2>
                <p className="text-gray-700">
                  This is to certify that <b>{data.name}</b> has successfully
                  completed <b>{data.course}</b> with a grade of <b>{data.grade}</b>{" "}
                  on <b>{data.date}</b>.
                </p>
              </div>
            )}
      
          </div>
        </div>
      );
      
}

export default get