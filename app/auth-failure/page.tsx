'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AuthFailure() {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push('/signin');
        }, 3000);

        return () => clearTimeout(timer);
    }, [router]);

    return (
        <div className="flex min-h-screen items-center justify-center">
            <div className="text-center">
                <h1 className="text-2xl font-bold text-red-600">Authentication Failed</h1>
                <p className="mt-2">Redirecting to sign in page...</p>
            </div>
        </div>
    );
} 