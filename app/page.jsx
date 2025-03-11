import { Markdown } from 'components/markdown';
import { FeedbackForm } from 'components/feedback-form';

const explainer = `
In order to improve clinics, we'd like to hear from you!`;

export default async function Page() {
    return (
        <>
            <h1 className="flex w-full justify-center">Ski Form</h1>
            <Markdown content={explainer} className="flex w-full justify-center"/>
            <div className="flex w-full pt-12 justify-center">
                <FeedbackForm />
            </div>
        </>
    );
}


