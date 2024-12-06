// import { Client, Account, Databases, Storage } from 'appwrite';

// const client = new Client()
//     .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
//     .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);

// export const account = new Account(client);
// export const databases = new Databases(client);
// export const storage = new Storage(client);

// // Configuration object
// export const appwriteConfig = {
//     databaseId: process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
//     userCollectionId: process.env.NEXT_PUBLIC_APPWRITE_USER_COLLECTION!,
//     storageId: process.env.NEXT_PUBLIC_APPWRITE_BUCKET_COLLECTION!,
// };

// // Service wrapper
// export const appwriteService = {
//     // User related operations
//     getCurrentUser: async () => {
//         try {
//             const user = await account.get();
//             return user;
//         } catch (error) {
//             console.error('Get current user error:', error);
//             return null;
//         }
//     },

//     // Database operations
//     createDocument: async (collectionId: string, data: any, permissions: any = []) => {
//         try {
//             return await databases.createDocument(
//                 appwriteConfig.databaseId,
//                 collectionId,
//                 'unique()',
//                 data,
//                 permissions
//             );
//         } catch (error) {
//             console.error('Create document error:', error);
//             throw error;
//         }
//     },

//     listDocuments: async (collectionId: string, queries: any[] = []) => {
//         try {
//             return await databases.listDocuments(
//                 appwriteConfig.databaseId,
//                 collectionId,
//                 queries
//             );
//         } catch (error) {
//             console.error('List documents error:', error);
//             throw error;
//         }
//     },

//     // Storage operations
//     uploadFile: async (file: File) => {
//         try {
//             return await storage.createFile(
//                 appwriteConfig.storageId,
//                 'unique()',
//                 file
//             );
//         } catch (error) {
//             console.error('Upload file error:', error);
//             throw error;
//         }
//     },

//     deleteFile: async (fileId: string) => {
//         try {
//             await storage.deleteFile(
//                 appwriteConfig.storageId,
//                 fileId
//             );
//         } catch (error) {
//             console.error('Delete file error:', error);
//             throw error;
//         }
//     },

//     getFilePreview: (fileId: string) => {
//         return storage.getFilePreview(
//             appwriteConfig.storageId,
//             fileId
//         );
//     }
// }; 