export type ProjectPhoto = {
  src: string
  status: 'completed' | 'ongoing'
}

// Real KJR Infra site photos. No project names or claims are attached
// beyond what's visible — do not invent project titles per photo.
export const PROJECT_PHOTOS: ProjectPhoto[] = [
  { src: '/projects/completed-1.jpg', status: 'completed' },
  { src: '/projects/completed-2.jpg', status: 'completed' },
  { src: '/projects/completed-3.jpg', status: 'completed' },
  { src: '/projects/completed-4.jpg', status: 'completed' },
  { src: '/projects/completed-5.jpg', status: 'completed' },
  { src: '/projects/completed-6.jpg', status: 'completed' },
  { src: '/projects/ongoing-1.jpg', status: 'ongoing' },
  { src: '/projects/ongoing-2.jpg', status: 'ongoing' },
  { src: '/projects/ongoing-3.jpg', status: 'ongoing' },
  { src: '/projects/ongoing-4.jpg', status: 'ongoing' },
  { src: '/projects/ongoing-5.jpg', status: 'ongoing' },
  { src: '/projects/ongoing-6.jpg', status: 'ongoing' },
  { src: '/projects/ongoing-7.jpg', status: 'ongoing' },
  { src: '/projects/ongoing-8.jpg', status: 'ongoing' },
]
