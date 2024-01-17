// Images
import HeroImg from '../../assets/hero_img.png';
// Components
import CustomButton from '../customButton/customButton.component';
import SectionLabel from '../sectionLabel/sectionLabel.component';

const Hero = () => {
    return(
        <div className="bg-[--primary-color] w-full h-[fit-content] sm:max-h-[650px]">
            {/* adjuster */}
            <div className="max-w-[1280px] w-[85%] mx-auto pt-8 h-[fit-content] sm:pt-4 sm:max-h-[650px] flex flex-col sm:flex-row justify-between">
                {/* Hero Info */}
                <div className='self-center flex flex-col gap-4'>
                    {/* label */}
                    <SectionLabel color='accent' >Introducing</SectionLabel>
                    {/* Job Title - Dynamic*/}
                    <p className='text-4xl font-bold text-[--secondary-color]'>Visual Design & Art Director</p>
                    {/* Job Description */}
                    <p className='text-sm text-[--secondary-color]'>Hi, I am Jack, focusing on creating emotional experiences.</p>
                    {/* Hire Me CTA */}
                    <CustomButton>Hire Me</CustomButton>
                </div>
                {/* Hero Img */}
                <div className='sm:max-h-[650px] flex items-end justify-end'>
                    <img src={HeroImg} alt="Hero" className='sm:h-[100%]'/>
                </div>
            </div>
        </div>
    )
}

export default Hero;