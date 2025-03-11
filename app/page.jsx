import Link from 'next/link';
import { Card } from 'components/card';
import { RandomQuote } from 'components/random-quote';
import { Markdown } from 'components/markdown';
import { ContextAlert } from 'components/context-alert';
import { getNetlifyContext } from 'utils';
import { FeedbackForm } from 'components/feedback-form';

const cards = [
    //{ text: 'Hello', linkText: 'someLink', href: '/' }
];

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


