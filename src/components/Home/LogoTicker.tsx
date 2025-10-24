import React from 'react'
import acmeLogo from '../../../public/HomeSection/assets/logo-acme.png'
import quantumLogo from '../../../public/HomeSection/assets/logo-quantum.png'
import echoLogo from '../../../public/HomeSection/assets/logo-echo.png'
import pulseLogo from '../../../public/HomeSection/assets/logo-pulse.png'
import apexLogo from '../../../public/HomeSection/assets/logo-apex.png'
import celestialLogo from '../../../public/HomeSection/assets/logo-celestial.png'
import Image from 'next/image'

const LogoTicker = () => {
  return (
    <div className='py-8 bg-white md:py-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex justify-center overflow-hidden mask-[linear-gradient(to_right,transparent,black,black,black,transparent)]'>
              <div className='flex gap-14 flex-none'>
                <Image src={acmeLogo} alt='AcmeLogo' className='h-10 w-auto'/>
                <Image src={quantumLogo} alt='QuantumLogo' className='h-10 w-auto'/>
                <Image src={echoLogo} alt='EchoLogo' className='h-10 w-auto'/>
                <Image src={pulseLogo} alt='PulseLogo' className='h-10 w-auto'/>
                <Image src={apexLogo} alt='ApexLogo' className='h-10 w-auto'/>
                <Image src={celestialLogo} alt='CelestialLogo' className='h-10 w-auto'/>
              </div>
            </div>
        </div>
    </div>
  )
}

export default LogoTicker