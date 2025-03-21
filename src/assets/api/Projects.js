
import QueensPark from "../Images/QueensPark.png";
import GreenFort from "../Images/GreenFort.png";
import Maybell from "../Images/Maybell.png";
import GreenHeights from "../Images/GreenHeights.png";
import saftey from "../Images/saftey.svg"
import bricks from "../Images/bricks.svg"
import amenities from "../Images/amenities.svg"
import plan from "../Images/plan.svg"
import game from "../Images/game.png"

const getAllProjects = () => {
    return [
      {
        id: 1,
        projectImage: QueensPark,
        projectTitle : "Queens Park",
        projectLocation: "Thamburattiparambu, Edapally",
        projectPrice: "",
        projectTag: "Get Launch Offers",
        newLaunch: true,
        nearingCompletion : true,
        onGoing : false,
        marqueeText: "GET LAUNCH OFFERS NOW",
        amenities: [
          {
            spec: "3 & 4 BHK Boutique",
            specImg: plan,
          },
          {
            spec: "High Saftey Standards",
            specImg: saftey,
          },
          {
            spec: "Porotherm Bricks",
            specImg: bricks,
          },
          {
            spec: "15+ Amenities",
            specImg: amenities,
          },
        ],
      },

      {
        id: 2,
        projectImage: GreenFort,
        projectTitle : "Green Fort",
        projectLocation: "Thrippunithura, Kochi",
        projectPrice: "66 lakh",
        projectTag: "Special Offers",
        newLaunch: false,
        nearingCompletion : true,
        onGoing : true,
        marqueeText: "GET LAUNCH OFFERS NOW",
        amenities: [
          {
            spec: "2 & 3 BHK",
            specImg: plan,
          },
          {
            spec: "High Saftey Standards",
            specImg: saftey,
          },
          {
            spec: "Porotherm Bricks",
            specImg: bricks,
          },
          {
            spec: "15+ Amenities",
            specImg: amenities,
          },
        ],
      },

      {
        id: 3,
        projectImage: Maybell,
        projectTitle : "Maybell",
        projectLocation: "Thrikkakara, Kochi",
        projectPrice: "92 lakh",
        projectTag: "Special Offers",
        newLaunch: false,
        nearingCompletion : true,
        onGoing : true,
        marqueeText: "GET LAUNCH OFFERS NOW",
        amenities: [
          {
            spec: "2 & 3 BHK",
            specImg: plan,
          },
          {
            spec: "High Saftey Standards",
            specImg: saftey,
          },
          {
            spec: "Porotherm Bricks",
            specImg: bricks,
          },
          {
            spec: "15+ Amenities",
            specImg: amenities,
          },
        ],
      },

      {
        id: 4,
        projectImage: GreenHeights,
        projectTitle : "Green Heights",
        projectLocation: "Thrippunithura, Kochi",
        projectPrice: "1.1 cr",
        projectTag: "Special Offers",
        newLaunch: false,
        nearingCompletion : true,
        onGoing : true,
        marqueeText: "GET LAUNCH OFFERS NOW",
        amenities: [
          {
            spec: "3 & 4 BHK",
            specImg: plan,
          },
          {
            spec: "High Saftey Standards",
            specImg: saftey,
          },
          {
            spec: "Sports & Well Being",
            specImg: game,
          },
          {
            spec: "Luxury Amenities",
            specImg: amenities,
          },
        ],
      },


    ];
  };
  
  export default getAllProjects;
  