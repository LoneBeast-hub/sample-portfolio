// components
import SectionLabel from "../sectionLabel/sectionLabel.component";
// react icons
import { BiSolidRightArrowAlt } from 'react-icons/bi';

const PortfolioCard = ({index, projectName, projectInfo, projectImg, projectLink }) => {
    return(
        <div>
            <div className="flex md:flex-row flex-col gap-8">
                {/* card details */}
                <div className="flex-1 md:self-center">
                    {/* label */}
                    <SectionLabel color='secondary'>Project {index + 1} </SectionLabel>
                    {/* name */}
                    <p className="text-xl mt-1 mb-3 text-transparent" style={{ WebkitTextStroke: '1px #008080' }}>{projectName}</p>
                    {/* info */}
                    <p className="text-sm mb-5 text-justify text-[--accent-color]">{projectInfo}</p>
                    {/* View */}
                    <div className="flex items-center gap-2 cursor-pointer">
                        <BiSolidRightArrowAlt className="text-lg text-[--secondary-color]" />
                        {/* add a dynamic link to this */}
                        <a href={projectLink} className="text-sm text-[--secondary-color] hover:pl-2 transition-all" target="_blank" rel="noopener noreferrer">View</a>
                    </div>
                </div>
                {/* card imgs */}
                <div className="flex-1 relative self-center">
                    {/* {projectImgs} */}
                    <img src={projectImg} alt="" className="rounded-3xl md:max-h-[500px] h-[100%]" />
                    {/* sub overlay */}
                    <div className="rounded-3xl w-full h-full bg-[#00808023] absolute top-0 -z-10 rotate-[-9deg]"></div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioCard;