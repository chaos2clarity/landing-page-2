'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { appwriteAuth } from '@/lib/appwrite'
import { useTheme } from '@/components/theme-provider'

export default function SignIn() {
  const { theme } = useTheme()
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState({ google: false, github: false, email: false })

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(prev => ({ ...prev, email: true }))
    
    try {
      await appwriteAuth.signIn(email, password)
      router.push('/dashboard') // Redirect to dashboard after successful login
    } catch (error: any) {
      setError(error.message || 'Failed to sign in')
    } finally {
      setIsLoading(prev => ({ ...prev, email: false }))
    }
  }

  const handleGithubSignIn = async () => {
    setIsLoading(prev => ({ ...prev, github: true }))
    try {
      await appwriteAuth.oAuthSignIn.github()
    } catch (error: any) {
      setError(error.message || 'Failed to sign in with GitHub')
    } finally {
      setIsLoading(prev => ({ ...prev, github: false }))
    }
  }

  const handleGoogleSignIn = async () => {
    setIsLoading(prev => ({ ...prev, google: true }))
    try {
      await appwriteAuth.oAuthSignIn.google()
    } catch (error: any) {
      setError(error.message || 'Failed to sign in with Google')
    } finally {
      setIsLoading(prev => ({ ...prev, google: false }))
    }
  }

  return (
    <div className={`flex min-h-screen flex-col items-center justify-center px-4 -mt-32 transition-colors duration-300 ${
      theme === 'dark' ? 'bg-zinc-900' : 'bg-white'
    }`}>
      <div className="w-full max-w-sm space-y-8">
        {/* Logo */}
        <motion.div 
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/images/smalllogo.png"
            alt="Logo"
            width={50}
            height={50}
            className="mb-4"
          />
          <h2 className="text-center text-3xl font-light text-zinc-900">
            Sign in to Clarity
          </h2>
        </motion.div>

        {error && (
          <div className="rounded-md bg-red-50 p-4">
            <p className="text-sm text-red-700">{error}</p>
          </div>
        )}

        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-zinc-200" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-zinc-500">Sign in with</span>
          </div>
        </div>

        {/* Social Login Buttons */}
        <div className="space-y-3">
          <button
            onClick={handleGoogleSignIn}
            disabled={isLoading.google}
            className="flex w-full items-center justify-center space-x-2 rounded-lg border border-zinc-200 bg-white text-zinc-700 px-4 py-2 text-sm font-medium shadow-sm hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg viewBox="0 0 48 48" className="h-5 w-5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" fill="#FFC107"/>
              <path d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" fill="#FF3D00"/>
              <path d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" fill="#4CAF50"/>
              <path d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" fill="#1976D2"/>
            </svg>
            <span>{isLoading.google ? 'Connecting...' : 'Continue with Google'}</span>
          </button>
          <button
            onClick={handleGithubSignIn}
            disabled={isLoading.github}
            className="flex w-full items-center justify-center space-x-2 rounded-lg border border-zinc-200 bg-white text-zinc-700 px-4 py-2 text-sm font-medium shadow-sm hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>{isLoading.github ? 'Connecting...' : 'Continue with GitHub'}</span>
          </button>
        </div>

        {/* Form */}
        <motion.form 
          onSubmit={handleEmailSignIn}
          className="mt-8 space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className={`space-y-4 rounded-2xl p-4 transition-colors duration-300 ${
            theme === 'dark' 
              ? 'bg-zinc-800 border-zinc-700' 
              : 'bg-white border border-zinc-200'
          }`}>
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`relative block w-full appearance-none rounded-lg border px-3 py-2 placeholder-zinc-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm transition-colors duration-300 ${
                  theme === 'dark'
                    ? 'border-zinc-700 bg-zinc-900 text-zinc-100'
                    : 'border-zinc-200 bg-white text-zinc-900'
                }`}
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`relative block w-full appearance-none rounded-lg border px-3 py-2 placeholder-zinc-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm transition-colors duration-300 ${
                  theme === 'dark'
                    ? 'border-zinc-700 bg-zinc-900 text-zinc-100'
                    : 'border-zinc-200 bg-white text-zinc-900'
                }`}
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border border-zinc-200 bg-white text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-zinc-600">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <Link
                href="/reset-password"
                className="font-medium text-blue-500 hover:text-blue-400"
              >
                Forgot your password?
              </Link>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading.email}
              className="group relative flex w-full justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading.email ? 'Signing in...' : 'Sign in'}
            </button>
          </div>
        </motion.form>

        {/* Sign up link */}
        <p className="mt-8 text-center text-sm text-zinc-600">
          Don't have an account?{' '}
          <Link
            href="/signup"
            className="font-medium text-blue-500 hover:text-blue-400"
          >
            Create one now
          </Link>
        </p>
      </div>
    </div>
  )
}
