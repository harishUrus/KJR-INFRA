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

  // Ongoing — site excavation, blockwork, exposed structure, scaffolding,
  // plastering/painting/finishing work in progress
  { src: '/projects/ongoing-10.jpg', type: 'image', status: 'ongoing' },
  { src: '/projects/ongoing-12.jpg', type: 'image', status: 'ongoing' },

  // Ongoing — site videos
  { src: '/projects/videos/ongoing-video-5.mp4', type: 'video', status: 'ongoing' },
  { src: '/projects/videos/ongoing-video-6.mp4', type: 'video', status: 'ongoing' },
  { src: '/projects/videos/ongoing-video-7.mp4', type: 'video', status: 'ongoing' },
  { src: '/projects/videos/ongoing-video-13.mp4', type: 'video', status: 'ongoing' },
  { src: '/projects/videos/ongoing-video-19.mp4', type: 'video', status: 'ongoing' },
  { src: '/projects/videos/ongoing-video-20.mp4', type: 'video', status: 'ongoing' },
  { src: '/projects/videos/ongoing-video-21.mp4', type: 'video', status: 'ongoing' },
  { src: '/projects/videos/ongoing-video-22.mp4', type: 'video', status: 'ongoing' },
  { src: '/projects/videos/ongoing-video-25.mp4', type: 'video', status: 'ongoing' },
]
