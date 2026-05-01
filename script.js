'use strict';

/* ============================================
   PAGE LOADER — hides FOUC while fonts load
   ============================================ */
(function () {
  const dismiss = () => {
    const loader = document.getElementById('page-loader');
    if (!loader || loader.classList.contains('fade-out')) return;
    loader.classList.add('fade-out');
    setTimeout(() => loader.remove(), 400);
  };
  // Remove loader once fonts are ready (or after 900ms max)
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(dismiss);
  }
  setTimeout(dismiss, 900);
})();

/* ============================================
   TRANSLATIONS
   ============================================ */
const T = {
  es: {
    'nav.inicio':   'Inicio',
    'nav.quienes':  'Quiénes Somos',
    'nav.que':      'Qué Hacemos',
    'nav.eventos':  'Eventos',
    'nav.media':    'Fotos & Videos',
    'nav.historias':'Historias',
    'nav.champions':'La Champions',
    'nav.donar':    'Donar',

    'hero.badge':    'Organización Sin Fines de Lucro · Honduras',
    'hero.line1':    'CADA NIÑO',
    'hero.line2':    'TIENE UN',
    'hero.line3':    'SUEÑO',
    'hero.subtitle': 'Promovemos el desarrollo integral de jóvenes hondureños utilizando la pasión del fútbol como herramienta de transformación social.',
    'hero.cta1':     'Conoce Nuestra Historia',
    'hero.cta2':     'Apoya la Causa',
    'hero.scroll':   'Desplazar',

    'stats.jovenes': 'Jóvenes Impactados',
    'stats.torneos': 'Torneos Realizados',
    'stats.anos':    'Años de Impacto',
    'stats.equipos': 'Equipos por Torneo',

    'about.label':    'Quiénes Somos',
    'about.title':    'Una organización construida sobre sueños y dedicación',
    'about.p1':       'US-HN Talents es una organización hondureña sin fines de lucro dedicada a transformar la vida de jóvenes a través del deporte. Creemos que el fútbol tiene el poder de inspirar, unir y cambiar comunidades enteras.',
    'about.p2':       'Somos también una organización 501(c)(3) registrada en los Estados Unidos, lo que permite que tus donaciones sean deducibles de impuestos conforme a la ley aplicable.',
    'about.mis.title':'Misión',
    'about.mis.text': 'Promover el desarrollo integral de nuestros jóvenes utilizando la pasión del fútbol como disciplina para inspirarlos a creer en sí mismos.',
    'about.vis.title':'Visión',
    'about.vis.text': 'Ser una organización de referencia para las comunidades más desfavorecidas de Honduras, ofreciendo vías para mejorar su calidad de vida.',

    'programs.label': 'Qué Hacemos',
    'programs.title': 'El fútbol como herramienta de transformación',
    'programs.sub':   'Cada programa está diseñado para desarrollar no solo atletas, sino personas íntegras con valores sólidos.',
    'prog.p1.t': 'Disciplina',      'prog.p1.d': 'Formamos jóvenes con carácter, responsabilidad y compromiso a través de la práctica constante del deporte.',
    'prog.p2.t': 'Trabajo en Equipo','prog.p2.d': 'El fútbol enseña a colaborar, respetar y crecer juntos hacia un objetivo común.',
    'prog.p3.t': 'Educación',        'prog.p3.d': 'Creamos puentes entre el deporte y la educación, abriendo nuevas oportunidades para nuestros jóvenes.',
    'prog.p4.t': 'Salud y Bienestar','prog.p4.d': 'Promovemos la actividad física como base de una vida saludable y la prevención de conductas de riesgo.',
    'prog.p5.t': 'Inclusión Social', 'prog.p5.d': 'Abrimos las puertas sin importar el origen, la condición económica ni el nivel de habilidad.',
    'prog.p6.t': 'Resiliencia',      'prog.p6.d': 'Fortalecemos la confianza y la capacidad de superar obstáculos dentro y fuera de la cancha.',

    'events.label': 'Torneos y Campamentos',
    'events.title': 'Nuestros Eventos',
    'ev.e1.badge': 'Torneo',    'ev.e1.title': 'Torneo Elite #6',      'ev.e1.detail': 'Categorías 2007/2008 y 2009/2010', 'ev.e1.loc': 'Honduras',       'ev.e1.desc': 'Competencia de alto nivel para las categorías juveniles más prometedoras del país.',
    'ev.e2.badge': 'Torneo',    'ev.e2.title': 'Mundialito Colegial',  'ev.e2.detail': '24 equipos colegiales',            'ev.e2.loc': 'San Pedro Sula', 'ev.e2.desc': 'La copa colegial más importante, reuniendo a los mejores equipos estudiantiles de Honduras.',
    'ev.e3.badge': 'Torneo',    'ev.e3.title': 'Torneo Promesas',      'ev.e3.detail': 'Jóvenes talentos emergentes',      'ev.e3.loc': 'Puerto Cortés',  'ev.e3.desc': 'Plataforma para descubrir y potenciar a las nuevas promesas del fútbol hondureño.',
    'ev.e4.badge': 'Campamento','ev.e4.title': 'Campamento U14 & U16', 'ev.e4.detail': 'Formación técnica y humana',       'ev.e4.loc': 'Honduras',       'ev.e4.desc': 'Campamentos de alta intensidad donde jóvenes de 14 a 16 años desarrollan sus habilidades.',
    'ev.e5.badge': 'Torneo',    'ev.e5.title': 'Torneo Talentos HN',   'ev.e5.detail': 'Equipos campeones',                'ev.e5.loc': 'Honduras',       'ev.e5.desc': 'Los mejores equipos del país compiten por el máximo honor en el fútbol juvenil hondureño.',
    'ev.e6.badge': 'Campamento','ev.e6.title': 'Campamento Sub 16',    'ev.e6.detail': 'Desarrollo intensivo',             'ev.e6.loc': 'Honduras',       'ev.e6.desc': 'Programa especializado para la categoría sub-16 con enfoque en técnica y formación personal.',
    'ev.e7.badge': 'Torneo',    'ev.e7.title': 'Mundialito Colegial',  'ev.e7.detail': '24 equipos colegiales',            'ev.e7.loc': 'San Pedro Sula', 'ev.e7.desc': 'Primera edición del Mundialito Colegial, reuniendo a los mejores equipos estudiantiles de Honduras.',
    'ev.e8.badge': 'Torneo',    'ev.e8.title': 'Torneo Talentos 2024',    'ev.e8.detail': 'Cat. 2005-2006 · 2010-2011',    'ev.e8.loc': 'Honduras',             'ev.e8.desc': 'Torneo Talentos Honduras 2024. Competencia entre academias y selecciones por categorías de edad.',
    'ev.e9.badge': 'Torneo',    'ev.e9.title': 'Torneo Villanueva 2025',  'ev.e9.detail': 'Fútbol juvenil',                'ev.e9.loc': 'Villanueva, Cortés',    'ev.e9.desc': 'Torneo de fútbol juvenil en Villanueva organizado por US-HN Talents.',
    'ev.e10.badge': 'Torneo',   'ev.e10.title': 'Torneo Siguatepeque 2025','ev.e10.detail': 'Fútbol juvenil',               'ev.e10.loc': 'Siguatepeque',          'ev.e10.desc': 'Siguatepeque fue el escenario de un evento dedicado a la juventud hondureña impulsado a través del fútbol.',
    'ev.e11.badge': 'Torneo',   'ev.e11.title': 'Torneo Cofradía 2025',   'ev.e11.detail': 'Fútbol juvenil',               'ev.e11.loc': 'Cofradía, Cortés',      'ev.e11.desc': 'La competencia, la pasión y el talento unidos en un solo lugar. ¡El fútbol juvenil en su máxima expresión!',
    'ev.e12.badge': 'Torneo',   'ev.e12.title': 'Torneo La Lima 2025',    'ev.e12.detail': 'U17 · U19',                    'ev.e12.loc': 'La Lima, Cortés',       'ev.e12.desc': 'El Complejo Deportivo Chulavista fue el escenario con los mejores jóvenes futbolistas en categorías U17 y U19.',
    'ev.e13.badge': 'Torneo',   'ev.e13.title': 'Torneo Santa Rosa 2025', 'ev.e13.detail': 'Fútbol juvenil',               'ev.e13.loc': 'Santa Rosa de Copán',   'ev.e13.desc': 'El legendario Estadio Copán Galel se convirtió en el epicentro del talento joven hondureño.',
    'ev.e14.badge': 'Torneo',   'ev.e14.title': 'Mundialito Colegial 2025','ev.e14.detail': 'Institutos de Honduras',       'ev.e14.loc': 'La Lima, Cortés',       'ev.e14.desc': 'Gran fiesta deportiva del año. La Lima fue la ciudad sede con los mejores institutos de Honduras.',
    'ev.e15.badge': 'Torneo',   'ev.e15.title': 'Torneo Elite 2025',      'ev.e15.detail': 'U17 · U19',                    'ev.e15.loc': 'Honduras',              'ev.e15.desc': 'El evento de talento juvenil más esperado, con campeones de todos los torneos y los mejores del país.',

    'next.label':      'Próximo Evento',
    'next.status':     'PRELIMINARES EN CURSO',
    'next.title':      'Mundialito Colegial 2026',
    'next.desc':       'Más de 56 institutos compiten por clasificar al gran evento en San Pedro Sula. ¡Ya iniciaron las preliminares!',
    'next.loc.label':  'Sede',
    'next.loc':        'San Pedro Sula',
    'next.cat.label':  'Categoría',
    'next.cat':        'U17 · 2009/2010',
    'next.wa.label':   'Inscripciones',
    'next.free':       'TOTALMENTE GRATIS',
    'next.institutes': '+56 Institutos',
    'next.cd.days':    'días',
    'next.cd.hours':   'hrs',
    'next.cd.mins':    'min',
    'next.cd.secs':    'seg',
    'next.cta':        'Quiero Participar',
    'next.info':       'Ver todos los eventos',
    'media.champs.hl': 'Final Highlights — La Champions',

    'stories.label': 'Historias',
    'stories.title': 'Más allá de los titulares,<br><em>cada niño tiene un sueño</em>',
    'story.s1.cat': 'Comunidad',    'story.s1.title': 'Escuela Nueva Generación',    'story.s1.text': 'US-HN Talents y Copán Maya S.L. visitaron esta institución en Chivana, Omoa, brindando apoyo al desarrollo futbolístico de jóvenes con talento.',
    'story.s2.cat': 'Impacto Social','story.s2.title': 'Jóvenes de Nuevo Horizontes','story.s2.text': 'Una iniciativa dirigida a jugadores de la comunidad Nuevo Horizontes, área con recursos limitados, impulsando su crecimiento mediante el deporte.',
    'story.s3.cat': 'Transformación','story.s3.title': 'El poder del fútbol',        'story.s3.text': 'Historias de jóvenes hondureños que encontraron en el fútbol no solo un deporte, sino un camino hacia un futuro mejor.',
    'story.more': 'Leer más →',

    'champs.label':    'El Torneo Máximo',
    'champs.title':    'La Champions',
    'champs.text':     'El evento cumbre de US-HN Talents. La competencia más prestigiosa donde los campeones de todos los torneos se enfrentan para conquistar el título supremo del fútbol juvenil hondureño.',
    'champs.campeon':  '🏆 Campeón Sub 18',
    'champs.campeon16':'🏆 Campeón Sub 16',
    'champs.cta':      'Quiero Participar',

    'media.label':       'Multimedia',
    'media.title':       'Fotos & Videos',
    'media.sub':         'Revive los mejores momentos de nuestros torneos y campamentos.',
    'media.videos.title':'Últimos Videos',
    'media.yt.title':    'Canal de YouTube',
    'media.yt.sub':      'Partidos completos, entrevistas, highlights y momentos especiales de todos nuestros eventos.',
    'media.yt.btn':      'Ver Canal →',
    'media.gallery.view':'Ver galería de fotos →',
    'media.gallery.fb':  'Ver videos en Facebook →',
    'media.gallery.yt':  'Ver en YouTube →',
    'media.gallery.ig':  'Ver fotos en Instagram →',
    'media.champs.cat':  'La Champions',
    'media.champs.title':'Galería La Champions',

    'sponsors.label': 'Colaboradores',
    'sponsors.title': 'Quienes nos apoyan',
    'sponsors.sub':   'Juntos hacemos posible que cada niño cumpla su sueño.',
    'sponsors.join':  '¿Quieres ser patrocinador?',
    'sponsors.cta':   'Contáctanos',

    'contact.label':   'Únete a la Causa',
    'contact.title':   'Juntos podemos cambiar más vidas',
    'contact.sub':     'Tu apoyo hace posible que más jóvenes hondureños tengan acceso a programas deportivos de calidad. Cada donación es deducible de impuestos bajo la ley estadounidense.',
    'contact.don.t':   'Haz una Donación',
    'contact.don.sub': '501(c)(3) · EIN: 99-3066453 · Deducible de impuestos',
    'contact.don.btn': 'Donar Ahora',
    'contact.social.lbl': 'Síguenos en redes sociales:',
    'donate.a1': 'Equipa a un jugador',
    'donate.a2': 'Apoya un campamento',
    'donate.a3': 'Patrocina un torneo',
    'donate.custom': 'Otro',
    'donate.customDesc': 'Monto personalizado',
    'donate.customAmt': 'Monto (USD)',
    'donate.customReason': 'Motivo de la donación',
    'donate.customReasonPh': 'Describe el motivo de tu donación...',

    'form.title':    'Envíanos un mensaje',
    'form.name':     'Nombre completo',
    'form.email':    'Correo electrónico',
    'form.subject':  'Asunto',
    'form.subj.def': 'Selecciona un asunto',
    'form.subj.don': 'Quiero Donar',
    'form.subj.pat': 'Patrocinio',
    'form.subj.tor': 'Información de Torneos',
    'form.subj.otro':'Otro',
    'form.msg':      'Mensaje',
    'form.submit':   'Enviar Mensaje',
    'form.ok':       '¡Mensaje enviado! Nos pondremos en contacto pronto.',
    'form.err':      'Hubo un problema al enviar. Intenta de nuevo o escríbenos a info@ushn.org',

    'ev.verEvento': 'Ver evento',

    'footer.tagline': 'Cada niño tiene un sueño.<br>Nosotros ayudamos a cumplirlo.',
    'footer.n1': 'Navegación', 'footer.n2': 'Eventos', 'footer.n3': 'Legal',
    'footer.sponsors': 'Patrocinadores',
    'footer.copy': '© 2026 US-HN Talents · Todos los derechos reservados',
    'footer.tax':  'Las donaciones son deducibles de impuestos conforme a la ley aplicable.',
  },

  en: {
    'nav.inicio':   'Home',
    'nav.quienes':  'About Us',
    'nav.que':      'What We Do',
    'nav.eventos':  'Events',
    'nav.media':    'Photos & Videos',
    'nav.historias':'Stories',
    'nav.champions':'The Champions',
    'nav.donar':    'Donate',

    'hero.badge':    'Nonprofit Organization · Honduras',
    'hero.line1':    'EVERY CHILD',
    'hero.line2':    'HAS A',
    'hero.line3':    'DREAM',
    'hero.subtitle': 'We promote the integral development of Honduran youth using the passion for soccer as a tool for social transformation.',
    'hero.cta1':     'Our Story',
    'hero.cta2':     'Support the Cause',
    'hero.scroll':   'Scroll',

    'stats.jovenes': 'Youth Impacted',
    'stats.torneos': 'Tournaments Held',
    'stats.anos':    'Years of Impact',
    'stats.equipos': 'Teams per Tournament',

    'about.label':    'About Us',
    'about.title':    'An organization built on dreams and dedication',
    'about.p1':       'US-HN Talents is a Honduran nonprofit dedicated to transforming young lives through sport. We believe soccer has the power to inspire, unite, and change entire communities.',
    'about.p2':       'We are also a 501(c)(3) organization registered in the United States, which means your donations are tax-deductible to the extent allowed by law.',
    'about.mis.title':'Mission',
    'about.mis.text': 'Promote the integral development of our youth using the passion for soccer as a discipline to inspire them to believe in themselves.',
    'about.vis.title':'Vision',
    'about.vis.text': 'To be a reference organization for the most disadvantaged communities in Honduras, offering pathways to improve their quality of life.',

    'programs.label': 'What We Do',
    'programs.title': 'Soccer as a tool for transformation',
    'programs.sub':   'Each program is designed to develop not just athletes, but well-rounded individuals with solid values.',
    'prog.p1.t': 'Discipline',    'prog.p1.d': 'We shape youth with character, responsibility, and commitment through constant athletic practice.',
    'prog.p2.t': 'Teamwork',      'prog.p2.d': 'Soccer teaches collaboration, respect, and growing together toward a common goal.',
    'prog.p3.t': 'Education',     'prog.p3.d': 'We build bridges between sport and education, opening new opportunities for our youth.',
    'prog.p4.t': 'Health & Wellness','prog.p4.d': 'We promote physical activity as a foundation for a healthy life and prevention of risky behaviors.',
    'prog.p5.t': 'Social Inclusion',  'prog.p5.d': 'We open doors regardless of background, economic status, or skill level.',
    'prog.p6.t': 'Resilience',        'prog.p6.d': 'We strengthen confidence and the ability to overcome obstacles on and off the field.',

    'events.label': 'Tournaments & Camps',
    'events.title': 'Our Events',
    'ev.e1.badge': 'Tournament', 'ev.e1.title': 'Elite Tournament #6',   'ev.e1.detail': 'Categories 2007/2008 and 2009/2010', 'ev.e1.loc': 'Honduras',       'ev.e1.desc': 'High-level competition for the most promising youth categories in the country.',
    'ev.e2.badge': 'Tournament', 'ev.e2.title': 'Mundialito Colegial',   'ev.e2.detail': '24 school teams',                   'ev.e2.loc': 'San Pedro Sula', 'ev.e2.desc': 'The most important school cup, bringing together the best student teams in Honduras.',
    'ev.e3.badge': 'Tournament', 'ev.e3.title': 'Promesas Tournament',   'ev.e3.detail': 'Emerging young talents',             'ev.e3.loc': 'Puerto Cortés',  'ev.e3.desc': 'A platform to discover and develop the new promises of Honduran soccer.',
    'ev.e4.badge': 'Camp',       'ev.e4.title': 'U14 & U16 Camp',        'ev.e4.detail': 'Technical and human development',   'ev.e4.loc': 'Honduras',       'ev.e4.desc': 'High-intensity camps where youth ages 14–16 develop their skills and character.',
    'ev.e5.badge': 'Tournament', 'ev.e5.title': 'Talentos HN Tournament','ev.e5.detail': 'Champion teams',                    'ev.e5.loc': 'Honduras',       'ev.e5.desc': 'The best teams in the country compete for the ultimate honor in Honduran youth soccer.',
    'ev.e6.badge': 'Camp',       'ev.e6.title': 'Sub-16 Camp',           'ev.e6.detail': 'Intensive development',             'ev.e6.loc': 'Honduras',       'ev.e6.desc': 'A specialized program for the sub-16 category focused on technique and personal growth.',
    'ev.e7.badge': 'Tournament', 'ev.e7.title': 'Mundialito Colegial',  'ev.e7.detail': '24 school teams',                  'ev.e7.loc': 'San Pedro Sula', 'ev.e7.desc': 'First edition of the Mundialito Colegial, bringing together the best student teams in Honduras.',
    'ev.e8.badge': 'Tournament',  'ev.e8.title': 'Talentos Tournament 2024',   'ev.e8.detail': 'Cat. 2005-2006 · 2010-2011',  'ev.e8.loc': 'Honduras',             'ev.e8.desc': 'Talentos Honduras Tournament 2024. Competition between academies and selections by age category.',
    'ev.e9.badge': 'Tournament',  'ev.e9.title': 'Villanueva Tournament 2025',  'ev.e9.detail': 'Youth soccer',                'ev.e9.loc': 'Villanueva, Cortés',    'ev.e9.desc': 'Youth soccer tournament in Villanueva organized by US-HN Talents.',
    'ev.e10.badge': 'Tournament', 'ev.e10.title': 'Siguatepeque Tournament 2025','ev.e10.detail': 'Youth soccer',               'ev.e10.loc': 'Siguatepeque',          'ev.e10.desc': 'Siguatepeque hosted a tournament dedicated to Honduran youth driven through the sport of soccer.',
    'ev.e11.badge': 'Tournament', 'ev.e11.title': 'Cofradía Tournament 2025',   'ev.e11.detail': 'Youth soccer',               'ev.e11.loc': 'Cofradía, Cortés',      'ev.e11.desc': 'Competition, passion and talent united in one place. Youth soccer at its finest!',
    'ev.e12.badge': 'Tournament', 'ev.e12.title': 'La Lima Tournament 2025',    'ev.e12.detail': 'U17 · U19',                  'ev.e12.loc': 'La Lima, Cortés',       'ev.e12.desc': 'Complejo Deportivo Chulavista hosted the best young players in the U17 and U19 categories.',
    'ev.e13.badge': 'Tournament', 'ev.e13.title': 'Santa Rosa Tournament 2025', 'ev.e13.detail': 'Youth soccer',               'ev.e13.loc': 'Santa Rosa de Copán',   'ev.e13.desc': 'The legendary Estadio Copán Galel became the epicenter of Honduran youth talent.',
    'ev.e14.badge': 'Tournament', 'ev.e14.title': 'Mundialito Colegial 2025',   'ev.e14.detail': 'Honduran institutes',        'ev.e14.loc': 'La Lima, Cortés',       'ev.e14.desc': 'The biggest sports celebration of the year. La Lima hosted the best student institutes of Honduras.',
    'ev.e15.badge': 'Tournament', 'ev.e15.title': 'Elite Tournament 2025',      'ev.e15.detail': 'U17 · U19',                  'ev.e15.loc': 'Honduras',              'ev.e15.desc': 'The most anticipated youth talent event, featuring champions from all tournaments and the best in the country.',

    'next.label':      'Upcoming Event',
    'next.status':     'PRELIMINARIES UNDERWAY',
    'next.title':      'Mundialito Colegial 2026',
    'next.desc':       'Over 56 schools compete to qualify for the grand event in San Pedro Sula. Preliminaries have already started!',
    'next.loc.label':  'Location',
    'next.loc':        'San Pedro Sula',
    'next.cat.label':  'Category',
    'next.cat':        'U17 · 2009/2010',
    'next.wa.label':   'Registration',
    'next.free':       'COMPLETELY FREE',
    'next.institutes': '+56 Schools',
    'next.cd.days':    'days',
    'next.cd.hours':   'hrs',
    'next.cd.mins':    'min',
    'next.cd.secs':    'sec',
    'next.cta':        'I Want to Participate',
    'next.info':       'View all events',
    'media.champs.hl': 'Final Highlights — La Champions',

    'stories.label': 'Stories',
    'stories.title': 'Beyond the headlines,<br><em>every child has a dream</em>',
    'story.s1.cat': 'Community',    'story.s1.title': 'Nueva Generación School',   'story.s1.text': 'US-HN Talents and Copán Maya S.L. visited this institution in Chivana, Omoa, providing support to talented young athletes in the region.',
    'story.s2.cat': 'Social Impact','story.s2.title': 'Youth from Nuevo Horizontes','story.s2.text': 'An initiative for players from the Nuevo Horizontes community, a resource-limited area, driving their growth through sport and education.',
    'story.s3.cat': 'Transformation','story.s3.title': 'The power of soccer',     'story.s3.text': 'Stories of Honduran youth who found in soccer not just a sport, but a path to a better future.',
    'story.more': 'Read more →',

    'champs.label':    'The Ultimate Tournament',
    'champs.title':    'The Champions',
    'champs.text':     'The pinnacle event of US-HN Talents. The most prestigious competition where champions from all tournaments face off to conquer the supreme title of Honduran youth soccer.',
    'champs.campeon':  '🏆 Sub 18 Champion',
    'champs.campeon16':'🏆 Sub 16 Champion',
    'champs.cta':      'I Want to Participate',

    'media.label':       'Multimedia',
    'media.title':       'Photos & Videos',
    'media.sub':         'Relive the best moments from our tournaments and camps.',
    'media.videos.title':'Latest Videos',
    'media.yt.title':    'YouTube Channel',
    'media.yt.sub':      'Full matches, interviews, highlights and special moments from all our events.',
    'media.yt.btn':      'View Channel →',
    'media.gallery.view':'View photo gallery →',
    'media.gallery.fb':  'Watch videos on Facebook →',
    'media.gallery.yt':  'Watch on YouTube →',
    'media.gallery.ig':  'View photos on Instagram →',
    'media.champs.cat':  'The Champions',
    'media.champs.title':'La Champions Gallery',

    'sponsors.label': 'Partners',
    'sponsors.title': 'Those who support us',
    'sponsors.sub':   'Together we make it possible for every child to fulfill their dream.',
    'sponsors.join':  'Want to become a sponsor?',
    'sponsors.cta':   'Contact Us',

    'contact.label':   'Join the Cause',
    'contact.title':   'Together we can change more lives',
    'contact.sub':     'Your support makes it possible for more Honduran youth to access quality sports programs. Each donation is tax-deductible under US law.',
    'contact.don.t':   'Make a Donation',
    'contact.don.sub': '501(c)(3) · EIN: 99-3066453 · Tax-deductible',
    'contact.don.btn': 'Donate Now',
    'contact.social.lbl': 'Follow us on social media:',
    'donate.a1': 'Equip a player',
    'donate.a2': 'Support a camp',
    'donate.a3': 'Sponsor a tournament',
    'donate.custom': 'Other',
    'donate.customDesc': 'Custom amount',
    'donate.customAmt': 'Amount (USD)',
    'donate.customReason': 'Reason for donation',
    'donate.customReasonPh': 'Describe the reason for your donation...',

    'form.title':    'Send us a message',
    'form.name':     'Full name',
    'form.email':    'Email address',
    'form.subject':  'Subject',
    'form.subj.def': 'Select a subject',
    'form.subj.don': 'I Want to Donate',
    'form.subj.pat': 'Sponsorship',
    'form.subj.tor': 'Tournament Information',
    'form.subj.otro':'Other',
    'form.msg':      'Message',
    'form.submit':   'Send Message',
    'form.ok':       'Message sent! We will be in touch soon.',
    'form.err':      'There was a problem sending your message. Try again or email us at info@ushn.org',

    'ev.verEvento': 'View event',

    'footer.tagline': 'Every child has a dream.<br>We help them achieve it.',
    'footer.n1': 'Navigation', 'footer.n2': 'Events', 'footer.n3': 'Legal',
    'footer.sponsors': 'Sponsors',
    'footer.copy': '© 2026 US-HN Talents · All Rights Reserved',
    'footer.tax':  'Donations are tax-deductible to the extent allowed by applicable law.',
  }
};

