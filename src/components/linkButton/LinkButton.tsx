import Link from 'next/link'
import React from 'react'

interface ILinkButton {
    text: string,
    href: string,
}

const LinkButton = ({ text, href }: ILinkButton) => {
    return (
        <Link href={href}>{text}</Link>
    )
}

export default LinkButton