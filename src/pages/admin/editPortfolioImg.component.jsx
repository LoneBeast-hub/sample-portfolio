import CustomButton from "../../components/customButton/customButton.component";

const EditPortfolioImg = () => {
    return(
        <div className="w-full bg-[#00808023] px-4 py-4 mt-1">
            <form>
                {/* title */}
                <p className="text-lg mb-1 font-semibold text-[--secondary-color]">Portfolio Image</p>
                {/* Input Group (Change Portfolio Image) */}
                <div>
                    {/* Label */}
                    <label className="text-sm text-[--secondary-color] block mb-2">Change Your Portfolio Image:</label>
                    <input type="file" className="text-sm mb-2" /><br/>
                    <CustomButton type='submit' color='secondary'>Upload Image</CustomButton>
                </div>
            </form>
        </div>
    )
}

export default EditPortfolioImg;