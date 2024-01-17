import CustomButton from "../customButton/customButton.component"

const DownloadCV = () => {
    // handle download
    const handleDownload = () => {
        window.open(cvUrl, '_blank');
    };

    return(
        <CustomButton handleDownload={handleDownload} color='accent' >
            Dowload CV
        </CustomButton>
    )
}

export default DownloadCV;