/* ============================================
   EVENTS DATA
   ============================================ */
const EVENTS_DATA = {
  e1: {
    badge_es: 'Torneo', badge_en: 'Tournament',
    name_es: 'Torneo Elite #6', name_en: 'Elite Tournament #6',
    year: 2024, location: 'Honduras', categories: '2007/2008 · 2009/2010',
    desc_es: 'Competencia de alto nivel con doce equipos en categoría 2007/2008 y cuatro equipos en categoría 2009/2010. Uno de los torneos más competitivos organizados por US-HN Talents.',
    desc_en: 'High-level competition with twelve teams in the 2007/2008 category and four in 2009/2010. One of the most competitive tournaments organized by US-HN Talents.',
    teams: ['US-HN Talents','Centuriones','Bulldogs','Sporting Villanueva','Aguilas del Progreso','Sel. Chamelecón','S. Yojoa','Aldea El Carmen'],
    results: null,
    pixieset: 'https://us-hntalents.pixieset.com/sextotorneoeliteushn/',
    photos: ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg'],
    photoPath: 'assets/fotos/eventos/e6-campamento-sub16-2023/',
    videos: [],
    videoGroups: [
      { phase_es: 'Partidos de Clasificación', phase_en: 'Qualifying Matches', matches: [
        { id: 'p9Q66HpPHC8', label: 'S. Yojoa vs Sel. Chamelecón U17' },
        { id: 'jM3AzlHZjTg', label: 'US-HN Talents vs Centuriones U17' }
      ]},
      { phase_es: 'Semifinales Cat. U-17', phase_en: 'Semifinals Cat. U-17', matches: [
        { id: 'hkfxyPIPIuE', label: 'US-HN Talents vs Bulldogs' },
        { id: 'AZuQXz6S6-g', label: 'Sporting Villanueva vs Aguilas del Progreso' }
      ]},
      { phase_es: 'Final Cat. U-15', phase_en: 'Final Cat. U-15', matches: [
        { id: 'yHXjCzAj790', label: 'Aldea El Carmen vs Pre S. U-15' }
      ]},
      { phase_es: 'Final Cat. U-17', phase_en: 'Final Cat. U-17', matches: [
        { id: 'GLd7gLxNW6M', label: 'Aguilas Progreso vs US-HN Talents' }
      ]}
    ]
  },
  e2: {
    badge_es: 'Torneo', badge_en: 'Tournament',
    name_es: 'Mundialito Colegial', name_en: 'Mundialito Colegial',
    year: 2024, location: 'San Pedro Sula', categories: '24 equipos colegiales',
    desc_es: 'La copa colegial más importante de Honduras reuniendo a los mejores 24 equipos estudiantiles. San Pedro Sula US-HN Talents 2024.',
    desc_en: 'The most important school cup in Honduras, bringing together the best 24 student teams. San Pedro Sula US-HN Talents 2024.',
    teams: [],
    results: null,
    pixieset: null,
    videos: [],
    videoGroups: [
      { phase_es: 'Entrevistas', phase_en: 'Interviews', matches: [
        { id: '4yOqaIteQAA', label: 'Que hacemos por Luis Guicho Guzman' },
        { id: 'C1HiTQ0f4D0', label: 'Reconocimiento a US-HN Talents' },
        { id: 'WjfdA8nMIgs', label: 'Profe. Nahum Espinoza' },
        { id: 'f96qFRUpV8w', label: 'Profe. Nolberto Aguilar - Secretaria de Educación de Honduras' }
      ]}
    ]
  },
  e3: {
    badge_es: 'Torneo', badge_en: 'Tournament',
    name_es: 'Torneo Promesas', name_en: 'Promesas Tournament',
    year: 2024, location: 'Puerto Cortés', categories: 'Jóvenes talentos emergentes',
    desc_es: 'Plataforma para descubrir y potenciar las nuevas promesas del fútbol hondureño. 12 equipos compitieron en Puerto Cortés 2024.',
    desc_en: 'A platform to discover and develop the new promises of Honduran soccer. 12 teams competed in Puerto Cortés 2024.',
    teams: ['Selección Omoa','Academia Tiburones','Sel. Est. Tegucigalpa','Inmude','Selección Choloma','Sel. Est. SPS','AFFI Choluteca','Sel. Villanueva','Real España','Águilas de Progreso','Orange Lions','Platense Jr'],
    results: [{ first: 'Sel. Est. SPS', second: 'Águilas de Progreso' }],
    pixieset: 'https://us-hntalents.pixieset.com/torneopromesaspuertocortes/',
    photos: ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg'],
    photoPath: 'assets/fotos/eventos/e8-campamento-talentos-feb-2024/',
    videos: [],
    videoGroups: [
      { phase_es: 'Fase de Grupos', phase_en: 'Group Stage', matches: [
        { id: 'ls3XtTMjkwU', label: 'Sel. Omoa vs Acd. Tiburones' },
        { id: 'U_nT5KO57sA', label: 'Sel. Est. Tegucigalpa vs Inmude' }
      ]},
      { phase_es: 'Cuartos de Final', phase_en: 'Quarterfinals', matches: [
        { id: 'kumkar2Gwvw', label: 'Sel. Choloma vs Sel. Est. SPS' },
        { id: '3BNAJY-iuoU', label: 'AFFI Choluteca vs Sel. Villanueva' },
        { id: 'RGl8jtXRHtU', label: 'Real España vs Aguilas de Progreso' },
        { id: 'KKHjXKUEjc8', label: 'Orange Lions vs Platense Jr' }
      ]},
      { phase_es: 'Semifinales', phase_en: 'Semifinals', matches: [
        { id: 'TDIMNPAbFoQ', label: 'Orange Lions vs Sel. Est. SPS' },
        { id: 'lYYLOQHMRCQ', label: 'AFFI Choluteca vs Aguilas de Progreso' }
      ]},
      { phase_es: 'Final', phase_en: 'Final', matches: [
        { id: '4OS4yCbQhJg', label: 'Sel. Est. SPS vs Aguilas de Progreso' }
      ]}
    ]
  },
  e4: {
    badge_es: 'Campamento', badge_en: 'Camp',
    name_es: 'Campamento U14 & U16', name_en: 'U14 & U16 Camp',
    year: 2023, location: 'Honduras', categories: 'Sub 14 y Sub 16',
    desc_es: 'Campamentos de alta intensidad donde jóvenes de 14 a 16 años desarrollan sus habilidades técnicas y humanas. Las finales se disputaron en el Estadio Olímpico.',
    desc_en: 'High-intensity camps where youth ages 14–16 develop technical and personal skills. The finals were played at the Olympic Stadium.',
    teams: ['Orange Lions','Atletas del Reino','Atletas Para Cristo','Limeño Jabat','Acd. Búfalo','Pradera Cidemuch','Serve Hope','Sel. Chamelecón'],
    results: null,
    pixieset: null,
    photos: ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg'],
    photoPath: 'assets/fotos/eventos/e2-mundialito-colegial-2024/',
    videos: [],
    videoGroups: [
      { phase_es: 'Resumen', phase_en: 'Summary', matches: [
        { id: 'gw1TasjMMYY', label: 'Resumen Campamento Abril 2023' }
      ]},
      { phase_es: 'Partidos de Clasificación', phase_en: 'Qualifying Matches', matches: [
        { id: '8c8f0TCD8kw', label: 'Pto. Cortes - Orange Lions vs Sta. Barbara - Atletas del Reino' },
        { id: 'Nwu7U7f_SYc', label: 'San Manuel - Acd. Bufalo vs Pradera Cidemuch' },
        { id: 'dP9Kn00v3Bk', label: 'Siguatepeque Serve Hope vs Chamelecón Selección' },
        { id: 'axEtDX3jQDs', label: 'Progreso - Atletas Para Cristo vs Limeño Jabat' }
      ]},
      { phase_es: 'Finales', phase_en: 'Finals', matches: [
        { id: 'C2aCAoM9XEs', label: 'Pto. Cortes - Orange Lions vs Limeño Jabat | Final U14' },
        { id: 'me8DGLDkIrI', label: 'Acd. BUFALO - San Manuel vs Selección - Chamelecón | Gran Final U16' }
      ]}
    ]
  },
  e5: {
    badge_es: 'Torneo', badge_en: 'Tournament',
    name_es: 'Torneo Talentos HN', name_en: 'Talentos HN Tournament',
    year: 2023, location: 'Honduras', categories: 'Equipos campeones',
    desc_es: 'Equipos campeones y subcampeones de torneos anteriores se enfrentan por el máximo honor. Los mejores del país en una sola competencia.',
    desc_en: 'Champion and runner-up teams from previous tournaments face off for the ultimate honor. The best in the country in one competition.',
    teams: ['Panteras FC','Juventus Roatán','Team Tyson Nuñez','Platense Jr','Selección Colegial','ACD Búfalo','Orange Lions'],
    results: [{ first: 'Selección Colegial', second: 'Platense Jr' }],
    pixieset: 'https://us-hntalents.pixieset.com/torneo-talentos-honduras/',
    photos: ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg'],
    photoPath: 'assets/fotos/eventos/e4-campamento-u14-u16-2023/',
    videos: [],
    videoGroups: [
      { phase_es: 'Partidos de Clasificación', phase_en: 'Qualifying Matches', matches: [
        { id: '0LTsdehLyJ4', label: 'Panteras FC vs Juventus Roatan' },
        { id: '_dN-NpG8zTo', label: 'Team Tyson Nuñez Sambo Creek vs Platense JR' }
      ]},
      { phase_es: 'Semifinales', phase_en: 'Semifinals', matches: [
        { id: 'sIjXhmq_bq0', label: 'Selección Colegial vs Acd. Búfalo' },
        { id: 'mqnP5YIyPAo', label: 'Orange Lions vs Platense JR' }
      ]},
      { phase_es: 'Final', phase_en: 'Final', matches: [
        { id: 'k74BNfFSJGQ', label: 'Selección Colegial vs Platense Jr' }
      ]}
    ]
  },
  e6: {
    badge_es: 'Campamento', badge_en: 'Camp',
    name_es: 'Campamento Sub 16', name_en: 'Sub-16 Camp',
    year: 2023, location: 'Honduras', categories: 'Sub 16',
    desc_es: 'Primer campamento de fútbol Sub 16 organizado por US-HN Talents. Programa especializado con enfoque en técnica, táctica y formación personal.',
    desc_en: 'First Sub-16 soccer camp organized by US-HN Talents. Specialized program focused on technique, tactics, and personal development.',
    teams: ['Platense Jr','Inmude','Real España','Academia Tigres - Choloma','Cortés - Indepor','Villanueva - Esmude','Acd. Ramos - Progreso','Centuriones - SPS'],
    results: [{ first: 'Platense Jr', second: 'Inmude' }],
    pixieset: null,
    photos: ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg'],
    photoPath: 'assets/fotos/eventos/e1-torneo-elite-6-2024/',
    videos: [],
    videoGroups: [
      { phase_es: 'Partidos de Clasificación', phase_en: 'Qualifying Matches', matches: [
        { id: '32mUyGs7sxw', label: 'Platense Jr vs Inmude' },
        { id: 'qRAAvReFBMs', label: 'Cortés - Indepor vs Villanueva - Esmude' },
        { id: '4S7WMoP5q2A', label: 'Real España vs Academia Tigres - Choloma' },
        { id: 'z1ZHCbtXGC8', label: 'Acd. Ramos - Progreso vs Centuriones - SPS' }
      ]},
      { phase_es: 'Semifinales', phase_en: 'Semifinals', matches: [
        { id: '2GXJcvB5CWg', label: 'Inmude - SPS vs Acd. Ramos - Progreso' },
        { id: 'bxX4_T6GiAo', label: 'Real España vs Platense Jr' }
      ]},
      { phase_es: 'Final', phase_en: 'Final', matches: [
        { id: 'gnk1y8_qa4w', label: 'Inmude vs Platense Jr' }
      ]}
    ]
  },
  e7: {
    badge_es: 'Torneo', badge_en: 'Tournament',
    name_es: 'Mundialito Colegial', name_en: 'Mundialito Colegial',
    year: 2023, location: 'San Pedro Sula', categories: '24 equipos colegiales',
    desc_es: 'Primera edición del Mundialito Colegial, reuniendo a los mejores equipos estudiantiles de Honduras en San Pedro Sula.',
    desc_en: 'First edition of the Mundialito Colegial, bringing together the best student teams in Honduras in San Pedro Sula.',
    teams: ['AE Alaniz','Modesto Rodas','JTR','Santo Tomas','Centro Técnico Hondureño Aleman','IGSC Yojoa','Copantl','Primero de Mayo','Brisas del Cacao','Union y Esfuerzo','Inst. Oficial Villanueva'],
    results: [{ first: 'Inst. Oficial Villanueva', second: 'Union y Esfuerzo' }],
    pixieset: null,
    photos: ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg'],
    photoPath: 'assets/fotos/eventos/e3-torneo-promesas-2024/',
    videos: [],
    videoGroups: [
      { phase_es: 'Partidos de Clasificación', phase_en: 'Qualifying Matches', matches: [
        { id: 'kHGcbpb8LOU', label: 'AE Alaniz vs Modesto Rodas' },
        { id: 'VW9f9jOLEvo', label: 'JTR vs Santo Tomas' },
        { id: '61GkZjbu5hw', label: 'Centro Técnico Hondureño Aleman vs IGSC Yojoa' },
        { id: '5FUIFuSGfn8', label: 'Copantl vs Primero de Mayo' }
      ]},
      { phase_es: 'Semifinales', phase_en: 'Semifinals', matches: [
        { id: 'NQc2JFgkiGA', label: 'Brisas del Cacao vs Union y Esfuerzo' },
        { id: 'q7K-fbjSJEY', label: 'Inst. Técnico Hondureño Aleman vs Inst. Oficial Villanueva' }
      ]},
      { phase_es: 'Final', phase_en: 'Final', matches: [
        { id: '9MwUI-8pjSk', label: 'Union y Esfuerzo vs Gub. Villanueva' }
      ]}
    ]
  },
  e8: {
    badge_es: 'Torneo', badge_en: 'Tournament',
    name_es: 'Torneo Talentos 2024', name_en: 'Talentos Tournament 2024',
    year: 2024, location: 'Honduras', categories: '2005-2006 · 2010-2011',
    desc_es: 'Torneo Talentos Honduras 2024. Competencia entre academias y selecciones por categorías de edad, con partidos disputados en febrero 2024.',
    desc_en: 'Talentos Honduras Tournament 2024. Competition between academies and age-category selections, played in February 2024.',
    teams: ['Aldea El Carmen','Chamelecón','EIS','Acd. Mayorga','Fundación Cebas','Esmude','Inmude','Sel. Colegial','Aguilas'],
    results: [
      { cat_es: 'Cat. 2010-2011', cat_en: 'Cat. 2010-2011', first: 'Sel. Chamelecón', second: 'Inmude' },
      { cat_es: 'Cat. 2005-2006', cat_en: 'Cat. 2005-2006', first: 'Sel. Colegial', second: 'Águilas' }
    ],
    pixieset: 'https://us-hntalents.pixieset.com/campamentofebrero2024/',
    photos: ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg'],
    photoPath: 'assets/fotos/eventos/e5-torneo-talentos-2023/',
    videos: [],
    videoGroups: [
      { phase_es: 'Partidos de Clasificación', phase_en: 'Qualifying Matches', matches: [
        { id: '170xC_MSeI8', label: 'Aldea El Carmen vs Chamelecón' },
        { id: '4y-cYsUKj34', label: 'EIS vs Acd. Mayorga' },
        { id: 'fSTGFhBJ488', label: 'Fundación Cebas vs Esmude' }
      ]},
      { phase_es: 'Semifinales Cat. 2010-2011', phase_en: 'Semifinals Cat. 2010-2011', matches: [
        { id: 'ewGhITzkpVY', label: 'Inmude vs EIS' },
        { id: 'k9PHrbUwvzA', label: 'Fundación Cebas vs Sel. Chamelecón' }
      ]},
      { phase_es: 'Final Cat. 2010-2011', phase_en: 'Final Cat. 2010-2011', matches: [
        { id: 'LSsmkmHw2wk', label: 'Sel. Chamelecón vs Inmude' }
      ]},
      { phase_es: 'Final Cat. 2005-2006', phase_en: 'Final Cat. 2005-2006', matches: [
        { id: 'jf5UMT9RaHY', label: 'Sel. Colegial vs Aguilas' }
      ]}
    ]
  },
  e9: {
    badge_es: 'Torneo', badge_en: 'Tournament',
    name_es: 'Torneo Villanueva 2025', name_en: 'Villanueva Tournament 2025',
    year: 2025, location: 'Villanueva, Cortés', categories: 'Fútbol juvenil',
    desc_es: 'Torneo de fútbol juvenil organizado por US-HN Talents en Villanueva, Cortés. Un evento que reunió a jóvenes talentos de la región para competir y demostrar sus habilidades.',
    desc_en: 'Youth soccer tournament organized by US-HN Talents in Villanueva, Cortés. An event that brought together young talents from the region to compete and showcase their skills.',
    teams: [], results: null, pixieset: null,
    photos: ['1.jpg'],
    photoPath: 'assets/fotos/eventos/e9-torneo-villanueva-2025/',
    videos: [], videoGroups: []
  },
  e10: {
    badge_es: 'Torneo', badge_en: 'Tournament',
    name_es: 'Torneo Siguatepeque 2025', name_en: 'Siguatepeque Tournament 2025',
    year: 2025, location: 'Siguatepeque', categories: 'Fútbol juvenil',
    desc_es: 'Este 22 de marzo, Siguatepeque fue el escenario de un evento dedicado a la juventud hondureña, impulsado a través del fútbol por US-HN Talents.',
    desc_en: 'On March 22nd, Siguatepeque became the stage for an event dedicated to Honduran youth, driven through soccer by US-HN Talents.',
    teams: [], results: null, pixieset: null,
    photos: ['1.jpg'],
    photoPath: 'assets/fotos/eventos/e10-torneo-siguatepeque-2025/',
    videos: [], videoGroups: []
  },
  e11: {
    badge_es: 'Torneo', badge_en: 'Tournament',
    name_es: 'Torneo Cofradía 2025', name_en: 'Cofradía Tournament 2025',
    year: 2025, location: 'Cofradía, Cortés', categories: 'Fútbol juvenil',
    desc_es: 'Este 27 de abril fue el momento de ser parte de algo épico. La competencia, la pasión y el talento se unieron en un solo lugar en Cofradía, Cortés.',
    desc_en: 'April 27th was the moment to be part of something epic. Competition, passion and talent came together in one place in Cofradía, Cortés.',
    teams: [], results: null, pixieset: null,
    photos: ['1.jpg'],
    photoPath: 'assets/fotos/eventos/e11-torneo-cofradia-2025/',
    videos: [], videoGroups: []
  },
  e12: {
    badge_es: 'Torneo', badge_en: 'Tournament',
    name_es: 'Torneo La Lima 2025', name_en: 'La Lima Tournament 2025',
    year: 2025, location: 'La Lima, Cortés', categories: 'U17 · U19',
    desc_es: 'El 7 y 8 de junio, el Complejo Deportivo Chulavista fue el escenario de pura emoción, talento y pasión con los mejores jóvenes futbolistas en las categorías U17 y U19. Un evento en conjunto con la Dirección Municipal de Deporte y la Municipalidad de La Lima, Cortés.',
    desc_en: 'On June 7th and 8th, the Chulavista Sports Complex hosted pure excitement, talent and passion with the best young players in the U17 and U19 categories. An event in partnership with the Municipal Sports Department and the Municipality of La Lima, Cortés.',
    teams: [], results: null, pixieset: null,
    photos: ['1.jpg'],
    photoPath: 'assets/fotos/eventos/e12-torneo-la-lima-2025/',
    videos: [],
    videoGroups: [
      { phase_es: 'Videos', phase_en: 'Videos', matches: [
        { id: '4sRWtkJY7Uo', label: 'Torneo La Lima 2025' }
      ]}
    ]
  },
  e13: {
    badge_es: 'Torneo', badge_en: 'Tournament',
    name_es: 'Torneo Santa Rosa 2025', name_en: 'Santa Rosa Tournament 2025',
    year: 2025, location: 'Santa Rosa de Copán', categories: 'Fútbol juvenil',
    desc_es: 'El 21 de junio, US-HN Talents transformó el legendario Estadio Copán Galel en el epicentro del talento joven. Una experiencia inolvidable para los mejores futbolistas juveniles de Honduras.',
    desc_en: 'On June 21st, US-HN Talents transformed the legendary Estadio Copán Galel into the epicenter of young talent. An unforgettable experience for Honduras\'s best youth soccer players.',
    teams: [], results: null, pixieset: null,
    photos: ['1.jpg'],
    photoPath: 'assets/fotos/eventos/e13-torneo-santa-rosa-2025/',
    videos: [],
    videoGroups: [
      { phase_es: 'Videos', phase_en: 'Videos', matches: [
        { id: 'Ipu9BiHdzq8', label: 'Torneo Santa Rosa 2025' }
      ]}
    ]
  },
  e14: {
    badge_es: 'Torneo', badge_en: 'Tournament',
    name_es: 'Mundialito Colegial 2025', name_en: 'Mundialito Colegial 2025',
    year: 2025, location: 'La Lima, Cortés', categories: 'Institutos de Honduras',
    desc_es: 'Gran fiesta deportiva del año: el Mundialito Colegial 2025. La Lima fue la ciudad sede del evento que reunió a los mejores institutos de Honduras los días 20, 21 y 22 de agosto.',
    desc_en: 'The biggest sports celebration of the year: Mundialito Colegial 2025. La Lima hosted the event that brought together the best student institutes of Honduras on August 20th, 21st, and 22nd.',
    teams: [], results: null,
    pixieset: 'https://us-hntalents.pixieset.com/mundialitocolegial2025/',
    photos: ['1.jpg'],
    photoPath: 'assets/fotos/eventos/e14-mundialito-colegial-2025/',
    videos: [],
    videoGroups: [
      { phase_es: 'Videos', phase_en: 'Videos', matches: [
        { id: 'ymWnTsjz0_s', label: 'Mundialito Colegial 2025' }
      ]}
    ]
  },
  e15: {
    badge_es: 'Torneo', badge_en: 'Tournament',
    name_es: 'Torneo Elite 2025', name_en: 'Elite Tournament 2025',
    year: 2025, location: 'Honduras', categories: 'U17 · U19',
    desc_es: 'El evento de talento juvenil más esperado del año. US-HN Talents reunió a los campeones de todos sus torneos junto a invitados de altísimo nivel en las categorías U17 y U19, los días 1, 2 y 3 de octubre. Combinados regionales representando a diferentes partes del país.',
    desc_en: 'The most anticipated youth talent event of the year. US-HN Talents brought together champions from all its tournaments alongside elite guests in the U17 and U19 categories, October 1st, 2nd, and 3rd. Regional combined teams representing different parts of the country.',
    teams: [], results: null,
    pixieset: 'https://us-hntalents.pixieset.com/torneoelite2025/',
    photos: ['1.jpg'],
    photoPath: 'assets/fotos/eventos/e15-torneo-elite-2025/',
    videos: [],
    videoGroups: [
      { phase_es: 'Videos', phase_en: 'Videos', matches: [
        { id: '2jobYVf6lcM', label: 'Torneo Elite 2025' }
      ]}
    ]
  }
};

