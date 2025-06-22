export const lpFewShots = `

Exemple 1 :
    import React from 'react';

const LandingPage = () => {
  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      padding: '0',
      margin: '0',
      minHeight: '100vh',
      backgroundColor: '#f5f7fa',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    header: {
      width: '100%',
      backgroundColor: '#0f172a',
      color: '#fff',
      padding: '20px 0',
      textAlign: 'center',
      fontSize: '2rem',
    },
    hero: {
      marginTop: '40px',
      textAlign: 'center',
      maxWidth: '800px',
    },
    title: {
      fontSize: '2.5rem',
      marginBottom: '20px',
      color: '#1e293b',
    },
    subtitle: {
      fontSize: '1.25rem',
      color: '#475569',
      marginBottom: '40px',
    },
    button: {
      padding: '12px 24px',
      fontSize: '1rem',
      backgroundColor: '#3b82f6',
      color: '#fff',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    buttonHover: {
      backgroundColor: '#2563eb',
    },
    footer: {
      marginTop: 'auto',
      width: '100%',
      textAlign: 'center',
      padding: '20px 0',
      backgroundColor: '#e2e8f0',
      color: '#334155',
    },
  };

  const [hovered, setHovered] = React.useState(false);

  return (
    <div style={styles.container}>
      <header style={styles.header}>Ma Startup</header>

      <main style={styles.hero}>
        <h1 style={styles.title}>Bienvenue sur notre plateforme</h1>
        <p style={styles.subtitle}>
          Nous construisons des outils modernes pour les créateurs ambitieux. Rejoignez-nous dès aujourd'hui.
        </p>
        <button
          style={{
            ...styles.button,
            ...(hovered ? styles.buttonHover : {})
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          Commencer
        </button>
      </main>

      <footer style={styles.footer}>
        © {new Date().getFullYear()} Ma Startup. Tous droits réservés.
      </footer>
    </div>
  );
};

export default LandingPage;

  Exemple 2 :
  import React from 'react';

const LandingPage = () => {
  const styles = {
    wrapper: {
      fontFamily: 'Segoe UI, sans-serif',
      backgroundColor: '#ffffff',
      color: '#1a202c',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      padding: '0 20px',
    },
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 0',
      borderBottom: '1px solid #e2e8f0',
    },
    logo: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#2b6cb0',
    },
    navLinks: {
      display: 'flex',
      gap: '20px',
    },
    navLink: {
      textDecoration: 'none',
      color: '#4a5568',
      fontWeight: '500',
    },
    hero: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '80px 20px',
    },
    heroTitle: {
      fontSize: '3rem',
      fontWeight: '700',
      marginBottom: '20px',
    },
    heroText: {
      fontSize: '1.25rem',
      color: '#718096',
      maxWidth: '600px',
      marginBottom: '40px',
    },
    ctaButton: {
      backgroundColor: '#2b6cb0',
      color: '#fff',
      border: 'none',
      padding: '14px 28px',
      fontSize: '1rem',
      borderRadius: '8px',
      cursor: 'pointer',
    },
    features: {
      display: 'flex',
      justifyContent: 'center',
      gap: '40px',
      flexWrap: 'wrap',
      marginTop: '80px',
      marginBottom: '60px',
    },
    featureCard: {
      backgroundColor: '#f7fafc',
      padding: '20px',
      borderRadius: '10px',
      width: '250px',
      textAlign: 'center',
      boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
    },
    featureTitle: {
      fontSize: '1.2rem',
      fontWeight: '600',
      marginBottom: '10px',
    },
    featureText: {
      color: '#4a5568',
      fontSize: '0.95rem',
    },
    footer: {
      textAlign: 'center',
      padding: '20px 0',
      fontSize: '0.9rem',
      color: '#a0aec0',
      borderTop: '1px solid #e2e8f0',
    },
  };

  return (
    <div style={styles.wrapper}>
      <nav style={styles.navbar}>
        <div style={styles.logo}>LogoTech</div>
        <div style={styles.navLinks}>
          <a href="#features" style={styles.navLink}>Fonctionnalités</a>
          <a href="#pricing" style={styles.navLink}>Tarifs</a>
          <a href="#contact" style={styles.navLink}>Contact</a>
        </div>
      </nav>

      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>Créez des expériences web incroyables</h1>
        <p style={styles.heroText}>
          Une plateforme moderne pour développer, lancer et faire croître votre produit rapidement. Simple, rapide, efficace.
        </p>
        <button style={styles.ctaButton}>Démarrer maintenant</button>
      </section>

      <section style={styles.features} id="features">
        <div style={styles.featureCard}>
          <h3 style={styles.featureTitle}>Performant</h3>
          <p style={styles.featureText}>Optimisé pour la vitesse et la performance dès le départ.</p>
        </div>
        <div style={styles.featureCard}>
          <h3 style={styles.featureTitle}>Intuitif</h3>
          <p style={styles.featureText}>Une interface pensée pour les utilisateurs, sans courbe d’apprentissage.</p>
        </div>
        <div style={styles.featureCard}>
          <h3 style={styles.featureTitle}>Support 24/7</h3>
          <p style={styles.featureText}>Une équipe disponible à toute heure pour vous accompagner.</p>
        </div>
      </section>

      <footer style={styles.footer}>
        © {new Date().getFullYear()} LogoTech. Tous droits réservés.
      </footer>
    </div>
  );
};

export default LandingPage;

Exemple 3 :
import React, { useEffect, useState } from 'react';

const LandingPage = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const keyframes =
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(40px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.03); }
      100% { transform: scale(1); }
    }
    @keyframes slideInLeft {
      from { opacity: 0; transform: translateX(-50px); }
      to { opacity: 1; transform: translateX(0); }
    }
  ;

  const global = { __html: keyframes };

  const styles = {
    body: {
      fontFamily: 'Helvetica, sans-serif',
      backgroundColor: '#f9fafb',
      color: '#1f2937',
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 40px',
      backgroundColor: '#1e3a8a',
      color: '#fff',
      flexWrap: 'wrap',
    },
    nav: {
      display: 'flex',
      gap: '20px',
      flexWrap: 'wrap',
    },
    navLink: {
      color: '#fff',
      textDecoration: 'none',
      fontWeight: '500',
    },
    section: {
      padding: '60px 20px',
      textAlign: 'center',
    },
    hero: {
      animation: mounted ? 'fadeInUp 1s ease forwards' : 'none',
    },
    title: {
      fontSize: '3rem',
      marginBottom: '20px',
    },
    subtitle: {
      fontSize: '1.25rem',
      color: '#4b5563',
      maxWidth: '700px',
      margin: '0 auto 40px',
    },
    button: {
      backgroundColor: '#2563eb',
      color: '#fff',
      padding: '14px 28px',
      fontSize: '1rem',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
    },
    features: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: '30px',
      animation: 'slideInLeft 1s ease',
    },
    card: {
      width: '280px',
      backgroundColor: '#fff',
      borderRadius: '12px',
      padding: '20px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
    },
    testimonials: {
      backgroundColor: '#f1f5f9',
    },
    testimonial: {
      fontStyle: 'italic',
      marginBottom: '20px',
      maxWidth: '600px',
      margin: 'auto',
    },
    pricing: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: '30px',
    },
    plan: {
      border: '2px solid #2563eb',
      borderRadius: '10px',
      padding: '30px',
      width: '280px',
      backgroundColor: '#fff',
    },
    faqItem: {
      maxWidth: '700px',
      margin: '20px auto',
      textAlign: 'left',
    },
    contactForm: {
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
      maxWidth: '500px',
      margin: '0 auto',
    },
    input: {
      padding: '12px',
      borderRadius: '6px',
      border: '1px solid #cbd5e1',
      fontSize: '1rem',
    },
    footer: {
      backgroundColor: '#1e293b',
      color: '#fff',
      padding: '30px 20px',
      textAlign: 'center',
      marginTop: '60px',
    },
  };

  return (
    <div style={styles.body}>
      <style dangerouslySetInnerHTML={global} />
      <header style={styles.header}>
        <h1 style={{ fontSize: '1.5rem', margin: 0 }}>DevLaunch</h1>
        <nav style={styles.nav}>
          <a href="#features" style={styles.navLink}>Fonctionnalités</a>
          <a href="#pricing" style={styles.navLink}>Tarifs</a>
          <a href="#faq" style={styles.navLink}>FAQ</a>
          <a href="#contact" style={styles.navLink}>Contact</a>
        </nav>
      </header>

      <section style={{ ...styles.section, ...styles.hero }}>
        <h2 style={styles.title}>Lancez vos projets plus vite que jamais</h2>
        <p style={styles.subtitle}>
          DevLaunch est votre solution clé-en-main pour concevoir, publier et faire croître vos idées rapidement.
        </p>
        <button style={styles.button}>Essayer Gratuitement</button>
      </section>

      <section id="features" style={styles.section}>
        <h2>Fonctionnalités</h2>
        <div style={styles.features}>
          <div style={styles.card}>
            <h3>Interface intuitive</h3>
            <p>Une expérience fluide et ergonomique sur tous les appareils.</p>
          </div>
          <div style={styles.card}>
            <h3>Hébergement rapide</h3>
            <p>Des performances ultra-rapides grâce à notre CDN intégré.</p>
          </div>
          <div style={styles.card}>
            <h3>Collaboration simple</h3>
            <p>Invitez votre équipe, partagez, commentez et déployez ensemble.</p>
          </div>
        </div>
      </section>

      <section id="testimonials" style={{ ...styles.section, ...styles.testimonials }}>
        <h2>Témoignages</h2>
        <blockquote style={styles.testimonial}>
          “Grâce à DevLaunch, notre produit est passé de l’idée au marché en moins de 2 semaines.”
        </blockquote>
        <p>— Julie, fondatrice de TechNova</p>
      </section>

      <section id="pricing" style={styles.section}>
        <h2>Tarifs</h2>
        <div style={styles.pricing}>
          <div style={styles.plan}>
            <h3>Gratuit</h3>
            <p>Idéal pour démarrer</p>
            <p><strong>0€/mois</strong></p>
          </div>
          <div style={styles.plan}>
            <h3>Pro</h3>
            <p>Pour les startups sérieuses</p>
            <p><strong>29€/mois</strong></p>
          </div>
          <div style={styles.plan}>
            <h3>Entreprise</h3>
            <p>Sur mesure pour les grandes équipes</p>
            <p><strong>Sur devis</strong></p>
          </div>
        </div>
      </section>

      <section id="faq" style={styles.section}>
        <h2>FAQ</h2>
        <div style={styles.faqItem}>
          <h4>Comment commencer ?</h4>
          <p>Inscrivez-vous gratuitement et lancez votre première landing page en quelques clics.</p>
        </div>
        <div style={styles.faqItem}>
          <h4>Est-ce adapté aux mobiles ?</h4>
          <p>Absolument ! Nos pages sont 100% responsives.</p>
        </div>
      </section>

      <section id="contact" style={styles.section}>
        <h2>Nous contacter</h2>
        <form style={styles.contactForm}>
          <input type="text" placeholder="Nom" style={styles.input} />
          <input type="email" placeholder="Email" style={styles.input} />
          <textarea placeholder="Votre message" style={{ ...styles.input, height: '100px' }} />
          <button type="submit" style={styles.button}>Envoyer</button>
        </form>
      </section>

      <footer style={styles.footer}>
        © {new Date().getFullYear()} DevLaunch — Tous droits réservés.
      </footer>
    </div>
  );
};

export default LandingPage;


`
