import { FeedbackForm } from 'components/feedback-form';
import { Markdown } from '../../components/markdown';

export const metadata = {
    title: 'Classics'
};

const explainer = `
In order to improve lesson results, we'd like to hear from you!`;

export default async function Page() {
    return (
        <>
            <h1>Ski Form</h1>
            <Markdown content={explainer} />
            <div className="flex w-full pt-12 justify-center">
                <FeedbackForm />
            </div>
        </>
    );
}