/* ============================================
   STORIES DATA
   ============================================ */
const STORIES_DATA = {
  s1: {
    cat:     { es: 'Comunidad',      en: 'Community' },
    title:   { es: 'Escuela Nueva Generación', en: 'Nueva Generación School' },
    heroMod: 'st-modal__hero--s1',
    quote:   {
      es: '"¡A seguir trabajando duro, muchachos, tanto en el deporte como en la educación! 💪👏⚽"',
      en: '"Keep working hard, boys, both in sports and in education! 💪👏⚽"',
    },
    quoteBy: { es: 'US-HN Talents', en: 'US-HN Talents' },
    photos:   ['H1.png', 'H2.png', 'H3.png', 'H4.png', 'H5.png'],
    photoPath: 'assets/fotos/historias/',
    body: {
      es: '<p class="st-modal__text">US-HN Talents y Copán Maya S.L. visitan la Escuela de Fútbol Nueva Generación en Chivana, Omoa, llevando una pequeña ayuda para el desarrollo futbolístico de estos jóvenes talentos.</p><p class="st-modal__text">La escuela es dirigida por el Profe René Wandique, quien anteriormente estuvo al frente de la selección de Omoa en el torneo US-HN Talents realizado en Puerto Cortés.</p><p class="st-modal__text">El impacto de iniciativas como esta va más allá del campo de juego: fortalece el tejido comunitario, motiva a los jóvenes a mantenerse alejados de situaciones de riesgo y demuestra que el talento hondureño existe en cada rincón del país, solo necesita ser descubierto y apoyado.</p>',
      en: '<p class="st-modal__text">US-HN Talents and Copán Maya S.L. visit the Nueva Generación Football School in Chivana, Omoa, bringing a helping hand to support the soccer development of these young talents.</p><p class="st-modal__text">The school is led by Coach René Wandique, who previously guided the Omoa team in the US-HN Talents tournament held in Puerto Cortés.</p><p class="st-modal__text">The impact of initiatives like this goes beyond the playing field: it strengthens community ties, motivates young people to stay away from risky situations, and proves that Honduran talent exists in every corner of the country — it just needs to be discovered and supported.</p>',
    },
    details: {
      es: [
        { label: 'Ubicación',  value: 'Chivana, Omoa, Cortés' },
        { label: 'Aliado',     value: 'Copán Maya S.L.' },
        { label: 'Entrenador', value: 'René Wandique' },
      ],
      en: [
        { label: 'Location', value: 'Chivana, Omoa, Cortés' },
        { label: 'Partner',  value: 'Copán Maya S.L.' },
        { label: 'Coach',    value: 'René Wandique' },
      ],
    },
  },
  s2: {
    cat:     { es: 'Impacto Social', en: 'Social Impact' },
    title:   { es: 'Jóvenes de Nuevo Horizontes', en: 'Youth from Nuevo Horizontes' },
    heroMod: 'st-modal__hero--s2',
    videoId:   '1066442594',
    videoHash: '089de30747',
    quote:   {
      es: '"Cuando le damos una oportunidad a un niño, le cambiamos el destino a toda su familia."',
      en: '"When we give a child a chance, we change the destiny of their entire family."',
    },
    quoteBy: {
      es: 'Director de Programas, US-HN Talents',
      en: 'Programs Director, US-HN Talents',
    },
    body: {
      es: '<p class="st-modal__text">Nuevo Horizontes es una comunidad urbana de San Pedro Sula caracterizada por sus limitados recursos económicos y las pocas oportunidades deportivas para sus jóvenes. Con el apoyo de US-HN Talents, decenas de jugadores de esta comunidad han encontrado en el fútbol un espacio seguro, estructurado y lleno de esperanza.</p><p class="st-modal__text">A través del programa de inclusión deportiva, los jóvenes de Nuevo Horizontes participan en entrenamientos semanales, reciben equipamiento deportivo y tienen acceso a los torneos organizados por la fundación. Varios de ellos han destacado en competencias regionales, demostrando que el talento no tiene código postal.</p><p class="st-modal__text">Más allá del fútbol, el programa incorpora talleres de valores, trabajo en equipo y orientación vocacional. Los resultados hablan por sí solos: mayor asistencia escolar, mejores calificaciones y familias que ven en la fundación un aliado real para el futuro de sus hijos.</p>',
      en: '<p class="st-modal__text">Nuevo Horizontes is an urban community in San Pedro Sula characterized by limited economic resources and few sporting opportunities for its youth. With the support of US-HN Talents, dozens of players from this community have found in soccer a safe, structured space full of hope.</p><p class="st-modal__text">Through the sports inclusion program, young people from Nuevo Horizontes participate in weekly training sessions, receive sports equipment, and have access to tournaments organized by the foundation. Several of them have excelled in regional competitions, proving that talent has no zip code.</p><p class="st-modal__text">Beyond soccer, the program incorporates workshops on values, teamwork, and vocational guidance. The results speak for themselves: higher school attendance, better grades, and families who see the foundation as a genuine ally for their children\'s future.</p>',
    },
    details: {
      es: [
        { label: 'Ubicación',     value: 'San Pedro Sula, Honduras' },
        { label: 'Programa',      value: 'Inclusión Deportiva' },
        { label: 'Participantes', value: 'Más de 60 jóvenes activos' },
      ],
      en: [
        { label: 'Location',     value: 'San Pedro Sula, Honduras' },
        { label: 'Program',      value: 'Sports Inclusion' },
        { label: 'Participants', value: 'Over 60 active youth' },
      ],
    },
  },
  s3: {
    cat:     { es: 'Transformación', en: 'Transformation' },
    title:   { es: 'El poder del fútbol', en: 'The power of soccer' },
    heroMod: 'st-modal__hero--s3',
    quote:   {
      es: '"El fútbol no fue solo un deporte. Fue el camino que me llevó a quien soy hoy."',
      en: '"Soccer wasn\'t just a sport. It was the path that led me to who I am today."',
    },
    quoteBy: {
      es: 'Ex jugador, Programa US-HN Talents',
      en: 'Former player, US-HN Talents Program',
    },
    body: {
      es: '<p class="st-modal__text">Desde sus primeros torneos, US-HN Talents ha sido testigo de transformaciones que van mucho más allá de un marcador. Jóvenes que llegaron sin saber lo que significaba la disciplina, el trabajo en equipo o la perseverancia, han salido convertidos en líderes dentro y fuera de la cancha.</p><p class="st-modal__text">Entre las historias más inspiradoras destaca la de jóvenes que, habiendo participado en los campamentos de la fundación, lograron ingresar a academias de fútbol formales, obtener becas académicas y servir como referentes positivos en sus comunidades. El fútbol fue la puerta; la fundación fue el apoyo que los ayudó a cruzarla.</p><p class="st-modal__text">Cada partido, cada entrenamiento y cada torneo es una oportunidad de escribir nuevas historias. US-HN Talents se compromete a seguir siendo ese puente entre el sueño de un niño y la realidad de un futuro mejor, porque creemos que Honduras tiene el talento para brillar ante el mundo.</p>',
      en: '<p class="st-modal__text">Since its first tournaments, US-HN Talents has witnessed transformations that go far beyond a score. Young people who arrived without understanding what discipline, teamwork, or perseverance meant, have left transformed into leaders on and off the field.</p><p class="st-modal__text">Among the most inspiring stories are young people who, having participated in the foundation\'s camps, went on to join formal soccer academies, earn academic scholarships, and serve as positive role models in their communities. Soccer was the door; the foundation was the support that helped them walk through it.</p><p class="st-modal__text">Every match, every training session, and every tournament is an opportunity to write new stories. US-HN Talents is committed to remaining that bridge between a child\'s dream and the reality of a better future, because we believe Honduras has the talent to shine before the world.</p>',
    },
    details: {
      es: [
        { label: 'Alcance',   value: 'Todo Honduras' },
        { label: 'Impacto',   value: '+500 jóvenes en 5 años' },
        { label: 'Programas', value: 'Torneos, Campamentos, Becas' },
      ],
      en: [
        { label: 'Reach',    value: 'All of Honduras' },
        { label: 'Impact',   value: '+500 youth in 5 years' },
        { label: 'Programs', value: 'Tournaments, Camps, Scholarships' },
      ],
    },
  },
};

