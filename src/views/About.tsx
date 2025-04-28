import { FC } from 'react'
import type { Meta } from '@/@types/routes'

const About: FC<Meta> = () => {
    return (
        <div className="p-4">
            <h1>About Us</h1>
            <p>This is the about page content.</p>
        </div>
    )
}

export default About 