import { Metadata } from 'next'
import AboutClient from '../about-client'

export const metadata: Metadata = {
  title: 'About Us - HYNOX',
  description: 'Discover the story behind HYNOX. We are redefining what it means to be cutting-edge, where fashion meets function and style meets systems.',
}

export default function AboutPage() {
  return <AboutClient />
} 