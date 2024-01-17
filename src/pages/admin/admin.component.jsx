// Components
import EditLogo from "./editLogo.component";
import EditJob from "./editJob.component";
import EditPortfolioImg from "./editPortfolioImg.component";
import EditAbout from "./editAbout.component";
import EditPortfolioProject from "./editPortfolioProject.component";
import EditContact from "./editContact.component";
import EditSocialLinks from "./editSocialLinks.component";

const Admin = () => {
    return(
        <div className="w-full">
            {/* Adjuster */}
            <div className="max-w-[500px] w-[85%] mx-auto mt-[50px] mb-[40px] p-1 border">
                {/* Heading */}
                <p className="text-2xl bg-[#00808023] mb-1 px-4 py-4 font-bold">Admin</p>
                {/* Logo */}
                <EditLogo />
                {/* Job */}
                <EditJob />
                {/* Portfolio Img */}
                <EditPortfolioImg />
                {/* About */}
                <EditAbout />
                {/* Portfolio Project */}
                <EditPortfolioProject />
                {/* Contact */}
                <EditContact />
                {/* social Links */}
                <EditSocialLinks />
            </div>
        </div>
    )
}

export default Admin;