import { Markdown } from 'components/markdown';
import { FeedbackForm } from 'components/feedback-form';

const explainer = `
In order to improve lesson results, we'd like to hear from you!`;

export default async function Page() {
    return (
        <>
            <div className="flex w-full pt-12 justify-center">
                <h1>Ski Form</h1>
                <Markdown content={explainer} />
                <FeedbackForm />
            </div>
        </>
    );
}


