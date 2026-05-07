'use client'


// import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import React from 'react';

const MyProfilePage = () => {
    return (
        <div className='container mx-auto text-center '>
                <h1 className='text-2xl font-bold'>My Profile</h1>
              <div className='border border-gray-300 rounded-lg p-6 mt-6 w-96 mx-auto'>
                <Image
                                    src={user?.image || "/default-avatar.png"}
                                    alt="User Image"
                                    className="rounded-full w-20 h-20 items-center justify-center mx-auto mt-4"
                                    width={30}
                                    height={30}
                                  />
                    <h2 className='text-2xl font-bold  pt-4'> {user?.name}</h2>
                    <p className='text-gray-600 pt-3'>{user?.email}</p>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4'>
                        Update Profile
                    </button>
              </div>
                    
                
                
            </div>
    );
};

export default MyProfilePage;