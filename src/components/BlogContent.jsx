import { PortableText } from '@portabletext/react';

export default function BlogContent({ body }) {
  // If there is no body content at all
  if (!body) return <p>No content written for this post yet!</p>;

  // If the body is a simple string (from our quick test schema)
  if (typeof body === 'string') {
    return (
      <div className="blog-content">
        <p>{body}</p>
      </div>
    );
  }

  // If the body is a Rich Text Array (the standard Sanity way)
  return (
    <div className="blog-content">
      <PortableText value={body} />
    </div>
  );
}
