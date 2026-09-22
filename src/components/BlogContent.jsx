import { PortableText } from '@portabletext/react';

export default function BlogContent({ body }) {
  if (!body) return <p>Loading content...</p>;
  
  return (
    <div className="blog-content">
      <PortableText value={body} />
    </div>
  );
}
