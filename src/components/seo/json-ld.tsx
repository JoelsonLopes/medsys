export function JsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://www.medsys.com.br/#organization',
        name: 'MedSys',
        url: 'https://www.medsys.com.br',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.medsys.com.br/assets/LOGO-MEDSYS.png',
          width: 210,
          height: 56
        },
        sameAs: [
          'https://www.instagram.com/medsys',
          'https://www.linkedin.com/company/medsys',
          'https://www.youtube.com/medsys',
          'https://www.facebook.com/medsys'
        ]
      },
      {
        '@type': 'SoftwareApplication',
        name: 'MedSys',
        applicationCategory: 'MedicalApplication',
        operatingSystem: 'Web',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'BRL'
        }
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
