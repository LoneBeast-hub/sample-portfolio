// components
import CustomButton from "../../components/customButton/customButton.component";
// imgs
import ProjectOne from '../../assets/portfolio-1-img.jpg';
// React Icons
import { FiEdit } from 'react-icons/fi';
import { AiTwotoneDelete } from 'react-icons/ai';

const EditPortfolioProject = () => {
    return(
        <div className="w-full bg-[#00808023] px-4 py-4 mt-1">
            {/* title */}
            <p className="text-lg mb-1 font-semibold text-[--secondary-color]">Portfolio Projects</p>
            {/* Input Group (Change Job Description) */}
            <div className="mt-3">
                {/* Label */}
                <p className="text-sm text-[--secondary-color] block mb-2">Edit, Create or Delete Projects:</p>
                {/* projects */}
                <div className="w-full">
                    {/* project */}
                    <div className="flex flex-col sm:flex-row gap-2">
                        {/* project img */}
                        <div>
                            <img src={ProjectOne} alt="" className="rounded-3xl" />
                        </div>
                        {/* project details */}
                        <div className="flex flex-col gap-2">
                            {/* Title */}
                            <p className="sm:max-w-[300px] text-lg font-medium text-[--secondary-color] overflow-hidden overflow-ellipsis whitespace-nowrap">Branding a studio Lorem ipsum dolor sit amet.</p>
                            {/* Info and Link */}
                            <div className="">
                                {/* info */}
                                <p className="sm:max-w-[300px] text-[12px] overflow-hidden overflow-ellipsis whitespace-nowrap">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta modi dignissimos, repellat suscipit blanditiis ex rem itaque magni optio eum? Dicta corrupti tempora vero ipsa nemo rerum atque enim soluta.
                                </p>
                                {/* link */}
                                <p className="text-[--secondary-color] text-[12px] ">Link: <span className="underline">https://www.google.com</span></p>
                            </div>
                        </div>
                        {/* Actions on Project */}
                        <div className="flex sm:flex-col sm:self-center gap-2">
                            {/* Edit */}
                            <FiEdit className="text-[--secondary-color]"/>
                            {/* Delete */}
                            <AiTwotoneDelete className="text-[--accent-color]"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditPortfolioProject;