const { Hero, Button, SectionHeader, PostCard } = window.IbeIABlogDesignSystem_8b7900;
function PostGrid({ posts, onOpen }) {
  const w = window.innerWidth;
  const cols = w >= 1024 ? 3 : w >= 640 ? 2 : 1;
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(' + cols + ', minmax(0,1fr))', gap: 24 }}>
      {posts.map((p) => <PostCard key={p.slug} image={p.img} date={p.date} title={p.title} description={p.desc} href={'#' + p.slug} onClick={(e) => { e.preventDefault(); onOpen(p); }} />)}
    </div>
  );
}
function HomeScreen({ go, openPost }) {
  return (
    <main>
      <Hero title="O seu portal para" titleEm="criar com IA"
        actions={<><Button variant="ghost" href="#blog" onClick={(e) => { e.preventDefault(); go('Blog'); }}>Ler o Blog</Button><Button href="https://ibe.ia.br/" target="_blank">Conheça a ibe.IA →</Button></>}>
        O melhor lugar para você aprender sobre <strong style={{ color: 'var(--text)' }}>AI Coding</strong>, <strong style={{ color: 'var(--text)' }}>Vibe Coding</strong>, <strong style={{ color: 'var(--text)' }}>No Code</strong>, criação de aplicativos e <strong style={{ color: 'var(--text)' }}>Agentes IA</strong> com ferramentas visuais.
      </Hero>
      <section style={{ padding: '64px clamp(16px,4vw,32px)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SectionHeader title="Últimos posts" href="#blog" onLinkClick={(e) => { e.preventDefault(); go('Blog'); }} />
          <PostGrid posts={window.IBE_POSTS} onOpen={openPost} />
        </div>
      </section>
    </main>
  );
}
Object.assign(window, { HomeScreen, PostGrid });
