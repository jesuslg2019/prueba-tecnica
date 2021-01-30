const axios = require('axios')
const swapi_url = "http://swapi.py4e.com/api/"

const main = async (service, number) => {
    let result = {}
    switch (service) {
        case "planets":
            result = await get_planet(service, number)
            break;
        case "films":
            result = await get_film(service, number)
            break;
        case "people":
            result = await get_people(service, number)
            break;
        case "species":
            result = await get_species(service, number)
            break;
        case "starships":
            result = await get_starships(service, number)
            break;
        case "vehicles":
            result = await get_vehicles(service, number)
            break;
        default:
            result = await get_planet("planets", "1")
            break;
    }
    return result
}

// planets string -- The URL root for Planet resources
const get_planet = async (service, number) => {
    const service_url = `${swapi_url}${service}/${number}`
    try {
        const { data } = await axios.get(service_url)
        const {
            name: nombre,
            rotation_period: periodo_rotacion,
            orbital_period: periodo_orbital,
            diameter: diametro,
            climate: clima,
            gravity: gravedad,
            terrain: terreno,
            surface_water: superficie_agua,
            population: poblacion,
            residents: residentes,
            films: pelicula,
            created: creado,
            edited: editado,
            url
        } = data

        return {
            nombre,
            periodo_rotacion,
            periodo_orbital,
            diametro,
            clima,
            gravedad,
            terreno,
            superficie_agua,
            poblacion,
            residentes,
            pelicula,
            creado,
            editado,
            url
        }
    } catch (error) {
        console.error(error)
    }
}

// films string -- The URL root for Film resources
const get_film = async (service, number) => {
    const service_url = `${swapi_url}${service}/${number}`
    try {
        const { data } = await axios.get(service_url)
        const {
            characters: caracteres,
            created: creado,
            director: director,
            edited: editado,
            episode_id: espisodio_id,
            opening_crawl: rastreo_apertura,
            planets: planetas,
            producer: productor,
            release_date: fecha_lanzamiento,
            species: especies,
            starships: naves_estelares,
            title: titulo,
            url,
            vehicles: vehiculos,
        } = data

        return {
            caracteres,
            creado,
            director,
            editado,
            espisodio_id,
            rastreo_apertura,
            planetas,
            productor,
            fecha_lanzamiento,
            especies,
            naves_estelares,
            titulo,
            url,
            vehiculos
        }
    } catch (error) {
        console.error(error)
    }


    /*
     {
    "characters": [
        "https://swapi.py4e.com/api/people/1/",
        ...
    ],
    "created": "2014-12-10T14:23:31.880000Z",
    "director": "George Lucas",
    "edited": "2014-12-12T11:24:39.858000Z",
    "episode_id": 4,
    "opening_crawl": "It is a period of civil war.\n\nRebel spaceships, striking\n\nfrom a hidden base, have won\n\ntheir first victory against\n\nthe evil Galactic Empire.\n\n\n\nDuring the battle, Rebel\n\nspies managed to steal secret\r\nplans to the Empire's\n\nultimate weapon, the DEATH\n\nSTAR, an armored space\n\nstation with enough power\n\nto destroy an entire planet.\n\n\n\nPursued by the Empire's\n\nsinister agents, Princess\n\nLeia races home aboard her\n\nstarship, custodian of the\n\nstolen plans that can save her\n\npeople and restore\n\nfreedom to the galaxy....",
    "planets": [
        "https://swapi.py4e.com/api/planets/1/",
        ...
    ],
    "producer": "Gary Kurtz, Rick McCallum",
    "release_date": "1977-05-25",
    "species": [
        "https://swapi.py4e.com/api/species/1/",
        ...
    ],
    "starships": [
        "https://swapi.py4e.com/api/starships/2/",
        ...
    ],
    "title": "A New Hope",
    "url": "https://swapi.py4e.com/api/films/1/",
    "vehicles": [
        "https://swapi.py4e.com/api/vehicles/4/",
        ...
    ]
}
     */

}

// people string -- The URL root for People resources
const get_people = async (service, number) => {
    const service_url = `${swapi_url}${service}/${number}`
    try {
        const { data } = await axios.get(service_url)
        const {
            birth_year: nacimiento,
            eye_color: color_ojos,
            films: peliculas,
            gender: genero,
            hair_color: color_pelo,
            height: altura,
            homeworld: mundo_natal,
            mass: masa,
            name: nombre,
            skin_color: color_piel,
            created: creado,
            edited: editado,
            species: especies,
            starships: naves_estelares,
            url,
            vehicles: vehiculos,
        } = data
        return {
            nacimiento,
            color_ojos,
            peliculas,
            genero,
            color_pelo,
            altura,
            mundo_natal,
            masa,
            nombre,
            color_piel,
            creado,
            editado,
            especies,
            naves_estelares,
            url,
            vehiculos
        }
    } catch (error) {
        console.error(error)
    }
    // "birth_year": "19 BBY",
    // "eye_color": "Blue",
    // "films": [
    //     "https://swapi.py4e.com/api/films/1/",
    //     ...
    // ],
    // "gender": "Male",
    // "hair_color": "Blond",
    // "height": "172",
    // "homeworld": "https://swapi.py4e.com/api/planets/1/",
    // "mass": "77",
    // "name": "Luke Skywalker",
    // "skin_color": "Fair",
    // "created": "2014-12-09T13:50:51.644000Z",
    // "edited": "2014-12-10T13:52:43.172000Z",
    // "species": [
    //     "https://swapi.py4e.com/api/species/1/"
    // ],
    // "starships": [
    //     "https://swapi.py4e.com/api/starships/12/",
    //     ...
    // ],
    // "url": "https://swapi.py4e.com/api/people/1/",
    // "vehicles": [
    //     "https://swapi.py4e.com/api/vehicles/14/"
    //     ...
    // ]
}

