"use client";

interface InputFieldProps {
    icon: JSX.Element;
    label: string;
    type?: string;
    placeholder?: string;
    value: string;
    onChange: (e: any) => void;
}

export default function InputField({icon, label, type='text', placeholder='Placeholder', value, onChange}: InputFieldProps) {
    const handleChange = (e: any) => {
        onChange(e.target.value);
    }
    
    return (
        <div className="mb-4 p-1">
            <label className="block mb-1 mr-1 left-1 text-left text-xs text-gray-600" htmlFor={label}>{label}</label>
            <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                    {icon}
                </span>
                <input 
                    id={label}
                    type={type} 
                    className="pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm" 
                    placeholder={placeholder} 
                    value={value}
                    onChange={handleChange}
                />
            </div>
        </div>
    );
}