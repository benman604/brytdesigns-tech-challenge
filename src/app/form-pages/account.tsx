"use client";

import { faFontAwesome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

import InputField from "../components/textinput";

export default function Account() {
    return (
        <>
            {/* horizontal split to 2 halves */}
            <div className="flex justify-between">
                <div className="w-1/2 p-3">
                <InputField 
                    label="First Name" 
                    icon={
                        <FontAwesomeIcon icon={faFontAwesome} />
                    } 
                    placeholder="John" 
                />
                </div>
                <div className="w-1/2 p-3">
                    <InputField 
                        label="Last Name" 
                        icon={
                            <FontAwesomeIcon icon={faFontAwesome} />
                        } 
                        placeholder="John" 
                    />
                </div>
            </div>


        </>
    )
}