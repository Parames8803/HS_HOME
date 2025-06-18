import { Metadata } from 'next'
import MarketingClient from '../marketing-client'

export const metadata: Metadata = {
  title: 'Marketing - HYNOX',
  description: 'Discover the story behind HYNOX. We are redefining what it means to be cutting-edge, where fashion meets function and style meets systems.',
}

export default function AboutPage() {
  return <MarketingClient />
} 