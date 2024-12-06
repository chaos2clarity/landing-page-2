import { Client, Databases } from 'appwrite'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    // Debug log to check environment variables
    console.log('Environment check:', {
      endpoint: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT,
      project: process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID
    })

    // Validate environment variables first
    if (!process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || !process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID) {
      throw new Error('Missing required environment variables')
    }

    // Initialize client only after validation
    const client = new Client()
    
    // Set endpoint and project separately to better identify issues
    client.setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    client.setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!)
    
    const databases = new Databases(client)

    const body = await request.json()
    const { email } = body

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // Add validation for environment variables
    const databaseId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID
    const collectionId = process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID_WAITLIST
    
    console.log('databaseId', databaseId)
    console.log('collectionId', collectionId)

    if (!databaseId || !collectionId) {
      console.error('Missing environment variables:', { databaseId, collectionId })
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      )
    }

    console.log('Attempting to create document with email:', email)
    console.log('Using database:', databaseId)
    console.log('Using collection:', collectionId)

    const response = await databases.createDocument(
      databaseId,
      collectionId,
      'unique()', // Generate unique ID
      {
        email: email.toLowerCase(),
        createdAt: new Date().toISOString(),
      }
    )

    return NextResponse.json(response)

  } catch (error) {
    console.error('Waitlist submission error details:', {
      error,
      databaseId: process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
      collectionId: process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID_WAITLIST
    })

    return NextResponse.json(
      { error: 'Failed to submit to waitlist' },
      { status: 500 }
    )
  }
} 