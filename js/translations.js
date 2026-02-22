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
        "projects.goblinAttackDesc": "Jeu type Survivors avec analyse de données en temps réel",
        "projects.horloger": "La Maison de l'Horloger",
        "projects.horlogerDesc": "Expérience immersive en VR sur les espaces impossibles",
        "projects.solaryth": "Solaryth : Kanoko",
        "projects.solarythDesc": "Fable poétique Solarpunk et BookNook connecté",
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
        "skills.butDesc": "Parcours Dispositif Intéractif et Web",
        "skills.creasign": "Stage chez Créasign",
        "skills.creasignDesc": "Fabricants d’enseignes, adhésifs, textile, imprimerie et objets publicitaires - Stage de 4 semaines - Tâches diverses (floquage, pose autocollants…) - Graphisme pour les clients",
        "skills.pyrenees": "Stage chez Pyrénées Presse",
        "skills.pyreneesDesc": "Presse régionale - Stage de 8 semaines - Création de visuels images et vidéos pour les réseaux sociaux et les médias",
        "skills.gfi": "Stage chez GFI",
        "skills.gfiDesc": "Stage d'observation d'une semaine - Observation du fonctionnement de l'entreprise",

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
        "banana.description": "Banana Run est un jeu de société créé dans le cadre d'un projet universitaire. En équipe de 3 personnes, nous avons conçu un jeu de plateau complet avec un univers original centré sur des singes collectionneurs de bananes.",
        "banana.description2": "Incarnez un ouistiti recruté par le Chef Gorille et ramenez lui un maximum de bananes disséminées dans la jungle sans tomber dans les pièges de vos adversaires ouistitis ! L’histoire de notre jeu se place dans la jungle faisant face depuis quelque temps à une pénurie : les bananes y deviennent rares.",

        // Projet Mario Kart
        "mariokart.description": "Le but de ce projet de groupe était de créer un teaser de jeu vidéo en utilisant la motion capture. Inspiré par les publicités iPod de 2005, le projet devait mettre en scène des personnages en silhouettes noires avec des éléments clés mis en valeur par des couleurs vives. De plus la musique de fond devait être un assemblage de plusieurs musiques à partir d'une bibliothèque qui nous a été transmise. Dans ce projet, mon rôle a été de paramétrer et enregistrer les mouvement de motion capture à l'aide de Rokoko Studio, de réaliser la musique de fond. Une fois que les scènes ont été correctement intégrées et assemblées sur Blender, je me suis occupé du motion design sur After Effect et de l'assemblage de la vidéo finale.",
        
        // Projet Proton Neutron
        "proton.description": "Conception d'un jeu vidéo type Zelda-Like. L'exercice était de concevoir un jeu vidéo sur le thème \"10+\" et en respectant quelques contraintes. Le jeu devait être en pixel art et intégrer une mécanique pour que le joueur puisse poser des messages et qu'ils soient stockés dans une base de données (de la même manière que dans Dark Souls). Ce travail s'est réalisé en binôme et m'a permis d'être présent sur tous les secteurs de la réalisation d'un jeu vidéo. En premier temps au niveau de la conception (game design, narration design et level design. Mais aussi sur toute la partie pixel art, développement du jeu, base de données et assets graphiques. Cet exercice m'a donné une expérience de réalisation de jeu vidéo de A à Z.",
        
        // Projet Pokémon (Fantômaki)
        "pokemon.description": "Conception d'un Pokémon avec des règles strictes qui influencent les choix de chara-design. Le Pokémon devait être un pokémon de départ (starter) avec un double type non restreint. Il fallait aussi réaliser ce Pokémon avec trois émotions différentes. Ce travail m'a permis de m'exercer à la réalisation de chara-design en suivant différentes étapes. En premier temps un travail de veille afin de réaliser un Pokémon cohérent et de partir sur de bonnes bases, puis imaginer sa posture en travaillant sur différentes positions, et enfin la réalisation finale me permettant de m'exercer sur des outils de graphisme.",
             
        // Projet Just Dance
        "justdance.description": "Réalisation d'un fond animé de type Just Dance sur la chanson \"Can't Take My Eyes Off You\" de Frankie Valli. J'ai décidé de créer un décor vectoriel de ville nocturne (bâtiments, lampadaires, lune) sur Adobe Illustrator. L'animation est ensuite réalisée dans After Effects en synchronisant le fond et les lumières (lampadaires, fenêtres) sur la musique, et en ajoutant une transition de météo du nuageux à la pleine lune pour dynamiser la scène.",
        
        // Projet Big Bag Festival
        "bigbag.description": "Conception d'une affiche interactive pour le Big Bag Festival, un événement musical et artistique. Le projet repose sur l'intégration d'un QR Code dans une affiche au design minimaliste et vectoriel réalisé sous Illustrator. Lorsque l'utilisateur scanne le QR Code, il déclenche une animation dynamique (réalisée avec JavaScript) qui donne vie aux éléments graphiques de l'affiche, combinant ainsi le design print traditionnel avec une expérience digitale moderne.",

        // Projet Goblin Attack
        "goblin.description": "Conception d'un jeu type Vampire Survivors articulé autour de collecte de données en temps réel. En binôme, j'ai assuré le Game Design et le développement Unity, tout en concevant l'architecture de la base de données. J'ai développé un Dashboard dédié permettant d'analyser les métriques de jeu (comportement joueur, équilibrage des vagues). Ce projet démontre ma capacité à lier expérience utilisateur et analyse de données pour optimiser le pilotage d'une production vidéoludique.",

        // Projet La Maison de l'Horloger
