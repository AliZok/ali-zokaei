// app/not-found.tsx
import Link from 'next/link'

export default function NotFound() {
  return (
    <div dir='rtl' className="flex flex-col items-center justify-center min-h-screen gap-4"  >
      <h1 className="text-4xl font-bold">404 - صفحه پیدا نشد</h1>
      <p className="text-lg">شما به مسیر اشتباهی آمده اید.</p>
      <Link 
        href="/" 
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        prefetch
      >
        بازگشت به صفحه اصلی
      </Link>
    </div>
  )
}