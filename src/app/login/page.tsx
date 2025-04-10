import LinkButton from '@/components/linkButton/LinkButton'
import React from 'react'

const page = () => {
    return (
        <div className='p-2'>
            <LinkButton text='Voltar' href='/' />
            <h1>
                Login
            </h1>
        </div>
    )
}

export default page