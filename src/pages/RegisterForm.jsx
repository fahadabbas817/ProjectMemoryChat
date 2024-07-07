import React, { useState } from "react";
import { z } from "zod";
import { useNavigate} from "react-router-dom";
import { toast } from "sonner";
import Loader from "@/components/Loader";

const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    age: null,
    children: null,
    country: "",
  });
  const [errors, setErrors] = useState({});
 
  const countryList =  [
    // English-speaking countries
    "United Kingdom", "United States", "Canada", "Australia", "New Zealand", "Ireland", "South Africa", 
    "Nigeria", "India", "Philippines", "Singapore", "Kenya", "Jamaica", "Trinidad and Tobago", "Barbados", 
    "Ghana", "Zimbabwe", "Uganda", "Malta", "Fiji", "Papua New Guinea", "Belize", "Saint Kitts and Nevis", 
    "Antigua and Barbuda", "Saint Vincent and the Grenadines", "Saint Lucia", "Grenada", "Guyana", "Liberia",
    
    // French-speaking countries
    "France", "Belgique", "Suisse", "Luxembourg", "Monaco", "Congo", "Côte d'Ivoire", "Sénégal", 
    "Madagascar", "Cameroun", "Burkina Faso", "Niger", "Mali", "Rwanda", "Tchad", "Guinée", "Bénin", 
    "Burundi", "Togo", "République Centrafricaine", "Gabon", "République du Congo", "Djibouti", 
    "Guinée équatoriale", "Comores", "Vanuatu", "Seychelles",

    // Spanish-speaking countries
    "España", "México", "Colombia", "Argentina", "Perú", "Venezuela", "Chile", "Ecuador", "Guatemala", 
    "Cuba", "Bolivia", "Dominican Republic", "Honduras", "Paraguay", "El Salvador", "Nicaragua", 
    "Costa Rica", "Puerto Rico", "Uruguay", "Panama", "Equatorial Guinea",

    // Italian-speaking countries
    "Italia", "Svizzera", "San Marino", "Città del Vaticano", "Slovenia", "Croazia", "Brasile",

    // Chinese-speaking countries
    "中国", "新加坡", "马来西亚", "台湾", "香港", "澳门",

    // Hindi-speaking countries
    "भारत", "फिजी", "नेपाल", "सूरीनाम", "त्रिनिदाद और टोबैगो", "मॉरीशस", "गुयाना",

    // Arabic-speaking countries
    "السعودية", "مصر", "الجزائر", "العراق", "المغرب", "السودان", "تونس", "سوريا", "اليمن", "الأردن", 
    "ليبيا", "لبنان", "الصومال", "الإمارات العربية المتحدة", "فلسطين", "عمان", "الكويت", "موريتانيا", 
    "قطر", "البحرين", "جيبوتي", "جزر القمر",

    // Portuguese-speaking countries
    "Portugal", "Brasil", "Moçambique", "Angola", "Guiné-Bissau", "Timor-Leste", "Guiné Equatorial", 
    "Cabo Verde", "São Tomé e Príncipe",

    // Russian-speaking countries
    "Россия", "Беларусь", "Казахстан", "Киргизия", "Таджикистан", "Узбекистан", "Армения", "Азербайджан", 
    "Грузия", "Молдова", "Украина", "Латвия", "Литва", "Эстония"
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
    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "api-key":import.meta.env.VITE_BREVO_API_KEY,
      },
      body: JSON.stringify({
        attributes: {
          COUNTRY: userinfo.country,
          AGE: userinfo.age,
          NAME: userinfo.name,
          CHILDREN: userinfo.children,
        },
        updateEnabled: false,
        email: userinfo.email,
        templateId: 1,
        redirectionUrl: "http://localhost:5173",
        includeListIds: [2],
      }),
    };
    try {
      const response = await fetch(
        "https://api.brevo.com/v3/contacts/doubleOptinConfirmation",
        options
      );
      if (!response.ok) {
        const errorResponse = await response.json();
        console.log(errorResponse)  
        throw new Error(errorResponse.message || "Failed to create contact");
      }
      const data = await response.json();
      console.log(data)
      return data;
    } catch (error) {
      toast.error(error.message);
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
        console.log("Form submitted successfully", result.data);
        toast.success(
          "A confirmation Email has been sent to your specified Email Address Click on the link to confirm Your Regisration",
          {
            duration: 2000,
          }
        );
        setLoading(false);
        setTimeout(() => navigate("/"), 2000);
      } catch (error) {
        console.log(error);
        toast.error(
          error.message ||
            "An Error Occured While Registration Please Try again"
        );
        setLoading(false);
      }
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#E3F2F2] transition duration-100 ease-in">
      <div className=" bg-transparent sm:bg-white p-8 sm:p-16 rounded sm:shadow-2xl sm:w-2/3 w-full">
        <h2 className="text-xl sm:text-3xl text-center font-bold mb-10 text-gray-800">
          REGISTER
        </h2>

        <form onSubmit={handleSignUp} className="space-y-5">
          <div className="Name">
            <label className="block mb-1 font-bold text-gray-500">Name</label>
            <input
              onChange={(e) => {
                setSignupData({ ...signupData, name: e.target.value });
                setErrors({});
              }}
              type="text"
              className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-blue-500"
            />
          </div>
          {errors.name && (
            <p className={`text-xs text-red-600`}>{errors.name._errors[0]}</p>
          )}

          <div className="email">
            <label className="block mb-1 font-bold text-gray-500">Email</label>
            <input
              onChange={(e) => {
                setSignupData({ ...signupData, email: e.target.value });

                setErrors({});
              }}
              type="email"
              
              className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-blue-500"
            />
          </div>
          {errors.email && (
            <p className={`text-xs text-red-600`}>{errors.email._errors[0]}</p>
          )}

           <div className="country">
                <label className="block mb-1 font-bold text-gray-500">Country</label>
                <input
                        type="text"
                        value={signupData.country}
                        onChange={handleCountryChange}
                        className="ageInput flex justify-between w-full border-2 bg-white border-gray-200 p-3 rounded outline-none focus-within:border-blue-500"
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
            <label className="block mb-1 font-bold text-gray-500">Age</label>
            <div className="ageInput flex justify-between w-full border-2 bg-white border-gray-200 p-3 rounded outline-none focus-within:border-blue-500 ">
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
            <label className="block mb-1 font-bold text-gray-500">
              Children
            </label>
            <div className="passwordInput flex justify-between w-full border-2 bg-white border-gray-200 p-3 rounded outline-none focus-within:border-blue-500 ">
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
            className=" w-full disabled:cursor-not-allowed bg-gradient-to-r from-[#F27104]  to-[#FFCB18] hover:bg-yellow-300 p-4 rounded text-black hover:font-bold hover:translate-y-2  transition-all ease-in duration-500"
          >
            {loading ? <Loader /> : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
