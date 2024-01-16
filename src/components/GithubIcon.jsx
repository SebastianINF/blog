import { AiFillGithub } from 'react-icons/ai'
import { IconContext } from 'react-icons'

export default function GithubIcon() {
  return (
    <a
      href='https://github.com/SebastianINF'
      target='_blank'
      rel='noreferrer'
    >
      <AiFillGithub className='text-white w-[27px] h-[27px] mx-3' />
    </a>
  )
}
