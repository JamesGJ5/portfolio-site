'use client';

export default function ErrorBoundary() {
    return (
        <p>
            {/* TODO: just put the link in this text rather than directing the user to it */}
            Whoops! It looks like there may have been an issue loading my projects but feel free to see my <a aria-label='Link to GitHub repos (opens in new tab)' href='https://github.com/JamesGJ5?tab=repositories' target='_blank'>GitHub repos</a> or contact me via <a aria-label='Link to LinkedIn profile (opens in new tab)' href='https://www.linkedin.com/in/james-graca-jones' target='_blank'>LinkedIn</a> to learn more! :)
        </p>
    );
}
