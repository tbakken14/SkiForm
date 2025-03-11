'use client';

import { useState } from 'react';
import { Card } from './card';

export function FeedbackForm() {
    const [status, setStatus] = useState(null);
    const [error, setError] = useState(null);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            setStatus('pending');
            setError(null);
            const myForm = event.target;
            const formData = new FormData(myForm);
            const res = await fetch('/__forms.html', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData).toString()
            });
            if (res.status === 200) {
                setStatus('ok');
            } else {
                setStatus('error');
                setError(`${res.status} ${res.statusText}`);
            }
        } catch (e) {
            setStatus('error');
            setError(`${e}`);
        }
    };

    return (
        <div className="w-full md:max-w-md">
            <Card title="Clinic Feedback">
                <form
                    name="feedback"
                    onSubmit={handleFormSubmit}
                    className="text-black flex flex-col gap-3 align-center"
                    data-netlify="true"
                >
                    <input type="hidden" name="form-name" value="feedback" />
                    <input name="name" type="text" placeholder="Name (Optional)" required className="input input-bordered" />
                    <input name="clinic" type="text" placeholder="Clinic Title" className="input input-bordered" />
                    <input name="positive" type="text" placeholder="What worked well?" required className="input input-bordered" />
                    <input name="negative" type="text" placeholder="What didn't work well?" required className="input input-bordered" />
                    <input name="pace" type="text" placeholder="How was the pacing?" required className="input input-bordered" />
                    <input name="content" type="text" placeholder="How was the content?" required className="input input-bordered" />

                    <button className="btn btn-primary" type="submit" disabled={status === 'pending'}>
                        Submit
                    </button>
                    {status === 'ok' && (
                        <div className="alert alert-success">
                            <SuccessIcon />
                            Submitted!
                        </div>
                    )}
                    {status === 'error' && (
                        <div className="alert alert-error">
                            <ErrorIcon />
                            {error}
                        </div>
                    )}
                </form>
            </Card>
        </div>
    );
}

function SuccessIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
        </svg>
    );
}
function ErrorIcon(success) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
        </svg>
    );
}
