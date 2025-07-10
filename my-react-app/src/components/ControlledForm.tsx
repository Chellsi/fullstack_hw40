import React, { useState } from "react";

export const ControlledForm = () => {
    const [value, setValue] = useState("idle");

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setValue(event.target.value);
    }

    return (
        <form>
            <label>
                Status:
                <select value={value} onChange={handleChange}>
                    <option value="idle">Idle</option>
                    <option value="submitting">Submitting</option>
                    <option value="success">Success</option>
                    <option value="error">Error</option>
                </select>
            </label>
        </form>
    )
}