import AdminApp from '../../components/admin/AdminApp'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'

export const revalidate = 0

export default function AdminPage() {
  return (
    <>
      <Navbar />
      <main className="py-12">
        <AdminApp />
      </main>
      <Footer />
    </>
  )
}

