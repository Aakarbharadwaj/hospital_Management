// src/components/Profile.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
    const [user, setUser] = useState({
        name: 'rahul',
        email: 'r@gmail',
        phone: 48370978,
        age: 28,
        address: {
            street: 'JLN Marg',
            city: 'kota',
            state: 'Rajasthan',
            zip: '3784682',
            country: 'INDIA'
        }
    });

    // useEffect(() => {
    //     // Fetch user data from API
    //     const fetchUserData = async () => {
    //         try {
    //             const response = await axios.get('/api/user/profile');
    //             setUser(response.data);
    //         } catch (error) {
    //             console.error('Error fetching user data:', error);
    //         }
    //     };

    //     fetchUserData();
    // }, []);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Profile</h2>
            <div className="mb-4">
                <h3 className="text-lg font-bold">Name:</h3>
                <p>{user.name}</p>
            </div>
            <div className="mb-4">
                <h3 className="text-lg font-bold">Email:</h3>
                <p>{user.email}</p>
            </div>
            <div className="mb-4">
                <h3 className="text-lg font-bold">Phone:</h3>
                <p>{user.phone}</p>
            </div>
            <div className="mb-4">
                <h3 className="text-lg font-bold">Age:</h3>
                <p>{user.age}</p>
            </div>
            <div className="mb-4">
                <h3 className="text-lg font-bold">Address:</h3>
                <p>{`${user.address.street}, ${user.address.city}, ${user.address.state}, ${user.address.zip}, ${user.address.country}`}</p>
            </div>
        </div>
    );
};

export default Profile;
