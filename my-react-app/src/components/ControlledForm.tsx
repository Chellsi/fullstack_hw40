import React, { useState } from "react";
import '../App.css'

export const ControlledForm = () => {
    const [value, setValue] = useState("idle");

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setValue(event.target.value);
    }

    return (
        <form className="flex flex-col gap-4">
            <label className="flex flex-col gap-2">
                Status:
                <select value={value} onChange={handleChange} className="border border-gray-300 rounded-md p-2 mb-4">
                    <option value="idle">Idle</option>
                    <option value="submitting">Submitting</option>
                    <option value="success">Success</option>
                    <option value="error">Error</option>
                </select>
            </label>
        </form>
    )
}