/* ============================================
   STATE
   ============================================ */
let lang = 'es';
let countersTriggered = false;

/* ============================================
   LANGUAGE TOGGLE
   ============================================ */
function applyLanguage(newLang) {
  lang = newLang;
  document.documentElement.lang = newLang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = T[newLang][key];
    if (val !== undefined) {
      el.innerHTML = val; // innerHTML supports <br> and <em> in translations
    }
  });

  const toggle = document.getElementById('langToggle');
  if (toggle) {
    toggle.querySelector('.nav__lang-active').textContent = newLang === 'es' ? 'ES' : 'EN';
    toggle.querySelector('.nav__lang-other').textContent  = newLang === 'es' ? 'EN' : 'ES';
  }
}

function initLangToggle() {
  const btn = document.getElementById('langToggle');
  if (!btn) return;
  btn.addEventListener('click', () => applyLanguage(lang === 'es' ? 'en' : 'es'));
}

/* ============================================
   NAVIGATION — SCROLL EFFECT
   ============================================ */
function initNavScroll() {
  const nav = document.getElementById('nav');
  if (!nav) return;
  const check = () => nav.classList.toggle('nav--scrolled', window.scrollY > 50);
  window.addEventListener('scroll', check, { passive: true });
  check();
}

/* ============================================
   MOBILE MENU
   ============================================ */
