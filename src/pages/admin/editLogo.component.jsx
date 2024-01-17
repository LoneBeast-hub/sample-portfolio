import CustomButton from "../../components/customButton/customButton.component";

const EditLogo = () => {
    return(
        <div className="w-full bg-[#00808023] px-4 py-4">
            <form>
                {/* title */}
                <p className="text-lg mb-1 font-semibold text-[--secondary-color]">Logo</p>
                {/* Input Group (Change Logo Text) */}
                <div>
                    {/* Label */}
                    <label htmlFor="logoText" className="text-sm text-[--secondary-color] block mb-2">Change Your Logo Text:</label>
                    <input name="logoText" type="text" className="bg-transparent border border-[--secondary-color] w-full rounded-lg p-1 text-[--secondary-color]"/>
                </div>
                {/* Update Logo */}
                <div className="mt-2">
                    <CustomButton type="submit" color='secondary'>Update</CustomButton>
                </div>
                {/*  */}
            </form>
        </div>
    )
}

export default EditLogo;