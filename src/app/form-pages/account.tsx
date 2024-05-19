"use client";

import { faFontAwesome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function Account() {
    return (
        <>
            {/* horizontal split to 2 halves */}
            <div className="flex justify-between">
                <div className="w-1/2 p-3">
                    <input
                        type="text"
                        placeholder="Input Field 1"
                        className="w-full p-3 mb-4 border border-gray-300 rounded"
                    />
                </div>
                <div className="w-1/2 p-3">
                    <input
                        type="text"
                        placeholder="Input Field 1"
                        className="w-full p-3 mb-4 border border-gray-300 rounded"
                    />
                </div>
            </div>


            <input
                type="text"
                placeholder="Input Field 2"
                className="w-full p-3 mb-4 border border-gray-300 rounded"
            />
            <button className="w-full p-3 bg-blue-500 text-white rounded hover:bg-blue-600">
                Submit
            </button>
        </>
    )
}