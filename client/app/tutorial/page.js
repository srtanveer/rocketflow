import TutorialPage from "../../components/TutorialPage";

export const metadata = {
  title: 'Tutorials | RocketFlow',
  description: 'Learn how to use RocketFlow admin dashboard and manage landing pages with our comprehensive video tutorials.',
  keywords: 'admin tutorial, landing page management, RocketFlow tutorials, event management tutorials',
};

export default async function Page() {
  const base = process.env.NEXT_PUBLIC_ADMIN_API || 'http://localhost:4000'
  let tutorials = null
  try {
    const res = await fetch(`${base.replace(/\/$/, '')}/tutorials`, { cache: 'no-store' })
    if (res.ok) tutorials = await res.json()
  } catch (e) {
    // ignore — component will fallback to static samples
    console.warn('Could not fetch tutorials', e.message || e)
  }

  return <TutorialPage tutorials={tutorials} />
}