const worksYears = [
    // years : année du poste
    //puce : afficher une puce ou non
    // underYears, les mois du poste durant l'année
    {
        years: '2020',
        job: [
                {  
                    puce:null,
                    underYears : "Mars/Septembre 2020",
                    text :  ['Titre Professionnel Développeur Web et Web Mobile Niveau III O’clock, formation en Téléprésentiel Labellisée Grande Ecole du Numérique', 
                    "br",
                    'De Mai à Octobre 700 heures intensives avec :',
                    '4 mois de Socle : HTML5/CSS3/PHP/Javascript',
                    ' 1 mois de spécialisation react et redux',
                    ' 1 mois de projet professionnel '
                            
                    ]
                },
                {
                    puce:null,
                    underYears : "Septembre 2020",
                    text :  [
                        "Réalisation d'un projet de fin de formation. J’ai eu un rôle de Project owner, lead dev front. Les outils que j’ai utilisé dans ce projet sont :",
                        "br",
                        "- JavaScript, React Js pour le dynamisme du site",
                        "- Redux-toolkit pour la simplicité de faire voyager les données",
                        "  - SocketIo pour le direct live du tchat"
                    ]
                },
        ]
    },
    {
        years: '2020/2016',
        job: [
                {   puce:true,
                    underYears : "2020/2016",
                    text :  ["Freelance graphiste 3d, programmeur nodal sur Unreal Engine",
                            "Cinématiques de phasage pour les sociétés Colas et Vinci terrassement",
                            "Réalisation d'un prototype d'aménagement d'intérieur en réalité virtuelle",
                            "Réalisation d'un jeu en réalité virtuelle",
                            "Modélisation d'objet intérieur en 3d pour KTM",
                            "Visite d'un tgv en réalité virtuelle pour Resnovae"
                            ]
                },
                
            ]
    },  {
        years: '2016/2007',
        job: [
                {
                    puce:null,
                    underYears : "2007/20013",
                    text :  ["Graphiste 3D chez AD-Invaders"]
                },
                {
                    puce:null,
                    underYears : "2013/2016",
                    text :  [
                       "Lead Graphiste 3D chez AD-Invaders"
                    ]
                },
        ]
    },
]

export default worksYears
