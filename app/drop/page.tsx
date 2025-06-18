import { Metadata } from 'next'
import DropShippingClient from '../dropshipping-client'

export const metadata: Metadata = {
  title: 'Drop Shipping - HYNOX',
  description: 'Discover the story behind HYNOX. We are redefining what it means to be cutting-edge, where fashion meets function and style meets systems.',
}

export default function AboutPage() {
  return <DropShippingClient />
} 