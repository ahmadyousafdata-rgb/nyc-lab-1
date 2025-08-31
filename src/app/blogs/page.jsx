import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Container } from '@/components/Container'

const posts = [
  {
    id: 1,
    title: 'Maximizing Lead Conversion with AI',
    date: 'August 2025',
    summary: 'Learn how AI agents help businesses manage follow-ups and close deals faster.',
    category: { title: 'Sales', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 2,
    title: 'Automating Healthcare Workflows',
    date: 'July 2025',
    summary: 'Discover how AI-powered automation reduces errors and improves patient engagement.',
    category: { title: 'Healthcare', href: '#' },
    author: {
      name: 'Lindsay Walton',
      role: 'Front-end Developer',
      href: '#',
      imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 3,
    title: 'E-Commerce Efficiency with AI',
    date: 'June 2025',
    summary: 'Boost your e-commerce operations with intelligent AI agents and workflow automation.',
    category: { title: 'E-Commerce', href: '#' },
    author: {
      name: 'Tom Cook',
      role: 'Director of Product',
      href: '#',
      imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
]

export default function BlogPage() {
  return (
    <>
      <Header
        links={[
          { href: '/', label: 'Home' },
          { href: '/about', label: 'About' },
          { href: '/features', label: 'Features' },
          { href: '/testimonials', label: 'Testimonials' },
          { href: '/pricing', label: 'Pricing' },
          { href: '/blog', label: 'Blog' },
        ]}
      />

      <main className="bg-white py-24 sm:py-32">
        <Container className="text-center">
          <h1 className="text-4xl font-display font-bold text-slate-900 sm:text-5xl">
            nyxLab Blog
          </h1>
          <p className="mt-6 text-lg text-slate-700 max-w-2xl mx-auto">
            Insights, tips, and updates on AI automation for real businesses.
          </p>
        </Container>

        <Container className="mt-16 grid gap-y-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-left">
          {posts.map((post) => (
            <article key={post.id} className="p-6 border border-slate-300/40 rounded-xl hover:shadow-lg transition">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.date} className="text-gray-500">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.category.title}
                </a>
              </div>
              <h2 className="mt-3 text-2xl font-semibold text-slate-900">{post.title}</h2>
              <p className="mt-3 text-slate-700">{post.summary}</p>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img alt="" src={post.author.imageUrl} className="h-10 w-10 rounded-full bg-gray-50" />
                <div className="text-sm">
                  <p className="font-semibold text-gray-900">
                    <a href={post.author.href}>{post.author.name}</a>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </Container>
      </main>

      <Footer />
    </>
  )
}
