"use client";

import { faFontAwesome, faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
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
        sendNotif: true,
        shareInfo: true,
        notifPref: '',
    });

    const onNotifCheckboxChange = (e: any) => {
        setFormData({...formData, sendNotif: e.target.checked})
    }

    const onShareCheckboxChange = (e: any) => {
        setFormData({...formData, shareInfo: e.target.checked})
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
                    checked={formData.sendNotif}
                    onChange={onNotifCheckboxChange}
                />
                <span className="ml-2 text-gray-700">Send Notifications</span>
            </label> <br />

            <label className="inline-flex items-center">
                <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-600"
                    checked={formData.sendNotif}
                    onChange={onNotifCheckboxChange}
                />
                <span className="ml-2 text-gray-700">Share information with related marketer</span>
            </label> <br />

            <SelectInput 
                label="Notification Preferences" 
                icon={
                    <FontAwesomeIcon icon={faFontAwesome} />
                } 
                options={['Email', 'Text']} 
                value={formData.country}
                onChange={(value) => {setFormData({...formData, country: value})}}
            />

            <div className="flex justify-between mt-5">
                <button className="p-3 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={handlePrevious}>
                    <FontAwesomeIcon className="mr-3" icon={faLeftLong} />
                    Previous
                </button>
                <button 
                    className="p-3 bg-blue-500 text-white rounded hover:bg-blue-600" 
                    onClick={handleSubmit}
                >
                    Register
                </button>
            </div>
        </>
    )
}