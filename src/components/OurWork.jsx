import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
import { motion } from "motion/react"

export default function OurWork() {

  const workdata = [
    {
      title: 'Mobile app marketing',
      description: 'We craft strategies that boost visibility, drive downloads, and grow loyal users for your mobile app.',
      Image: assets.work_mobile_app
    },
    {
      title: 'Dashboard management',
      description: 'We design and manage smart dashboards that help you track performance, gain insights, and make data-driven decisions.',
      Image: assets.work_dashboard_management
    },
    {
      title: 'Fitness app promotion',
      description: 'We create impactful campaigns that engage fitness enthusiasts and build strong communities around your app.',
      Image: assets.work_fitness_app
    }
  ]


  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.2 }}
      viewport={{ once: true }}
      id='our-work' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 text-gray-700 dark:text-white mt-20'>
      <Title title='Our latest work' desc='From strategy to execution, we craft digital solutions that move your business forward.' />

      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max:w-5xl'>
        {
          workdata.map((work, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              key={index} className='hover:scale-105 duration-500 transition-all cursor-pointer'>
              <img src={work.Image} className='w-full rounded-xl' alt="workimg" />
              <h3 className='mt-3 mb-2 text-lg font-semibold'>{work.title}</h3>
              <p className='text-sm opacity-60 w-5/6'>{work.description}</p>
            </motion.div>
          ))
        }
      </div>
    </motion.div>
  )
}
