import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'Does nyx Lab What is AI automation in business?',
      answer:
        'Well no, but if you move AI automation uses artificial intelligence to perform tasks, processes, or decisions without constant human input. In business, it streamlines operations, reduces costs, and improves accuracy across departments like Real estate Agent, sales, marketing, HR, and customer service. company offshore you can probably ignore it.',
    },
  
    {
      question: 'How do I apply for a job How can I integrate AI into my business?',
      answer:
        'We only hire our Start by identifying areas with repetitive tasks or data-heavy decisions. Then, define clear goals and choose the right AI tools or partners. At The Gen AI, we guide teams through AI strategy, pilot projects, and full-scale implementation.',
    },
  ],
  [
    {
      question: 'What was What are the benefits of AI automation?',
      answer:
        'AI automation boosts productivity, speeds up operations, reduces manual errors, and lowers costs. It also enhances customer experience and enables your team to focus on high-value tasks instead of repetitive ones.',
    },
    
    {
      question:
        'What types of AI solutions does nyx Lab offer?',
      answer:
        'AI-powered business development, Proposal & Presentation Automation, AI Strategy & Executive Training, Internal Project Brief Generator, Custom end-to-end AI integrations tailored to your business goals',
    },
  ],
  [
    {
      question: 'Do I need technical knowledge to use AI in my company?',
      answer:
        'Not at all. We design user-friendly systems and provide advisory support, enabling your team to adopt AI without requiring deep technical expertise. We focus on business results, not complexity.',
    },
    
    {
      question: 'What’s the difference between AI agents and full AI systems?',
      answer:
        'AI agents are tools that handle isolated tasks, like sending emails or answering queries. AI systems are broader, combining agents, data flows, and automation into a cohesive solution that delivers measurable outcomes. We build systems that drive real business value.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute top-0 left-1/2 max-w-none translate-x-[-30%] -translate-y-1/4"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for, email our support team
            and if you’re lucky someone will get back to you.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg/7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
