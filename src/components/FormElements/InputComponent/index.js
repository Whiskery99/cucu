

export default function InputComponent({ label, placeholder, type, value, onChange }){
    return(
        <div className="relative ">
            <p className="py-0 px-2 -mt-3 mr-0 mb-0 ml-0 font-medium text-gray-600">{label}</p>
            <input 
             placeholder={placeholder}
             type={ type || 'text'}
             value={value}
             onChange={onChange}
             className="border placeholder-[#fd961a] text-black focus:outline-none focus:border-black w-full p-4 mx-0 mb-0 text-base block bg-white border-gray-300 rounded-lg"
            />
        </div>
    )
}