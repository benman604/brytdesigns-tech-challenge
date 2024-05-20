"use client";

import { faFontAwesome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputField from "../components/textinput";
import { useState } from "react";

interface AddressProps {
    onNext: (formData: Record<string, string>) => void;
    onPrevious: () => void;
}

export default function Address({ onNext, onPrevious }: AddressProps) {
    const [formData, setFormData] = useState<{ [key: string]: string }>({
        address: '',
        apptSuite: '',
        country: '',
        city: '',
        zip: '',
        company: '',
        phone: ''
    });

    const requiredFields = ['address', 'country', 'city', 'zip']
    const isAllFieldsFilled = requiredFields.every(field => formData[field] && formData[field] !== '')

    const handleSubmit = () => {
        onNext(formData)
    }

    return (
        <>
            <div className="flex justify-between">
                <div className="w-1/2">
                <InputField 
                    label="Address *" 
                    icon={
                        <FontAwesomeIcon icon={faFontAwesome} />
                    } 
                    placeholder="Placeholder" 
                    value={formData.address}
                    onChange={(value) => {setFormData({...formData, address: value})}}
                />
                </div>
                <div className="w-1/2">
                    <InputField 
                        label="Apartment, Suite, etc." 
                        icon={
                            <FontAwesomeIcon icon={faFontAwesome} />
                        } 
                        placeholder="Placeholder" 
                        value={formData.apptSuite}
                        onChange={(value) => {setFormData({...formData, apptSuite: value})}}
                    />
                </div>
            </div>


            <div className="flex justify-between">
                <div className="w-1/3">
                <InputField 
                    label="Country *" 
                    icon={
                        <FontAwesomeIcon icon={faFontAwesome} />
                    } 
                    placeholder="Placeholder" 
                    value={formData.country}
                    onChange={(value) => {setFormData({...formData, country: value})}}
                />
                </div>
                <div className="w-1/3">
                    <InputField 
                        label="City *" 
                        icon={
                            <FontAwesomeIcon icon={faFontAwesome} />
                        } 
                        placeholder="Placeholder" 
                        value={formData.city}
                        onChange={(value) => {setFormData({...formData, city: value})}}
                    />
                </div>
                <div className="w-1/3">
                    <InputField 
                        label="Zipcode *" 
                        icon={
                            <FontAwesomeIcon icon={faFontAwesome} />
                        } 
                        placeholder="Placeholder" 
                        value={formData.zip}
                        onChange={(value) => {setFormData({...formData, zip: value})}}
                    />
                </div>
            </div>

            <InputField 
                label="Company" 
                icon={
                    <FontAwesomeIcon icon={faFontAwesome} />
                } 
                placeholder="Placeholder" 
                value={formData.company}
                onChange={(value) => {setFormData({...formData, company: value})}}
            />

            <InputField 
                label="Phone Number" 
                icon={
                    <FontAwesomeIcon icon={faFontAwesome} />
                } 
                placeholder="Placeholder" 
                value={formData.phone}
                onChange={(value) => {setFormData({...formData, phone: value})}}
            />

            <div className="flex justify-between mt-5">
                <button className="p-3 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={onPrevious}>
                    <FontAwesomeIcon className="mr-3" icon={faFontAwesome} />
                    Previous
                </button>
                <button className="p-3 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={handleSubmit}>
                    Next
                    <FontAwesomeIcon className="ml-3" icon={faFontAwesome} />
                </button>
            </div>
        </>
    )
}