"horloger.description": "Expérience immersive en Réalité Virtuelle réalisée avec un Méta Oculus Quest 2 en deux semaines sur la thématique des 'Espaces Impossibles'. Incarnez un Horloger gardien de l'espace et du temps vivant seul dans sa maison. Les engrenages de la Grande Horloge ayant disparus, l'équilibre est rompu ce qui créé des distorsions de l'espace et du temps. Dans ce projet réalisé à deux, notre approche a été de jouer avec ses déformations spatiales et temporelles afin de créer différentes énigmes. Je me suis chargé de la conception du Game Design et du Level Design et de l'intégration des mécaniques de jeu sur Unity. Nous avons aussi conçu un Game Design Document expliquant toutes nos intentions.",
        // Projet Solaryth : Kanoko
"solaryth.description": "Fable poétique Solarpunk explorant les synergies entre nature et technologie à travers différents dispositifs : un Walking Simulator (Jeu Unity en 3D) et un BookNook connecté (diorama physique). Inspiré par l'esthétique de Miyazaki, le projet met en scène des esprits tutélaires, les Esperits. Au sein de ce projet, je me suis occupé de l'aspect interactif du BookNook (programmation IoT) en implémentant des capteurs de mouvement et un potentiomètre pour gérer l'éclairage et la pulsation lumineuse. De plus, j'ai soutenu les autres acteurs du projet en concevant le Narrative Design et en contribuant à la conception de l'UI du jeu vidéo. J'ai réalisé le chara design d'un des personnages de l'histoire en suivant un processus précis avant de l'intégrer dans le jeu : moodboard et concept-art (Milanote), modélisation 3D et texturage (Blender), animation (Mixamo). Mon intention était d'incarner la sagesse et la bienveillance représentée par une tortue. J'ai ensuite ajouté l'esthétique solarpunk mêlant des éléments organiques (mousse, champignon) et technologiques (carapace photovoltaïque). Son design circulaire renforce son aspect calme et inoffensif.",        
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
        "home.seeProjects": "See my projects",
        
        // Projects page
        "projects.title": "My Projects",
        "projects.bananaRun": "Banana Run",
        "projects.bananaRunDesc": "Board game design",
        "projects.marioKart": "Mario Kart World Trailer",
        "projects.marioKartDesc": "Trailer for a chosen video game using motion capture",
        "projects.protonNeutron": "Proton Neutron",
        "projects.protonNeutronDesc": "Design of a 'Zelda-like' / 'Souls-like' video game",
        "projects.goblinAttack": "Goblin Attack",
        "projects.goblinAttackDesc": "Survivors-like game with real-time data analysis",
        "projects.horloger": "The Watchmaker's House",
        "projects.horlogerDesc": "Immersive VR experience based on impossible spaces",
        "projects.solaryth": "Solaryth: Kanoko",
        "projects.solarythDesc": "Solarpunk poetic fable and connected BookNook",
        "projects.pokemon": "Fantômaki",
        "projects.pokemonDesc": "Creation of a Pokémon starter",
        "projects.bigBag": "Big Bag Festival",
        "projects.bigBagDesc": "Interactive poster design",
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
        "skills.photoshop": "Photoshop",
        "skills.illustrator": "Illustrator",
        "skills.premiere": "Premiere Pro",
        "skills.figma": "Figma",
        "skills.vscode": "Unity",
        "skills.afterEffects": "After Effects",
        "skills.baccalaureate": "General Baccalaureate",
        "skills.baccalaureateDesc": "Specialties: Mathematics, Contemporary English World and Digital Computer Science",
        "skills.but": "BUT in Multimedia and Internet Professions",
        "skills.butDesc": "Interactive Devices and Web",
        "skills.creasign": "Internship at Créasign",
        "skills.creasignDesc": "Signage, adhesives, textiles, printing and promotional items manufacturer - 4-week internship - Various tasks (flocking, sticker application...) - Graphic design for clients",
        "skills.pyrenees": "Internship at Pyrénées Presse",
        "skills.pyreneesDesc": "Regional press - 8-week internship - Creation of visuals (images and videos) for social media and media",
        "skills.gfi": "Internship at GFI",
        "skills.gfiDesc": "1-week observation internship - Understanding company operations",

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
        "banana.description": "Banana Run is a board game created for a university project. Working in a team of 3, we designed a complete board game with an original universe focused on monkeys collecting bananas.",
        "banana.description2": "Play as a marmoset recruited by the Gorilla Chief and bring him as many bananas as possible scattered across the jungle without falling into the traps of your rival marmosets! The story takes place in a jungle facing a shortage: bananas are becoming rare.",

        // Projet Mario Kart
        "mariokart.description": "The goal of this group project was to create a video game teaser using motion capture. Inspired by the 2005 iPod commercials, the project featured characters in black silhouettes with key elements highlighted in bright colors. My role involved setting up and recording motion capture movements with Rokoko Studio and creating the background music. Once the scenes were integrated in Blender, I handled the motion design in After Effects and the final assembly.",
        
        // Projet Proton Neutron
        "proton.description": "Design of a Zelda-like video game. The exercise was to design a game on the '10+' theme while respecting several constraints. The game had to be in pixel art and include a mechanic allowing players to leave messages stored in a database (similar to Dark Souls). This pair project allowed me to work on all sectors: game, narrative and level design, as well as pixel art, development, and database management.",
        
        // Projet Pokémon (Fantômaki)
        "pokemon.description": "Design of a Pokémon with strict rules influencing character design choices. The Pokémon had to be a starter with an unrestricted dual type and three different emotions. This project involved research for consistency, sketching postures, and final realization using graphic tools.",
             
        // Projet Just Dance
        "justdance.description": "Creation of an animated Just Dance style background for the song 'Can't Take My Eyes Off You' by Frankie Valli. I created a vector night cityscape in Adobe Illustrator. The animation was then produced in After Effects, synchronizing lights with the music and adding weather transitions to make the scene more dynamic.",
        
        // Projet Big Bag Festival
        "bigbag.description": "Design of an interactive poster for the Big Bag Festival. The project integrates a QR Code into a minimalist vector poster created in Illustrator. Scanning the QR Code triggers a dynamic JavaScript animation that brings the graphic elements to life, merging traditional print design with a modern digital experience.",

        // Projet Goblin Attack
        "goblin.description": "Design of a Survivors-like game focused on real-time data collection. I handled the Game Design, Unity development, and database architecture. I developed a dedicated Dashboard to analyze game metrics (player behavior, wave balancing) to optimize game production through data analysis.",

        // Projet La Maison de l'Horloger
