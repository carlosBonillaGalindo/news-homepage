import React from 'react'

export const NewArticle = ({title,text}) => {
  return (
    <article className='h-[140px] lg:h-[160px] border-b-2 border-GrayishBlue py-7 last:border-none lg:py-4'>
        <h2 className='cursor-pointer hover:text-SoftOrange text-[20px] lg:text-[16px] xl:text-[20px] mb-3 font-bold'>{title}</h2>
        <p className='text-[15px]'>{text}
</p>
    </article>
  )
}
