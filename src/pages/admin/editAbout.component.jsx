import CustomButton from "../../components/customButton/customButton.component";

const EditAbout = () => {
    return(
        <div className="w-full bg-[#00808023] px-4 py-4 mt-1">
            <form>
                {/* title */}
                <p className="text-lg mb-1 font-semibold text-[--secondary-color]">About</p>
                {/* Input Group (Change About Description) */}
                <div className="mt-3">
                    {/* Label */}
                    <label htmlFor="aboutText" className="text-sm text-[--secondary-color] block mb-2">Change Your About Description:</label>
                    <textarea name="aboutText" type="text" className="bg-transparent border border-[--secondary-color] w-full rounded-lg p-1 text-[--secondary-color] resize-none appearance-none"></textarea>
                </div>
                {/* Update Job */}
                <div className="mt-2">
                    <CustomButton type="submit" color='secondary'>Update</CustomButton>
                </div>
            </form>
        </div>
    )
}

export default EditAbout;