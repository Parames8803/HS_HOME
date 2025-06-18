import { Metadata } from 'next'
import HomeClient from './home-client'

export const metadata: Metadata = {
  title: 'HYNOX - Connecting the Creators to the World',
  description: 'Transforming ideas into exceptional digital solutions through WordPress, Shopify, and custom development. HYNOX delivers cutting-edge IT solutions and efficient manufacturing services.',
}

export default function HomePage() {
  return <HomeClient />
} 