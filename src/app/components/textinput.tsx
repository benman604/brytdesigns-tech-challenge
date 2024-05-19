"use client";

export default function InputField({icon, label, placeholder}: {icon: JSX.Element, label: string, placeholder: string}) {
    return (
        <div className="mb-4">
        <label className="mb-1 text-xs text-left text-gray-600" htmlFor="first_name">{label}</label>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
            {/* Icon */}
            {icon}
          </span>
          <input 
            type="text" 
            className="pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm" 
            placeholder={placeholder} 
          />
        </div>
      </div>
    );
}