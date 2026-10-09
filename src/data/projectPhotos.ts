export type ProjectMedia = {
  src: string
  type: 'image' | 'video'
  status: 'completed' | 'ongoing'
}

// Real KJR Infra site photos/videos. No project names or claims are
// attached beyond what's visible — do not invent project titles per item.
export const PROJECT_PHOTOS: ProjectMedia[] = [
  // Completed — finished exterior/facade work
  { src: '/projects/completed-1.jpg', type: 'image', status: 'completed' },
  { src: '/projects/completed-2.jpg', type: 'image', status: 'completed' },
  { src: '/projects/completed-3.jpg', type: 'image', status: 'completed' },
  { src: '/projects/completed-4.jpg', type: 'image', status: 'completed' },
  { src: '/projects/completed-5.jpg', type: 'image', status: 'completed' },
  { src: '/projects/completed-6.jpg', type: 'image', status: 'completed' },

  // Ongoing — site excavation, blockwork, exposed structure, scaffolding,
  // plastering/painting/finishing work in progress
  { src: '/projects/ongoing-1.jpg', type: 'image', status: 'ongoing' },
  { src: '/projects/ongoing-2.jpg', type: 'image', status: 'ongoing' },
  { src: '/projects/ongoing-3.jpg', type: 'image', status: 'ongoing' },
  { src: '/projects/ongoing-4.jpg', type: 'image', status: 'ongoing' },
  { src: '/projects/ongoing-5.jpg', type: 'image', status: 'ongoing' },
  { src: '/projects/ongoing-6.jpg', type: 'image', status: 'ongoing' },
  { src: '/projects/ongoing-7.jpg', type: 'image', status: 'ongoing' },
  { src: '/projects/ongoing-8.jpg', type: 'image', status: 'ongoing' },
  { src: '/projects/ongoing-9.jpg', type: 'image', status: 'ongoing' },
  { src: '/projects/ongoing-10.jpg', type: 'image', status: 'ongoing' },
  { src: '/projects/ongoing-11.jpg', type: 'image', status: 'ongoing' },
  { src: '/projects/ongoing-12.jpg', type: 'image', status: 'ongoing' },
  { src: '/projects/ongoing-13.jpg', type: 'image', status: 'ongoing' },

  // Ongoing — site videos
  ...Array.from({ length: 25 }, (_, i) => ({
    src: `/projects/videos/ongoing-video-${i + 1}.mp4`,
    type: 'video' as const,
    status: 'ongoing' as const,
  })),
]
