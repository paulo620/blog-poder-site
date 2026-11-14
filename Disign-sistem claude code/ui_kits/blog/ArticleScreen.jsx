const { Prose, Eyebrow: AEyebrow, SectionHeader: ASectionHeader } = window.IbeIABlogDesignSystem_8b7900;
// Article page layout not captured; body uses the site's real .prose styles. Sample copy.
function ArticleScreen({ post, go, openPost }) {
  return (
    <main style={{ padding: 'clamp(32px,5vw,64px) clamp(16px,4vw,32px) 0' }}>
      <div style={{ maxWidth: 760, margin: '0 auto 32px' }}>
        <a href="#blog" onClick={(e) => { e.preventDefault(); go('Blog'); }} style={{ fontFamily: 'var(--f-display)', fontWeight: 600, fontSize: '.9rem', color: 'var(--c-teal-fg)', textDecoration: 'none' }}>← Voltar ao blog</a>
        <AEyebrow style={{ marginTop: 24 }}>{'// ' + post.date}</AEyebrow>
        <h1 style={{ fontFamily: 'var(--f-display)', fontWeight: 800, fontSize: 'clamp(1.9rem,4.5vw,3rem)', lineHeight: 1.1, letterSpacing: '-.04em', margin: '0 0 16px', color: 'var(--text)', textWrap: 'pretty' }}>{post.title}</h1>
        <p style={{ fontSize: 'clamp(1rem,1.6vw,1.2rem)', lineHeight: 1.65, color: 'var(--text-2)', margin: 0 }}>{post.desc}</p>
      </div>
      <div style={{ maxWidth: 880, margin: '0 auto 40px', borderRadius: 'var(--r-lg)', overflow: 'hidden', border: '1px solid var(--g-border)', boxShadow: 'var(--g-shadow-card)', aspectRatio: '16/9' }}>
        <img src={post.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      </div>
      <Prose>
        <p>Para uma <strong>pequena empresa</strong>, o site é muitas vezes o primeiro contato do cliente com a marca. Ele trabalha 24 horas por dia, responde dúvidas e transforma visitas em pedidos.</p>
        <h2>O que muda na prática</h2>
        <ul><li>Presença confiável no Google e nas redes</li><li>Captação de contatos com formulários simples</li><li>Automação de atendimento com <a href="#">agentes de IA</a></li></ul>
        <blockquote><p>Quem não é encontrado online, simplesmente não é considerado.</p></blockquote>
        <h3>Por onde começar</h3>
        <p>Comece pequeno: uma página com proposta clara, prova social e um botão de contato. Ferramentas visuais e <code>no-code</code> resolvem o resto.</p>
        <pre><code>{'prompt: "Crie uma landing page para uma padaria\nde bairro com botão de WhatsApp"'}</code></pre>
      </Prose>
      <section style={{ maxWidth: 1200, margin: '80px auto 0' }}>
        <ASectionHeader title="Leia também" href="#blog" onLinkClick={(e) => { e.preventDefault(); go('Blog'); }} />
        <window.PostGrid posts={window.IBE_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3)} onOpen={openPost} />
      </section>
    </main>
  );
}
Object.assign(window, { ArticleScreen });
