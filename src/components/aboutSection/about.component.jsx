import DownloadCV from "../downloadCV/downloadCV.component";
import SectionLabel from "../sectionLabel/sectionLabel.component";
import ProgressBar from "../progressBar/progress.component";

const About = () => {
    return(
        <div id="about" className="w-full bg-white">
            {/* Adjuster */}
            <div className="max-w-[1280px] w-[85%] mx-auto min-h-[400px] pt-[50px] pb-8 h-[fit-content] flex flex-col-reverse gap-5 md:flex-row justify-between">
                {/* skills list */}
                <div className="flex flex-col md:flex-1 md:self-center gap-2">
                    {/* skill */}
                    <div className="flex flex-col items-start">
                        <p>Photoshop:</p>
                        {/* Progress Bar */}
                        <ProgressBar skillName='Photoshop' fillPercentage={80} />
                    </div>
                    {/* skill */}
                    <div className="flex flex-col items-start">
                        <p>Figma:</p>
                        {/* Progress Bar */}
                        <ProgressBar skillName='Figma' fillPercentage={30} />
                    </div>
                    {/* skill */}
                    <div className="flex flex-col items-start">
                        <p>Corel Draw:</p>
                        {/* Progress Bar */}
                        <ProgressBar skillName='corel Draw' fillPercentage={60} />
                    </div>
                </div>
                <div className="flex-1 self-center">
                    {/* Label */}
                    <SectionLabel color='secondary' >About Me (My Skills)</SectionLabel>
                    {/* Question Title */}
                    <p className="text-2xl mt-1 mb-3 font-semibold text-transparent" style={{ WebkitTextStroke: '1px #008080' }}>Why Work With Me?</p>
                    {/* About Info */}
                    <p className="text-sm mb-5 text-justify text-[--accent-color]">Hey there! I'm Jack Co, a visual designer and art director with a passion for creating captivating visual experiences. My work is all about blending aesthetics with storytelling – transforming ideas into designs that leave a lasting impact. Whether it's crafting brand identities or designing immersive digital experiences, I thrive on bringing creativity and innovation to every project. Let's collaborate and bring your vision to life through the power of design!</p>
                    {/* Download CV */}
                    <DownloadCV/>
                </div>
            </div>
        </div>
    )
}

export default About;