function initMobileMenu() {
  const burger  = document.getElementById('hamburger');
  const menu    = document.getElementById('navMenu');
  const overlay = document.getElementById('mobileOverlay');
  if (!burger || !menu) return;

  const close = () => {
    burger.classList.remove('active');
    menu.classList.remove('active');
    overlay?.classList.remove('active');
    burger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  burger.addEventListener('click', () => {
    const open = menu.classList.contains('active');
    if (open) {
      close();
    } else {
      burger.classList.add('active');
      menu.classList.add('active');
      overlay?.classList.add('active');
      burger.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }
  });

  overlay?.addEventListener('click', close);
  menu.querySelectorAll('.nav__link').forEach(l => l.addEventListener('click', close));
}

/* ============================================
   ACTIVE NAV LINK (intersection-based)
   ============================================ */
function initActiveLinks() {
  const sections = document.querySelectorAll('section[id]');
  const links    = document.querySelectorAll('.nav__link[href^="#"]');

  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const id = e.target.id;
        links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${id}`));
      }
    });
  }, { rootMargin: '-45% 0px -45% 0px' });

  sections.forEach(s => io.observe(s));
}

/* ============================================
   SCROLL REVEAL
   ============================================ */
function initReveal() {
  const els = document.querySelectorAll('.reveal');

  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const delay = parseInt(e.target.dataset.delay || 0);
        setTimeout(() => e.target.classList.add('visible'), delay);
        io.unobserve(e.target);
      }
    });
  }, { rootMargin: '0px 0px -70px 0px', threshold: 0.1 });

  els.forEach(el => io.observe(el));
}

/* ============================================
   STATS COUNTER
   ============================================ */
function countUp(el, target, prefix, suffix, duration) {
  const start = performance.now();
  (function step(now) {
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3); // ease-out cubic
    el.textContent = prefix + Math.round(eased * target) + suffix;
    if (p < 1) requestAnimationFrame(step);
  })(start);
}

function initCounters() {
  const statsEl = document.querySelector('.stats');
  if (!statsEl) return;

  const io = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && !countersTriggered) {
      countersTriggered = true;
      document.querySelectorAll('.stat__num[data-target]').forEach(el => {
        countUp(el, +el.dataset.target, el.dataset.prefix || '', el.dataset.suffix || '', 2200);
      });
    }
  }, { threshold: 0.5 });

  io.observe(statsEl);
}

/* ============================================
   SMOOTH SCROLL
   ============================================ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const navH = document.getElementById('nav')?.offsetHeight || 72;
      window.scrollTo({ top: target.getBoundingClientRect().top + scrollY - navH, behavior: 'smooth' });
    });
  });
}

/* ============================================
   CONTACT FORM
   ============================================ */
function initForm() {
  const form    = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  const error   = document.getElementById('formError');
  if (!form) return;

  const showMsg = (el, duration = 6000) => {
    if (!el) return;
    el.hidden = false;
    setTimeout(() => { el.hidden = true; }, duration);
  };

  form.addEventListener('submit', async e => {
    e.preventDefault();

    const fields = [
      form.querySelector('#fname'),
      form.querySelector('#femail'),
      form.querySelector('#fmsg')
    ];

    let valid = true;
    fields.forEach(f => {
      const ok = f.value.trim() !== '' && (f.type !== 'email' || /\S+@\S+\.\S+/.test(f.value));
      if (!ok) {
        valid = false;
        f.style.borderColor = '#E74C3C';
        f.style.boxShadow   = '0 0 0 3px rgba(231,76,60,0.15)';
        setTimeout(() => { f.style.borderColor = ''; f.style.boxShadow = ''; }, 2500);
      }
    });

    if (!valid) return;

    if (success) success.hidden = true;
    if (error)   error.hidden   = true;

    const btn    = form.querySelector('[type="submit"]');
    const btnTxt = btn.querySelector('.btn-txt');
    btnTxt.textContent = lang === 'es' ? 'Enviando…' : 'Sending…';
    btn.disabled = true;

    try {
      const data = new FormData(form);
      const res  = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data
      });
      const json = await res.json();

      if (json.success) {
        form.reset();
        showMsg(success);
      } else {
        showMsg(error);
      }
    } catch {
      showMsg(error);
    } finally {
      btn.disabled = false;
      btnTxt.textContent = T[lang]['form.submit'];
    }
  });

  form.querySelectorAll('.f-input').forEach(f => {
    f.addEventListener('input', () => { f.style.borderColor = ''; f.style.boxShadow = ''; });
  });
}

/* ============================================
   DONATE AMOUNT SELECTOR
   ============================================ */
function initDonateSelector() {
  const amounts     = document.querySelectorAll('.donate-amount');
  const donateBtn   = document.getElementById('donateBtn');
  const customWrap  = document.getElementById('donateCustom');
  const customAmt   = document.getElementById('customAmount');
  const customReason= document.getElementById('customReason');
  if (!amounts.length || !donateBtn) return;

  let selectedSubject = 'Donación $100';
  let isCustom = false;

  const selectAmount = (btn) => {
    amounts.forEach(a => a.classList.remove('donate-amount--active'));
    btn.classList.add('donate-amount--active');
    isCustom = btn.dataset.amount === 'personalizado';
    if (customWrap) customWrap.hidden = !isCustom;
    if (!isCustom) selectedSubject = btn.dataset.subject || 'Quiero Donar';
  };

  // Pre-select $100 (featured option)
  const featured = document.querySelector('.donate-amount--featured');
  if (featured) selectAmount(featured);

  amounts.forEach(btn => {
    btn.addEventListener('click', () => selectAmount(btn));
  });

  donateBtn.addEventListener('click', () => {
    let subject, body = '';
    if (isCustom) {
      const amt    = customAmt  ? customAmt.value.trim()   : '';
      const reason = customReason ? customReason.value.trim() : '';
      subject = amt ? `Donación personalizada $${amt}` : 'Donación personalizada';
      if (reason) body = `Motivo: ${reason}`;
    } else {
      subject = selectedSubject;
    }
    const mailto = `mailto:info@ushn.org?subject=${encodeURIComponent(subject)}${body ? '&body=' + encodeURIComponent(body) : ''}`;
    window.location.href = mailto;
  });
}

/* ============================================
   PWA INSTALL PROMPT
   ============================================ */
let deferredPrompt = null;

function initPWA() {
  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault();
    deferredPrompt = e;
    setTimeout(showInstallBanner, 4000);
  });
}

function showInstallBanner() {
  if (!deferredPrompt) return;

  const isEs = lang === 'es';
  const banner = document.createElement('div');
  banner.id = 'installBanner';
  banner.innerHTML = `
    <div class="ib-inner">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
      <div>
        <strong>${isEs ? 'Instalar US-HN Talents' : 'Install US-HN Talents'}</strong>
        <span>${isEs ? 'Añadir a pantalla de inicio' : 'Add to home screen'}</span>
      </div>
    </div>
    <button id="ibInstall">${isEs ? 'Instalar' : 'Install'}</button>
    <button id="ibClose" aria-label="Cerrar">×</button>
  `;

  const style = document.createElement('style');
  style.textContent = `
    #installBanner {
      position: fixed; bottom: 20px; left: 50%;
      transform: translateX(-50%) translateY(100px);
      background: #0F1E35; border: 1px solid rgba(255,255,255,0.09);
      border-radius: 14px; padding: 14px 18px;
      display: flex; align-items: center; gap: 14px;
      z-index: 3000; max-width: calc(100vw - 40px);
      box-shadow: 0 8px 40px rgba(0,0,0,0.5);
      color: white; font-family: 'DM Sans', sans-serif;
      animation: ib-up 0.5s ease forwards;
    }
    @keyframes ib-up { to { transform: translateX(-50%) translateY(0); } }
    .ib-inner { display: flex; align-items: center; gap: 12px; flex: 1; }
    .ib-inner strong { display: block; font-size: 13px; font-weight: 600; }
    .ib-inner span   { display: block; font-size: 11px; color: rgba(255,255,255,0.45); margin-top: 2px; }
    #ibInstall {
      background: #FFB300; color: #0A1628; border: none; border-radius: 7px;
      padding: 7px 15px; font-size: 12px; font-weight: 700; cursor: pointer;
      font-family: 'Barlow Condensed', sans-serif; letter-spacing: 1px; text-transform: uppercase;
      white-space: nowrap;
    }
    #ibClose { background: none; border: none; color: rgba(255,255,255,0.35); font-size: 20px; cursor: pointer; padding: 4px; line-height: 1; }
  `;
  document.head.appendChild(style);
  document.body.appendChild(banner);

  document.getElementById('ibInstall').addEventListener('click', async () => {
    banner.remove();
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    deferredPrompt = null;
  });
  document.getElementById('ibClose').addEventListener('click', () => banner.remove());
}

/* ============================================
   ABOUT SLIDER
   ============================================ */
function initAboutSlider() {
  const slider = document.getElementById('aboutSlider');
  if (!slider) return;

  const slides   = slider.querySelectorAll('.about__slide');
  const dotsWrap = slider.querySelector('.about__slider-dots');
  const prevBtn  = slider.querySelector('.about__arrow--prev');
  const nextBtn  = slider.querySelector('.about__arrow--next');
  if (!slides.length) return;

  // Build dots
  slides.forEach((_, i) => {
    const d = document.createElement('button');
    d.className = 'about__dot' + (i === 0 ? ' active' : '');
    d.setAttribute('aria-label', `Foto ${i + 1}`);
    dotsWrap.appendChild(d);
  });

  let current = 0;
  let timer;

  function goTo(i) {
    slides[current].classList.remove('active');
    dotsWrap.children[current]?.classList.remove('active');
    current = (i + slides.length) % slides.length;
    slides[current].classList.add('active');
    dotsWrap.children[current]?.classList.add('active');
  }

  function start() { timer = setInterval(() => goTo(current + 1), 4000); }
  function reset()  { clearInterval(timer); start(); }

  prevBtn.addEventListener('click', () => { goTo(current - 1); reset(); });
  nextBtn.addEventListener('click', () => { goTo(current + 1); reset(); });
  dotsWrap.addEventListener('click', e => {
    const dot = e.target.closest('.about__dot');
    if (!dot) return;
    goTo([...dotsWrap.children].indexOf(dot));
    reset();
  });

  start();
}

/* ============================================
   HERO CAROUSEL
   ============================================ */
function initHeroCarousel() {
  const slides = document.querySelectorAll('.hero__slide');
  const dots   = document.querySelectorAll('.hero__dot');
  if (!slides.length) return;

  let current = 0;
  let timer;

  function goTo(i) {
    slides[current].classList.remove('active');
    dots[current]?.classList.remove('active');
    current = (i + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current]?.classList.add('active');
  }

  function start() {
    timer = setInterval(() => goTo(current + 1), 4500);
  }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      clearInterval(timer);
      goTo(i);
      start();
    });
  });

  start();
}

/* ============================================
   YOUTUBE VIDEOS
   ──────────────────────────────────────────
   OPCIÓN A (manual, siempre funciona):
   Reemplaza los IDs de abajo con los de los
   últimos videos. El ID es lo que va después
   de "youtu.be/" o "watch?v=" en el link.

   OPCIÓN B (automático):
   Rellena YT_CHANNEL_ID con el ID del canal
   (empieza con UC...) y los videos se cargan
   solos desde YouTube cada vez que abres la página.
   ============================================ */

// --- OPCIÓN A: IDs manuales (activo ahora) ---
const YT_VIDEOS = [
  { id: 'Hrj9feij1p0', title: 'La Champions — Entrevista a Josué Ramos, Presidente de US-HN Talents' },
  { id: 'sKiH-d1Myd8', title: 'US-HN Talents — Highlights' },
  { id: 'RUtelsExYtw', title: 'US-HN Talents — Momentos Especiales' },
];

// --- OPCIÓN B: ID del canal para carga automática ---
// Para obtenerlo: abre youtube.com/@ushntalents en el navegador,
// presiona Ctrl+U (ver código fuente), luego Ctrl+F y busca
// "/channel/UC" — el ID es el texto que sigue hasta la siguiente comilla.
const YT_CHANNEL_ID = ''; // Ej: 'UCxxxxxxxxxxxxxxxxxxxxxxxxx'

function videoCard(id, title) {
  return `
    <a class="media__video-wrap" href="https://www.youtube.com/watch?v=${id}" target="_blank" rel="noopener" aria-label="${title}">
      <img src="https://img.youtube.com/vi/${id}/hqdefault.jpg" alt="${title}" loading="lazy">
      <div class="media__video-play">
        <svg viewBox="0 0 68 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="68" height="48" rx="10" fill="#FF0000"/>
          <polygon points="26,14 26,34 46,24" fill="white"/>
        </svg>
        <span class="media__video-title">${title}</span>
      </div>
    </a>`;
}

function renderManualVideos() {
  const grid = document.getElementById('ytVideosGrid');
  if (!grid) return;
  grid.innerHTML = YT_VIDEOS.map(v => videoCard(v.id, v.title)).join('');
}

async function loadLatestYouTubeVideos() {
  if (!YT_CHANNEL_ID) {
    renderManualVideos();
    return;
  }

  const grid = document.getElementById('ytVideosGrid');
  if (!grid) return;

  try {
    const rss = `https://www.youtube.com/feeds/videos.xml?channel_id=${YT_CHANNEL_ID}`;
    const api = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rss)}&count=3`;
    const res  = await fetch(api);
    const data = await res.json();

    if (data.status !== 'ok' || !data.items?.length) { renderManualVideos(); return; }

    grid.innerHTML = data.items.slice(0, 3).map(item => {
      const id = item.link.split('v=')[1]?.split('&')[0] || item.guid.split('v=')[1];
      return videoCard(id, item.title);
    }).join('');
  } catch (e) {
    renderManualVideos();
  }
}

/* ============================================
   SCROLL PROGRESS + BACK TO TOP
   ============================================ */
function initScrollExtras() {
  const bar = document.getElementById('scrollProgress');
  const btn = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    const total  = document.body.scrollHeight - window.innerHeight;
    const pct    = total > 0 ? (window.scrollY / total) * 100 : 0;
    if (bar) bar.style.width = pct + '%';
    if (btn) btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  btn?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ============================================
   EVENT MODAL
   ============================================ */
function buildModalBody(data) {
  const isEs = lang === 'es';
  const pinSvg = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="15"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`;
  const photoSvg = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="22"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>`;
  const igSvg = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="22"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`;
  const ytSvg = `<svg viewBox="0 0 24 24" fill="currentColor" width="22"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.4 19.54C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/></svg>`;
  const playSvg = `<svg viewBox="0 0 48 48" width="48" height="48" fill="none"><circle cx="24" cy="24" r="24" fill="rgba(0,0,0,0.55)"/><polygon points="19,14 19,34 36,24" fill="white"/></svg>`;

  let html = '';

  // Description
  html += `<p class="ev-modal__desc">${isEs ? data.desc_es : data.desc_en}</p>`;

  // Gallery
  html += `<div><p class="ev-modal__section-title">${isEs ? 'Galería de fotos' : 'Photo gallery'}</p>`;
  if (data.photos && data.photos.length > 0) {
    html += `<div class="ev-modal__photo-grid">
          ${data.photos.map(f => `
            <div class="ev-modal__photo-item lb-photo">
              <img src="${data.photoPath}${f}" alt="${isEs ? data.name_es : data.name_en}" loading="lazy">
            </div>`).join('')}
        </div>`;
  }
  if (data.pixieset) {
    html += `
        <a href="${data.pixieset}" target="_blank" rel="noopener" class="ev-modal__gallery-btn" style="margin-top:12px">
          <div class="ev-modal__gallery-icon">${photoSvg}</div>
          <div class="ev-modal__gallery-copy">
            <strong>${isEs ? 'Ver galería completa' : 'View full gallery'}</strong>
            <span>Pixieset &nbsp;·&nbsp; ${isEs ? data.name_es : data.name_en}</span>
          </div>
          <span class="ev-modal__gallery-arrow">→</span>
        </a>`;
  } else if (!data.photos || data.photos.length === 0) {
    html += `
        <a href="https://www.instagram.com/us_hn_talents/" target="_blank" rel="noopener" class="ev-modal__gallery-btn ev-modal__gallery-btn--ig">
          <div class="ev-modal__gallery-icon">${igSvg}</div>
          <div class="ev-modal__gallery-copy">
            <strong>${isEs ? 'Ver fotos en Instagram' : 'View photos on Instagram'}</strong>
            <span>@us_hn_talents</span>
          </div>
          <span class="ev-modal__gallery-arrow">→</span>
        </a>`;
  }
  html += `</div>`;

  // Teams
  if (data.teams && data.teams.length > 0) {
    html += `
      <div>
        <p class="ev-modal__section-title">${isEs ? 'Equipos participantes' : 'Participating teams'}</p>
        <div class="ev-modal__teams-grid">
          ${data.teams.map(t => `<span class="ev-modal__team">${t}</span>`).join('')}
        </div>
      </div>`;
  }

  // Results
  if (data.results && data.results.length > 0) {
    const champLabel = isEs ? 'Campeón' : 'Champion';
    const subLabel   = isEs ? 'Subcampeón' : 'Runner-up';
    html += `<div><p class="ev-modal__section-title">${isEs ? 'Resultados' : 'Results'}</p>`;
    data.results.forEach(r => {
      if (r.cat_es) {
        html += `<p class="ev-modal__result-cat-label">${isEs ? r.cat_es : r.cat_en}</p>`;
      }
      html += `
        <div class="ev-modal__podium">
          <div class="ev-modal__podium-card ev-modal__podium-card--gold">
            <span class="ev-modal__podium-medal">🥇</span>
            <span class="ev-modal__podium-role">${champLabel}</span>
            <span class="ev-modal__podium-team">${r.first}</span>
          </div>
          <div class="ev-modal__podium-card ev-modal__podium-card--silver">
            <span class="ev-modal__podium-medal">🥈</span>
            <span class="ev-modal__podium-role">${subLabel}</span>
            <span class="ev-modal__podium-team">${r.second}</span>
          </div>
        </div>`;
    });
    html += `</div>`;
  }

  // Videos
  html += `<div><p class="ev-modal__section-title">${isEs ? 'Videos del evento' : 'Event videos'}</p>`;
  if (data.videoGroups && data.videoGroups.length > 0) {
    data.videoGroups.forEach(group => {
      html += `<p class="ev-modal__phase-title">${isEs ? group.phase_es : group.phase_en}</p>`;
      html += `<div class="ev-modal__vgrid">`;
      group.matches.forEach(m => {
        html += `
          <a class="ev-modal__vthumbnail" href="https://www.youtube.com/watch?v=${m.id}" target="_blank" rel="noopener">
            <img src="https://img.youtube.com/vi/${m.id}/hqdefault.jpg" alt="${m.label}" loading="lazy">
            <div class="ev-modal__vplay">${playSvg}</div>
            <div class="ev-modal__vlabel">${m.label}</div>
          </a>`;
      });
      html += `</div>`;
    });
  } else if (data.videos && data.videos.length > 0) {
    html += `<div class="ev-modal__vgrid">`;
    data.videos.forEach(id => {
      html += `
        <a class="ev-modal__vthumbnail" href="https://www.youtube.com/watch?v=${id}" target="_blank" rel="noopener">
          <img src="https://img.youtube.com/vi/${id}/hqdefault.jpg" alt="Video" loading="lazy">
          <div class="ev-modal__vplay">${playSvg}</div>
        </a>`;
    });
    html += `</div>`;
  } else {
    html += `
      <a href="https://www.youtube.com/@ushntalents" target="_blank" rel="noopener" class="ev-modal__yt-btn">
        ${ytSvg}
        ${isEs ? 'Ver canal de YouTube →' : 'View YouTube channel →'}
      </a>`;
  }
  html += `</div>`;

  return html;
}

