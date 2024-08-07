import React, { useRef, useState } from 'react'

const Contact = () => {
  const formRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({name: '', email: '', message: ''})
  const handleChange = (e) => {
    setForm({...form,[e.target.name]:e.target.value})
  };
  const handleFocus = () => {};
  const handleBlur = () => {};
  const handleSubmit = (e) => {
    e.preventdefault();
    setIsLoading(true);
  };
  return (
    <section className='relative flex lg:flex-row flex-col'>
      <div className='flex-1 min-w-[50%] flex flex-col max-container'>
          <h1 className='head-text'>Get In Touch</h1>
          <form className='w-full flex flex-col gap-7 mt-14'
          onSubmit={handleSubmit}
          >
            <label className='text-black-500 font-semibold'>Name</label>
            <input 
            type="text" 
            name='name'
            className='input'
            placeholder='John'
            required
            value={form.name} 
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            />
            <label className='text-black-500 font-semibold'>Email</label>
            <input 
            type="email" 
            name='email'
            className='input'
            placeholder='John@gmail.com'
            required
            value={form.email} 
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            />
            <label className='text-black-500 font-semibold'>Message</label>
            <textarea 
            rows={4}
            className='textarea'
            name='message'
            placeholder='Let me know how can i help you'
            required
            value={form.message} 
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            />
            <button 
            type='submit' 
            className='btn'
            disabled={isLoading}
            onFocus={handleFocus} 
            onBlur={handleBlur} 
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
      </div>
    </section>
  )
}

export default Contact
