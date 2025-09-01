import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Container } from '@/components/Container'
import AboutFeatures from './components/AboutFeatures'

export default function About() {
  return (
    <>
      <Header />
      
      <main className="bg-white">
        <Container className="pt-20 pb-16 text-center">
          <h1 className="text-4xl font-display font-bold text-slate-900 sm:text-5xl">
            About nyxLab
          </h1>
          <p className="mt-6 text-lg text-slate-700 max-w-2xl mx-auto">
            nyxLab uses AI automation to streamline workflows, manage follow-ups, and deploy intelligent agents. 
            We help businesses save time, reduce errors, and boost operational efficiency.
          </p>

          <section className="mt-16 space-y-12 text-left">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">Our Mission</h2>
              <p className="mt-3 text-slate-700">
                Simplify business processes through AI automation while keeping solutions personal and effective.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-slate-900">Our Vision</h2>
              <p className="mt-3 text-slate-700">
                To be the most trusted AI automation partner for companies seeking seamless workflow solutions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-slate-900">Our Approach</h2>
              <p className="mt-3 text-slate-700">
                Combining advanced AI technology with industry expertise to deliver automated solutions that feel natural.
              </p>
            </div>
          </section>
        </Container>
        <AboutFeatures/>
       </main>
    
       <Footer />
    </>
  )
}