function openEventModal(eventId) {
  const data = EVENTS_DATA[eventId];
  if (!data) return;
  const modal    = document.getElementById('evModal');
  const isEs     = lang === 'es';

  document.getElementById('evModalBadge').textContent = isEs ? data.badge_es : data.badge_en;
  document.getElementById('evModalYear').textContent  = data.year;
  document.getElementById('evModalTitle').textContent = isEs ? data.name_es : data.name_en;

  const pinSvg = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`;
  document.getElementById('evModalInfo').innerHTML = `
    <span class="ev-modal__info-item">${pinSvg} ${data.location}</span>
    <span class="ev-modal__info-item">· ${data.categories}</span>`;

  document.getElementById('evModalBody').innerHTML = buildModalBody(data);
  document.getElementById('evModalBody').querySelectorAll('.lb-photo').forEach(item => {
    item.addEventListener('click', () => {
      if (typeof window.openLightbox === 'function') window.openLightbox(item.querySelector('img').src);
    });
  });

  modal.hidden = false;
  document.body.style.overflow = 'hidden';
  requestAnimationFrame(() => modal.classList.add('active'));
}

/* ============================================
   COUNTDOWN — Mundialito Colegial 2026
   ============================================ */
function initCountdown() {
  const target = new Date('2026-06-02T00:00:00').getTime();
  const dEl = document.getElementById('cd-days');
  const hEl = document.getElementById('cd-hours');
  const mEl = document.getElementById('cd-mins');
  const sEl = document.getElementById('cd-secs');
  if (!dEl) return;

  const pad = n => String(Math.max(0, n)).padStart(2, '0');

  const tick = () => {
    const diff = target - Date.now();
    if (diff <= 0) {
      dEl.textContent = hEl.textContent = mEl.textContent = sEl.textContent = '00';
      return;
    }
    dEl.textContent = pad(Math.floor(diff / 86400000));
    hEl.textContent = pad(Math.floor((diff % 86400000) / 3600000));
    mEl.textContent = pad(Math.floor((diff % 3600000) / 60000));
    sEl.textContent = pad(Math.floor((diff % 60000) / 1000));
  };

  tick();
  setInterval(tick, 1000);
}

/* ============================================
   GALLERY CARDS — open event modal
   ============================================ */
function initGalleryCardModals() {
  document.querySelectorAll('.gallery-card[data-open-event]').forEach(card => {
    card.addEventListener('click', () => openEventModal(card.dataset.openEvent));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openEventModal(card.dataset.openEvent); }
    });
  });
}

/* ============================================
   STORY MODALS
   ============================================ */
function openStoryModal(storyId) {
  const modal  = document.getElementById('stModal');
  const hero   = document.getElementById('stModalHero');
  const catEl  = document.getElementById('stModalCat');
  const titleEl = document.getElementById('stModalTitle');
  const bodyEl  = document.getElementById('stModalBody');
  if (!modal) return;
  const data = STORIES_DATA[storyId];
  if (!data) return;

  const l = lang;
  hero.className = 'st-modal__hero ' + data.heroMod;

  catEl.textContent  = data.cat[l];
  titleEl.textContent = data.title[l];

  const detailIcon = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="3" fill="currentColor"/></svg>';
  const detailsHTML = data.details[l].map(d =>
    `<div class="st-modal__detail">${detailIcon}<span>${d.label}: <strong>${d.value}</strong></span></div>`
  ).join('');

  let videoHTML = '';
  if (data.videoId) {
    const vSrc = `https://player.vimeo.com/video/${data.videoId}?badge=0&byline=0&portrait=0&title=0${data.videoHash ? '&h=' + data.videoHash : ''}`;
    const vLabel = l === 'es' ? 'Video' : 'Video';
    videoHTML = `<div class="ev-modal__section-title">${vLabel}</div>` +
      `<div class="st-modal__video-wrap"><iframe src="${vSrc}" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen loading="lazy"></iframe></div>`;
  }

  let photosHTML = '';
  if (data.photos && data.photos.length) {
    const galleryTitle = l === 'es' ? 'Galería de Fotos' : 'Photo Gallery';
    const items = data.photos.map(p =>
      `<div class="ev-modal__photo-item lb-photo"><img src="${data.photoPath}${p}" alt="" loading="lazy"/></div>`
    ).join('');
    photosHTML = `<div class="ev-modal__section-title">${galleryTitle}</div><div class="ev-modal__photo-grid">${items}</div>`;
  }

  bodyEl.innerHTML =
    `<div class="st-modal__quote"><p>${data.quote[l]}</p><cite>— ${data.quoteBy[l]}</cite></div>` +
    data.body[l] +
    `<div class="st-modal__details">${detailsHTML}</div>` +
    videoHTML +
    photosHTML;

  bodyEl.querySelectorAll('.lb-photo').forEach(item => {
    item.addEventListener('click', () => {
      if (typeof window.openLightbox === 'function') window.openLightbox(item.querySelector('img').src);
    });
  });

  modal.hidden = false;
  document.body.style.overflow = 'hidden';
  requestAnimationFrame(() => requestAnimationFrame(() => modal.classList.add('active')));
}

function initStoryModals() {
  const modal = document.getElementById('stModal');
  if (!modal) return;
  const panel = modal.querySelector('.st-modal__panel');

  document.querySelectorAll('.story-card').forEach(card => {
    const btn = card.querySelector('[data-story]');
    if (!btn) return;
    card.addEventListener('click', () => openStoryModal(btn.dataset.story));
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openStoryModal(btn.dataset.story); }
    });
  });

  const closeModal = () => {
    panel.style.transition = '';
    panel.style.transform  = '';
    panel.style.opacity    = '';
    modal.classList.remove('active');
    setTimeout(() => { modal.hidden = true; document.body.style.overflow = ''; }, 360);
  };

  document.getElementById('stModalClose').addEventListener('click', closeModal);
  document.getElementById('stModalOverlay').addEventListener('click', closeModal);
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !modal.hidden) closeModal(); });

  // Prevent background page scroll on mobile when touching outside the panel
  modal.addEventListener('touchmove', e => {
    if (!panel.contains(e.target)) e.preventDefault();
  }, { passive: false });

  // ── Swipe down to close (mobile) ──
  let swipeStartY = 0;
  panel.addEventListener('touchstart', e => {
    swipeStartY = e.touches[0].clientY;
  }, { passive: true });

  panel.addEventListener('touchmove', e => {
    const dy = e.touches[0].clientY - swipeStartY;
    if (panel.scrollTop === 0 && dy > 0) {
      e.preventDefault();
      panel.style.transition = 'none';
      panel.style.transform  = `translateY(${Math.min(dy * 0.55, 130)}px)`;
      panel.style.opacity    = String(Math.max(0.35, 1 - dy / 320));
    }
  }, { passive: false });

  panel.addEventListener('touchend', e => {
    const dy = e.changedTouches[0].clientY - swipeStartY;
    if (panel.scrollTop === 0 && dy > 80) {
      panel.style.transition = 'transform 0.22s ease, opacity 0.22s ease';
      panel.style.transform  = 'translateY(100%)';
      panel.style.opacity    = '0';
      setTimeout(closeModal, 230);
    } else {
      panel.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
      panel.style.transform  = '';
      panel.style.opacity    = '';
      setTimeout(() => { panel.style.transition = ''; }, 300);
    }
  }, { passive: true });
}

