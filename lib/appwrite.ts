'use client';

import { Client, Account, ID } from 'appwrite';

let client: Client | null = null;
let account: Account | null = null;

// Initialize client only on the client side
if (typeof window !== 'undefined') {
    client = new Client()
        .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
        .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);
    
    account = new Account(client);
}

export const appwriteAuth = {
    // Create account with email/password
    createAccount: async (email: string, password: string, name: string) => {
        if (!account) throw new Error('Appwrite not initialized');
        try {
            const response = await account.create(
                ID.unique(),
                email,
                password,
                name
            );
            // Automatically sign in after account creation
            await account.createSession(email, password);
            return response;
        } catch (error) {
            console.error('Create account error:', error);
            throw error;
        }
    },

    // Email/Password Sign In
    signIn: async (email: string, password: string) => {
        if (!account) throw new Error('Appwrite not initialized');
        try {
            const session = await account.createSession(email, password);
            return session;
        } catch (error) {
            console.error('Sign in error:', error);
            throw error;
        }
    },

    // Sign Out
    signOut: async () => {
        if (!account) throw new Error('Appwrite not initialized');
        try {
            await account.deleteSession('current');
        } catch (error) {
            console.error('Sign out error:', error);
            throw error;
        }
    },

    // OAuth methods
    oAuthSignIn: {
        google: async () => {
            if (!account) throw new Error('Appwrite not initialized');
            try {
                return await account.createOAuth2Session(
                    'google' as any,
                    'http://localhost:3000/auth-callback',
                    'http://localhost:3000/auth-failure'
                );
            } catch (error) {
                console.error('Google OAuth error:', error);
                throw error;
            }
        },
        
        github: async () => {
            if (!account) throw new Error('Appwrite not initialized');
            try {
                return await account.createOAuth2Session(
                    'github' as any,
                    'http://localhost:3000/auth-callback',
                    'http://localhost:3000/auth-failure'
                );
            } catch (error) {
                console.error('GitHub OAuth error:', error);
                throw error;
            }
        }
    },

    // Get Current Session
    getCurrentSession: async () => {
        if (!account) throw new Error('Appwrite not initialized');
        try {
            return await account.getSession('current');
        } catch (error) {
            console.error('Get session error:', error);
            return null;
        }
    },

    // Get Current User
    getCurrentUser: async () => {
        if (!account) throw new Error('Appwrite not initialized');
        try {
            return await account.get();
        } catch (error) {
            console.error('Get user error:', error);
            return null;
        }
    }
};