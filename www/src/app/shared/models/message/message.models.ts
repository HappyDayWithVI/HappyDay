import { Injectable } from '@angular/core';
import { MessageManager } from '../../services/message/message.manager';

@Injectable()
export class MessageModels {

  //meteo jour
  // ex : http://{serveur:port}/message/meteo lyon
//   {
//   "id": "1-1",
//   "result": {
//     "city": "Lyon",
//     "date": "24-08-2017",
//     "day": "jeudi",
//     "short_day": "jeu.",
//     "temp": 21,
//     "max_temp": 23,
//     "min_temp": 20,
//     "desc": "légères pluies",
//     "icon": "10"
//   }
// }
  public id: number;
  public city: string;
  public date: Date;
  public day: string;
  public short_day: string;
  public temp: number;
  public max_temp: string;
  public min_temp: string;
  public desc: string;
  public icon: number;

  //meteo semaine
  // http://{serveur:port}/message/meteo semaine lyon
//   {
//   "id": "1-2",
//   "result": {
//     "city": "Lyon",
//     "week": [
//       {
//         "date": "24-08-2017",
//         "day": "jeudi",
//         "short_day": "jeu.",
//         "temp": 29,
//         "max_temp": 30,
//         "min_temp": 21,
//         "desc": "partiellement ensoleillé",
//         "icon": "03"// {
//   "id": "2-4",
//   "result": {
//     "actor": "Laura Prepon ",
//     "role_data": [
//       {
//         "tvshow": "That 70s Show",
//         "character": "Donna Pinciotti",
//         "image": "http://www.plannr.fr/show/role/73787-28213.jpg"
//       },
//       {
//         "tvshow": "Orange Is the New Black",
//         "character": "Alex Vause",
//         "image": "http://www.plannr.fr/show/role/264586-346987.jpg"
//       }
//     ]
//   }
// }
//       },
//       {
//         "date": "25-08-2017",
//         "day": "vendredi",
//         "short_day": "ven.",
//         "temp": 30,
//         "max_temp": 30,
//         "min_temp": 21,
//         "desc": "ciel dégagé",
//         "icon": "01"
//       }
//     ]
// }
// }  public desc: string;

  //genre serie
  // http://{serveur:port}/message/genre serie horreur
//   {
//   "id": "2-1",
//   "result": {
//     "genre": "horreur",
//     "shows": [
//       {
//         "name": "The Walking Dead",
//         "resume": "Le policier Rick Grimes se réveille à l'hôpital après un long coma. Il découvre avec effarement que le monde, ravagé par une épidémie, est envahi par les morts-vivants. Parti sur les traces de sa femme et de son fils, Rick arrive à Atlanta où, avec un groupe de rescapés, il va devoir apprendre à survivre.",
//         "image": "http://www.pl// {
//   "id": "2-4",
//   "result": {
//     "actor": "Laura Prepon ",
//     "role_data": [
//       {
//         "tvshow": "That 70s Show",
//         "character": "Donna Pinciotti",
//         "image": "http://www.plannr.fr/show/role/73787-28213.jpg"
//       },
//       {
//         "tvshow": "Orange Is the New Black",
//         "character": "Alex Vause",
//         "image": "http://www.plannr.fr/show/role/264586-346987.jpg"
//       }
//     ]
//   }
// }annr.fr/show/poster-153021.jpg"
//       },
//       {
//         "name": "Supernatural",
//         "resume": "Les aventures et le destin des deux frères Winchester sur les traces de leur père, un \"chasseur\", à la poursuite de monstres vivant parmi les humains.\n",
//         "image": "http://www.plannr.fr/show/poster-78901.jpg"
//       }
//     ]
// }
// }

  public genre: string;
  public name: string;
  public resume: string;
  public image: string;
  public details: string;
  public channel: string;
  public runtime: number;
  public season: number;
  public episode: number;
  public rating: string;
  public status: string;

  //personnage serie
  // http://localhost:8083/message/personnage%20serie%20the%20walking%20dead
//   "id": "2-3",
//   "result": {
//     "serie_data": {
//       "serie": "The Walking Dead",
//       "image": "http://www.plannr.fr/show/153021.jpg"
//     },
//     "character_data": [
//       {
//         "name_actor": "Andrew Lincoln",
//         "name_character": "Rick Grimes",
//         "image": "http://www.plannr.fr/show/role/153021-210851.jpg"
//       },
//       {
//         "name_actor": "Norman Reedus",
//         "name_character": "Daryl Dixon",
//         "image": "http://www.plannr.fr/show/role/153021-291098.jpg"
//       }
//     ]
// }
// }
  public serie: string;
  public name_actor: string;
  public name_character: string;

  //serie avec acteur/actrice serie
// http://localhost:8083/message/serie%20avec%20laura%20prepon
// {
//   "id": "2-4",
//   "result": {
//     "actor": "Laura Prepon ",
//     "role_data": [
//       {
//         "tvshow": "That 70s Show",
//         "character": "Donna Pinciotti",
//         "image": "http://www.plannr.fr/show/role/73787-28213.jpg"
//       },
//       {
//         "tvshow": "Orange Is the New Black",
//         "character": "Alex Vause",
//         "image": "http://www.plannr.fr/show/role/264586-346987.jpg"
//       }
//     ]
//   }
// }
  public actor: string;
  public tvshow: string;
  public character: string;

  //livre avec <nomlivre> et livre de <nomautheur>
  public author: string;
  public published_year: string;

  //Télé
  public title: string;
  public time: string;

  //Restaurant
  public is_closed: string;
  public price: string;
  public adress: string;
  public categories: string;
}
