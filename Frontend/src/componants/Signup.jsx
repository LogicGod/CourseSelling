import React, { useRef, useState } from 'react'
import { IoCloseSharp } from "react-icons/io5";
import '../App.css';
import { SignInatom , Signupatom} from './Statevariable';
import { useRecoilState, useRecoilValue } from 'recoil';
import axios from 'axios';
import { z } from 'zod';

const Signup = () => {
    const OUT = useRef();
    const [ShowSp, setShowSp] = useRecoilState(Signupatom);
    const [ShowSp1, setShowSp1] = useRecoilState(SignInatom);
    const [username, setUsername] = useState()
    const [phoneno, setPhoneno] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [Data, setData] = useState([]);
    const [zodvar , setzodvar] = useState();
    
    const outsiderclicker = (e) => {
        if (OUT.current === e.target) {
            setShowSp(false);
        }
    }

        const validation = z.object({
                name: z.string().min(3, {message : "Username must be contain minimum 3 letters"})
                .max(12 , {message : "Username must be contain maximum 12 letters"})
                .regex(/[A-Z]/, { message : "Username must be contain one Capital letter"})
                .refine((value) => !/\s/.test(value) , { message : "Username must not be contain space between username"}),
    
                phoneno : z.number({message : "Phone No must be contain numbers only"}).min(1000000000 , { message : "Phone No must be contain 10 digits"}).max(9999999999 , { message : "Phone No must be contain 10 digits"}),
    
                email : z.string().email( { message : "Invalid Email Format"}),
    
                password : z.string().min(8 , {message : "Password Must be Contain 8 Character"})
                .max(15 , { message : "Password Must be Contain maximum 15 Character"})
                .regex(/[a-z]/ , { message : "Password Must be Contain one Small letter"})
                .regex(/[A-Z]/ , {message : "Password Must be contain one Capital Letter"})
                .regex(/[!@#$%^&*?]/ ,{message : "Password Must be Contain one Special Character"})
            });

            const uservalid = {
                name : username ,
                phoneno : parseInt(phoneno) ,
                email : email ,
                password : password 
            };
            let valid = validation.safeParse(uservalid);

    const CallApi = async () => {
        
        try{
            if(valid.success){
        const response = await axios.post('http://localhost:3000/user/Signup', {
            name: username,
            phoneno: parseInt(phoneno),
            email: email,
            password: password
        });
        console.log(response.data)
        if(response.status == '200'){
            setShowSp(false)
            setShowSp1(true)
            }
        }

        else
        {
            console.log(valid.error.issues[0].message);
            setzodvar(valid.error.issues[0].message);
            
        }
    }
   catch(err)
   {
    setData(err.response.data || []);
    console.log(err.response);
    console.log(Data);
    
   }
    }
    return (
        <div className='SPmain z-30 inset-0 fixed bg-[#4b5563] flex justify-center items-center' onClick={outsiderclicker} ref={OUT}>
            <div className='text-black m-auto SP z-40 w-[95vw] h-auto bg-white p-4 flex  flex-col gap-4 fixed justify-center items-center shadow-gray-500 shadow-md rounded-xl
            md:w-[30vw] '>
                <div className='flex justify-between items-center w-full font-[600] '>
                    <h1>Create Your Account</h1>
                    <IoCloseSharp className='w-[4vw] h-[4vh] ' onClick={() => setShowSp(!ShowSp)} />
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="" className='font-[500]'>Username</label>
                    <input type="text" placeholder="Enter your username" className='rounded-2xl px-2 py-2 border-2 border-gray-200 outline-none
                    w-[80vw] md:w-[25vw]
                    '  onChange={(e) => setUsername(e.target.value)} />
                    
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="" className='font-[500]'>Phone No</label>
                    <input type="tel" placeholder="Enter your Phone No" className='rounded-2xl px-2 py-2 border-2 border-gray-200 outline-none
                    w-[80vw]  md:w-[25vw]
                    '  onChange={(e) => setPhoneno(e.target.value)} />
                  
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="" className='font-[500]'>Email</label>
                    <input type="email" placeholder="Enter your email" className='rounded-2xl px-2 py-2 border-2 border-gray-200 outline-none
                    w-[80vw] md:w-[25vw]
                    '  onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="" className='font-[500]'>Password</label>
                    <input type="password" placeholder="Enter your password" className='rounded-2xl px-2 py-2 border-2 border-gray-200 outline-none
                    w-[80vw] md:w-[25vw]
                    '  onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className='p-2 text-red-600 w-full text-center'><p className=''>{zodvar}</p></div>
                <div className='flex justify-center'>
                    <button className='py-2 px-4 bg-[#146FE6] hover:bg-[#184581] rounded-3xl' onClick={CallApi}>SignUp</button>
                </div>
            </div>
        </div>
    )
}

export default Signup