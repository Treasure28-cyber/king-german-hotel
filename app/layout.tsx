import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'King German Hotel | A warm welcome in Port Harcourt', description: 'Discover King German Hotel, by Seventh Day, Y Junction, Rumuaghaolu Road, Port Harcourt. Call 0906 764 0779 for reservations and dining enquiries.' };
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) { return <html lang="en"><body>{children}</body></html>; }
