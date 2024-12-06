export const appwriteConfig = {
    endpoint: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!,
    projectId: process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!,
    databaseId: process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
    collectionId: process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID_WAITLIST!,
    bucketId: process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID!,
    userId: process.env.NEXT_PUBLIC_APPWRITE_USER_ID!,
    secretKey: process.env.NEXT_PUBLIC_APPWRITE_SECRET_KEY!
}