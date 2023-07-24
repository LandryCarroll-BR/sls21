import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Post = {
  __typename?: 'Post' | 'MediaItem' | 'Page';
  title?: string | null;
  excerpt?: string | null;
  date?: string | null;
  uri?: string | null;
  author?: {
    __typename?: 'NodeWithAuthorToUserConnectionEdge';
    node: { __typename?: 'User'; name?: string | null };
  } | null;
  featuredImage?: {
    __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
    node: { __typename?: 'MediaItem'; sourceUrl?: string | null };
  } | null;
};

interface FeaturedPostCardType {
  post: Post | null;
}

const FeaturedPostCard: React.FC<FeaturedPostCardType> = ({ post }) => {
  if (!post) return;
  return (
    <div key={post.title} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
      <div className="flex-shrink-0">
        {post.featuredImage?.node?.sourceUrl ? (
          <div className="relative h-[220px]">
            <Image src={post.featuredImage?.node?.sourceUrl} layout="fill" alt="blog image" />
          </div>
        ) : (
          ''
        )}
      </div>
      <div className="flex flex-1 flex-col justify-between bg-white p-6">
        <div className="flex-1">
          <p className="text-sm font-medium text-blue-600">Featured</p>
          <Link href={post.uri} className="mt-2 block">
            <p className="text-xl font-semibold text-gray-900">{post.title}</p>
            <div
              className="mt-3 text-base text-gray-500"
              dangerouslySetInnerHTML={{ __html: post?.excerpt }}
            />
          </Link>
        </div>
        <div className="mt-6 flex items-center">
          <div className="flex-shrink-0">
            {/* <a href={post.author.href}> */}
            {/* <span className="sr-only">{post.author.node.name}</span> */}
            {/* <div className="prose prose-img:rounded-full relative h-10 w-10">
              <SanityImage image={post.authorImage} />
            </div> */}
            {/* </a> */}
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">
              {/* <a href={post.author.href} className="hover:underline"> */}
              {post.author.node.name}
              {/* </a> */}
            </p>
            <div className="flex space-x-1 text-sm text-gray-500">
              <time dateTime={'datetime'}>{new Date(post.date).toDateString()}</time>
              {/* <span aria-hidden="true">&middot;</span> */}
              {/* <span>{post.readTime ?? '5'}m read</span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPostCard;