// species string -- The URL root for Species resources
const get_species = async (service, number) => {
    const service_url = `${swapi_url}${service}/${number}`
    try {
        const { data } = await axios.get(service_url)
        const {
            average_height: altura_media,
            average_lifespan: vida_promedio,
            classification: clasificacion,
            created: creado,
            designation: designacion,
            edited: editado,
            eye_colors: color_ojos,
            hair_colors: color_cabello,
            homeworld: mundo_natal,
            language: idioma,
            name: nombre,
            people: personas,
            films: peliculas,
            skin_colors: color_piel,
            url
        } = data

        return {
            altura_media,
            vida_promedio,
            clasificacion,
            creado,
            designacion,
            editado,
            color_ojos,
            color_cabello,
            mundo_natal,
            idioma,
            nombre,
            personas,
            peliculas,
            color_piel,
            url
        }
    } catch (error) {

    }
    /*
    {
    "average_height": "2.1",
    "average_lifespan": "400",
    "classification": "Mammal",
    "created": "2014-12-10T16:44:31.486000Z",
    "designation": "Sentient",
    "edited": "2014-12-10T16:44:31.486000Z",
    "eye_colors": "blue, green, yellow, brown, golden, red",
    "hair_colors": "black, brown",
    "homeworld": "https://swapi.py4e.com/api/planets/14/",
    "language": "Shyriiwook",
    "name": "Wookie",
    "people": [
        "https://swapi.py4e.com/api/people/13/"
    ],
    "films": [
        "https://swapi.py4e.com/api/films/1/",
        "https://swapi.py4e.com/api/films/2/"
    ],
    "skin_colors": "gray",
    "url": "https://swapi.py4e.com/api/species/3/"
}
    */

}

// starships string -- The URL root for Starships resources
const get_starships = async (service, number) => {
    const service_url = `${swapi_url}${service}/${number}`
    try {
        const { data } = await axios.get(service_url)
        const {
            MGLT,
            cargo_capacity: capacidad_carga,
            consumables: consumibles,
            cost_in_credits: costo_creditos,
            created: creado,
            crew: tripulacion,
            edited: editado,
            hyperdrive_rating: calificacion_hiperimpulsor,
            length: longitud,
            manufacturer: fabricante,
            max_atmosphering_speed: velocidad_maxima_atmosfera,
            model: modelo,
            name: nombre,
            passengers: pasajeros,
            films: peliculas,
            pilots: pilotos,
            starship_class: clase_nave_estelar,
            url
        } = data

        return {
            MGLT,
            capacidad_carga,
            consumibles,
            costo_creditos,
            creado,
            tripulacion,
            editado,
            calificacion_hiperimpulsor,
            longitud,
            fabricante,
            velocidad_maxima_atmosfera,
            modelo,
            nombre,
            pasajeros,
            peliculas,
            pilotos,
            clase_nave_estelar,
            url,
        }
    } catch (error) {
        console.log(error)
    }
    /*
    {
    "MGLT": "10 MGLT",
    "cargo_capacity": "1000000000000",
    "consumables": "3 years",
    "cost_in_credits": "1000000000000",
    "created": "2014-12-10T16:36:50.509000Z",
    "crew": "342953",
    "edited": "2014-12-10T16:36:50.509000Z",
    "hyperdrive_rating": "4.0",
    "length": "120000",
    "manufacturer": "Imperial Department of Military Research, Sienar Fleet Systems",
    "max_atmosphering_speed": "n/a",
    "model": "DS-1 Orbital Battle Station",
    "name": "Death Star",
    "passengers": "843342",
    "films": [
        "https://swapi.py4e.com/api/films/1/"
    ],
    "pilots": [],
    "starship_class": "Deep Space Mobile Battlestation",
    "url": "https://swapi.py4e.com/api/starships/9/"
}
    */
}

// vehicles string -- The URL root for Starships resources
const get_vehicles = async (service, number) => {
    const service_url = `${swapi_url}${service}/${number}`
    try {
        const { data } = await axios.get(service_url)
        const {
            cargo_capacity: capacidad_carga,
            consumables: consumibles,
            cost_in_credits: costo_creditos,
            created: creado,
            crew: tripulacion,
            edited: editado,
            length: longitud,
            manufacturer: fabricante,
            max_atmosphering_speed: velocidad_maxima_atmosfera,
            model: modelo,
            name: nombre,
            passengers: pasajeros,
            pilots: pilotos,
            films: peliculas,
            url,
            vehicle_class: clase_vehiculo,
        } = data

        return {
            capacidad_carga,
            consumibles,
            costo_creditos,
            creado,
            tripulacion,
            editado,
            longitud,
            fabricante,
            velocidad_maxima_atmosfera,
            modelo,
            nombre,
            pasajeros,
            pilotos,
            peliculas,
            url,
            clase_vehiculo
        }
    } catch (error) {
        console.log(error)
    }
    /*
    {
    "cargo_capacity": "50000",
    "consumables": "2 months",
    "cost_in_credits": "150000",
    "created": "2014-12-10T15:36:25.724000Z",
    "crew": "46",
    "edited": "2014-12-10T15:36:25.724000Z",
    "length": "36.8",
    "manufacturer": "Corellia Mining Corporation",
    "max_atmosphering_speed": "30",
    "model": "Digger Crawler",
    "name": "Sand Crawler",
    "passengers": "30",
    "pilots": [],
    "films": [
        "https://swapi.py4e.com/api/films/1/"
    ],
    "url": "https://swapi.py4e.com/api/vehicles/4/",
    "vehicle_class": "wheeled"
}
    */
}


module.exports = {
    main
}