function initEventModals() {
  const modal   = document.getElementById('evModal');
  const overlay = document.getElementById('evModalOverlay');
  const closeBtn = document.getElementById('evModalClose');
  if (!modal) return;

  document.querySelectorAll('.ev-card[data-event]').forEach(card => {
    card.addEventListener('click', () => openEventModal(card.dataset.event));
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openEventModal(card.dataset.event); } });
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
  });

  const closeModal = () => {
    modal.classList.remove('active');
    setTimeout(() => { modal.hidden = true; document.body.style.overflow = ''; }, 360);
  };

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !modal.hidden) closeModal(); });
}

/* ============================================
   CHAMPIONS DATA
   ============================================ */
const CHAMPIONS_DATA = {
  sub16: {
    champion: 'Platense JR',
    clasifican: 8,
    tabla: [
      { equipo:'Euro Sports',                 pj:2, pg:2, pe:0, pp:0, gf:6,  gc:3,  dg:'+3', pts:6, am:1, ro:0 },
      { equipo:'CD San Juan',                 pj:2, pg:1, pe:1, pp:0, gf:6,  gc:2,  dg:'+4', pts:4, am:2, ro:0 },
      { equipo:'AF Berrios',                  pj:2, pg:1, pe:1, pp:0, gf:6,  gc:3,  dg:'+3', pts:4, am:2, ro:0 },
      { equipo:'Luz y Vida',                  pj:2, pg:1, pe:1, pp:0, gf:6,  gc:4,  dg:'+2', pts:4, am:1, ro:0 },
      { equipo:'Atletas para el Reino',       pj:2, pg:1, pe:1, pp:0, gf:4,  gc:2,  dg:'+2', pts:4, am:2, ro:0 },
      { equipo:'Platense JR',                 pj:2, pg:1, pe:0, pp:1, gf:7,  gc:2,  dg:'+5', pts:3, am:0, ro:0 },
      { equipo:'Orange Lions',                pj:2, pg:0, pe:2, pp:0, gf:7,  gc:7,  dg:'0',  pts:2, am:3, ro:0 },
      { equipo:'Carp',                        pj:2, pg:0, pe:1, pp:1, gf:5,  gc:6,  dg:'-1', pts:1, am:2, ro:0 },
      { equipo:'Eagles Sports',               pj:2, pg:0, pe:1, pp:1, gf:0,  gc:2,  dg:'-2', pts:1, am:3, ro:2 },
      { equipo:'Atletico Roca',               pj:2, pg:0, pe:1, pp:1, gf:3,  gc:6,  dg:'-3', pts:1, am:3, ro:0 },
      { equipo:'Acd. Tigres',                 pj:2, pg:0, pe:1, pp:1, gf:0,  gc:4,  dg:'-4', pts:1, am:2, ro:0 },
      { equipo:'Gerencia de Deportes Inmude', pj:2, pg:0, pe:0, pp:2, gf:1,  gc:10, dg:'-9', pts:0, am:1, ro:0 },
    ],
    llaves: {
      cuartos: [
        { llave:'A', e1:'Euro Sports',            g1:2, e2:'Carp',                 g2:1 },
        { llave:'B', e1:'CD San Juan',            g1:2, e2:'Orange Lions',          g2:4 },
        { llave:'C', e1:'AF Berrios',             g1:0, e2:'Platense JR',           g2:2 },
        { llave:'D', e1:'Luz y Vida',             g1:1, e2:'Atletas para el Reino', g2:0 },
      ],
      semis: [
        { label:'Semifinal 1', e1:'Euro Sports',  g1:2, e2:'Luz y Vida',   g2:4 },
        { label:'Semifinal 2', e1:'Orange Lions', g1:1, e2:'Platense JR',  g2:2 },
      ],
      final: { e1:'Luz y Vida', g1:1, e2:'Platense JR', g2:2 }
    },
    goleadores: [
      { jugador:'Elvin Gabriel Betancourth', equipo:'Luz y Vida',                  goles:6 },
      { jugador:'Harrie Gonzales',           equipo:'Euro Sports',                 goles:4 },
      { jugador:'Angel Bonilla',             equipo:'Euro Sports',                 goles:4 },
      { jugador:'Rolando Mejia',             equipo:'Euro Sports',                 goles:2 },
      { jugador:'Keylor Castilo',            equipo:'Orange Lions',                goles:2 },
      { jugador:'Andrew Herrera',            equipo:'Orange Lions',                goles:2 },
      { jugador:'Nolvin Leiva',              equipo:'Carp',                        goles:2 },
      { jugador:'Cristopher Zuniga',         equipo:'Carp',                        goles:2 },
      { jugador:'Samuel Villanueva',         equipo:'Platense JR',                 goles:2 },
      { jugador:'Kevin Amador',              equipo:'AF Berrios',                  goles:2 },
      { jugador:'David Munguia',             equipo:'Atletico Roca',               goles:2 },
      { jugador:'Oliver Castro',             equipo:'Gerencia de Deportes Inmude', goles:1 },
      { jugador:'Deibyn Gonzales',           equipo:'Luz y Vida',                  goles:1 },
      { jugador:'Kevin Oseguera',            equipo:'Luz y Vida',                  goles:1 },
      { jugador:'Joshua Oviedo',             equipo:'Eagles Sports',               goles:1 },
      { jugador:'Dewar Dolmo',               equipo:'Orange Lions',                goles:1 },
      { jugador:'Roger Castellanos',         equipo:'Platense JR',                 goles:1 },
      { jugador:'Walter Cerna',              equipo:'Platense JR',                 goles:1 },
      { jugador:'Sebastian Garcia',          equipo:'Carp',                        goles:1 },
      { jugador:'Gian Carlo Flores',         equipo:'Euro Sports',                 goles:1 },
      { jugador:'Harrison Contreras',        equipo:'Luz y Vida',                  goles:1 },
      { jugador:'Jonathan Oswaldo Ramirez',  equipo:'CD San Juan',                 goles:1 },
      { jugador:'Bryan Lopez',               equipo:'CD San Juan',                 goles:1 },
      { jugador:'Elder Galea',               equipo:'AF Berrios',                  goles:1 },
      { jugador:'Aaron Corea',               equipo:'Atletas para el Reino',       goles:1 },
      { jugador:'Fabricio Molina',           equipo:'Atletas para el Reino',       goles:1 },
      { jugador:'Jonathan Reyes',            equipo:'AF Berrios',                  goles:1 },
      { jugador:'Dani Nuñez',                equipo:'AF Berrios',                  goles:1 },
      { jugador:'Luis Castillo',             equipo:'AF Berrios',                  goles:1 },
      { jugador:'Antuan Munguia',            equipo:'Atletico Roca',               goles:1 },
      { jugador:'Denice Flores',             equipo:'Orange Lions',                goles:1 },
      { jugador:'Bryan Ponce',               equipo:'CD San Juan',                 goles:1 },
      { jugador:'Fernando Montoya',          equipo:'Platense JR',                 goles:1 },
      { jugador:'Nahum Ordoñez',             equipo:'Luz y Vida',                  goles:1 },
      { jugador:'Caleb Umanzor',             equipo:'Luz y Vida',                  goles:1 },
    ]
  },
  sub18: {
    champion: 'AFFI',
    clasifican: 8,
    tabla: [
      { equipo:'Eagles Sports',        pj:2, pg:2, pe:0, pp:0, gf:8, gc:1, dg:'+7', pts:6, am:1, ro:0 },
      { equipo:'Esmude',               pj:2, pg:2, pe:0, pp:0, gf:2, gc:0, dg:'+2', pts:6, am:1, ro:0 },
      { equipo:'AFFI',                 pj:2, pg:1, pe:1, pp:0, gf:4, gc:0, dg:'+4', pts:4, am:4, ro:0 },
      { equipo:'Olimpia Progreso',     pj:2, pg:1, pe:1, pp:0, gf:6, gc:4, dg:'+2', pts:4, am:0, ro:0 },
      { equipo:'Olimpia FBO',          pj:2, pg:1, pe:1, pp:0, gf:2, gc:0, dg:'+2', pts:4, am:3, ro:0 },
      { equipo:'TDS',                  pj:2, pg:1, pe:1, pp:0, gf:3, gc:2, dg:'+1', pts:4, am:3, ro:0 },
      { equipo:'Lobos FC',             pj:2, pg:1, pe:1, pp:0, gf:2, gc:1, dg:'+1', pts:4, am:3, ro:0 },
      { equipo:'ACAFUTB',              pj:2, pg:1, pe:1, pp:0, gf:2, gc:1, dg:'+1', pts:4, am:5, ro:0 },
      { equipo:'Gerencia de deportes', pj:2, pg:1, pe:0, pp:1, gf:2, gc:2, dg:'0',  pts:3, am:4, ro:0 },
      { equipo:'Real España',          pj:2, pg:0, pe:1, pp:1, gf:2, gc:3, dg:'-1', pts:1, am:0, ro:0 },
      { equipo:'El Sauce',             pj:2, pg:0, pe:1, pp:1, gf:1, gc:2, dg:'-1', pts:1, am:4, ro:0 },
      { equipo:'Centuriones',          pj:2, pg:0, pe:1, pp:1, gf:1, gc:2, dg:'-1', pts:1, am:5, ro:0 },
      { equipo:'CD Aguila Jr',         pj:2, pg:0, pe:1, pp:1, gf:4, gc:6, dg:'-2', pts:1, am:0, ro:0 },
      { equipo:'Real Juventud',        pj:2, pg:0, pe:0, pp:2, gf:0, gc:2, dg:'-2', pts:0, am:2, ro:0 },
      { equipo:'Choloma Reservas',     pj:2, pg:0, pe:0, pp:2, gf:1, gc:6, dg:'-5', pts:0, am:3, ro:1 },
      { equipo:'AD Santa Cruz',        pj:2, pg:0, pe:0, pp:2, gf:1, gc:9, dg:'-8', pts:0, am:0, ro:0 },
    ],
    llaves: {
      cuartos: [
        { llave:'A', e1:'Eagles Sports',    g1:2, e2:'ACAFUTB',      g2:1 },
        { llave:'B', e1:'Esmude',           g1:2, e2:'Lobos FC',      g2:1 },
        { llave:'C', e1:'AFFI',             g1:4, e2:'TDS',           g2:0 },
        { llave:'D', e1:'Olimpia Progreso', g1:1, e2:'Olimpia FBO',   g2:3 },
      ],
      semis: [
        { label:'Semifinal 1', e1:'Eagles Sports', g1:3, e2:'Olimpia FBO', g2:0 },
        { label:'Semifinal 2', e1:'Esmude',        g1:0, e2:'AFFI',        g2:1 },
      ],
      final: { e1:'Eagles Sports', g1:4, e2:'AFFI', g2:5 }
    },
    goleadores: [
      { jugador:'Jeffry Enamorado',     equipo:'Eagles Sports',    goles:6 },
      { jugador:'Nevian Nuñes',         equipo:'TDS',              goles:2 },
      { jugador:'Kennet Rodriguez',     equipo:'AFFI',             goles:2 },
      { jugador:'Jonathan Sarmiento',   equipo:'Esmude',           goles:2 },
      { jugador:'Yeison Baquedano',     equipo:'Olimpia FBO',      goles:2 },
      { jugador:'Emerson Caliz',        equipo:'Eagles Sports',    goles:2 },
      { jugador:'Gerson Garcia',        equipo:'AFFI',             goles:2 },
      { jugador:'Gabriel Matamala',     equipo:'TDS',              goles:1 },
      { jugador:'Ridel Cerrato',        equipo:'AFFI',             goles:1 },
      { jugador:'Dani Flores',          equipo:'AFFI',             goles:1 },
      { jugador:'Gerson Martinez',      equipo:'AFFI',             goles:1 },
      { jugador:'Norman Urbina',        equipo:'TDS',              goles:1 },
      { jugador:'Robert Palma',         equipo:'TDS',              goles:1 },
      { jugador:'Alex Oliva',           equipo:'CD Aguila Jr',     goles:1 },
      { jugador:'David Sanchez',        equipo:'CD Aguila Jr',     goles:1 },
      { jugador:'Deiby Pineda',         equipo:'Olimpia Progreso', goles:1 },
      { jugador:'Emilson Guity',        equipo:'Real España',      goles:1 },
      { jugador:'Jayden Martinez',      equipo:'Real España',      goles:1 },
      { jugador:'Eduar Escobar',        equipo:'Olimpia Progreso', goles:1 },
      { jugador:'Danny Gonzales',       equipo:'ACAFUTB',          goles:1 },
      { jugador:'Eduardo Arita',        equipo:'ACAFUTB',          goles:1 },
      { jugador:'Ricardo Garcia',       equipo:'Olimpia FBO',      goles:1 },
      { jugador:'Anthony Avila',        equipo:'CD Aguila Jr',     goles:1 },
      { jugador:'Josue Diaz',           equipo:'Olimpia Progreso', goles:1 },
      { jugador:'Kevin Lobo',           equipo:'Olimpia Progreso', goles:1 },
      { jugador:'Andi Paz',             equipo:'Olimpia Progreso', goles:1 },
      { jugador:'Elvis Cruz',           equipo:'CD Aguila Jr',     goles:1 },
      { jugador:'Osman David Suazo',    equipo:'Gerencia de deportes', goles:1 },
      { jugador:'Kevin Calix',          equipo:'El Sauce',         goles:1 },
      { jugador:'Diego Maldonado',      equipo:'Gerencia de deportes', goles:1 },
      { jugador:'Jonathan Rodriguez',   equipo:'Lobos FC',         goles:1 },
      { jugador:'Jafet Posadas',        equipo:'Lobos FC',         goles:1 },
      { jugador:'Kevin Vasquez',        equipo:'Centuriones',      goles:1 },
      { jugador:'Denis Isaac Mejia',    equipo:'Eagles Sports',    goles:1 },
      { jugador:'Milton Dominguez',     equipo:'Eagles Sports',    goles:1 },
      { jugador:'Bryan Palacio',        equipo:'AD Santa Cruz',    goles:1 },
      { jugador:'Gerardo Santamaria',   equipo:'Esmude',           goles:1 },
      { jugador:'Elias M',              equipo:'ACAFUTB',          goles:1 },
      { jugador:'Jose Carlos',          equipo:'Olimpia FBO',      goles:1 },
      { jugador:'De la Cruz',           equipo:'Olimpia FBO',      goles:1 },
      { jugador:'Owen Ponce',           equipo:'Esmude',           goles:1 },
      { jugador:'Gabriel Centeno',      equipo:'Eagles Sports',    goles:1 },
      { jugador:'Andy Garcia',          equipo:'AFFI',             goles:1 },
    ]
  }
};

