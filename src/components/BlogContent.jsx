import { PortableText } from '@portabletext/react';
import imageUrlBuilder from '@sanity/image-url';
import { sanityClient } from '../lib/sanity'; // Import your sanity connection

// 1. Setup the image URL builder
const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

// 2. Tell PortableText exactly how to render Sanity 'image' blocks
const myPortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) return null;
      return (
        <img
          src={urlFor(value).width(800).auto('format').url()}
          alt={value.alt || 'Blog image'}
          style={{ width: '100%', borderRadius: '12px', marginTop: '2rem', marginBottom: '2rem' }}
        />
      );
    },
  },
};

export default function BlogContent({ body }) {
  // If there is no body content at all
  if (!body) return <p>No content written for this post yet!</p>;

  // If the body is a simple string
  if (typeof body === 'string') {
    return (
      <div className="blog-content">
        <p>{body}</p>
      </div>
    );
  }

  // Render Rich Text and pass in our custom Image Rules!
  return (
    <div className="blog-content">
      <PortableText value={body} components={myPortableTextComponents} />
    </div>
  );
}
