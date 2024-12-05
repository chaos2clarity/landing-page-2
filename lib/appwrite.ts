// import { Client, Account } from 'appwrite'

// const client = new Client()
//   .setEndpoint('YOUR_APPWRITE_ENDPOINT')
//   .setProject('YOUR_PROJECT_ID')

// export const account = new Account(client)

// // OAuth methods
// export const oAuthSignIn = {
//   google: async () => {
//     try {
//       return await account.createOAuth2Session(
//         'google',
//         'http://localhost:3000/auth-callback',
//         'http://localhost:3000/auth-failure'
//       )
//     } catch (error) {
//       console.error('Google OAuth error:', error)
//       throw error
//     }
//   },
  
//   github: async () => {
//     try {
//       return await account.createOAuth2Session(
//         'github',
//         'http://localhost:3000/auth-callback',
//         'http://localhost:3000/auth-failure'
//       )
//     } catch (error) {
//       console.error('GitHub OAuth error:', error)
//       throw error
//     }
//   }
// } 