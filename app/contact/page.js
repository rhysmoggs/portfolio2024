import { SocialIcon } from 'react-social-icons'

export default function Contact() {
  return (
    <section className='text-white calcWidth'>
      <div className='pt-8 md:px-4 xl:px-16'>
        <div className='md:mt-4 flex flex-col h-full'>
          <h2 className='text-center text-4xl font-bold text-white md:mt-10 mb-4 md:mb-0'>
            Contact
          </h2>
        </div>
        <div className='mt-10 flex flex-col h-full'>
          <ul className='mx-auto'>
            <SocialIcon
              url='https://github.com/rhysmoggs'
              label='personal github link'
              style={{ height: 80, width: 80, margin: 10 }}
            />
            <SocialIcon
              url='https://www.linkedin.com/in/rhysmoggs/'
              label='personal linkedIn link'
              style={{ height: 80, width: 80, margin: 10 }}
            />
          </ul>
        </div>
      </div>
    </section>
  )
}
