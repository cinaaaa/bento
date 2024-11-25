import github from '../public/icons/github.svg'
import linkedin from '../public/icons/linkedin.svg'
import medium from '../public/icons/medium.svg'
import readcv from '../public/icons/read-cv.svg'
import x from '../public/icons/x.svg'
import youtube from '../public/icons/youtube.svg'

type SocialMedia = (typeof websites)[number]

type Link = {
  title: string
  icon: any
  link: string
  text?: string
}

const websites = [
  'github',
  'instagram',
  'linkedin',
  'medium',
  'readcv',
  'tiktok',
  'x',
  'youtube',
]

const LINKS: { [key in SocialMedia]: Link } = {
  github: {
    title: 'Github',
    icon: github,
    link: 'https://github.com/cinaaaa',
    text: '@cinaaaa',
  },
  linkedin: {
    title: 'Linkedin',
    icon: linkedin,
    link: 'https://www.linkedin.com/in/sina-farhadi/',
    text: '@sinafarhadi',
  },
  medium: {
    title: 'Medium',
    icon: medium,
    link: 'https://medium.com/@sinafarhadi',
    text: '@sinafarhadi',
  },
  readcv: {
    title: 'Read CV',
    icon: readcv,
    link: 'https://linkedin.com/in/sina-farhadi',
    text: '@sinafarhadi',
  },
  x: {
    title: 'X',
    icon: x,
    link: 'https://x.com/cinaaaaaaa_',
    text: '@cinaaaaaaa_',
  },
  youtube: {
    title: 'Youtube',
    icon: youtube,
    link: 'https://www.youtube.com/@prototyper_ir',
    text: '@prototyper_ir',
  },
}

export default LINKS
