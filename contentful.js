import { createClient }
from'contentful';
const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

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
import Image from 'next/image';

export default function Home({ entries }) {
  return (
    <div>
      {entries.map((entry) => (
        <div key={entry.sys.id}>
          <h1>{entry.fields.title}</h1>
          <p>{entry.fields.description}</p>
          {entry.fields.image && (
            <Image
              src={`https:${entry.fields.image.fields.file.url}`} // Prepend 'https:'
              alt={entry.fields.title}
              width={600} // Adjust width
              height={400} // Adjust height
              priority // Optimizes image loading
            />
          )}
        </div>
      ))}
    </div>
  );
}
