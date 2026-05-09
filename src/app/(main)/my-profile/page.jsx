'use client'

import UpdateUser from '@/Components/UpdateUser.jsx/UpdateUser';
import { authClient } from '@/lib/auth-client';

import Image from 'next/image';
import React from 'react';

const page = () => {
    const userData = authClient.useSession()
    const user = userData.data?.user
    return (
       
            <div className=" container mx-auto  min-h-[80vh]">
        <h1 className="text-2xl font-bold text-center">My Profile</h1>
        <div className="border border-gray-300 rounded-lg p-6 mt-6 w-96 mx-auto text-center">
          <Image
            src={user?.image || '/default-avatar.png'}
            alt="User Image"
            className="rounded-full w-20 h-20 items-center justify-center mx-auto mt-4"
            width={30}
            height={30}
          />
          <h2 className="text-2xl font-bold  pt-4"> {user?.name}</h2>
          <p className="text-gray-600 pt-3 pb-5">{user?.email}</p>
          {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
           
          </button> */}
           <UpdateUser/>
        </div>
        
      </div>
       
    );
};

export default page;