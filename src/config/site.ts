export interface SiteConfig {
  name: string
  description: string
  mainNav: {
    title: string
    href: string
  }[]
  links: {
    email: string
    tel: string
    facebook: string
    instagram: string
  }
}

export const siteConfig: SiteConfig = {
  name: 'Télapódium Meseszínház',
  description: 'Több mint 30 éve fenálló Télapódium Meseszínház.',
  mainNav: [
    {
      title: 'Work',
      href: '/#work'
    },
    {
      title: 'Blog',
      href: '/blog'
    },
    {
      title: 'Contact',
      href: '/#contact'
    }
  ],
  links: {
    email: 'telapodium@gmail.com',
    tel: '+36304339071',
    facebook: 'https://www.facebook.com/telapodium',
    instagram: 'https://www.instagram.com/telapodium'
  }
}
