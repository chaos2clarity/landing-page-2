// 'use client';

// import { createContext, useContext, useEffect, useState } from 'react';
// import { Models } from 'appwrite';
// import { appwriteAuth } from './appwrite';
// import { appwriteService } from './client-config';

// interface AuthContextType {
//     user: Models.User<Models.Preferences> | null;
//     loading: boolean;
//     checkAuth: () => Promise<void>;
//     signOut: () => Promise<void>;
// }

// const AuthContext = createContext<AuthContextType>({
//     user: null,
//     loading: true,
//     checkAuth: async () => {},
//     signOut: async () => {},
// });

// export function AuthProvider({ children }: { children: React.ReactNode }) {
//     const [user, setUser] = useState<Models.User<Models.Preferences> | null>(null);
//     const [loading, setLoading] = useState(true);

//     const checkAuth = async () => {
//         try {
//             const session = await appwriteAuth.getCurrentSession();
//             if (session) {
//                 const currentUser = await appwriteService.getCurrentUser();
//                 setUser(currentUser);
//             } else {
//                 setUser(null);
//             }
//         } catch (error) {
//             console.error('Check auth error:', error);
//             setUser(null);
//         } finally {
//             setLoading(false);
//         }
//     };

//     const signOut = async () => {
//         try {
//             await appwriteAuth.signOut();
//             setUser(null);
//         } catch (error) {
//             console.error('Sign out error:', error);
//         }
//     };

//     useEffect(() => {
//         checkAuth();
//     }, []);

//     return (
//         <AuthContext.Provider value={{ user, loading, checkAuth, signOut }}>
//             {children}
//         </AuthContext.Provider>
//     );
// }

// export const useAuth = () => useContext(AuthContext); 