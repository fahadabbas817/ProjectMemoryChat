import React, { useContext, useState} from "react";
import { z } from "zod";
import { useNavigate} from "react-router-dom";
import { toast } from "sonner";
import Loader from "@/components/Loader";
import axios from "axios";
import { ChatContext } from "@/components/ChatContext";

const RegisterForm = () => {
 const {earlyAccessEmail} = useContext(ChatContext)

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [signupData, setSignupData] = useState({
    name: "",
    email: earlyAccessEmail,
    age: null,
    children: null,
    country: "",
  });
  const [errors, setErrors] = useState({});

  
 
  const countryList =  [
    "Algeria", "Angola", "Antigua and Barbuda", "Argentina",
  "Armenia",  "Australia",  "Azerbaijan",  "Bahrain",  "Barbados",  "Belarus",  "Belgium",  "Belize",  "Benin",  "Bolivia",  "Brazil",  "Burkina Faso",  "Burundi",  "Cameroon",  "Canada",  "Cape Verde",  "Central African Republic",  "Chad",  "Chile",  "China",  "Colombia",  "Comoros",  "Congo",  "Costa Rica",  "Croatia",  "Cuba",  "Djibouti",  "Dominican Republic",  "East Timor",  "Ecuador",  "Egypt",  "El Salvador",  "Equatorial Guinea",  "Estonia",  "Fiji",  "France",  "Gabon",  "Georgia",  "Ghana",  "Grenada",  "Guatemala",  "Guinea",  "Guinea-Bissau",  "Guyana",  "Honduras",  "Hong Kong",  "India",  "Iraq",  "Ireland",  "Italy",  "Ivory Coast",
  "Jamaica",  "Jordan",  "Kazakhstan",  "Kenya",  "Kuwait",  "Kyrgyzstan",  "Latvia",  "Lebanon",  "Liberia",  "Libya",  "Lithuania",  "Luxembourg",  "Macau",  "Madagascar",  "Malaysia",  "Mali",  "Malta",  "Mauritania",  "Mauritius",  "Mexico",  "Moldova",  "Monaco",
  "Morocco",  "Mozambique",  "Nepal",  "New Zealand",  "Nicaragua",  "Niger",  "Nigeria",  "Oman",  "Pakistan",  "Palestine",  "Panama",  "Papua New Guinea",  "Paraguay",  "Peru",  "Philippines",  "Portugal",  "Puerto Rico",  "Qatar",  "Republic of the Congo",  "Russia",  "Rwanda",  "Saint Kitts and Nevis",  "Saint Lucia",  "Saint Vincent and the Grenadines",  "San Marino",  "Sao Tome and Principe",  "Saudi Arabia",  "Senegal",  "Seychelles",  "Singapore",  "Slovenia",  "Somalia",  "South Africa",  "Spain",  "Sudan",  "Suriname",  "Switzerland",  "Syria",  "Taiwan",  "Tajikistan",  "Togo",  "Trinidad and Tobago",  "Tunisia",  "Uganda",  "Ukraine",  "United Arab Emirates",  "United Kingdom",  "United States",  "Uruguay",  "Uzbekistan",  "Vanuatu",  "Vatican City",  "Venezuela",  "Yemen",  "Zimbabwe"
];
 

  const [filteredCountries, setFilteredCountries] = useState([]);

  const handleCountryChange = (e) => {
      const userInput = e.target.value;
      setSignupData({...signupData, country:userInput})

      const filtered = countryList.filter(country =>
          country.toLowerCase().includes(userInput.toLowerCase())
      );

      setFilteredCountries(filtered);
  };

  const handleSelectCountry = (Country) => {
      setSignupData({...signupData,country:Country})
      setFilteredCountries([]);
  };
  
  const createBrevoContact = async (userinfo) => {
    try {
      const response = await axios.post(import.meta.env.VITE_CREATE_CONTACT_API_URL, userinfo); 
      toast.success('Contact created successfully!');
      return response.data;
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message || 'Failed to create contact');
      } else {
        toast.error(error.message);
      }
      throw error;
    }
  };

  const signUpSchema = z.object({
    email: z
      .string()
      .email("Invalid Email Address")
      .min(1, "Email is required"),
    country: z.string().min(3, "Enter valid Country Name"),
    name: z.string().min(4, "Name must be greater than 4"),
    age: z.string({ message: "Age should be in integers" }).min(1),
    children: z.string({
      message: "Number of Childrens should be in integers",
    }),
  });

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    const result = signUpSchema.safeParse(signupData);
    if (!result.success) {
      const formattedErrors = result.error.format();
      setErrors(formattedErrors);
      setLoading(false);
    } else {
      setErrors({});

      try {
        await createBrevoContact(signupData);
        toast.success(
          "Verify Your Email",
          {
            description:"A Confirmation Link has been sent to your specified Email Address Click on this link to Complete Your Registration"
          }
        );
        setLoading(false);
        setTimeout(() => navigate("/"), 4000);
      } catch (error) {
        toast.error(
          error.message ||
            "An Error Occured While Registration Please Try again"
        );
        setLoading(false);
      }
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFA500] transition duration-100 ease-in">
      {/* sm:shadow-2xl */}
      <div className=" p-8 sm:p-16 rounded  sm:w-2/3 w-full">
        <h2 className="text-2xl sm:text-3xl text-center font-bold mb-10 text-black">
          REGISTER
        </h2>

        <form onSubmit={handleSignUp} className="space-y-5">
          <div className="Name">
            <label className="block mb-1 font-bold text-black">Name</label>
            <input
              onChange={(e) => {
                setSignupData({ ...signupData, name: e.target.value });
                setErrors({});
              }}
              type="text"
              className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-black"
            />
          </div>
          {errors.name && (
            <p className={`text-xs text-red-600`}>{errors.name._errors[0]}</p>
          )}

          <div className="email">
            <label className="block mb-1 font-bold text-black">Email</label>
            <input
              onChange={(e) => {
                setSignupData({ ...signupData, email: e.target.value });
                
                setErrors({});
              }}
              value={signupData.email}
              type="email"
              
              className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-black"
            />
          </div>
          {errors.email && (
            <p className={`text-xs text-red-600`}>{errors.email._errors[0]}</p>
          )}

           <div className="country">  
                <label className="block mb-1 font-bold text-black">Country</label>
                <input
                        type="text"
                        value={signupData.country}
                        onChange={handleCountryChange}
                        className="ageInput flex justify-between w-full border-2 bg-white border-gray-200 p-3 rounded outline-none focus-within:border-black"
                    />
                    {filteredCountries.length > 0 && (
                        <ul className="absolute z-10 bg-white border border-gray-300 rounded-md  mt-1 max-h-60 overflow-y-auto">
                            {filteredCountries.map((country, index) => (
                                <li
                                    key={index}
                                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                                    onClick={() => handleSelectCountry(country)}
                                >
                                    {country}
                                </li>
                            ))}
                        </ul>
                    )}
            </div>
            {errors.country && (
            <p className={`text-xs text-red-600`}>
              {errors.country._errors[0]}
            </p>
          )} 
          <div className="">
            <label className="block mb-1 font-bold text-black">Age</label>
            <div className="ageInput flex justify-between w-full border-2 bg-white border-gray-200 p-3 rounded outline-none focus-within:border-black ">
              <input
                onChange={(e) => {
                  setSignupData({ ...signupData, age: e.target.value });
                  setErrors({});
                }}
                className="outline-none w-3/4"
              />
            </div>
          </div>
          {errors.age && (
            <p className={`text-xs text-red-600`}>{errors.age._errors[0]}</p>
          )}
          <div className="">
            <label className="block mb-1 font-bold text-black">
              Children
            </label>
            <div className="passwordInput flex justify-between w-full border-2 bg-white border-gray-200 p-3 rounded outline-none focus-within:border-black ">
              <input
                onChange={(e) => {
                  setSignupData({ ...signupData, children: e.target.value });
                  setErrors({});
                }}
                className="outline-none w-3/4"
              />
            </div>
          </div>
          {errors.children && (
            <p className={`text-xs text-red-600`}>
              {errors.children._errors[0]}
            </p>
          )}
          <button
            type="submit"
            disabled={loading}
            className=" w-full disabled:cursor-not-allowed bg-black p-4 rounded text-white text-lg font-bold hover:translate-y-2  transition-all ease-in duration-500"
          >
            {loading ? <Loader /> : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
