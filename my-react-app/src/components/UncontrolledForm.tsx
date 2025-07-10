import React, { useRef } from "react";

export const UncontrolledForm = () => {
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const enteredName = nameRef.current?.value;
        const enteredEmail = emailRef.current?.value;
        const enteredMessage = messageRef.current?.value;
        if (!enteredName || !enteredEmail || !enteredMessage) {
            alert("Please fill in all fields");
            return;
        }
        alert(enteredName + " " + enteredEmail + " " + enteredMessage);

        event.currentTarget.reset();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" ref={nameRef} />
            <input type="email" name="email" ref={emailRef} />
            <input type="text" name="message" ref={messageRef} />
            <button type="submit">Submit</button>
        </form>
    )
}