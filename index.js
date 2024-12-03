import Image from 'next/image';
import { getStaticProps } from '../contentful';

export default function Home({ entries, assets }) {
    return (
        <div>
            {entries.map(entry => (
                <div key={entry.sys.id}>
                    <h1>{entry.fields.title}</h1>
                    <p>{entry.fields.description}</p>
                    {entry.fields.image && (
                        <Image
                            src={`https:${entry.fields.image.fields.file.url}`}
                            alt={entry.fields.title}
                            width={600}
                            height={400}
                            priority
                        />
                    )}
                </div>
            ))}

            <h2>Available PDFs</h2>
            <ul>
                {assets.map(asset => (
                    <li key={asset.sys.id}>
                        <a href={asset.fields.file.url} target="_blank" rel="noopener noreferrer">
                            {asset.fields.title}
                        </a>
                    </li>
                ))}
            </ul>

            <h2>Images from Contentful</h2>
            <div className="gallery">
                {assets.map(asset => (
                    asset.fields.file.contentType.startsWith('image/') && (
                        <div key={asset.sys.id} className="card">
                            <Image
                                src={`https:${asset.fields.file.url}`}
                                alt={asset.fields.title}
                                width={300}
                                height={200}
                            />
                            <h3>{asset.fields.title}</h3>
                        </div>
                    )
                ))}
            </div>

            <h2>PDFs Display Block</h2>
            <div className="pdf-display">
                {assets.filter(asset => asset.fields.file.contentType === 'application/pdf').map(asset => (
                    <div key={asset.sys.id} className="pdf-card">
                        <h3>{asset.fields.title}</h3>
                        <a href={asset.fields.file.url} target="_blank" rel="noopener noreferrer">
                            View PDF
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}