import { Metadata } from 'next'
import TeamClient from '../team-client'

export const metadata: Metadata = {
  title: 'Meet Our Team - HYNOX',
  description: 'Meet the brilliant minds behind HYNOX. Our team of innovators, developers, designers, and strategists are reshaping how the world thinks about fashion and technology.',
}

export default function TeamPage() {
  return <TeamClient />
} 