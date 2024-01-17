// components
import PortfolioCard from "../portfolioCard/portfolioCard.component";
// imgs
import ProjectOne from '../../assets/portfolio-1-img.jpg';
import ProjectTwo from '../../assets/portfolio-2-img.jpg';
import ProjectThree from '../../assets/portfolio-3-img.jpg';
import ProjectFour from '../../assets/portfolio-4-img.jpg';
import ProjectFive from '../../assets/portfolio-5-img.jpg';
import ProjectSix from '../../assets/portfolio-6-img.jpg';
import ProjectSeven from '../../assets/portfolio-7-big-img.jpg';

const portfolioProjects = [
    {
        projectName: 'Branding a studio',
        projectInfo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta modi dignissimos, repellat suscipit blanditiis ex rem itaque magni optio eum? Dicta corrupti tempora vero ipsa nemo rerum atque enim soluta.',
        projectImg: ProjectOne,
        projectLink: ''
    },
    {
        projectName: 'Mobile Card App',
        projectInfo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta modi dignissimos, repellat suscipit blanditiis ex rem itaque magni optio eum? Dicta corrupti tempora vero ipsa nemo rerum atque enim soluta.',
        projectImg: ProjectTwo,
        projectLink: ''
    },
    {
        projectName: 'Restaurant Landing Page',
        projectInfo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta modi dignissimos, repellat suscipit blanditiis ex rem itaque magni optio eum? Dicta corrupti tempora vero ipsa nemo rerum atque enim soluta.',
        projectImg: ProjectThree,
        projectLink: ''
    },
    {
        projectName: 'Essential UI Icon Pack',
        projectInfo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta modi dignissimos, repellat suscipit blanditiis ex rem itaque magni optio eum? Dicta corrupti tempora vero ipsa nemo rerum atque enim soluta.',
        projectImg: ProjectFour,
        projectLink: ''
    },
    {
        projectName: 'Financial App Design',
        projectInfo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta modi dignissimos, repellat suscipit blanditiis ex rem itaque magni optio eum? Dicta corrupti tempora vero ipsa nemo rerum atque enim soluta.',
        projectImg: ProjectFive,
        projectLink: ''
    },
    {
        projectName: 'Design Brand Guidelines',
        projectInfo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta modi dignissimos, repellat suscipit blanditiis ex rem itaque magni optio eum? Dicta corrupti tempora vero ipsa nemo rerum atque enim soluta.',
        projectImg: ProjectSix,
        projectLink: ''
    },
    {
        projectName: 'Flight Booking App',
        projectInfo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta modi dignissimos, repellat suscipit blanditiis ex rem itaque magni optio eum? Dicta corrupti tempora vero ipsa nemo rerum atque enim soluta.',
        projectImg: ProjectSeven,
        projectLink: ''
    }
]

const Portfolio = () => {
    return(
        <div id="portfolio">
            {/* Adjuster */}
            <div className="max-w-[1280px] w-[85%] mx-auto py-[50px]">
                {/* heading */}
                <p className="text-xl font-bold text-center mb-5 text-[--accent-color]">PORTFOLIO</p>
                {/* portfolio projects cards */}
                <div className="flex flex-col w-full gap-[100px]">
                    {/* portfolio project card */}
                    {
                        portfolioProjects.map(({projectName, projectInfo, projectImg, projectLink}, index) => {
                            return(
                                <PortfolioCard 
                                 projectName={projectName}
                                 projectInfo={projectInfo}
                                 projectImg={projectImg}
                                 projectLink={projectLink}
                                 index={index}
                                 key={index}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Portfolio;