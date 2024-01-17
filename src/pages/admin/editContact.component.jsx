// Components
import CustomButton from "../../components/customButton/customButton.component";

const EditContact = () => {
    return(
        <div className="w-full bg-[#00808023] px-4 py-4 mt-1">
            <form>
                {/* title */}
                <p className="text-lg mb-1 font-semibold text-[--secondary-color]">Contact</p>
                {/* Input Group (Change Email) */}
                <div>
                    {/* Label */}
                    <label htmlFor="email" className="text-sm text-[--secondary-color] block mb-2">Change Your Email:</label>
                    <input name="email" type="email" className="bg-transparent border border-[--secondary-color] w-full rounded-lg p-1 text-[--secondary-color]"/>
                </div>
                {/* Input Group (Change Phone) */}
                <div className="mt-2">
                    {/* Label */}
                    <label htmlFor="phoneNumber" className="text-sm text-[--secondary-color] block mb-2">Change Your Phone:</label>
                    <input name="phoneNumber" type="number" min={0} className="bg-transparent border border-[--secondary-color] w-full rounded-lg p-1 text-[--secondary-color] appearance-none resize-none"/>
                </div>
                {/* Input Group (Change Country code) */}
                <div className="mt-2">
                    {/* Label */}
                    <label htmlFor="countryCode" className="text-sm text-[--secondary-color] block mb-2">Change Your Country Code:</label>
                    <input name="countryCode" type="number" min={0} className="bg-transparent border border-[--secondary-color] w-full rounded-lg p-1 text-[--secondary-color]"/>
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

export default EditContact;