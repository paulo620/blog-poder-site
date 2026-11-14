const { Eyebrow } = window.IbeIABlogDesignSystem_8b7900;
// Not captured from source — reuses the home grid pattern for the /blog/ index.
function BlogScreen({ openPost }) {
  const posts = [...window.IBE_POSTS, ...window.IBE_POSTS.slice(0, 3).map((p) => ({ ...p, slug: p.slug + '-b' }))];
  return (
    <main style={{ padding: 'clamp(32px,5vw,64px) clamp(16px,4vw,32px) 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <Eyebrow>// blog</Eyebrow>
        <h1 style={{ fontFamily: 'var(--f-display)', fontWeight: 800, fontSize: 'clamp(2rem,5vw,3.5rem)', lineHeight: 1.05, letterSpacing: '-.04em', margin: '0 0 40px', color: 'var(--text)' }}>Todos os posts</h1>
        <window.PostGrid posts={posts} onOpen={openPost} />
      </div>
    </main>
  );
}
Object.assign(window, { BlogScreen });
