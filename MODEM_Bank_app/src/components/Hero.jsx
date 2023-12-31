import styles from '../style';
import { discount, robot } from '../assets';
import GetStarted from './GetStarted';

const Hero = () => (
  <section id='home' className={`flex md:flex flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
        <img src={discount} alt="discount" className='w-32px  h-32px' />
        <p className={`${styles.paragraph} ml-2`}>
          <span className='text-white'>20%</span> Discount for {" "}
          <span className='text-white'> 1 Month
          </span> Account
        </p>
      </div>
      <div className='flex flex-row justify-between items-center w-full'>
        <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
          The Next <br className='sm:block hidden' /> {""}
          <span
            className='text-gradient'>
            Generation
          </span> {" "}
        </h1>
        <div className='ss:flex hidden md:mr-4 mr-0 '>
          <GetStarted />
        </div>
      </div>

      <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full'>
        Payment Method.
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examines annual percentage rates, annual fees
      </p>
    </div>
    <div className={`flex-1 flex ${styles.center}`}>
      <img src={robot} alt="" className='lg:w-[500px] w-[100%] h-[100%] relative items-center z-[10] rounded-[50px]
      lg:mt-[-32%] lg:ml-[50%]' />
      <div className='absolute z-[0] w-[20%] h-[35%] left-30 top-20 pink__gradient' />
      <div className='absolute z-[0] lg:w-[10%] right-22 h-[70%] rounded-full top-20 white__gradient' />
      <div className='absolute z-[0] w-[5%] h-[50%] right-50 bottom-20 top-25  blue__gradient' />

    </div>
    <div className={`ss:hidden ${styles.flexCenter}`}>
      <GetStarted />
    </div>

  </section>

)


export default Hero
