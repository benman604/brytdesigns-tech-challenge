"use client";

import { faFontAwesome, faLongArrowAltLeft, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputField from "../components/textinput";
import SelectInput from "../components/selectinput";
import { useState, useEffect } from "react";

interface AddressProps {
    onNext: (formData: Record<string, string>) => void;
    onPrevious: (formData: Record<string, string>) => void;
    savedData: Record<string, string>;
}

export default function Address({ onNext, onPrevious, savedData={} }: AddressProps) {
    const [formData, setFormData] = useState<{ [key: string]: string }>({
        address1: '',
        address2: '',
        country: 'US',
        city: '',
        zipCode: '',
        company: '',
        phoneNumber: ''
    });

    const requiredFields = ['address1', 'country', 'city', 'zipCode']
    const isAllFieldsFilled = requiredFields.every(field => formData[field] && formData[field] !== '')

    useEffect(() => {
        if (savedData && Object.keys(savedData).length > 0) {
            setFormData(savedData)
        }
    }, [])

    const handleSubmit = () => {
        onNext(formData)
    }

    const handlePrevious = () => {
        onPrevious(formData)
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
                    value={formData.address1}
                    onChange={(value) => {setFormData({...formData, address1: value})}}
                />
                </div>
                <div className="w-1/2">
                    <InputField 
                        label="Apartment, Suite, etc." 
                        icon={
                            <FontAwesomeIcon icon={faFontAwesome} />
                        } 
                        placeholder="Placeholder" 
                        value={formData.address2}
                        onChange={(value) => {setFormData({...formData, address2: value})}}
                    />
                </div>
            </div>


            <div className="flex justify-between">
                <div className="w-1/3">
                    <SelectInput 
                        label="Country *" 
                        icon={
                            <FontAwesomeIcon icon={faFontAwesome} />
                        } 
                        options={['US', 'Canada', 'Mexico']} 
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
                        value={formData.zipCode}
                        onChange={(value) => {setFormData({...formData, zipCode: value})}}
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
                value={formData.phoneNumber}
                onChange={(value) => {setFormData({...formData, phoneNumber: value})}}
            />

            <div className="flex justify-between mt-5">
                <button className="p-3 border border-blue-500 text-blue-500 rounded hover:bg-blue-50" onClick={handlePrevious}>
                    <FontAwesomeIcon className="mr-3" icon={faLongArrowAltLeft} />
                    Previous
                </button>
                <button 
                    className="p-3 bg-blue-500 disabled:bg-slate-400 text-white rounded hover:bg-blue-600" 
                    onClick={handleSubmit}
                    disabled={!isAllFieldsFilled}
                >
                    Next
                    <FontAwesomeIcon className="ml-3" icon={faRightLong} />
                </button>
            </div>
        </>
    )
}