## Spectacular Karaoke!

This page will document the entire section of the design of a software solution to provide a Karaoke service. The name of the project will be "Spectacular Karaoke".

The requirements at a general level are the following:

1. The user must authenticate through Forms and the system validates it against its own user database
2. User can add / delete / modify existing songs and lyrics. This is only allowed for premium users.
3. The user must be able to search through a list of songs, the one they want to play. You can search for it by song name, artist, album, and lyric snippets.
4. The user can play a song for which the Karaoke application will stream the audio and synchronize the lyrics so that the user can sing to the rhythm of the music. 

### System context diagram

It shows the software system being built and how it fits into the world in termos of the people who use it and the other software systems it interacts with. The solution is shown below: 


![Image](https://github.com/Josecespedesant/SpectacularKaraoke/blob/gh-pages/diagram1.png?raw=true)

As seen in the image, the user interacts with the karaoke system allowing him/her/they to interact with songs and lyrics. This system also interacts with a cloud storage that is Google Cloud Storage to extract the songs data.


### Container diagram

A container diagram, zooms into the software system, and shows the containers (applications, data stores, microservices, etc.) that make up that software system. Technology decisions are also a key part of this diagram as it's shown below:

![Image](https://github.com/Josecespedesant/SpectacularKaraoke/blob/gh-pages/diagram2.png?raw=true)

It's shown that the karaoke web application is made in React, React was chosen because it facilitates the overall process of writing components, facilitates further maintenance and this essential because the system will evolve (and also it's architecture) and, if you are working on single page application and wish to make it fast, responsive and user-friendly, React is a great option. [1](https://da-14.com/blog/its-high-time-reactjs-ten-reasons-give-it-try). 

Next, the API is made in Node.js, the reasons are that it allows you to build fast, scalaple API Proxy capable of handling a huge number of simultaneous request with high throughput, necessary for an application of Karaoke that uses songs. Also it has streaming support, that means it is easy to stream results back to the client of API as they are getting from existing applications. [2](https://www.instinctools.com/why-is-node-js-so-popular-for-rest-api/).

Thirdly, the use of MySQL for the Data Base it's because it's ease of use, small size and that's open distributiond and source code. [3](http://books.gigatux.nl/mirror/mysqlguide4.1-5.0/0672326736/fm01lev1sec1.html)

Lastly, the choice of AWS Cloud Storage is because it "provides a comprehensive and fully integrated portfolio of cloud computing services to help you build, protect, and deploy big data applications". Due to the fact that we are going to store songs (Big Data). [4](https://aws.amazon.com/es/big-data/what-is-big-data/)

### Component Diagram (Web Application)

A component diagram, zooms into an individual container to show the components inside it. In this case it's for the web application (made in React).

![Image](https://github.com/Josecespedesant/SpectacularKaraoke/blob/gh-pages/diagram3.png?raw=true)

As it's shown in the previous image, keycloak is used for user authentication and the library, where the user will see all the songs and lyrics, it's made in React.

### Component Diagram (API)

This component diagram corresponds to the API's one.

![Image](https://github.com/Josecespedesant/SpectacularKaraoke/blob/gh-pages/diagram4.png?raw=true)

The API gets songs from the Cloud Storage and their metadata and passes it to the web application. It also manages premium users.

