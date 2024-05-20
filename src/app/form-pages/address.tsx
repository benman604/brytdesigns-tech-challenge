"use client";

import { faFontAwesome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputField from "../components/textinput";
import { useState } from "react";

export default function Address({ onNext }: { onNext: (formData: Record<string, string>) => void }) {
    const [formData, setFormData] = useState<{ [key: string]: string }>({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleSubmit = () => {
        onNext(formData)
    }
    
    return (
        <>
            <div className="flex justify-between">
                <div className="w-1/2">
                <InputField 
                    label="First Name" 
                    icon={
                        <FontAwesomeIcon icon={faFontAwesome} />
                    } 
                    placeholder="John" 
                    value={formData.firstName}
                    onChange={(value) => {setFormData({...formData, firstName: value})}}
                />
                </div>
                <div className="w-1/2">
                    <InputField 
                        label="Last Name" 
                        icon={
                            <FontAwesomeIcon icon={faFontAwesome} />
                        } 
                        placeholder="John" 
                        value={formData.lastName}
                        onChange={(value) => {setFormData({...formData, lastName: value})}}
                    />
                </div>
            </div>

            <InputField 
                label="Username" 
                icon={
                    <FontAwesomeIcon icon={faFontAwesome} />
                } 
                placeholder="Placeholder" 
                value={formData.username}
                onChange={(value) => {setFormData({...formData, username: value})}}
            />

            <InputField 
                label="Email address" 
                icon={
                    <FontAwesomeIcon icon={faFontAwesome} />
                } 
                placeholder="Placeholder" 
                value={formData.email}
                onChange={(value) => {setFormData({...formData, email: value})}}
            />

            <div className="flex justify-between">
                <div className="w-1/2">
                <InputField 
                    label="Password" 
                    icon={
                        <FontAwesomeIcon icon={faFontAwesome} />
                    } 
                    placeholder="Placeholder" 
                    value={formData.password}
                    onChange={(value) => {setFormData({...formData, password: value})}}
                />
                </div>
                <div className="w-1/2">
                    <InputField 
                        label="Confirm password" 
                        icon={
                            <FontAwesomeIcon icon={faFontAwesome} />
                        } 
                        placeholder="Password" 
                        value={formData.confirmPassword}
                        onChange={(value) => {setFormData({...formData, confirmPassword: value})}}
                    />
                </div>
            </div>

            <div className="flex justify-between mt-5">
                <p></p>
                <button className="p-3 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={handleSubmit}>
                  Next
                  <FontAwesomeIcon className="ml-3" icon={faFontAwesome} />
                </button>
            </div>
        </>
    )
}