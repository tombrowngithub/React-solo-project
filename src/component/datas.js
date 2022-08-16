import califonia from '../images/califonia.jpg'
import japan from '../images/japan.jpg'
import sydney from '../images/sydney.jpg'
import toronto from '../images/toronto.jpg'

export default [
    {
        id: 1,
        title: "Mount Fuji",
        location: "Japan",
        googleMapUrl: "https://goo.gl/maps/ocfk8Z32fYcPx6ccA",
        startDate: "12 Jan 2022",
        endDate: "24 Jan 2022",
        description: "Mount Fuji is the tallest mountain in Japan, standing at 3,777 metre." +
            " Mount Fuji is the single most popular tourist site in Japan" +
            "for both Japanese and foreign tourist.",
        imageUrl: japan
    },
    {
        id: 2,
        title: "Sydney Opera House",
        location: "Australia",
        googleMapUrl: "https://goo.gl/maps/86xWrbntwKt56e6NA",
        startDate: "11 Aug 2022",
        endDate: "13 Jan 2023",
        description: "The Sydney Opera House is a multi-venue performing arts centre in Sydney. " +
            "Located on the banks of Sydney Harbour, it is widely regarded as one of the world's most " +
            "famous and distinctive buildings and a masterpiece of 20th century architecture.",
        imageUrl: sydney
    },
    {
        id: 3,
        title: "California",
        location: "USA",
        googleMapUrl: "https://goo.gl/maps/AeEdHiMsiSjadLgbA",
        startDate: "12 Jan 2022",
        endDate: "24 Jan 2022",
        description: "The U.S. is a country of 50 states covering a vast swath of North America, " +
            "with Alaska in the northwest and Hawaii extending the nation’s presence into the Pacific Ocean. " +
            "Major Atlantic Coast cities are New York, a global finance and culture center, and capital Washington, " +
            "DC. Midwestern metropolis Chicago is known for influential architecture and on the west coast, Los Angeles' " +
            "Hollywood is famed for filmmaking.",
        imageUrl: califonia
    },
    {
        id: 4,
        title: "Toronto",
        location: "Canada",
        googleMapUrl: "https://goo.gl/maps/WsXJS39hfRhxo8E39",
        startDate: "12 Jan 2022",
        endDate: "24 Jan 2022",
        description: "Toronto, the capital of the province of Ontario, is a major Canadian city along " +
            "Lake Ontario’s northwestern shore. It's a dynamic metropolis with a core of soaring skyscrapers, " +
            "all dwarfed by the iconic, free-standing CN Tower. Toronto also has many green spaces, " +
            "from the orderly oval of Queen’s Park to 400-acre High Park and its trails, sports facilities and zoo.",
        imageUrl: toronto
    }
]
