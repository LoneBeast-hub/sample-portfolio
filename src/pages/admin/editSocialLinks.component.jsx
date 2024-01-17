import CustomButton from "../../components/customButton/customButton.component";

const EditSocialLinks = () => {
    return(
        <div className="w-full bg-[#00808023] px-4 py-4 mt-1">
            <form>
                {/* title */}
                <p className="text-lg mb-1 font-semibold text-[--secondary-color]">Footer Social Links</p>
                {/* Input Group (Change Facebook) */}
                <div>
                    {/* Label */}
                    <label htmlFor="facebook" className="text-sm text-[--secondary-color] block mb-2">Change Your Facebook Link:</label>
                    <input name="facebook" type="text" className="bg-transparent border border-[--secondary-color] w-full rounded-lg p-1 text-[--secondary-color]"/>
                </div>
                {/* Input Group (Change LinkedIn) */}
                <div className="mt-2">
                    {/* Label */}
                    <label htmlFor="linkedIn" className="text-sm text-[--secondary-color] block mb-2">Change Your LinkedIn Link:</label>
                    <input name="linkedIn" type="text" className="bg-transparent border border-[--secondary-color] w-full rounded-lg p-1 text-[--secondary-color] appearance-none resize-none"/>
                </div>
                {/* Input Group (Change Instagram) */}
                <div className="mt-2">
                    {/* Label */}
                    <label htmlFor="instagram" className="text-sm text-[--secondary-color] block mb-2">Change Your Instagram Link:</label>
                    <input name="instagram" type="text" className="bg-transparent border border-[--secondary-color] w-full rounded-lg p-1 text-[--secondary-color]"/>
                </div>
                {/* Input Group (Change Twitter) */}
                <div className="mt-2">
                    {/* Label */}
                    <label htmlFor="twitter" className="text-sm text-[--secondary-color] block mb-2">Change Your Twitter Link:</label>
                    <input name="twitter" type="text" className="bg-transparent border border-[--secondary-color] w-full rounded-lg p-1 text-[--secondary-color]"/>
                </div>
                {/* Update Contact */}
                <div className="mt-2">
                    <CustomButton type="submit" color='secondary'>Update</CustomButton>
                </div>
                {/*  */}
            </form>
        </div>
    )
}

export default EditSocialLinks;