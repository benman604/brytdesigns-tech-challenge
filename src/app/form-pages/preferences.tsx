"use client";

import { faFontAwesome, faLongArrowAltLeft, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputField from "../components/textinput";
import SelectInput from "../components/selectinput";
import { useState, useEffect } from "react";

interface PreferencesProps {
    onNext: (formData: Record<string, string>) => void;
    onPrevious: (formData: Record<string, string>) => void;
    savedData: Record<string, string>;
}

export default function Preferences({ onNext, onPrevious, savedData={} }: PreferencesProps) {
    const [formData, setFormData] = useState<{ [key: string]: any }>({
        wantsNotifications: 'Yes',
        shareInformation: 'Yes',
        notificationPreferences: 'Email',
    });

    const onNotifCheckboxChange = (e: any) => {
        setFormData({...formData, wantsNotifications: (e.target.checked) ? 'Yes' : 'No' })
    }

    const onShareCheckboxChange = (e: any) => {
        setFormData({...formData, shareInformation: (e.target.checked) ? 'Yes' : 'No' })
    }

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
            <label className="inline-flex items-center">
                <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-600"
                    checked={(formData.wantsNotifications === 'Yes')}
                    onChange={onNotifCheckboxChange}
                />
                <span className="ml-2 text-gray-700">Send Notifications</span>
            </label> <br />

            <label className="inline-flex items-center">
                <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-600"
                    checked={(formData.shareInformation === 'Yes')}
                    onChange={onShareCheckboxChange}
                />
                <span className="ml-2 text-gray-700">Share information with related marketer</span>
            </label> <br />

            <SelectInput 
                label="Notification Preferences" 
                icon={
                    <FontAwesomeIcon icon={faFontAwesome} />
                } 
                options={['Email', 'Text']} 
                value={formData.notificationPreferences}
                onChange={(value) => {setFormData({...formData, notificationPreferences: value})}}
            />

            <div className="flex justify-between mt-5">
                <button className="p-3 border border-blue-500 text-blue-500 rounded hover:bg-blue-50" onClick={handlePrevious}>
                    <FontAwesomeIcon className="mr-3" icon={faLongArrowAltLeft} />
                    Previous
                </button>
                <button 
                    className="p-3 bg-blue-500 text-white rounded hover:bg-blue-600" 
                    onClick={handleSubmit}
                >
                    Register
                    <FontAwesomeIcon className="ml-3" icon={faCheckCircle} />
                </button>
            </div>
        </>
    )
}