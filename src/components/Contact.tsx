'use client';
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { styles } from './styles';
import { slideIn } from './util/motion';
import SectionWrapper from './SectionWrapper';
import EarthCanvas from './canvas/Earth';
import { useForm, SubmitHandler } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '@/app/firestore';

interface IContact {
  name: string;
  email: string;
  msg: string;
}

const Contact = () => {
  const { register, handleSubmit, reset, formState } = useForm<IContact>({
    defaultValues: { name: '', email: '', msg: '' },
  });

  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<IContact> = async (data) => {
    try {
      const collRef = collection(db, 'messages');
      await addDoc(collRef, data);
    } catch (e) {
      console.error(e);
    }
    reset();
  };
  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>
        <form
          action=''
          onSubmit={handleSubmit(onSubmit)}
          className='mt-12 flex flex-col gap-8'
        >
          <label htmlFor='' className='flex flex-col'>
            <span className='test-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              placeholder='Your full name'
              {...register('name', { required: true })}
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none
              border-none font-medium'
            />
          </label>
          <label htmlFor='' className='flex flex-col'>
            <span className='test-white font-medium mb-4'>Your Email</span>
            <input
              type='email'
              {...register('email', { required: true })}
              placeholder='Whats your email '
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none
              border-none font-medium'
            />
          </label>
          <label htmlFor='' className='flex flex-col'>
            <span className='test-white font-medium mb-4'>Message</span>
            <textarea
              rows={7}
              {...register('msg', { required: true })}
              placeholder='What do you want to say'
              id=''
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none
              border-none font-medium'
            />
          </label>
          <button
            className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
            type='submit'
            disabled={!formState.isValid}
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
