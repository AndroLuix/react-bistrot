import { IoIosDoneAll } from "react-icons/io";
import { IoFastFood, IoGolfSharp, IoJournal, IoPeopleCircle, IoRestaurant } from "react-icons/io5";

const ProjectCards = [
    {
        title: 'Qualità degli Ingredienti',
        icon: <IoPeopleCircle className="icon card-icon"/>,
        description: 'Utilizziamo solo ingredienti freschi, di stagione e locali per garantire sapori autentici e genuini in ogni piatto.'
    },
    {
        title: 'Cura della Tradizione',
        icon: <IoFastFood className="icon card-icon"/>,

        description: 'Rispettiamo le ricette tradizionali, adattandole con un tocco moderno, per offrire un’esperienza culinaria che celebra la cultura locale.'
    },
    {
        title: 'Esperienza Cliente',
        icon: <IoRestaurant className="icon card-icon"/>,

        description: 'La soddisfazione dei nostri ospiti è la nostra priorità. Puntiamo a creare un’atmosfera accogliente e a offrire un servizio impeccabile.'
    },
    {
        title: 'Sostenibilità',
        icon: <IoGolfSharp className="icon card-icon"/>,

        description: 'Ci impegniamo a ridurre al minimo l’impatto ambientale utilizzando materiali riciclabili e riducendo gli sprechi alimentari.'
    },
    {
        title: 'Innovazione nel Menù',
        icon: <IoJournal className="icon card-icon"/>,

        description: 'Il nostro menù evolve regolarmente, con piatti innovativi che sorprendono il palato e valorizzano la cucina contemporanea.'
    },
    {
        title: 'Passione per l’Ospitalità',
        icon: <IoIosDoneAll className="icon card-icon"/>,

        description: 'Accogliamo ogni cliente come un amico, offrendo un ambiente rilassante e un servizio attento a ogni dettaglio.'
    }
];


const teamCards = [
    {
        title: 'Giovanni Ferri',
        role: 'Chef Executive',
        image:"https://randomuser.me/api/portraits/men/99.jpg",
        description: 'Giovanni crea e supervisiona ogni piatto del nostro bistrot, portando in tavola passione e creatività con ingredienti freschi e stagionali.'
    },
    {
        title: 'Luca Bianchi',
        role: 'Sous-Chef',
        image:"https://randomuser.me/api/portraits/men/80.jpg",
        description: 'Luca è il braccio destro dello Chef, gestisce la cucina e assicura che ogni piatto sia preparato secondo gli standard più alti.'
    },
    {
        title: 'Elena Rossi',
        role: 'Responsabile Sala',
        description: 'Elena coordina il servizio in sala, assicurandosi che ogni cliente riceva un’accoglienza calorosa e un’esperienza impeccabile.',
        image:"https://randomuser.me/api/portraits/women/47.jpg",
    },
    {
        title: 'Marco Gallo',
        role: 'Sommelier',
        description: 'Marco è il nostro esperto di vini. Consiglia i migliori abbinamenti per esaltare ogni piatto e rendere ogni pasto un’esperienza unica.',
         image:"https://randomuser.me/api/portraits/men/20.jpg",
    },
    {
        image:"https://randomuser.me/api/portraits/women/84.jpg",
        title: 'Sofia Neri',
        role: 'Chef Pasticcere',
        description: 'Sofia è responsabile dei dessert, realizzando dolci che deliziano gli occhi e il palato, con ingredienti freschi e tecniche artigianali.'
    },
    {
        image : "https://randomuser.me/api/portraits/women/44.jpg",
        title: 'Chiara Verde',
        role: 'Barista',
        description: 'Chiara prepara caffè e cocktail con grande maestria e passione, rendendo speciale ogni momento del giorno con bevande su misura.'
    }
];

export {teamCards, ProjectCards}