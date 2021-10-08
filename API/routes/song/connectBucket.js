
const { Song } = require('./Song.js');
const genname = require('./generatename.js');
const S3 = require('aws-sdk/clients/s3');

function fillSongs(songs){
    console.log('entre')
    const p1 = 'Avicii_TheNights.mp3';
    const p2 = 'RicardoArjona_Minutos.mp3';
    const p3 = 'Tupac_Changes.mp3';

    songs.push(new Song(p1, 'The Nights', 'Avicii', 'The Days / Nights', 'Once upon a younger year\n When all our shadows disappeared\n The animals inside came out to play\n Went face to face with all our fears\n Learned our lessons through the tears\n Made memories we knew would never fade\n One day my father, he told me\n "Son, dont let it slip away"\n He took me in his arms, I heard him say\n "When you get older\n Your wild heart will live for younger days\n Think of me if ever youre afraid"\n He said: "One day youll leave this world behind\n So live a life you will remember"\n My father told me when I was just a child\n "These are the nights that never die"\n My father told me\n When thunder clouds start pouring down\n Light a fire they cant put out\n Carve your name into those shining stars\n He said: "Go venture far beyond the shores\n Dont forsake this life of yours\n Ill guide you home, no matter where you are"\n One day my father, he told me\n "Son, dont let it slip away"\n When I was just a kid, I heard him say\n "When you get older\n Your wild heart will live for younger days\n Think of me if ever youre afraid"\n He said: "One day youll leave this world behind\n So live a life you will remember"\n My father told me when I was just a child\n These are the nights that never die"\n My father told me\n "These are the nights that never die"\n My father told me\nMy father told me', genname.generatename(p1)));
    songs.push(new Song(p2, 'Minutos', 'Ricardo Arjona', 'Santo Pecado', 'El reloj de pared\n Anunciando las 6:23\n El pasado con sed\n Y el presente es un atleta sin pies\n Y ya son las 6:43\nY el cadáver del minuto que paso\n Me dice así se vive aquí te guste o no\n Y la nostalgia pone casa en mi cabeza\n Y dan las 6 con 50\n Quien te dijo que yo\n Era el sueño que soñaste una vez\n Quien dijo que tu\n Voltearias mi futuro al revés\n Y ya son las 7:16\n Y el cadáver del minuto que paso\n Me dice tu estrategia te arruino\n No queda más que ir aprendiendo a vivir solo\n Si te quedan agallas\n La casa no es otra cosa\n Que un cementerio de historias\n Enterradas en fosas\n Que algunos llaman memorias\n Minutos\n Como sale la herida\n Se me pasa la vida\n Gastando el reloj\n Minutos\n Son la morgue del tiempo\n Cadáveres de momentos\n Que no vuelven jamás\n No hay reloj que de vuelta hacia atrás\n Como duele gastar\n El instante en el que tu ya no estas\n Como cuesta luchar\n Con las cosas que no vuelven más\n Ya son las 9:23\n Y el cadáver del minuto que paso\n Se burla de mis ganas de besar\n La foto que dejaste puesta en el buró\n Mi soledad es tu venganza\n El ministerio del tiempo\n Puso sede en mi almohada\n Ahí te encuentro a momentos\n Aunque no sirve de nada\n Minutos\n Como sale la herida\n Se me pasa la vida\n Gastando el reloj\n Minutos\n Son la morgue del tiempo\n Cadáveres de momentos\n Que no vuelven jamás\n No hay reloj que de vuelta hacia atrás\n Minutos que se burlan de mí\n Minutos como furia del mar\n Minutos pasajeros de un tren que no va a ningún lugar\n Minutos como lluvia de sal\n Minutos como fuego en la piel\n Minutos forasteros que vienen y se van sin decir\n Minutos que me duelen sin ti\n Minutos que no pagan pensión\n Minutos que al morir formarán el batallón del ayer\n Minutos que se roban la luz\n Minutos que me oxidan la fe\n Minutos inquilinos del tiempo mientras puedan durar\n Minutos que disfrutan morir\n Minutos que no tienen lugar\n Minutos que se estrellan en mi son Kamikaces de Dios\n',genname.generatename(p2)));
    songs.push(new Song(p3, 'Changes', 'Tupac', 'Greatest Hits','Come on, come on\n I see no changes, wake up in the morning, and I ask myself\n Is life worth living, should I blast myself?\n Im tired of bein poor, and even worse Im black\n My stomach hurts, so Im lookin for a purse to snatch\n Cops give a damn about a negro\n Pull the trigger, kill a nigga, hes a hero\n Give the crack to the kids who the hell cares\n One less hungry mouth on the welfare\n First, ship em dope and let em deal the brothers\n Give em guns, step back, watch em kill each other\n Its time to fight back, thats what Huey said\n Two shots in the dark, now Hueys dead\n I got love for my brother, but we can never go nowhere\n Unless we share with each other\n We gotta start makin changes\n Learn to see me as a brother instead of two distant strangers\n And thats how its supposed to be\n How can the devil take a brother, if hes close to me?\n Id love to go back to when we played as kids\n But things changed, and thats the way it is\n Come on, come on\n Thats just the way it is\n Things will never be the same\n Thats just the way it is\n Ooh, yeah\n Come on, come on\n Thats just the way it is\n Things will never be the same\n Thats just the way it is\n Aww, yeah\n I see no changes, all I see is racist faces\n Misplaced hate makes disgrace to races\n We under, I wonder what it takes to make this\n One better place, lets erase the wasted\n Take the evil out the people, theyll be acting right\n Cause mo black and white is smokin crack tonight\n And only time we chill is when we kill each other\n It takes skill to be real, time to heal each other\n And although it seems heaven sent\n We aint ready, to see a black President\n It aint a secret, dont conceal the fact\n The penitentiarys packed, and its filled with blacks\n But some things will never change\n Try to show another way but you stayin in the dope game\n Now tell me, whats a mother to do?\n Bein real dont appeal to the brother in you\n You gotta operate the easy way\n (I made a G today) But you made it in a sleazy way\n Sellin crack to the kid (I gotta get paid)\n Well, hey, well, thats the way it is\n Come on, come on\n Thats just the way it is\n Things will never be the same\n Thats just the way it is\n Aww, yeah\n Come on, come on\n Thats just the way it is\n Things will never be the same\n Thats just the way it is\n Aww, yeah\n We gotta make a change\n Its time for us as a people to start makin some changes\n Lets change the way we eat\n Lets change the way we live\n And lets change the way we treat each other\n You see, the old way wasnt working so its on us to do\n What we gotta do, to survive\n And still I see no changes, cant a brother get a little peace?\n Theres war in the streets and war in the Middle East\n Instead of war on poverty, they got a war on drugs\n So the police can bother me\n And I aint never did a crime, I aint have to do\n But now, Im back with the facts givin em back to yo\n Dont let em jack you up, back you up\n Crack you up and pimps smack you up\n You gotta learn to hold ya own\n They get jealous when they see ya, with ya mobile phone\n But tell the cops, they cant touch this\n I dont trust this, when they try to rush, I bust this\n Thats the sound of my tool, you say it aint cool?\n But mama didnt raise no fool\n And as long as I stay black, I gotta stay strapped\n And I never get to lay back\n Cause I always got to worry bout the pay backs\n Some buck that I roughed up way back\n Comin back after all these years\n Rat-a-tat, tat, tat, tat, thats the way it is\n Thats just the way it is\n Things will never be the same\n Thats just the way it is (Way it is)\n Aww, yeah\n Thats just the way it is\n Things will never be the same\n Thats just the way it is\n Aww, yeah \nSome things will never change' ,genname.generatename(p3)));
}

function initialConection(){
    const s3 = new S3({
        region : "us-east-2",
        accessKeyId : "AKIA2DEKJIXU3Y6OUQN5",
        secretAccessKey : "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"
      
      });
      return s3
}

module.exports.fillSongs = fillSongs;
module.exports.initialConection = initialConection;
