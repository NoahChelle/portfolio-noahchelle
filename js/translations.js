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
        "home.bio2": "Au fil de mes études, j'ai eu l'occasion de découvrir de nombreux domaines liés au <span class=\"highlight\">graphisme</span>, à l'<span class=\"highlight\">audiovisuel</span>, à la <span class=\"highlight\">communication</span> et au <span class=\"highlight\">développement web</span>. Ce que j'apprécie particulièrement dans cette formation, c'est la <span class=\"highlight\">diversité des outils et des compétences</span>. Cette polyvalence me motive à explorer différents savoir-faire : le <span class=\"highlight\">motion</span>, le <span class=\"highlight\">jeu-vidéo</span>, la <span class=\"highlight\">modélisation 3D</span>.",
        "home.bio3": "En 2ème année je me suis spécialisé en <span class=\"highlight\">Dispositifs Interactifs et Web</span>. Ce parcours m'a permis de continuer à faire de la création numérique via de nouvelles méthodes. J'ai pu découvrir de nouvelles disciplines comme le <span class=\"highlight\">game design</span>, la <span class=\"highlight\">modélisation 3D</span> ou même la <span class=\"highlight\">réalité virtuelle</span>. Le parcours étant plus axé sur les dispositifs interactifs, il m'a permis de rester créatif en utilisant des outils différents. Je suis quelqu'un de <span class=\"highlight\">curieux</span>, <span class=\"highlight\">rêveur</span> et <span class=\"highlight\">créatif</span>. J'aime donner vie à des projets, qu'ils soient personnels ou collectifs.",
        "home.bio4": "En dehors de mes études, je pratique le <span class=\"highlight\">volley-ball</span>, un sport qui m'a appris la <span class=\"highlight\">rigueur</span> et l'<span class=\"highlight\">esprit d'équipe</span>. J'aime explorer et découvrir des styles différents, que ce soit à travers la <span class=\"highlight\">musique, les jeux vidéo, les mangas ou le cinéma</span>. J'adore découvrir et me plonger dans des univers entièrement conçus. J'ai toujours eu l'ambition de créer mes propres mondes et, à l'avenir, j'aimerais continuer à exprimer ma <span class=\"highlight\">créativité</span> en concevant des <span class=\"highlight\">expériences immersives et interactives</span> grâce à mon imagination.",
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
        "banana.description_1": "Banana Run est un jeu de société créé dans le cadre d'un projet universitaire. En équipe de 3 personnes, nous avons conçu un jeu de plateau complet ainsi que son univers centré sur des singes collectionneurs de bananes. Le jeu combine stratégie, chance et interaction entre les joueurs avec des mécaniques de collection, d'échange et de sabotage.",
        "banana.description_2": "Dans ce projet mon rôle a notamment été d'établir la conception des règles du jeu et de son univers. J'ai ensuite participé à la conception graphique et matérielle du jeu. Nous avons ensuite réalisée plusieurs tests afin d'équilibrer le jeu.",
        "banana.description2": "Incarnez un ouistiti recruté par le Chef Gorille et ramenez lui un maximum de bananes disséminées dans la jungle!",

        // Projet Mario Kart
        "mariokart.description_1": "Le but de ce projet de groupe était de créer un teaser de jeu vidéo en utilisant la motion capture. Inspiré par les publicités iPod de 2005, le projet devait mettre en scène des personnages en silhouettes noires avec des éléments clés mis en valeur par des couleurs vives. De plus la musique de fond devait être un assemblage de plusieurs musiques à partir d'une bibliothèque qui nous a été transmise.",
        "mariokart.description_2": "Dans ce projet, mon rôle a été de paramétrer et enregistrer les mouvement de motion capture à l'aide de Rokoko Studio, de réaliser la musique de fond.",
        "mariokart.description_3": "Une fois que les scènes ont été correctement intégrées et assemblées sur Blender, je me suis occupé du motion design sur After Effect et de l'assemblage de la vidéo finale.",
        
        // Projet Proton Neutron
        "proton.description_1": "Conception d'un jeu vidéo type Zelda-Like. L'exercice était de concevoir un jeu vidéo sur le thème \"10+\" et en respectant quelques contraintes. Le jeu devait être en pixel art et intégrer une mécanique pour que le joueur puisse poser des messages et qu'ils soient stockés dans une base de données (de la même manière que dans Dark Souls).",
        "proton.description_2": "Ce travail s'est réalisé en binôme et m'a permis d'être présent sur tous les secteurs de la réalisation d'un jeu vidéo. En premier temps au niveau de la conception(game design, narration design et level design.",
        "proton.description_3": "Mais aussi sur toute la partie pixel art, développement du jeu, base de données et assets graphiques. Cet exercice m'a donné une expérience de réalisation de jeu vidéo de A à Z.",
        
        // Projet Pokémon (Fantômaki)
        "pokemon.description_1": "Conception d'un Pokémon avec des règles strictes qui influencent les choix de chara-design. Le Pokémon devait être un pokémon de départ (starter) avec un double type non restreint. Il fallait aussi réaliser ce Pokémon avec trois émotions différentes.",
        "pokemon.description_2": "Ce travail m'a permis de m'exercer à la réalisation de chara-design en suivant différentes étapes. En premier temps un travail de veille afin de réaliser un Pokémon cohérent et de partir sur de bonnes bases, puis imaginer sa posture en travaillant sur différentes positions, et enfin la réalisation finale me permettant de m'exercer sur des outils de graphisme.",
             
        // Projet Just Dance
        "justdance.description_1": "Réalisation d'un fond animé de type Just Dance sur la chanson \"Can't Take My Eyes Off You\" de Frankie Valli. J'ai décidé de créer un décor vectoriel de ville nocturne (bâtiments, lampadaires, lune) sur Adobe Illustrator.",
        "justdance.description_2": "L'animation est ensuite réalisée dans After Effects en synchronisant le fond et les lumières (lampadaires, fenêtres) sur la musique, et en ajoutant une transition de météo du nuageux à la pleine lune pour dynamiser la scène.",
        
        // Projet Big Bag Festival
        "bigbag.description_1": "Conception d'une affiche interactive pour le Big Bag Festival, un événement musical et artistique. Le projet repose sur l'intégration d'un QR Code dans une affiche au design minimaliste et vectoriel réalisé sous Illustrator.",
        "bigbag.description_2": "Lorsque l'utilisateur scanne le QR Code, il déclenche une animation dynamique (réalisée avec JavaScript) qui donne vie aux éléments graphiques de l'affiche, combinant ainsi le design print traditionnel avec une expérience digitale moderne.",

        // Projet Goblin Attack
        "goblin.description_1": "Conception d'un jeu type Vampire Survivors articulé autour de collecte de données en temps réel. En binôme, je me suis chargé de l'aspect Game Design et le développement Unity, ainsi que de la partie dashboard et base de données.",
        "goblin.description_2": "Le dashboard permet d'analyser les métriques de jeu (comportement joueur, équilibrage des vagues). Ce projet a ensuite été installé lors des Journées Portes Ouvertes 2026 afin que les visiteurs puissent le tester.",
        "goblin.description_3": "Le dashboard se mettant à jour en temps réel, les joueurs pouvaient voir directement après leur partie leurs statistiques ainsi que leur classement.",

        // Projet La Maison de l'Horloger
        "horloger.description_1": "Expérience immersive en Réalité Virtuelle réalisée avec un Méta Oculus Quest 2 en deux semaines sur la thématique des 'Espaces Impossibles'. Incarnez un Horloger gardien de l'espace et du temps vivant seul dans sa maison. Les engrenages de la Grande Horloge ayant disparus, l'équilibre est rompu ce qui créé des distorsions de l'espace et du temps.",
        "horloger.description_2": "Dans ce projet réalisé à deux, notre approche a été de jouer avec ses déformations spatiales et temporelles afin de créer différentes énigmes. Je me suis chargé de la conception du Game Design et du Level Design et de l'intégration des mécaniques de jeu sur Unity.",
        "horloger.description_3": "Nous avons aussi conçu un Game Design Document expliquant toutes nos intentions.                             Nous avons aussi conçu un Game Design Document expliquant toutes nos intentions. Lors de ce projet je me suis aussi initié aux effets visuels en m'occupant de la partie VFX.",


        // Projet Solaryth : Kanoko
        "solaryth.description1": "Fable poétique Solarpunk explorant les synergies entre nature et technologie à travers différents dispositifs : un Walking Simulator (Jeu Unity en 3D) et un BookNook connecté (diorama physique). Inspiré par l'esthétique de Miyazaki, le projet met en scène des esprits tutélaires, les Esperits.",
        "solaryth.description2": "Au sein de ce projet, je me suis occupé de l'aspect interactif du BookNook (programmation IoT) en implémentant des capteurs de mouvement et un potentiomètre pour gérer l'éclairage et la pulsation lumineuse. De plus, j'ai soutenu les autres acteurs du projet en concevant le Narrative Design et en contribuant à la conception de l'UI du jeu vidéo.",
        "solaryth.description3": "J'ai réalisé le chara design d'un des personnages de l'histoire en suivant un processus précis avant de l'intégrer dans le jeu : moodboard et concept-art (Milanote), modélisation 3D et texturage (Blender), animation (Mixamo). Mon intention était d'incarner la sagesse et la bienveillance représentée par une tortue. J'ai ensuite ajouté l'esthétique solarpunk mêlant des éléments organiques (mousse, champignon) et technologiques (carapace photovoltaïque). Son design circulaire renforce son aspect calme et inoffensif.",        
        
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
        "home.bio2": "Throughout my studies, I've had the opportunity to discover many fields related to <span class=\"highlight\">graphic design</span>, <span class=\"highlight\">audiovisual</span>, <span class=\"highlight\">communication</span> and <span class=\"highlight\">web development</span>. What I particularly appreciate about this program is the <span class=\"highlight\">diversity of tools and skills</span>. This versatility motivates me to explore different areas of expertise: <span class=\"highlight\">motion design</span>, <span class=\"highlight\">video games</span>, and <span class=\"highlight\">3D modeling</span>.",
        "home.bio3": "In my 2nd year, I specialized in <span class=\"highlight\">Interactive Devices and Web</span>. This path allowed me to continue digital creation through new methods. I discovered new disciplines like <span class=\"highlight\">game design</span>, <span class=\"highlight\">3D modeling</span>, and even <span class=\"highlight\">virtual reality</span>. The program being more focused on interactive devices, it allowed me to stay creative by using different tools. I'm a <span class=\"highlight\">curious</span>, <span class=\"highlight\">dreamy</span> and <span class=\"highlight\">creative</span> person. I enjoy bringing projects to life, whether personal or collective.",
        "home.bio4": "Outside of my studies, I play <span class=\"highlight\">volleyball</span>, a sport that taught me <span class=\"highlight\">discipline</span> and <span class=\"highlight\">teamwork</span>. I love exploring and discovering different styles, whether through <span class=\"highlight\">music, video games, manga, or cinema</span>. I enjoy immersing myself in fully crafted universes. I have always aimed to create my own worlds and, in the future, I want to keep expressing my <span class=\"highlight\">creativity</span> by designing <span class=\"highlight\">immersive and interactive experiences</span> through my imagination.",
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
        "banana.description_1": "Banana Run is a board game created for a university project. Working in a team of 3, we designed a complete board game with an original universe focused on monkeys collecting bananas. The game combines strategy, chance, and interaction between players with collection, exchange, and sabotage mechanics.",
        "banana.description_2": "In this project, my role specifically involved establishing the design of the game rules and its universe. I then participated in the graphic and material design of the game. We then conducted several tests to balance the gameplay.",
        "banana.description2": "Play as a marmoset recruited by the Gorilla Chief and bring him as many bananas as possible scattered across the jungle!",

        // Projet Mario Kart
        "mariokart.description_1": "The goal of this group project was to create a video game teaser using motion capture. Inspired by the 2005 iPod commercials, the project featured characters in black silhouettes with key elements highlighted in bright colors. Additionally, the background music had to be an assembly of several tracks from a library provided to us.",
        "mariokart.description_2": "In this project, my role was to set up and record motion capture movements using Rokoko Studio, and to create the background music.",
        "mariokart.description_3": "Once the scenes were correctly integrated and assembled in Blender, I handled the motion design in After Effects and the final video assembly.",
        
        // Projet Proton Neutron
        "proton.description_1": "Design of a Zelda-like video game. The exercise was to design a video game on the theme \"10+\" while respecting several constraints. The game had to be in pixel art and integrate a mechanic allowing players to leave messages stored in a database (similar to Dark Souls).",
        "proton.description_2": "This pair project allowed me to be involved in all sectors of video game creation. Initially in terms of design (game design, narrative design, and level design).",
        "proton.description_3": "But also regarding all the pixel art, game development, database management, and graphic assets. This exercise gave me experience in creating a video game from A to Z.",
        
        // Projet Pokémon (Fantômaki)
        "pokemon.description_1": "Design of a Pokémon with strict rules influencing character design choices. The Pokémon had to be a starter with an unrestricted dual type and three different emotions.",
        "pokemon.description_2": "This project allowed me to practice character design through different steps: research for consistency, sketching postures, and final realization using graphic tools.",
             
        // Projet Just Dance
        "justdance.description_1": "Creation of an animated Just Dance style background for the song \"Can't Take My Eyes Off You\" by Frankie Valli. I created a vector night cityscape in Adobe Illustrator.",
        "justdance.description_2": "The animation was then produced in After Effects, synchronizing lights with the music and adding weather transitions to make the scene more dynamic.",
        
        // Projet Big Bag Festival
        "bigbag.description_1": "Design of an interactive poster for the Big Bag Festival. The project integrates a QR Code into a minimalist vector poster created in Illustrator.",
        "bigbag.description_2": "Scanning the QR Code triggers a dynamic JavaScript animation that brings the graphic elements to life, merging traditional print design with a modern digital experience.",

        // Projet Goblin Attack
        "goblin.description_1": "Design of a Survivors-like game focused on real-time data collection. In a duo, I handled the Game Design, Unity development, and the database and dashboard parts.",
        "goblin.description_2": "The dashboard analyzes game metrics (player behavior, wave balancing). The project was showcased at the 2026 Open House Days so visitors could test it.",
        "goblin.description_3": "As the dashboard updated in real-time, players could see their statistics and rankings immediately after their session.",

        // Projet La Maison de l'Horloger
        "horloger.description_1": "Immersive Virtual Reality experience (Oculus Quest 2) based on the theme of 'Impossible Spaces'. Play as a watchmaker in a house where time and space distort. The gears of the Great Clock have disappeared, breaking the balance and creating space-time distortions.",
        "horloger.description_2": "In this duo project, our approach was to play with these distortions to create various puzzles. I handled Game/Level Design and Unity integration.",
        "horloger.description_3": "We also designed a Game Design Document explaining our intentions. I was also responsible for the entire VFX dimension of the game.",

        // Projet Solaryth : Kanoko
        "solaryth.description1": "A Solarpunk poetic fable exploring the synergies between nature and technology through different devices: a Walking Simulator (3D Unity game) and a connected BookNook (physical diorama). Inspired by Miyazaki's aesthetics, the project features tutelary spirits called the Esperits.",
        "solaryth.description2": "Within this project, I handled the interactive aspect of the BookNook (IoT programming) by implementing motion sensors and a potentiometer to manage lighting and light pulses. Additionally, I supported other team members by designing the Narrative Design and contributing to the video game UI.",
        "solaryth.description3": "I created the character design for one of the story's characters following a precise process before integrating it into the game: moodboard and concept art (Milanote), 3D modeling and texturing (Blender), animation (Mixamo). My intention was to embody wisdom and benevolence through a turtle. I then added the solarpunk aesthetic mixing organic elements (moss, mushrooms) and technology (photovoltaic shell). Its circular design reinforces its calm and harmless appearance.",        
        
        // Graphic Gallery
        "gallery.title": "🎨 Graphic Creations Gallery",
        "gallery.subtitle": "Collection of my designs, illustrations and visual creations",

        "footer.legal": "Personal portfolio. All rights reserved."

    }
};