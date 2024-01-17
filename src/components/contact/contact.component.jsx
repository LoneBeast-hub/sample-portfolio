// components
import SectionLabel from "../sectionLabel/sectionLabel.component";
import CustomButton from "../customButton/customButton.component";
// react icons
import { BiPhoneCall } from 'react-icons/bi';
import { CiMail } from 'react-icons/ci';

const Contact = () => {
    return(
        <div id="contact" className="w-full">
            {/* Adjuster */}
            <div className="max-w-[1280px] w-[85%] mx-auto bg-white py-[50px]">
                <SectionLabel color='secondary'>Contact Me</SectionLabel>
                {/* Question Title */}
                <p className="text-2xl mt-1 mb-3 font-semibold text-transparent" style={{ WebkitTextStroke: '1px #008080' }}>Get In Touch With Me</p>
                {/* Phone and Email */}
                <div className="flex gap-6 mb-6 max-[576px]:flex-col">
                    {/* Phone */}
                    <div className="flex items-center gap-3">
                        <div className="p-3 bg-[--accent-color] h-[fit-content] rounded-full text-white">
                            <BiPhoneCall className="text-2xl" />
                        </div>
                        <div className="flex flex-col">
                            <p className="text-xl font-semibold text-[--accent-color]">Phone</p>
                            {/* phone number */}
                            <p className="text-[--accent-color] text-sm">+2343821934678</p>
                        </div>
                    </div>
                    {/* Email */}
                    <div className="flex items-center gap-3">
                        <div className="p-3 bg-[--accent-color] h-[fit-content] rounded-full text-white">
                            <CiMail className="text-2xl" />
                        </div>
                        <div className="flex flex-col">
                            <p className="text-xl font-semibold text-[--accent-color]">Email</p>
                            {/* Email */}
                            <p className="text-[--accent-color] text-sm">Info@yourdomain.com</p>
                        </div>
                    </div>
                </div>
                {/* form */}
                <form action="#" className="w-full">
                    {/* input group */}
                    <div className="flex flex-col sm:flex-row w-full gap-4 mb-4">
                        {/* Full Name */}
                        <input type="text" name="full_name" placeholder="Full Name" className="flex-1 border border-[--secondary-color] rounded-xl p-2"/>
                        {/* Email */}
                        <input type="text" name="email" placeholder="Email" className="flex-1 border border-[--secondary-color] rounded-xl p-2"/>
                    </div>
                    {/* Message */}
                    <div className="mb-5">
                        <textarea name="message" id="" cols="30" rows="10" placeholder="Message *" className="w-full border border-[--secondary-color] rounded-xl p-2 resize-none overflow-hidden"></textarea>
                    </div>
                    {/* submit */}
                    <CustomButton>Send To Me</CustomButton>
                </form>
            </div>
        </div>
    )
}

export default Contact;