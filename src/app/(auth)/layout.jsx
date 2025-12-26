// src/app/(auth)/layout.jsx

export default function AuthLayout({ children }) {
  // این layout هیچ هدر / فوتر / ناوبری‌ای رندر نمی‌کند
  // فقط خود صفحه لاگین را نمایش می‌دهد.
  return <>{children}</>;
}