/* ============================================
   CHAMPIONS PANEL
   ============================================ */
let champsCat = 'sub16';
let champsTab = 'tabla';

function initChampions() {
  renderChampions();
  document.querySelectorAll('.cp__cat').forEach(btn => {
    btn.addEventListener('click', () => {
      champsCat = btn.dataset.cat;
      document.querySelectorAll('.cp__cat').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderChampions();
    });
  });
  document.querySelectorAll('.cp__tab').forEach(btn => {
    btn.addEventListener('click', () => {
      champsTab = btn.dataset.tab;
      document.querySelectorAll('.cp__tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderChampions();
    });
  });
}

function renderChampions() {
  const body = document.getElementById('cp-body');
  if (!body) return;
  const data = CHAMPIONS_DATA[champsCat];
  if (champsTab === 'tabla')       body.innerHTML = cpRenderTabla(data);
  else if (champsTab === 'llaves') body.innerHTML = cpRenderLlaves(data);
  else                             body.innerHTML = cpRenderGoleadores(data);
}

function cpBadge() { return champsCat === 'sub16' ? 'SUB 16' : 'SUB 18'; }

function cpRenderTabla(data) {
  const rows = data.tabla.map((t, i) => {
    const pos = i + 1;
    const ok = pos <= data.clasifican;
    const dgCls = t.dg.startsWith('+') ? 'cp-tbl__dg--pos' : t.dg === '0' ? '' : 'cp-tbl__dg--neg';
    return `<tr class="${ok ? '' : 'cp-tbl__row--out'}">
      <td><span class="cp-tbl__pos ${ok ? 'cp-tbl__pos--ok' : 'cp-tbl__pos--out'}">${pos}</span></td>
      <td class="cp-tbl__equipo">${t.equipo}</td>
      <td>${t.pj}</td>
      <td class="cp-tbl__pg">${t.pg}</td>
      <td>${t.pe}</td><td>${t.pp}</td>
      <td>${t.gf}</td><td>${t.gc}</td>
      <td class="${dgCls}">${t.dg}</td>
      <td class="cp-tbl__pts">${t.pts}</td>
      <td>${t.am > 0 ? `<span class="cp-tbl__card cp-tbl__card--am">${t.am}</span>` : '—'}</td>
      <td>${t.ro > 0 ? `<span class="cp-tbl__card cp-tbl__card--ro">${t.ro}</span>` : '—'}</td>
    </tr>`;
  }).join('');
  return `<div class="cp-section">
    <div class="cp-section__head">
      <h3 class="cp-section__title">TABLA DE POSICIONES</h3>
      <span class="cp-section__badge">${cpBadge()}</span>
    </div>
    <div class="cp-section__legend">
      <span class="cp-section__dot cp-section__dot--ok"></span> Clasifican Top ${data.clasifican}
      &nbsp;&nbsp;<span class="cp-section__dot cp-section__dot--out"></span> Eliminados
    </div>
    <p class="cp-section__note">Una sola tabla de posiciones. Pasan los ${data.clasifican} primeros (Mejores).</p>
    <div class="cp-tbl-wrap"><table class="cp-tbl">
      <thead><tr>
        <th>#</th><th class="cp-tbl__th-left">EQUIPO</th>
        <th>PJ</th><th>PG</th><th>PE</th><th>PP</th>
        <th>GF</th><th>GC</th><th>DG</th><th>PTS</th><th>🟨</th><th>🟥</th>
      </tr></thead>
      <tbody>${rows}</tbody>
    </table></div>
  </div>`;
}

function cpMatchCard(m, isLlave) {
  const w1 = m.g1 > m.g2;
  const label = isLlave ? `LLAVE ${m.llave}` : m.label.toUpperCase();
  return `<div class="cp-bracket__match">
    <div class="cp-bracket__llave-label">${label}</div>
    <div class="cp-bracket__team ${w1 ? 'cp-bracket__team--win' : ''}">
      <span>${m.e1}</span><span class="cp-bracket__score ${w1 ? 'cp-bracket__score--win' : ''}">${m.g1}</span>
    </div>
    <div class="cp-bracket__vs-row">vs</div>
    <div class="cp-bracket__team ${!w1 ? 'cp-bracket__team--win' : ''}">
      <span>${m.e2}</span><span class="cp-bracket__score ${!w1 ? 'cp-bracket__score--win' : ''}">${m.g2}</span>
    </div>
  </div>`;
}

function cpRenderLlaves(data) {
  const { cuartos, semis, final: fin } = data.llaves;
  const w1 = fin.g1 > fin.g2;
  return `<div class="cp-section">
    <div class="cp-section__head">
      <h3 class="cp-section__title">LLAVES</h3>
      <span class="cp-section__badge">${cpBadge()}</span>
    </div>
    <div class="cp-bracket__champion">🏆 CAMPEÓN<br><strong>${data.champion}</strong></div>
    <div class="cp-bracket__grid">
      <div class="cp-bracket__col">
        <div class="cp-bracket__col-label">CUARTOS DE FINAL</div>
        ${cuartos.map(m => cpMatchCard(m, true)).join('')}
      </div>
      <div class="cp-bracket__col">
        <div class="cp-bracket__col-label">SEMIFINALES</div>
        ${semis.map(m => cpMatchCard(m, false)).join('')}
      </div>
      <div class="cp-bracket__col">
        <div class="cp-bracket__col-label">FINAL</div>
        <div class="cp-bracket__final-card">
          <div class="cp-bracket__final-label">GRAN FINAL</div>
          <div class="cp-bracket__team ${w1 ? 'cp-bracket__team--win' : ''}">
            <span>${fin.e1}</span><span class="cp-bracket__score ${w1 ? 'cp-bracket__score--win' : ''}">${fin.g1}</span>
          </div>
          <div class="cp-bracket__vs-row">vs</div>
          <div class="cp-bracket__team ${!w1 ? 'cp-bracket__team--win' : ''}">
            <span>${fin.e2}</span><span class="cp-bracket__score ${!w1 ? 'cp-bracket__score--win' : ''}">${fin.g2}</span>
          </div>
        </div>
      </div>
    </div>
  </div>`;
}

function cpRenderGoleadores(data) {
  const rows = data.goleadores.map((g, i) => `<tr>
    <td><span class="cp-tbl__pos cp-tbl__pos--ok">${i + 1}</span></td>
    <td class="cp-tbl__equipo">${g.jugador}</td>
    <td class="cp-tbl__equipo">${g.equipo}</td>
    <td class="cp-tbl__goles">${g.goles}</td>
  </tr>`).join('');
  return `<div class="cp-section">
    <div class="cp-section__head">
      <h3 class="cp-section__title">GOLEADORES</h3>
      <span class="cp-section__badge">${cpBadge()}</span>
    </div>
    <div class="cp-tbl-wrap"><table class="cp-tbl">
      <thead><tr>
        <th>#</th><th class="cp-tbl__th-left">JUGADOR</th>
        <th class="cp-tbl__th-left">EQUIPO</th><th>⚽</th>
      </tr></thead>
      <tbody>${rows}</tbody>
    </table></div>
  </div>`;
}

/* ============================================
   LIGHTBOX
   ============================================ */
function initLightbox() {
  const overlay  = document.getElementById('lbOverlay');
  const wrap     = document.getElementById('lbWrap');
  const img      = document.getElementById('lbImg');
  const closeBtn = document.getElementById('lbClose');
  const hint     = document.getElementById('lbHint');
  if (!overlay) return;

  let scale = 1, tx = 0, ty = 0;
  const MIN = 1, MAX = 5;
  let dragging = false, startX = 0, startY = 0;
  let lastPinchDist = 0, lastTapTime = 0;

  const applyT = (animate) => {
    img.style.transition = animate ? 'transform 0.3s ease' : '';
    img.style.transform  = `translate(${tx}px,${ty}px) scale(${scale})`;
  };

  const reset = (animate = true) => {
    scale = 1; tx = 0; ty = 0;
    applyT(animate);
    wrap.classList.remove('panning');
  };

  window.openLightbox = (src) => {
    img.src = src;
    overlay.hidden = false;
    document.body.style.overflow = 'hidden';
    hint.textContent = lang === 'es'
      ? 'Doble clic · Scroll o pellizca para hacer zoom · ESC para cerrar'
      : 'Double click · Scroll or pinch to zoom · ESC to close';
    reset(false);
    requestAnimationFrame(() => overlay.classList.add('active'));
  };

  const close = () => {
    overlay.classList.remove('active');
    setTimeout(() => {
      overlay.hidden = true;
      img.src = '';
      document.body.style.overflow = '';
      reset(false);
    }, 260);
  };

  closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !overlay.hidden) close(); });

  // ── Wheel zoom toward cursor ──
  wrap.addEventListener('wheel', e => {
    e.preventDefault();
    const factor   = e.deltaY < 0 ? 1.15 : 1 / 1.15;
    const newScale = Math.min(MAX, Math.max(MIN, scale * factor));
    if (newScale === scale) return;
    const rect = wrap.getBoundingClientRect();
    const cx   = e.clientX - rect.left - rect.width  / 2;
    const cy   = e.clientY - rect.top  - rect.height / 2;
    tx = cx * (1 - newScale / scale) + tx * (newScale / scale);
    ty = cy * (1 - newScale / scale) + ty * (newScale / scale);
    scale = newScale;
    if (scale <= MIN) { scale = MIN; tx = 0; ty = 0; }
    wrap.classList.toggle('panning', scale > 1);
    applyT(false);
  }, { passive: false });

  // ── Double-click toggle zoom ──
  wrap.addEventListener('dblclick', e => {
    e.stopPropagation();
    if (scale > 1) { reset(); return; }
    const rect   = wrap.getBoundingClientRect();
    const newScale = 2.5;
    const cx = e.clientX - rect.left - rect.width  / 2;
    const cy = e.clientY - rect.top  - rect.height / 2;
    scale = newScale;
    tx = -cx * (newScale - 1);
    ty = -cy * (newScale - 1);
    wrap.classList.add('panning');
    applyT(true);
  });

  // ── Mouse drag ──
  wrap.addEventListener('mousedown', e => {
    if (scale <= 1) return;
    e.preventDefault();
    dragging = true; startX = e.clientX - tx; startY = e.clientY - ty;
  });
  document.addEventListener('mousemove', e => {
    if (!dragging) return;
    tx = e.clientX - startX; ty = e.clientY - startY;
    applyT(false);
  });
  document.addEventListener('mouseup', () => { dragging = false; });

  // ── Touch: pinch-to-zoom + drag + double-tap ──
  wrap.addEventListener('touchstart', e => {
    if (e.touches.length === 2) {
      lastPinchDist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
    } else if (e.touches.length === 1) {
      const now = Date.now();
      if (now - lastTapTime < 280) {
        e.preventDefault();
        if (scale > 1) { reset(); }
        else {
          const rect = wrap.getBoundingClientRect();
          const newScale = 2.5;
          const cx = e.touches[0].clientX - rect.left - rect.width  / 2;
          const cy = e.touches[0].clientY - rect.top  - rect.height / 2;
          scale = newScale; tx = -cx * (newScale - 1); ty = -cy * (newScale - 1);
          wrap.classList.add('panning');
          applyT(true);
        }
      }
      lastTapTime = now;
      startX = e.touches[0].clientX - tx;
      startY = e.touches[0].clientY - ty;
    }
  }, { passive: false });

  wrap.addEventListener('touchmove', e => {
    e.preventDefault();
    if (e.touches.length === 2) {
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      const newScale = Math.min(MAX, Math.max(MIN, scale * dist / lastPinchDist));
      const rect = wrap.getBoundingClientRect();
      const mx   = (e.touches[0].clientX + e.touches[1].clientX) / 2 - rect.left - rect.width  / 2;
      const my   = (e.touches[0].clientY + e.touches[1].clientY) / 2 - rect.top  - rect.height / 2;
      tx = mx * (1 - newScale / scale) + tx * (newScale / scale);
      ty = my * (1 - newScale / scale) + ty * (newScale / scale);
      scale = newScale;
      lastPinchDist = dist;
      if (scale <= MIN) { scale = MIN; tx = 0; ty = 0; }
      wrap.classList.toggle('panning', scale > 1);
      applyT(false);
    } else if (e.touches.length === 1 && scale > 1) {
      tx = e.touches[0].clientX - startX;
      ty = e.touches[0].clientY - startY;
      applyT(false);
    }
  }, { passive: false });

  wrap.addEventListener('touchend', e => {
    if (e.touches.length === 0 && scale <= MIN) reset();
  }, { passive: true });
}

/* ============================================
   INIT
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
  applyLanguage('es');
  initNavScroll();
  initMobileMenu();
  initActiveLinks();
  initReveal();
  initCounters();
  initSmoothScroll();
  initLangToggle();
  initForm();
  initDonateSelector();
  initPWA();
  initHeroCarousel();
  initAboutSlider();
  loadLatestYouTubeVideos();
  initScrollExtras();
  initLightbox();
  initStoryModals();
  initEventModals();
  initGalleryCardModals();
  initCountdown();
  initChampions();

  const heroBall = document.querySelector('.hero__ball');
  if (heroBall) {
    heroBall.addEventListener('animationend', () => heroBall.classList.add('spin'), { once: true });
  }
});
