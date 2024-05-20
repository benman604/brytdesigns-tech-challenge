"use client";

import { faFontAwesome, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

import InputField from "../components/textinput";

interface AccountProps {
    onNext: (formData: Record<string, string>) => void;
    savedData: Record<string, string>;
}

export default function Account({ onNext, savedData={} }: AccountProps) {
    const [formData, setFormData] = useState<{ [key: string]: string }>({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    useEffect(() => {
        if (savedData && Object.keys(savedData).length > 0) {
            setFormData(savedData)
        }
    }, [])

    const requiredFields = ['username', 'email', 'password', 'confirmPassword']
    const isAllFieldsFilled = requiredFields.every(field => formData[field] && formData[field] !== '')

    const handleSubmit = () => {
        if (!isAllFieldsFilled) {
            return
        }
        if (formData.password !== formData.confirmPassword) {
            alert('Your passwords do not match. Please try again.')
            return
        }
        if (/^[\w&.\-]*$/.test(formData.password) === false) {
            alert('Password must contain only letters, numbers, and special characters (&, ., -)')
            return
        }
        if (formData.password.length < 10) {
            alert('Password must be at least 10 characters long')
            return
        }
        if (/^[A-Za-z0-9]+@[a-z0-9]+.[a-z]+/.test(formData.email) === false) {
            alert('Please enter a valid email address')
            return
        }
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
                label="Username *" 
                icon={
                    <FontAwesomeIcon icon={faFontAwesome} />
                } 
                placeholder="Placeholder" 
                value={formData.username}
                onChange={(value) => {setFormData({...formData, username: value})}}
            />

            <InputField 
                label="Email address *" 
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
                    label="Password *" 
                    icon={
                        <FontAwesomeIcon icon={faFontAwesome} />
                    } 
                    type="password"
                    placeholder="Placeholder" 
                    value={formData.password}
                    onChange={(value) => {setFormData({...formData, password: value})}}
                />
                </div>
                <div className="w-1/2">
                    <InputField 
                        label="Confirm password *" 
                        icon={
                            <FontAwesomeIcon icon={faFontAwesome} />
                        } 
                        type="password"
                        placeholder="Password" 
                        value={formData.confirmPassword}
                        onChange={(value) => {setFormData({...formData, confirmPassword: value})}}
                    />
                </div>
            </div>

            <div className="flex justify-between mt-5">
                <p></p>
                <button 
                    className="p-3 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-slate-400" 
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