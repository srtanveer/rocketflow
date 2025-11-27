import TutorialPage from "../../components/TutorialPage";



export const metadata = {
  title: 'Tutorials | RocketFlow',
  description: 'Learn how to use RocketFlow admin dashboard and manage landing pages with our comprehensive video tutorials.',
  keywords: 'admin tutorial, landing page management, RocketFlow tutorials, event management tutorials',
};

export const dynamic = 'force-dynamic'

export default async function Page() {
  const base = process.env.NEXT_PUBLIC_ADMIN_API || 'http://localhost:4000'
  let tutorials = null
  try {
    // In production, we need to be careful about the URL. 
    // If running on the server, we might need an internal URL or ensure the public one is accessible.
    // For now, we'll try the configured API URL.
    const res = await fetch(`${base.replace(/\/$/, '')}/api/tutorials`, {
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (res.ok) {
      tutorials = await res.json()
    } else {
      console.error('Failed to fetch tutorials:', res.status, res.statusText)
    }
  } catch (e) {
    console.error('Could not fetch tutorials:', e.message || e)
  }

  return <TutorialPage tutorials={tutorials} />
}