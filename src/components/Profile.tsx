import { getUser } from '@/lib/auth'
import Image from 'next/image'

export function Profile() {
  const { name, avatarUrl } = getUser()
  console.log({ avatarUrl })
  return (
    <div className="flex items-center gap-3 text-left">
      <Image
        src={avatarUrl}
        width={120}
        height={120}
        alt="user-avatar"
        className="h-10 w-10 rounded-full"
      />
      <p className="max-w-[140px] text-sm leading-snug">
        {name}
        <a
          href="/api/auth/logout"
          className="block text-red-400 hover:text-red-300"
        >
          Quero sair
        </a>
      </p>
    </div>
  )
}