"horloger.description": "Immersive Virtual Reality experience created with a Meta Oculus Quest 2 in two weeks on the theme of 'Impossible Spaces'. Play as a Watchmaker guardian of space and time living alone in his house. When the gears of the Great Clock disappear, the balance is broken, creating distortions of space and time. In this duo project, our approach was to play with these spatial and temporal deformations to create various puzzles. I was responsible for the Game Design, Level Design, and the integration of game mechanics in Unity. We also designed a Game Design Document explaining all our intentions.",
        // Projet Solaryth : Kanoko
"solaryth.description": "Solarpunk poetic fable exploring the synergies between nature and technology through different devices: a Walking Simulator (3D Unity game) and a connected BookNook (physical diorama). Inspired by Miyazaki's aesthetics, the project features tutelary spirits, the Esperits. Within this project, I handled the interactive aspect of the BookNook (IoT programming) by implementing motion sensors and a potentiometer to manage lighting and light pulses. Additionally, I supported other team members by designing the Narrative Design and contributing to the video game UI. I created the character design for one of the story's characters following a precise process before integrating it into the game: moodboard and concept art (Milanote), 3D modeling and texturing (Blender), animation (Mixamo). My intention was to embody wisdom and benevolence represented by a turtle. I then added the solarpunk aesthetic mixing organic elements (moss, mushrooms) and technology (photovoltaic shell). Its circular design reinforces its calm and harmless appearance.",        
        // Galerie Graphique
        "gallery.title": "🎨 Graphic Creations Gallery",
        "gallery.subtitle": "Collection of my designs, illustrations and visual creations",

        "footer.legal": "Personal portfolio. All rights reserved."

    }
};