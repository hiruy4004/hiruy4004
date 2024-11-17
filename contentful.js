import { createClient }
from'contentful';
const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});


import client from './contentful';

export async function getStaticProps() {
    const entries = await client.getEntries({ content_type: 'yourContentType' });
    return {
        props: { entries: entries.items },
    };
}
export default function Home({ entries }) {
    return (
        <div>
            {entries.map(entry => (
                <div key={entry.sys.id}>
                    <h1>{entry.fields.title}</h1>
                    <p>{entry.fields.description}</p>
                </div>
            ))}
        </div>
    );
}
