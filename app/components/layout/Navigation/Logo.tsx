import Link from 'next/link';
import Image from 'next/image';
import logoImage from '@/assets/logo.svg'

const Logo = () => {
  return <Link href={'/'}>
    <a className='block my-4'>
      <Image src={logoImage} width={247} height={60} alt='school tests' draggable={false}/>
    </a>
  </Link>;
};

export default Logo