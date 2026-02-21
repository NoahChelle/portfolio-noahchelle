// Système de traduction
const translations = {
    fr: {
        // Navigation
        "nav.home": "Accueil",
        "nav.projects": "Projets",
        "nav.skills": "Compétences & Expériences",
        "nav.contact": "Contact",
        "nav.downloadCV": "Télécharger CV",
        
        // Page d'accueil
        "home.title": "Noah Chelle",
        "home.subtitle": "Étudiant en Multimédia",
        "home.bio1": "Je m'appelle <span class=\"highlight\">Noah Chelle</span>, j'ai <span class=\"highlight\">20 ans</span> et je viens d'<span class=\"highlight\">Orthez</span>, dans le sud de la France. Je suis actuellement étudiant en <span class=\"highlight\">troisième année</span> de Bachelor Universitaire de Technologie en <span class=\"highlight\">Métiers du Multimédia et de l'Internet (BUT MMI)</span> à l'IUT de Tarbes.",
        "home.bio2": "Au fil de mes études, j'ai eu l'occasion de découvrir de nombreux domaines liés à la <span class=\"highlight\">communication</span>, au <span class=\"highlight\">design</span> et au <span class=\"highlight\">développement web</span>. Ce que j'apprécie particulièrement dans cette formation, c'est la <span class=\"highlight\">diversité des outils et des compétences</span>. Cette polyvalence me motive à explorer différents savoir-faire comme le <span class=\"highlight\">graphisme</span>, le <span class=\"highlight\">jeu vidéo</span> ou l'<span class=\"highlight\">audiovisuel</span>.",
        "home.bio3": "En 2ème année je me suis spécialisé en <span class=\"highlight\">développement web et dispositifs interactifs</span>. J'ai pu découvrir de nouveaux domaines comme le <span class=\"highlight\">game design</span>, la <span class=\"highlight\">modélisation 3D</span> ou même la <span class=\"highlight\">réalité virtuelle</span>. Je suis quelqu'un de <span class=\"highlight\">calme</span>, <span class=\"highlight\">gentil</span> et <span class=\"highlight\">créatif</span>. J'aime donner vie à des projets, qu'ils soient personnels ou collectifs.",
        "home.bio4": "En dehors de mes études, je pratique le <span class=\"highlight\">volley-ball,</span> un sport qui m'a appris la <span class=\"highlight\">rigueur</span> et l'<span class=\"highlight\">esprit d'équipe</span>. Je suis également passionné par les <span class=\"highlight\">jeux vidéo</span>, le <span class=\"highlight\">cinéma</span> et les <span class=\"highlight\">mangas</span>. Dans l'avenir j'aimerais continuer à exprimer ma <span class=\"highlight\">créativité</span> par la <span class=\"highlight\">création numérique</span>.",
        "home.seeProjects": "Voir mes projets",
        
        // Page projets
        "projects.title": "Mes Projets",
        "projects.bananaRun": "Banana Run",
        "projects.bananaRunDesc": "Conception d'un jeu de société",
        "projects.marioKart": "Trailer Mario Kart World",
        "projects.marioKartDesc": "Trailer sur un jeu-vidéo au choix en utilisant la motion capture",
        "projects.protonNeutron": "Proton Neutron",
        "projects.protonNeutronDesc": "Conception d'un jeu vidéo 'Zelda like' / 'Soul Like'",
        "projects.goblinAttack": "Goblin Attack",
        "projects.goblinAttackDesc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "projects.horloger": "La Maison de l'Horloger",
        "projects.horlogerDesc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "projects.solaryth": "Solaryth : Kanoko",
        "projects.solarythDesc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "projects.pokemon": "Fantômaki",
        "projects.pokemonDesc": "Création d'un starter Pokémon",
        "projects.bigBag": "Big Bag Festival",
        "projects.bigBagDesc": "Conception d'une affiche interactive",
        "projects.justdance": "Background Just Dance",
        "projects.justdanceDesc": "Réalisation d'un fond animé de type Just Dance",
        "projects.gallery": "Galerie Créations Graphiques",
        "projects.galleryDesc": "Collection de mes designs, illustrations et créations visuelles",
        "projects.seeMore": "Voir plus",
        "projects.exploreGallery": "Explorer la galerie",
        
        // Page compétences
        "skills.title": "Compétences",
        "skills.expertise": "Domaines d'expertise",
        "skills.programming": "Langages de Programmation",
        "skills.software": "Logiciels & Outils",
        "skills.experience": "Expériences",
        "skills.photography": "Photographie",
        "skills.video": "Vidéo",
        "skills.graphicDesign": "Graphisme",
        "skills.webDesign": "Web Design",
        "skills.uiux": "UI/UX",
        "skills.projectManagement": "Gestion de projet",
        "skills.gameDesign": "Game/Narrative Design",
        "skills.vr": "Réalité Virtuelle",
        "skills.javascript": "JavaScript",
        "skills.python": "Python",
        "skills.htmlcss": "HTML/CSS",
        "skills.php": "PHP",
        "skills.json": "Json",
        "skills.cpp": "C++",
        "skills.photoshop": "Photoshop",
        "skills.illustrator": "Illustrator",
        "skills.premiere": "Premiere Pro",
        "skills.figma": "Figma",
        "skills.vscode": "Unity",
        "skills.afterEffects": "After Effects",
        "skills.baccalaureate": "Baccalauréat Général",
        "skills.baccalaureateDesc": "Spécialités Mathématiques, Anglais Monde Contemporain et Numérique Sciences Informatiques",
        "skills.but": "BUT Métiers du Multimédia et de l'Internet",
        "skills.butDesc": "Parcours Développement Web et dispositifs Intéractifs",
        "skills.creasign": "Stage chez Créasign",
        "skills.creasignDesc": "Stage de 3 semaines",
        "skills.pyrenees": "Stage chez Pyrénées Presse",
        "skills.pyreneesDesc": "Stage de 8 semaines",

      "skills.gfi": "Stage chez GFI",
"skills.gfiDesc": "Stage d'observation d'une semaine - Observation du fonctionnement de l'entreprise",
"skills.creasignDesc": "Stage de 4 semaines - Tâches diverses (floquage, pose autocollants…) - Graphisme pour les clients",
"skills.pyreneesDesc": "Stage de 8 semaines - Participation au fonctionnement de l'entreprise - Création de visuels images et vidéos pour les réseaux sociaux et les médias",

        // Page contact
        "contact.title": "Contactez-moi",
        "contact.email": "📧 Email",
        "contact.linkedin": "💼 LinkedIn",
        "contact.cv": "📄 CV",
        "contact.seeProfile": "Voir mon profil",
        "contact.downloadPDF": "Télécharger PDF",
        "contact.formName": "Nom",
        "contact.formEmail": "Email",
        "contact.formMessage": "Message",
        "contact.sendMessage": "Envoyer le message",
        "contact.success": "✓ Message envoyé avec succès !",
        "contact.cvFrench": "📄 CV Français",
        "contact.cvEnglish": "📄 CV English",
        "contact.downloadFrench": "Télécharger PDF FR",
        "contact.downloadEnglish": "Télécharger PDF EN",

        // Pages de projets détaillées
        "projects.back": "← Retour aux projets",
        "projects.about": "À propos du projet",
        "projects.details": "Détails du projet",
        "projects.preview": "Aperçu du projet",
        "projects.technologies": "Technologies utilisées",
        "projects.skills": "Compétences et outils utilisés",
        "projects.play": "Jouer sur Itch.io",
        "projects.view": "Voir sur Itch.io",
        "projects.seeEvolutions": "Voir les évolutions",
        "projects.fullGallery": "Galerie complète",
        
        // Projet Banana Run
        "banana.description": "Banana Run est un jeu de société créé dans le cadre d'un projet universitaire. En équipe de 3 personnes, nous avons conçu un jeu de plateau complet avec un univers original centré sur des singes collectionneurs de bananes. Le jeu combine stratégie, chance et interaction entre les joueurs avec des mécaniques de collection, d'échange et de sabotage.",
        "banana.description2": "Incarnez un ouistiti recruté par le Chef Gorille et ramenez lui un maximum de bananes disséminées dans la jungle sans tomber dans les pièges de vos adversaires ouistitis ! L’histoire de notre jeu se place dans la jungle faisant face depuis quelque temps à une pénurie : les bananes y deviennent rares.",

        
        // Projet Mario Kart
        "mariokart.description": "Création d'un teaser innovant pour Mario Kart World utilisant la motion capture. Inspiré par les publicités iPod de 2005, ce projet met en scène des personnages en silhouettes noires avec des éléments clés mis en valeur par des couleurs vives. La vidéo combine animation, motion design et sound design pour créer une expérience immersive qui capture l'essence frénétique de Mario Kart.",
        
        // Projet Proton Neutron
        "proton.description": "Dans le jeu Proton Neutron, vous incarnez le Professeur Proton, expert des protons dans un monde magique où l’équilibre dépend entièrement des charges électriques. Après la disparition des 10 protons originels, votre ancien ami d’enfance, le Dr Platon Neutron, s’est tourné vers une magie interdite : les neutrons, capables de prendre l’apparence des protons… et parfois se muer en dangereux électrons. Votre mission : explorer une vaste carte, interagir avec des PNJ, résoudre des énigmes et vaincre les donjons de Platon Neutron pour récupérer les véritables protons - tout en évitant de confondre les vrais et les intrus.",
        
        // Projet Balmo
        "balmo.description": "Balmo, Gardien de la vallée est un projet de conception de la narration et des énigmes d'un escape game. Il fait partie du projet \"Out of the Box\", visant à créer plusieurs expériences d'escape game en utilisant une boîte matérielle, établissant un lien entre le jeu numérique et la résolution d'énigmes physiques. En collaboration avec le Parc National des Pyrénées, ce jeu a pour objectif de sensibiliser les joueurs à la préservation des eaux dans les vallées. Vous incarnez des animaux d'un village en mission pour retrouver leur doyen disparu, Balmo, et percer le mystère de sa disparition.",
        
        // Projet Pokémon
        "pokemon.description": "Dans le cadre d'un cours de character design, j'ai conçu un Pokémon starter complet avec un double type unique. Le projet incluait la création de l'apparence, des évolutions, des attaques caractéristiques et du lore du Pokémon, en respectant les codes et l'esthétique de la franchise Pokémon.",
             
        // Projet Just Dance
        "justdance.description": "Réalisation d'un fond animé de type Just Dance sur la chanson \"Can't Take My Eyes Off You\" de Frankie Valli. J'ai décidé de créer un décor vectoriel de ville nocturne (bâtiments, lampadaires, lune) sur Adobe Illustrator. L'animation est ensuite réalisée dans After Effects en synchronisant le fond et les lumières (lampadaires, fenêtres) sur la musique, et en ajoutant une transition de météo du nuageux à la pleine lune pour dynamiser la scène.",
        
        // Projet Big Bag Festival
        "bigbag.description": "Conception d'une affiche interactive pour le Big Bag Festival, un événement musical et artistique. Le projet repose sur l'intégration d'un QR Code dans une affiche au design minimaliste et vectoriel réalisé sous Illustrator. Lorsque l'utilisateur scanne le QR Code, il déclenche une animation dynamique (réalisée avec JavaScript) qui donne vie aux éléments graphiques de l'affiche, combinant ainsi le design print traditionnel avec une expérience digitale moderne.",
        
        // Galerie Graphique
        "gallery.title": "🎨 Galerie Créations Graphiques",
        "gallery.subtitle": "Collection de mes designs, illustrations et créations visuelles",

        "footer.legal": "Portfolio personnel. Tous droits réservés."

    },
    en: {
        // Navigation
        "nav.home": "Home",
        "nav.projects": "Projects",
        "nav.skills": "Skills & Experience",
        "nav.contact": "Contact",
        "nav.downloadCV": "Download CV",
        
        // Home page
        "home.title": "Noah Chelle",
        "home.subtitle": "Multimedia Student",
        "home.bio1": "My name is <span class=\"highlight\">Noah Chelle</span>, I'm <span class=\"highlight\">20 years old</span> and I come from <span class=\"highlight\">Orthez</span>, in the south of France. I am currently a <span class=\"highlight\">third-year student</span> in a University Bachelor of Technology in <span class=\"highlight\">Multimedia and Internet Professions (BUT MMI)</span> at the IUT of Tarbes.",
        "home.bio2": "Throughout my studies, I've had the opportunity to discover many fields related to <span class=\"highlight\">communication</span>, <span class=\"highlight\">design</span>, and <span class=\"highlight\">web development</span>. What I particularly appreciate about this program is the <span class=\"highlight\">diversity of tools and skills</span>. This versatility motivates me to explore different areas of expertise like <span class=\"highlight\">graphic design</span>, <span class=\"highlight\">video games</span>, and <span class=\"highlight\">audiovisual production</span>.",
        "home.bio3": "In my 2nd year, I specialized in <span class=\"highlight\">web development and interactive devices</span>. I discovered new fields like <span class=\"highlight\">game design</span>, <span class=\"highlight\">3D modeling</span>, and even <span class=\"highlight\">virtual reality</span>. I'm a <span class=\"highlight\">calm</span>, <span class=\"highlight\">kind</span>, and <span class=\"highlight\">creative</span> person. I enjoy bringing projects to life, whether personal or collective.",
        "home.bio4": "Outside of my studies, I play <span class=\"highlight\">volley-ball,</span> a sport that has taught me <span class=\"highlight\">discipline</span> and <span class=\"highlight\">team spirit</span>. I'm also passionate about <span class=\"highlight\">video games</span>, the <span class=\"highlight\">cinema</span>, and <span class=\"highlight\">manga</span>. In the future, I'd like to continue expressing my <span class=\"highlight\">creativity</span> through <span class=\"highlight\">digital creation</span>.",
        "home.seeProjects": "See my projects",
        
        // Projects page
        "projects.title": "My Projects",
        "projects.bananaRun": "Banana Run",
        "projects.bananaRunDesc": "Board game design",
        "projects.marioKart": "Mario Kart World Trailer",
        "projects.marioKartDesc": "Creating a trailer for a chosen video game using motion capture",
        "projects.protonNeutron": "Proton Neutron",
        "projects.protonNeutronDesc": "Design of a 'Zelda-like' / 'Souls-like' video game",
        "projects.goblinAttack": "Goblin Attack",
        "projects.goblinAttackDesc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "projects.horloger": "La Maison de l'Horloger",
        "projects.horlogerDesc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "projects.solaryth": "Solaryth : Kanoko",
        "projects.solarythDesc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "projects.pokemon": "Fantômaki",
        "projects.pokemonDesc": "Creation of a Pokémon starter",
        "projects.bigBag": "Big Bag Festival",
        "projects.bigBagDesc": "Design of an interactive poster",
        "projects.justdance": "Background Just Dance",
        "projects.justdanceDesc": "Creation of an animated Just Dance background",
        "projects.gallery": "Graphic Creations Gallery",
        "projects.galleryDesc": "Collection of my designs, illustrations and visual creations",
        "projects.seeMore": "See more",
        "projects.exploreGallery": "Explore gallery",
        
        // Skills page
        "skills.title": "Skills",
        "skills.expertise": "Areas of Expertise",
        "skills.programming": "Programming Languages",
        "skills.software": "Software & Tools",
        "skills.experience": "Experience",
        "skills.photography": "Photography",
        "skills.video": "Video",
        "skills.graphicDesign": "Graphic Design",
        "skills.webDesign": "Web Design",
        "skills.uiux": "UI/UX",
        "skills.projectManagement": "Project Management",
        "skills.gameDesign": "Game/Narrative Design",
        "skills.vr": "Virtual Reality",
        "skills.javascript": "JavaScript",
        "skills.python": "Python",
        "skills.htmlcss": "HTML/CSS",
        "skills.php": "PHP",
        "skills.json": "Json",
        "skills.cpp": "C++",
        "skills.photoshop": "Photoshop",
        "skills.illustrator": "Illustrator",
        "skills.premiere": "Premiere Pro",
        "skills.figma": "Figma",
        "skills.vscode": "Unity",
        "skills.afterEffects": "After Effects",
        "skills.baccalaureate": "General Baccalaureate",
        "skills.baccalaureateDesc": "Specialties: Mathematics, Contemporary English World and Digital Computer Science",
        "skills.but": "BUT in Multimedia and Internet Professions",
        "skills.butDesc": "Web Development and Interactive Devices track",
        "skills.creasign": "Internship at Créasign",
        "skills.creasignDesc": "3-week internship",
        "skills.pyrenees": "Internship at Pyrénées Presse",
        "skills.pyreneesDesc": "8-week internship",

        "skills.gfi": "Internship at GFI",
"skills.gfiDesc": "1-week observation internship - Observation of company operations",
"skills.creasignDesc": "4-week internship - Various tasks (flocking, sticker application, etc.) - Graphic design for clients",
"skills.pyreneesDesc": "8-week internship - Participation in company operations - Creation of visual images and videos for social media and media",

        // Contact page
        "contact.title": "Contact Me",
        "contact.email": "📧 Email",
        "contact.linkedin": "💼 LinkedIn",
        "contact.cv": "📄 CV",
        "contact.seeProfile": "View my profile",
        "contact.downloadPDF": "Download PDF",
        "contact.formName": "Name",
        "contact.formEmail": "Email",
        "contact.formMessage": "Message",
        "contact.sendMessage": "Send message",
        "contact.success": "✓ Message sent successfully!",
        "contact.cvFrench": "📄 French CV",
        "contact.cvEnglish": "📄 English CV", 
        "contact.downloadFrench": "Download FR PDF",
        "contact.downloadEnglish": "Download EN PDF",

        // Project detail pages
        "projects.back": "← Back to projects",
        "projects.about": "About the project",
        "projects.details": "Project details",
        "projects.preview": "Project preview",
        "projects.technologies": "Technologies used",
        "projects.skills": "Skills and tools used",
        "projects.play": "Play on Itch.io",
        "projects.view": "View on Itch.io",
        "projects.seeEvolutions": "See evolutions",
        "projects.fullGallery": "Full gallery",
        
        // Projet Banana Run
        "banana.description": "Banana Run is a board game created for a university project. Working in a team of three, we designed a complete game with an original world about monkeys collecting bananas. The game mixes strategy, luck, and player interaction through collection, trading, and sabotage.",
        "banana.description2": "You play as a little monkey chosen by the Gorilla Chief, and your goal is to bring him as many bananas as possible scattered around the jungle but be careful of the traps set by your rival monkeys! The story takes place in a jungle that is facing a banana shortage, where the fruit is becoming very rare. ",

        // Projet Mario Kart
        "mariokart.description": "Creation of an original teaser for Mario Kart World using motion capture. Inspired by the 2005 iPod commercials, this project shows black silhouettes with bright-colored details. The video combines animation, motion design, and sound design to create an immersive experience that captures the fast and fun spirit of Mario Kart.",
        
        // Projet Proton Neutron
        "proton.description": "In Proton Neutron, you play as Professor Proton, a scientist living in a world where balance de ends on electric charges. After the mysterious disappearance of ten original protons, your old friend, Dr. Platon Neutron, turns to forbidden neutron magic using it to imitate protons and even create dangerous electrons. Your goal is to explore a large world, talk to NPCs, solve puzzles, and defeat Platon Neutron’s dungeons to recover the real protons while avoiding fake ones that could mislead you. ",
        
        // Projet Balmo
        "balmo.description": "Balmo, Guardian of the Valley is a project focused on designing the story and puzzles of an escape game. It is part of the “Out of the Box” project, which creates several escape games using a physical box that connects digital gameplay with real-world puzzles. Made in partnership with the Pyrenees National Park, the game aims to raise awareness about water preservation in the valleys. Players take on the role of animals from a small village trying to find their missing elder, Balmo, and discover the reason behind his disappearance. ",
        
        // Projet Pokémon
        "pokemon.description": "As part of a character design course, I created a Pokémon starter with a unique dual type. The project included designing its appearance, double type and emotions while respecting the visual style and logic of the Pokémon universe.",
        
        
        // Projet Just Dance
        "justdance.description": "Creation of an animated background in Just Dance style for the song “Can’t Take My Eyes Off You” by Frankie Valli. I designed a vector night cityscape (buildings, streetlights, moon) in Adobe Illustrator. The animation was made in After Effects, synchronizing the lights and background to the rhythm of the song, and adding a weather transition from cloudy skies to a clear full moon to make the scene more dynamic. ",
        
        // Projet Big Bag Festival
        "bigbag.description": "Design of an interactive poster for the Big Bag Festival, a music and art event. The poster, created in Illustrator with a minimalist vector style, includes a QR code. When scanned, it triggers a dynamic animation (made with JavaScript) that brings the visual elements to life, combining traditional print design with a modern digital experience.",
        
        // Galerie Graphique
        "gallery.title": "🎨 Galerie Créations Graphiques",
        "gallery.subtitle": "Collection de mes designs, illustrations et créations visuelles",

        "footer.legal": "Portfolio personnel. Tous droits réservés."

    }
};