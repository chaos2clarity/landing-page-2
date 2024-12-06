'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { appwriteAuth } from '@/lib/appwrite';

export default function AuthCallback() {
    const router = useRouter();

    useEffect(() => {
        const checkAuth = async () => {
            const session = await appwriteAuth.getCurrentSession();
            if (session) {
                router.push('/dashboard');
            } else {
                router.push('/signin');
            }
        };

        checkAuth();
    }, [router]);

    return <div>Authenticating...</div>;
} 