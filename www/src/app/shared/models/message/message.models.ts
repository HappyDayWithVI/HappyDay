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
//       }  // http://{serveur:port}/message/genre serie horreur
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
//         "character": "Alex  // http://{serveur:port}/message/genre serie horreur
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
//     ] Vause",
//         "image": "http://www.plannr.fr/show/role/264586-346987.jpg"
//       }
//     ]
//     ]
//   }
// }
  public actor: string;
  public tvshow: string;
  public character: string;

//{
//  "id": "10-0",
//  "result": {
//    "country": "FR",
//    "new_releases": [
//      {
//        "name": "100 %",
//        "uri": "spotify:album:2UILSw7U60kNvPNWAnuvyY",
//        "picture": "https://i.scdn.co/image/e144e0bb34a3251e7a0e5cdb96a33289e6389b75",
//        "artist_name": "Alonzo",
//        "artist_uri": "spotify:artist:2z2TRvloJt4EfUNQp9rHAi"
//      }
//    ]
//}

//{
//  "id": "10-1",
//  "result": {
//    "album_sought": "The+Geeks+And+The+Jerkin'+Socks",
//    "albums": [
//      {
//        "name": "The Geeks And The Jerkin' Socks",
//        "uri": "spotify:album:7IgQpnD9mU5X4smaboZ7DV",
//        "picture": "https://i.scdn.co/image/e132b4bbc7440459f0bec2ce7867d6cebe8f32f1",
//        "artist_name": "Shaka Ponk",
//        "artist_uri": "spotify:artist:0VJIBKdqJygrupAxpSTk7q",
//        "album_tracks": [
//          {
//            "name": "Let's Bang",
//            "track": "https://p.scdn.co/mp3-preview/691bfcc6262728b8313f2413863d18a2d164537d?cid=2893722177714a769b7e45e70f9d834b",
//            "uri": "spotify:track:3rN3NK7KO1NiI1j79L5Bi8",
//            "duration": 242440,
//            "artist_name": "Shaka Ponk",
//            "artist_uri": "spotify:artist:0VJIBKdqJygrupAxpSTk7q"
//          }
//        ]
//      }
//    ]
//  }
//}

//{
//  "id": "10-2",
//  "result": {
//    "artist_sought": "acdc",
//    "artist": [
//      {
//        "name": "AC/DC",
//        "url": "https://open.spotify.com/artist/711MCceyCBcFnzjGY4Q7Un",
//        "uri": "spotify:artist:711MCceyCBcFnzjGY4Q7Un",
//        "big_picture": "https://i.scdn.co/image/a16c5d95ede008ec905d6ca6d1b5abbf39ad4566",
//        "genres": [
//          "album rock",
//          "classic rock",
//          "hard rock",
//          "heavy christmas",
//          "rock"
//        ],
//        "albums": [
//          {
//            "name": "Rock or Bust",
//            "uri": "spotify:album:6OwvO40ahugJE5PH4TjqTg",
//            "picture": "https://i.scdn.co/image/16f72167c03371e0d30dc71c61e94378f5294cf6"
//          }
//        ]
//      }
//    ]
//  }
//}

//{
//  "id": "10-3",
//  "result": {
//    "track_sought": "highway+to+hell",
//    "tracks": [
//      {
//        "name": "Highway to Hell",
//        "url": "https://open.spotify.com/track/2zYzyRzz6pRmhPzyfMEC8s",
//        "track": "https://p.scdn.co/mp3-preview/aa4f9186e0c3f4436bb40572a63862db80d7ef2d?cid=2893722177714a769b7e45e70f9d834b",
//        "uri": "spotify:track:2zYzyRzz6pRmhPzyfMEC8s",
//        "duration": 208400,
//        "album_name": "Highway to Hell",
//        "album_uri": "spotify:album:10v912xgTZbjAtYfyKWJCS",
//        "album_picture": "https://i.scdn.co/image/6db774767e7a5b5b4b5b7c74ac61a24ae4cd9730",
//        "album_artist": "AC/DC",
//        "album_artist_uri": "spotify:artist:711MCceyCBcFnzjGY4Q7Un",
//        "track_artist_name": "AC/DC",
//        "track_artist_uri": "spotify:artist:711MCceyCBcFnzjGY4Q7Un"
//      }
//    ]
//  }
//}

//{
//  "id": "10-4",
//  "result": {
//    "playlists_sought": "Fitness+Beats+Playlist",
//    "playlists": [
//      {
//        "name": "FITNESS BEATS",
//        "uri": "spotify:user:topsifyportugal:playlist:3jxE8TuUtfcBbrocWK7ZB1",
//        "picture": "https://pl.scdn.co/images/pl/default/b029c5428b9c9d8955d47dc3e553dcaf0f7f3b3f",
//        "owner_name": "Topsify Portugal",
//        "owner_url": "http://open.spotify.com/user/topsifyportugal",
//        "owner_uri": "spotify:user:topsifyportugal",
//        "tracks": [
//          {
//            "name": "Versace On The Floor (Bruno Mars vs. David Guetta)",
//            "track": "https://p.scdn.co/mp3-preview/9487b9c88fabca3470a6ec629d3d61965082bc50?cid=2893722177714a769b7e45e70f9d834b",
//            "uri": "spotify:track:5UJshy5HDHdNEVqlJwzsQB",
//            "album_name": "Versace On The Floor (Bruno Mars vs. David Guetta)",
//            "album_uri": "spotify:album:0yDiMZdbFwO5lGB9Dq5wlL",
//            "album_image": "https://i.scdn.co/image/914c7265247ab1d3bec3a4bd57842b4c708bea5e",
//            "artist_name": "Bruno Mars",
//            "artist_uri": "spotify:artist:0du5cEVh5yTK9QJze8zA0C"
//          }
//        ]
//      }
//    ]
//  }
//}

public uri: string;
public picture: string;
public artist_name : string;
public duration : number;
public artist_uri : string;
public owner_name : string;
//public genres = array();
public big_picture : string;

}
