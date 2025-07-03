'use client';

import { useUser } from "@/app/context/userContext";
import { useRouter } from 'next/navigation';

export default function ProfileClient({ profileUserUUID }: { profileUserUUID: string }) {
    const { user } = useUser();
    const router = useRouter();

    const isOwner = user && user.uuid === profileUserUUID;

    const handleEditClick = () => {
        router.push('/profile/edit');
    };

    return (
        <div>
            {isOwner && (
                <button onClick={handleEditClick} className="text-center border-spacing-1 w-full mt-6 mb-4 bg-gray-900 rounded-md border-black py-1">
                    Edit Profile
                </button>
            )}
        </div>
    );
}