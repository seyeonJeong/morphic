/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // 빌드 중 ESLint 오류를 무시합니다.
    ignoreDuringBuilds: true
  }
  // 다른 Next.js 설정이 있다면 여기에 추가
}

export default nextConfig
