import React, { useState } from 'react'
import ABI from '../assets/CertiApp.json'
import address from '../assets/deployed_addresses.json'
import {Link} from 'react-router-dom';


const Issue = () => {
    const [formData, setFormData] = useState(
      {
        id: 0,
        name: '',
        course: '',
        grade: '',
        date: ''
      }
    )
    function handleChange(e) {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      }
    
      async function handleSubmit(e) {
        e.preventDefault();
        console.log('Form submitted:', formData);
    
        const provider = new ethers.BrowserProvider(window.ethereum); //
        const signer = await provider.getSigner(); 
    
        const abi = ABI.abi;
        const cAddress = address['CertModule#CertiApp'];
        console.log(cAddress);
    
        const certiInstance = new ethers.Contract(cAddress, abi, signer); //make instance
        console.log(certiInstance);
        const transactionReceipt = await certiInstance.issue(
          formData.id,
          formData.name,
          formData.course,
          formData.grade,
          formData.date
        );
        console.log(transactionReceipt)
      }
      return (
        <div className="w-full h-screen bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/Images/—Pngtree—yellow cute graduation season display_1142461.jpg')" }}>
          <div className="w-full h-full bg-black bg-opacity-50 items-center justify-center">
            <div className="shadow-lg p-8 rounded-lg w-full max-w-lg mx-auto">
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { label: "ID", type: "number", name: "id" },
                  { label: "Candidate Name", type: "text", name: "name" },
                  { label: "Course", type: "text", name: "course" },
                  { label: "Grade", type: "text", name: "grade" },
                  { label: "Date", type: "date", name: "date" },
                ].map((field) => (
                  <div className="flex flex-col" key={field.name}>
                    <label
                      htmlFor={field.name}
                      className="text-black font-medium mb-2"
                    >
                      {field.label}:
                    </label>
                    <input
                      type={field.type}
                      id={field.name}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      className="shadow-md px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                  </div>
                ))}
      
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-yellow-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-yellow-600 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  ><Link to={'/get'}>
                    Issue
                    </Link></button>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
      
}

export default Issue