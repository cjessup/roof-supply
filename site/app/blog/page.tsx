import Link from 'next/link';

const posts = [
  {
    slug: 'roofing-material-delivery-gardena-ca',
    title: "Roofing Materials Delivery in Gardena CA Jobsite Checklist",
    date: "May 30, 2026",
    excerpt: "If you live and work in Southern California long enough, you start to notice something…",
  },
  {
    slug: 'roof-leak-repair-gardena-ca',
    title: "Roof Leak Repair in Gardena CA: Common Leak Spots and How to Fix Them Fast",
    date: "May 15, 2026",
    excerpt: "If you live and work in Southern California long enough, you start to notice something…",
  },
  {
    slug: 'tpo-vs-pvc-commercial-roofing',
    title: "TPO vs PVC Commercial Roofing in Gardena CA",
    date: "April 29, 2026",
    excerpt: "If you live and work in Southern California long enough, you start to notice something…",
  },
];

export default function BlogPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div className="mb-10">
        <div className="uppercase tracking-[2px] text-xs font-semibold text-amber-600 mb-2">INSIGHTS</div>
        <h1 className="text-4xl font-semibold tracking-tight">The Roof Supply Co. Blog</h1>
        <p className="mt-2 text-gray-600">Tips, guides, and industry updates for contractors and homeowners.</p>
      </div>

      <div className="space-y-8">
        {posts.map((post, index) => (
          <article key={index} className="border rounded-2xl p-8 hover:border-gray-300 transition">
            <div className="text-sm text-gray-500">{post.date}</div>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight">
              <Link href={`/blog#${post.slug}`} className="hover:text-blue-800">{post.title}</Link>
            </h2>
            <p className="mt-3 text-gray-600">{post.excerpt}</p>
            <Link href={`/blog#${post.slug}`} className="mt-3 inline-block text-sm font-medium text-blue-800 hover:underline">
              Read full article →
            </Link>
          </article>
        ))}
      </div>

      <div className="mt-12 text-sm text-gray-500">
        Note: This is a static demo of the blog. In a real deployment, these would be dynamic posts or connected to a CMS.
      </div>
    </div>
  );
}
