export interface Event {
  id: number
  title: string
  subtitle: string
  start: string
  end: string
  tag: string
  topics: string[]
  image: string
  link: string
}

export interface EventDetail {
  id: number
  title: string
  subtitle: string
  topics: string[]
  date: string
  heroImage: string
  link: string
  about: {
    description: string
    image: string
    features: {
      title: string
      description: string
    }[]
  }
  benefits: {
    title: string
    items: {
      title: string
      description: string
    }[]
  }
  instructor: {
    name: string
    title: string
    image: string
    bio: string
  }
  audience: {
    title: string
    groups: string[]
    image: string
  }
  highlights: {
    title: string
    items: {
      id: string
      title: string
      description: string
    }[]
  }
  jobRoles: {
    title: string
    subtitle: string
    description: string
    roles: {
      title: string
      description: string
      icon: string
    }[]
  }
  faqs: {
    question: string
    answer: string
  }[]
}
