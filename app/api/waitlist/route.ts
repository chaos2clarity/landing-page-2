import { Client, Databases } from 'node-appwrite'
import { NextResponse } from 'next/server'

// Initialize Appwrite client for server-side
const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!)
    .setKey(process.env.NEXT_PUBLIC_APPWRITE_SECRET_KEY!)

const databases = new Databases(client)

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    const databaseId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID
    const collectionId = process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID_WAITLIST

    if (!databaseId || !collectionId) {
      console.error('Missing environment variables:', { databaseId, collectionId })
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      )
    }

    const response = await databases.createDocument(
      databaseId,
      collectionId,
      'unique()',
      {
        email: email.toLowerCase(),
        createdAt: new Date().toISOString(),
      }
    )

    return NextResponse.json(
      { message: 'Successfully joined waitlist', data: response },
      { status: 200 }
    )

  } catch (error: any) {
    console.error('Waitlist submission error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to submit to waitlist' },
      { status: 500 }
    )
  }
} 