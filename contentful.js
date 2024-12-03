import { createClient } from 'contentful';

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticProps() {
    const entries = await client.getEntries({ content_type: 'yourContentType' });
    const assets = await client.getAssets();

    return {
        props: {
            entries: entries.items,
            assets: assets.items.filter(asset => asset.fields.file.contentType === 'application/pdf'),
        },
    };
}
