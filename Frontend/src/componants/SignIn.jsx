import React, { useRef, useState } from 'react'
import { IoCloseSharp } from 'react-icons/io5'
import { useRecoilState } from 'recoil';
import { Signupatom, SignInatom, userLoginStatevar} from './Statevariable';
import axios from 'axios';
const SignIn = () => {
    const OUT1 = useRef()
    const [ShowSp1, setShowSp1] = useRecoilState(SignInatom);
    const [ShowSp, setShowSp] = useRecoilState(Signupatom);
    const [userLogin, SetuserLogin] = useRecoilState(userLoginStatevar);
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const outsiderclicker1 = (e) => {
        if (OUT1.current === e.target) {
            setShowSp1(false);
        }
    }

    const CallApi = async () => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/api/user/Login`, {
                email: email,
                password: password
            });
            if (response.data.token) {
                SetuserLogin(false);
                setShowSp1(false);
                console.log(response.data.token);
                
                localStorage.setItem("Token", response.data.token);
            }

        } catch (e) {
            alert("Signup First Then Login")
        }
    }

    return (
        <div className='SPmain z-30 inset-0 fixed bg-[#4b5563] flex justify-center items-center' onClick={outsiderclicker1} ref={OUT1}>
            <div className={`text-black SP z-40  w-[95vw] h-auto bg-white p-4 flex  flex-col gap-4 fixed justify-center items-center shadow-gray-500 shadow-md rounded-xl
             md:w-[30vw]  `}>
                <div className='flex justify-between items-center w-full font-[600] '>
                    <h1>Login Your Account</h1>
                    <IoCloseSharp className='w-[4vw] h-[4vh]' onClick={() => setShowSp1(!ShowSp1)} />
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="" className='font-[500]'>Email</label>
                    <input type="email" placeholder="Enter your Email" className='rounded-2xl px-2 py-2 border-2 border-gray-200 outline-none
                     w-[80vw] md:w-[25vw]
                     ' onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="" className='font-[500]'>Password</label>
                    <input type="password" placeholder="Enter your Password" className='rounded-2xl px-2 py-2 border-2 border-gray-200 outline-none
                     w-[80vw]  md:w-[25vw]
                     ' onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className='flex justify-center'>
                    <button className='py-2 px-4 bg-[#146FE6] hover:bg-[#184581] rounded-3xl' onClick={CallApi}>Login</button>
                </div>
            </div>
        </div>

    )
}

export default SignIn