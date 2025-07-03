'use client';

import { useState, useEffect, useRef } from 'react';
import { useUser } from "@/app/context/userContext";
import { UserService } from "@/app/service/userService";
import { useRouter } from 'next/navigation';
import { UpdateUserInfoRequest } from '@/app/service/dtos/user';

export default function EditProfile() {
    const { user, loading } = useUser();
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [profileImage, setProfileImage] = useState<File | null>(null);
    const [previewImage, setPreviewImage] = useState<string | null>(null);
    const userService = new UserService();
    const router = useRouter();
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (user) {
            setName(user.name);
            setDescription(user.description);
            setPreviewImage(user.profile_image);
        }
    }, [user]);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files ? e.target.files[0] : null;
        if (file) {
            setProfileImage(file);
            setPreviewImage(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const request: UpdateUserInfoRequest = {
            name,
            description,
            profile_image: profileImage as File,
        };

        try {
            await userService.updateUserInfo(request);
            router.push(`/profile/${user?.uuid}`);
        } catch (error) {
            console.error("Failed to update user info:", error);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!user) {
        return <div>You must be logged in to edit your profile.</div>;
    }

    return (
        <div className="container mx-auto pt-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                    <h1 className="text-2xl font-bold mb-6">Public profile</h1>
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-400 font-bold mb-2">Name</label>
                            <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-gray-900 border border-gray-700 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="description" className="block text-gray-400 font-bold mb-2">Bio</label>
                            <textarea id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} rows={4} className="w-full bg-gray-900 border border-gray-700 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"></textarea>
                        </div>
                        <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md">Update profile</button>
                    </form>
                </div>
                <div className='lg:pl-20'>
                <h2 className="text-xl font-bold mb-2">Profile picture</h2>
                <div className="flex items-center mb-4">
                    <img src={previewImage || user.profile_image} alt="Profile Preview" className="w-48 h-48 rounded-full object-cover" />
                </div>
                <input type="file" ref={fileInputRef} onChange={handleImageChange} className="hidden" />
                <button onClick={() => fileInputRef.current?.click()} className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-md">Edit</button>
            </div>
            </div>
        </div>
    )
}