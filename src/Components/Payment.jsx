import React, {useContext, useState} from 'react'
import {Link} from 'react-router-dom'
import { CartContext } from '../contexts/CartContext'
import { BsArrowRight, BsCashCoin} from 'react-icons/bs'
import { MdPayment, MdVerifiedUser} from 'react-icons/md'
import { VscVerifiedFilled, VscVerified} from "react-icons/vsc";
import { location } from '../Components/PickupLocationData'
import { PiMapPinLineLight } from "react-icons/pi";
import { LuStore } from "react-icons/lu";
import { TbPhoneCalling } from "react-icons/tb";
import { FaCcMastercard } from "react-icons/fa";

export const Payment = () => {
    const [currentValue, setCurrentValue] = useState('on')
    const {total} = useContext(CartContext)
    const [addAddress, setAddAddress] = useState(false)
    const [pickup, setPickup] = useState(false)

    const handleRadioChange = (value) => {
        setCurrentValue(value)
    };
    

    const PickupBtn = ( ) => {
        const pickupBtn = document.getElementById('pickupBtn')
        setPickup(true)
        if(pickup){
            pickupBtn.setAttribute('disabled', '')
            pickupBtn.style.opacity = '0.1'
            pickupBtn.style.filter  = 'alpha(opacity=10)';
        }

    }
    
//   // Get rid of small loading animation
//   [...document.querySelectorAll(".input-location-dependant")].forEach(element =>
//     element.classList.toggle("d-none")
//   );

//   // Function to set multiple attributes at once
//   const setAttributes = (el, attrs) => {
//     for (var key in attrs) {
//       el.setAttribute(key, attrs[key]);
//     }
//   };

//   const toggleLGA = target => {
//     let state = target.value,                                                         // Get value of state
//       selectLGAOption = ["Select LGA..."],                                            // Define this once so as not to repeat it multiple times
//       lgaList = {
//         Abia: [
//           "Aba North",
//           "Aba South",
//           "Arochukwu",
//           "Bende",
//           "Ikwuano",
//           "Isiala Ngwa North",
//           "Isiala Ngwa South",
//           "Isuikwuato",
//           "Obi Ngwa",
//           "Ohafia",
//           "Osisioma",
//           "Ugwunagbo",
//           "Ukwa East",
//           "Ukwa West",
//           "Umuahia North",
//           "muahia South",
//           "Umu Nneochi"
//         ],
//         Adamawa: [
//           "Demsa",
//           "Fufure",
//           "Ganye",
//           "Gayuk",
//           "Gombi",
//           "Grie",
//           "Hong",
//           "Jada",
//           "Larmurde",
//           "Madagali",
//           "Maiha",
//           "Mayo Belwa",
//           "Michika",
//           "Mubi North",
//           "Mubi South",
//           "Numan",
//           "Shelleng",
//           "Song",
//           "Toungo",
//           "Yola North",
//           "Yola South"
//         ],
//         AkwaIbom: [
//           "Abak",
//           "Eastern Obolo",
//           "Eket",
//           "Esit Eket",
//           "Essien Udim",
//           "Etim Ekpo",
//           "Etinan",
//           "Ibeno",
//           "Ibesikpo Asutan",
//           "Ibiono-Ibom",
//           "Ika",
//           "Ikono",
//           "Ikot Abasi",
//           "Ikot Ekpene",
//           "Ini",
//           "Itu",
//           "Mbo",
//           "Mkpat-Enin",
//           "Nsit-Atai",
//           "Nsit-Ibom",
//           "Nsit-Ubium",
//           "Obot Akara",
//           "Okobo",
//           "Onna",
//           "Oron",
//           "Oruk Anam",
//           "Udung-Uko",
//           "Ukanafun",
//           "Uruan",
//           "Urue-Offong Oruko",
//           "Uyo"
//         ],
//         Anambra: [
//           "Aguata",
//           "Anambra East",
//           "Anambra West",
//           "Anaocha",
//           "Awka North",
//           "Awka South",
//           "Ayamelum",
//           "Dunukofia",
//           "Ekwusigo",
//           "Idemili North",
//           "Idemili South",
//           "Ihiala",
//           "Njikoka",
//           "Nnewi North",
//           "Nnewi South",
//           "Ogbaru",
//           "Onitsha North",
//           "Onitsha South",
//           "Orumba North",
//           "Orumba South",
//           "Oyi"
//         ],

//         Anambra: [
//           "Aguata",
//           "Anambra East",
//           "Anambra West",
//           "Anaocha",
//           "Awka North",
//           "Awka South",
//           "Ayamelum",
//           "Dunukofia",
//           "Ekwusigo",
//           "Idemili North",
//           "Idemili South",
//           "Ihiala",
//           "Njikoka",
//           "Nnewi North",
//           "Nnewi South",
//           "Ogbaru",
//           "Onitsha North",
//           "Onitsha South",
//           "Orumba North",
//           "Orumba South",
//           "Oyi"
//         ],
//         Bauchi: [
//           "Alkaleri",
//           "Bauchi",
//           "Bogoro",
//           "Damban",
//           "Darazo",
//           "Dass",
//           "Gamawa",
//           "Ganjuwa",
//           "Giade",
//           "Itas-Gadau",
//           "Jama are",
//           "Katagum",
//           "Kirfi",
//           "Misau",
//           "Ningi",
//           "Shira",
//           "Tafawa Balewa",
//           " Toro",
//           " Warji",
//           " Zaki"
//         ],

//         Bayelsa: [
//           "Brass",
//           "Ekeremor",
//           "Kolokuma Opokuma",
//           "Nembe",
//           "Ogbia",
//           "Sagbama",
//           "Southern Ijaw",
//           "Yenagoa"
//         ],
//         Benue: [
//           "Agatu",
//           "Apa",
//           "Ado",
//           "Buruku",
//           "Gboko",
//           "Guma",
//           "Gwer East",
//           "Gwer West",
//           "Katsina-Ala",
//           "Konshisha",
//           "Kwande",
//           "Logo",
//           "Makurdi",
//           "Obi",
//           "Ogbadibo",
//           "Ohimini",
//           "Oju",
//           "Okpokwu",
//           "Oturkpo",
//           "Tarka",
//           "Ukum",
//           "Ushongo",
//           "Vandeikya"
//         ],
//         Borno: [
//           "Abadam",
//           "Askira-Uba",
//           "Bama",
//           "Bayo",
//           "Biu",
//           "Chibok",
//           "Damboa",
//           "Dikwa",
//           "Gubio",
//           "Guzamala",
//           "Gwoza",
//           "Hawul",
//           "Jere",
//           "Kaga",
//           "Kala-Balge",
//           "Konduga",
//           "Kukawa",
//           "Kwaya Kusar",
//           "Mafa",
//           "Magumeri",
//           "Maiduguri",
//           "Marte",
//           "Mobbar",
//           "Monguno",
//           "Ngala",
//           "Nganzai",
//           "Shani"
//         ],
//         "Cross River": [
//           "Abi",
//           "Akamkpa",
//           "Akpabuyo",
//           "Bakassi",
//           "Bekwarra",
//           "Biase",
//           "Boki",
//           "Calabar Municipal",
//           "Calabar South",
//           "Etung",
//           "Ikom",
//           "Obanliku",
//           "Obubra",
//           "Obudu",
//           "Odukpani",
//           "Ogoja",
//           "Yakuur",
//           "Yala"
//         ],

//         Delta: [
//           "Aniocha North",
//           "Aniocha South",
//           "Bomadi",
//           "Burutu",
//           "Ethiope East",
//           "Ethiope West",
//           "Ika North East",
//           "Ika South",
//           "Isoko North",
//           "Isoko South",
//           "Ndokwa East",
//           "Ndokwa West",
//           "Okpe",
//           "Oshimili North",
//           "Oshimili South",
//           "Patani",
//           "Sapele",
//           "Udu",
//           "Ughelli North",
//           "Ughelli South",
//           "Ukwuani",
//           "Uvwie",
//           "Warri North",
//           "Warri South",
//           "Warri South West"
//         ],

//         Ebonyi: [
//           "Abakaliki",
//           "Afikpo North",
//           "Afikpo South",
//           "Ebonyi",
//           "Ezza North",
//           "Ezza South",
//           "Ikwo",
//           "Ishielu",
//           "Ivo",
//           "Izzi",
//           "Ohaozara",
//           "Ohaukwu",
//           "Onicha"
//         ],
//         Edo: [
//           "Akoko-Edo",
//           "Egor",
//           "Esan Central",
//           "Esan North-East",
//           "Esan South-East",
//           "Esan West",
//           "Etsako Central",
//           "Etsako East",
//           "Etsako West",
//           "Igueben",
//           "Ikpoba Okha",
//           "Orhionmwon",
//           "Oredo",
//           "Ovia North-East",
//           "Ovia South-West",
//           "Owan East",
//           "Owan West",
//           "Uhunmwonde"
//         ],

//         Ekiti: [
//           "Ado Ekiti",
//           "Efon",
//           "Ekiti East",
//           "Ekiti South-West",
//           "Ekiti West",
//           "Emure",
//           "Gbonyin",
//           "Ido Osi",
//           "Ijero",
//           "Ikere",
//           "Ikole",
//           "Ilejemeje",
//           "Irepodun-Ifelodun",
//           "Ise-Orun",
//           "Moba",
//           "Oye"
//         ],
//         Rivers: [
//           "Port Harcourt",
//           "Obio-Akpor",
//           "Okrika",
//           "Ogu–Bolo",
//           "Eleme",
//           "Tai",
//           "Gokana",
//           "Khana",
//           "Oyigbo",
//           "Opobo–Nkoro",
//           "Andoni",
//           "Bonny",
//           "Degema",
//           "Asari-Toru",
//           "Akuku-Toru",
//           "Abua–Odual",
//           "Ahoada West",
//           "Ahoada East",
//           "Ogba–Egbema–Ndoni",
//           "Emohua",
//           "Ikwerre",
//           "Etche",
//           "Omuma"
//         ],
//         Enugu: [
//           "Aninri",
//           "Awgu",
//           "Enugu East",
//           "Enugu North",
//           "Enugu South",
//           "Ezeagu",
//           "Igbo Etiti",
//           "Igbo Eze North",
//           "Igbo Eze South",
//           "Isi Uzo",
//           "Nkanu East",
//           "Nkanu West",
//           "Nsukka",
//           "Oji River",
//           "Udenu",
//           "Udi",
//           "Uzo Uwani"
//         ],
//         FCT: [
//           "Abaji",
//           "Bwari",
//           "Gwagwalada",
//           "Kuje",
//           "Kwali",
//           "Municipal Area Council"
//         ],
//         Gombe: [
//           "Akko",
//           "Balanga",
//           "Billiri",
//           "Dukku",
//           "Funakaye",
//           "Gombe",
//           "Kaltungo",
//           "Kwami",
//           "Nafada",
//           "Shongom",
//           "Yamaltu-Deba"
//         ],
//         Imo: [
//           "Aboh Mbaise",
//           "Ahiazu Mbaise",
//           "Ehime Mbano",
//           "Ezinihitte",
//           "Ideato North",
//           "Ideato South",
//           "Ihitte-Uboma",
//           "Ikeduru",
//           "Isiala Mbano",
//           "Isu",
//           "Mbaitoli",
//           "Ngor Okpala",
//           "Njaba",
//           "Nkwerre",
//           "Nwangele",
//           "Obowo",
//           "Oguta",
//           "Ohaji-Egbema",
//           "Okigwe",
//           "Orlu",
//           "Orsu",
//           "Oru East",
//           "Oru West",
//           "Owerri Municipal",
//           "Owerri North",
//           "Owerri West",
//           "Unuimo"
//         ],
//         Jigawa: [
//           "Auyo",
//           "Babura",
//           "Biriniwa",
//           "Birnin Kudu",
//           "Buji",
//           "Dutse",
//           "Gagarawa",
//           "Garki",
//           "Gumel",
//           "Guri",
//           "Gwaram",
//           "Gwiwa",
//           "Hadejia",
//           "Jahun",
//           "Kafin Hausa",
//           "Kazaure",
//           "Kiri Kasama",
//           "Kiyawa",
//           "Kaugama",
//           "Maigatari",
//           "Malam Madori",
//           "Miga",
//           "Ringim",
//           "Roni",
//           "Sule Tankarkar",
//           "Taura",
//           "Yankwashi"
//         ],
//         Kaduna: [
//           "Birnin Gwari",
//           "Chikun",
//           "Giwa",
//           "Igabi",
//           "Ikara",
//           "Jaba",
//           "Jema a",
//           "Kachia",
//           "Kaduna North",
//           "Kaduna South",
//           "Kagarko",
//           "Kajuru",
//           "Kaura",
//           "Kauru",
//           "Kubau",
//           "Kudan",
//           "Lere",
//           "Makarfi",
//           "Sabon Gari",
//           "Sanga",
//           "Soba",
//           "Zangon Kataf",
//           "Zaria"
//         ],
//         Kano: [
//           "Ajingi",
//           "Albasu",
//           "Bagwai",
//           "Bebeji",
//           "Bichi",
//           "Bunkure",
//           "Dala",
//           "Dambatta",
//           "Dawakin Kudu",
//           "Dawakin Tofa",
//           "Doguwa",
//           "Fagge",
//           "Gabasawa",
//           "Garko",
//           "Garun Mallam",
//           "Gaya",
//           "Gezawa",
//           "Gwale",
//           "Gwarzo",
//           "Kabo",
//           "Kano Municipal",
//           "Karaye",
//           "Kibiya",
//           "Kiru",
//           "Kumbotso",
//           "Kunchi",
//           "Kura",
//           "Madobi",
//           "Makoda",
//           "Minjibir",
//           "Nasarawa",
//           "Rano",
//           "Rimin Gado",
//           "Rogo",
//           "Shanono",
//           "Sumaila",
//           "Takai",
//           "Tarauni",
//           "Tofa",
//           "Tsanyawa",
//           "Tudun Wada",
//           "Ungogo",
//           "Warawa",
//           "Wudil"
//         ],
//         Katsina: [
//           "Bakori",
//           "Batagarawa",
//           "Batsari",
//           "Baure",
//           "Bindawa",
//           "Charanchi",
//           "Dandume",
//           "Danja",
//           "Dan Musa",
//           "Daura",
//           "Dutsi",
//           "Dutsin Ma",
//           "Faskari",
//           "Funtua",
//           "Ingawa",
//           "Jibia",
//           "Kafur",
//           "Kaita",
//           "Kankara",
//           "Kankia",
//           "Katsina",
//           "Kurfi",
//           "Kusada",
//           "Mai Adua",
//           "Malumfashi",
//           "Mani",
//           "Mashi",
//           "Matazu",
//           "Musawa",
//           "Rimi",
//           "Sabuwa",
//           "Safana",
//           "Sandamu",
//           "Zango"
//         ],
//         Kebbi: [
//           "Aleiro",
//           "Arewa Dandi",
//           "Argungu",
//           "Augie",
//           "Bagudo",
//           "Birnin Kebbi",
//           "Bunza",
//           "Dandi",
//           "Fakai",
//           "Gwandu",
//           "Jega",
//           "Kalgo",
//           "Koko Besse",
//           "Maiyama",
//           "Ngaski",
//           "Sakaba",
//           "Shanga",
//           "Suru",
//           "Wasagu Danko",
//           "Yauri",
//           "Zuru"
//         ],
//         Kogi: [
//           "Adavi",
//           "Ajaokuta",
//           "Ankpa",
//           "Bassa",
//           "Dekina",
//           "Ibaji",
//           "Idah",
//           "Igalamela Odolu",
//           "Ijumu",
//           "Kabba Bunu",
//           "Kogi",
//           "Lokoja",
//           "Mopa Muro",
//           "Ofu",
//           "Ogori Magongo",
//           "Okehi",
//           "Okene",
//           "Olamaboro",
//           "Omala",
//           "Yagba East",
//           "Yagba West"
//         ],
//         Kwara: [
//           "Asa",
//           "Baruten",
//           "Edu",
//           "Ekiti",
//           "Ifelodun",
//           "Ilorin East",
//           "Ilorin South",
//           "Ilorin West",
//           "Irepodun",
//           "Isin",
//           "Kaiama",
//           "Moro",
//           "Offa",
//           "Oke Ero",
//           "Oyun",
//           "Pategi"
//         ],
//         Lagos: [
//           "Agege",
//           "Ajeromi-Ifelodun",
//           "Alimosho",
//           "Amuwo-Odofin",
//           "Apapa",
//           "Badagry",
//           "Epe",
//           "Eti Osa",
//           "Ibeju-Lekki",
//           "Ifako-Ijaiye",
//           "Ikeja",
//           "Ikorodu",
//           "Kosofe",
//           "Lagos Island",
//           "Lagos Mainland",
//           "Mushin",
//           "Ojo",
//           "Oshodi-Isolo",
//           "Shomolu",
//           "Surulere"
//         ],
//         Nasarawa: [
//           "Akwanga",
//           "Awe",
//           "Doma",
//           "Karu",
//           "Keana",
//           "Keffi",
//           "Kokona",
//           "Lafia",
//           "Nasarawa",
//           "Nasarawa Egon",
//           "Obi",
//           "Toto",
//           "Wamba"
//         ],
//         Niger: [
//           "Agaie",
//           "Agwara",
//           "Bida",
//           "Borgu",
//           "Bosso",
//           "Chanchaga",
//           "Edati",
//           "Gbako",
//           "Gurara",
//           "Katcha",
//           "Kontagora",
//           "Lapai",
//           "Lavun",
//           "Magama",
//           "Mariga",
//           "Mashegu",
//           "Mokwa",
//           "Moya",
//           "Paikoro",
//           "Rafi",
//           "Rijau",
//           "Shiroro",
//           "Suleja",
//           "Tafa",
//           "Wushishi"
//         ],
//         Ogun: [
//           "Abeokuta North",
//           "Abeokuta South",
//           "Ado-Odo Ota",
//           "Egbado North",
//           "Egbado South",
//           "Ewekoro",
//           "Ifo",
//           "Ijebu East",
//           "Ijebu North",
//           "Ijebu North East",
//           "Ijebu Ode",
//           "Ikenne",
//           "Imeko Afon",
//           "Ipokia",
//           "Obafemi Owode",
//           "Odeda",
//           "Odogbolu",
//           "Ogun Waterside",
//           "Remo North",
//           "Shagamu"
//         ],
//         Ondo: [
//           "Akoko North-East",
//           "Akoko North-West",
//           "Akoko South-West",
//           "Akoko South-East",
//           "Akure North",
//           "Akure South",
//           "Ese Odo",
//           "Idanre",
//           "Ifedore",
//           "Ilaje",
//           "Ile Oluji-Okeigbo",
//           "Irele",
//           "Odigbo",
//           "Okitipupa",
//           "Ondo East",
//           "Ondo West",
//           "Ose",
//           "Owo"
//         ],
//         Osun: [
//           "Atakunmosa East",
//           "Atakunmosa West",
//           "Aiyedaade",
//           "Aiyedire",
//           "Boluwaduro",
//           "Boripe",
//           "Ede North",
//           "Ede South",
//           "Ife Central",
//           "Ife East",
//           "Ife North",
//           "Ife South",
//           "Egbedore",
//           "Ejigbo",
//           "Ifedayo",
//           "Ifelodun",
//           "Ila",
//           "Ilesa East",
//           "Ilesa West",
//           "Irepodun",
//           "Irewole",
//           "Isokan",
//           "Iwo",
//           "Obokun",
//           "Odo Otin",
//           "Ola Oluwa",
//           "Olorunda",
//           "Oriade",
//           "Orolu",
//           "Osogbo"
//         ],
//         Oyo: [
//           "Afijio",
//           "Akinyele",
//           "Atiba",
//           "Atisbo",
//           "Egbeda",
//           "Ibadan North",
//           "Ibadan North-East",
//           "Ibadan North-West",
//           "Ibadan South-East",
//           "Ibadan South-West",
//           "Ibarapa Central",
//           "Ibarapa East",
//           "Ibarapa North",
//           "Ido",
//           "Irepo",
//           "Iseyin",
//           "Itesiwaju",
//           "Iwajowa",
//           "Kajola",
//           "Lagelu",
//           "Ogbomosho North",
//           "Ogbomosho South",
//           "Ogo Oluwa",
//           "Olorunsogo",
//           "Oluyole",
//           "Ona Ara",
//           "Orelope",
//           "Ori Ire",
//           "Oyo",
//           "Oyo East",
//           "Saki East",
//           "Saki West",
//           "Surulere"
//         ],
//         Plateau: [
//           "Bokkos",
//           "Barkin Ladi",
//           "Bassa",
//           "Jos East",
//           "Jos North",
//           "Jos South",
//           "Kanam",
//           "Kanke",
//           "Langtang South",
//           "Langtang North",
//           "Mangu",
//           "Mikang",
//           "Pankshin",
//           "Qua an Pan",
//           "Riyom",
//           "Shendam",
//           "Wase"
//         ],
//         Sokoto: [
//           "Binji",
//           "Bodinga",
//           "Dange Shuni",
//           "Gada",
//           "Goronyo",
//           "Gudu",
//           "Gwadabawa",
//           "Illela",
//           "Isa",
//           "Kebbe",
//           "Kware",
//           "Rabah",
//           "Sabon Birni",
//           "Shagari",
//           "Silame",
//           "Sokoto North",
//           "Sokoto South",
//           "Tambuwal",
//           "Tangaza",
//           "Tureta",
//           "Wamako",
//           "Wurno",
//           "Yabo"
//         ],
//         Taraba: [
//           "Ardo Kola",
//           "Bali",
//           "Donga",
//           "Gashaka",
//           "Gassol",
//           "Ibi",
//           "Jalingo",
//           "Karim Lamido",
//           "Kumi",
//           "Lau",
//           "Sardauna",
//           "Takum",
//           "Ussa",
//           "Wukari",
//           "Yorro",
//           "Zing"
//         ],
//         Yobe: [
//           "Bade",
//           "Bursari",
//           "Damaturu",
//           "Fika",
//           "Fune",
//           "Geidam",
//           "Gujba",
//           "Gulani",
//           "Jakusko",
//           "Karasuwa",
//           "Machina",
//           "Nangere",
//           "Nguru",
//           "Potiskum",
//           "Tarmuwa",
//           "Yunusari",
//           "Yusufari"
//         ],
//         Zamfara: [
//           "Anka",
//           "Bakura",
//           "Birnin Magaji Kiyaw",
//           "Bukkuyum",
//           "Bungudu",
//           "Gummi",
//           "Gusau",
//           "Kaura Namoda",
//           "Maradun",
//           "Maru",
//           "Shinkafi",
//           "Talata Mafara",
//           "Chafe",
//           "Zurmi"
//         ]
//       }[state],                                                                       // Ternary switch operator to show list of LGAs based on chosen state
//       lgas = [...selectLGAOption, ...Object.values(lgaList)],                         // Join select LGA option with list of LGAs
//       form = target.parentElement.parentElement.parentElement.parentElement,          // Get parent up to the forth generation just in case LGA select element is deeply nested
//       lgaSelect = form.querySelector(".select-lga"),                                  // Get the LGA select element
//       length = lgaSelect.options.length;                                              // Get number of options already existing in LGA select element

//     // Clear LGS select element
//     for (i = length - 1; i >= 0; i--) {
//       lgaSelect.options[i] = null;
//     }

//     // Populate LGA select element
//     lgas.forEach(lga => {
//       let opt = document.createElement("option");                                     // Create option element
//       opt.appendChild(document.createTextNode(lga));                                  // Append LGA to it
//       opt.value = lga;                                                                // Set the value to LGA

//       // Make option asking you to select unclickable
//       lga.includes("elect")
//         ? setAttributes(opt, { disabled: "disabled", selected: "selected" })
//         : "";

//       // Add this option element to LGA select element
//       lgaSelect.appendChild(opt);
//     });

//   };

  return (
    <div className='md:flex justify-between lg:mx-10 mx-5 my-5 gap-4'>
        <div className=' w-full'>
            <div className='border border-color'>
                <h1 className='sticky top-20 z-10 bg-white transition-all font-bold p-3 border-b border-color text-green-focus uppercase py-5 flex items-center'>
                    <VscVerifiedFilled className='text-green' />
                    Choose delivery option
                </h1>
                <div className='p-5 transition-all'>
                    <div className=''>
                        <div className='py-2'>
                            <input 
                                type="radio" 
                                name="radio-one" 
                                value= "on" 
                                onChange={(e)=> setCurrentValue(e.target.value)}
                                defaultChecked = { currentValue === 'on'}
                            />
                            <label htmlFor="radio-one" className='font-bold px-1'>Deliver to me</label>
                            {
                                currentValue === 'on' && (
                                    <div>
                                        <p className='text-sm font-light py-2'>Click on Add Address to specify a delivery address.</p>
                                        <p onClick={()=> setAddAddress(!addAddress)} className='flex items-center justify-center bg-gray/10 py-5'>
                                            <button  className='drop-shadow-xl p-2 rounded bg-green-focus text-white hover:opacity-80 transition-all'>
                                                {
                                                    addAddress ? <span>Enter your Location deatils below</span> : <span>Add Delivery Address</span>
                                                }
                                            </button>
                                        </p>
                                        {
                                            addAddress && (
                                                <div className='my-5 drop-shadow bg-'>
                                                    <form action="" className=' py-5 sm:px-5 md:px-0'>
                                                        <div className='md:flex  w-full gap-4 my-2'>
                                                            <input 
                                                                type="text" 
                                                                name="" 
                                                                id="" 
                                                                placeholder='FirstName'
                                                                className='w-full p-3 my-1 outline-none' 
                                                                />
                                                            <input 
                                                                type="text" 
                                                                name="" 
                                                                id="" 
                                                                placeholder='LastName'
                                                                className='w-full p-3 my-1 outline-none' 
                                                                />
                                                        </div>
                                                        <div className='md:flex  w-full gap-4 my-2'>
                                                            <input 
                                                                type="tel" 
                                                                name="" 
                                                                id="" 
                                                                placeholder='Phone Number'
                                                                className='w-full p-3 my-1 outline-none' 
                                                                />
                                                            <input 
                                                                type="text" 
                                                                name="" 
                                                                id="" 
                                                                placeholder='Street Address'
                                                                className='w-full p-3 my-1 outline-none' 
                                                                />
                                                        </div>
                                                        <div className='md:flex  w-full gap-4 my-2'>
                                                            <input 
                                                                type="text" 
                                                                name="" 
                                                                id="" 
                                                                placeholder='Directions(Optional)'
                                                                className='w-full p-3 my-1 outline-none' 
                                                                />
                                                            <input 
                                                                type="text" 
                                                                name="" 
                                                                id="" 
                                                                placeholder='Enter your City'
                                                                className='w-full p-3 my-1 outline-none' 
                                                                />
                                                        </div>
                                                        <div className='md:flex  w-full gap-4 my-2'>
                                                            <select required onchange={()=> toggleLGA()} name="state" id='state' className='w-full p-3 my-1 outline-none'>
                                                                <option value="" selected="selected">- Select -</option>
                                                                <option value="Abia">Abia</option>
                                                                <option value="Adamawa">Adamawa</option>
                                                                <option value="AkwaIbom">AkwaIbom</option>
                                                                <option value="Anambra">Anambra</option>
                                                                <option value="Bauchi">Bauchi</option>
                                                                <option value="Bayelsa">Bayelsa</option>
                                                                <option value="Benue">Benue</option>
                                                                <option value="Borno">Borno</option>
                                                                <option value="Cross River">Cross River</option>
                                                                <option value="Delta">Delta</option>
                                                                <option value="Ebonyi">Ebonyi</option>
                                                                <option value="Edo">Edo</option>
                                                                <option value="Ekiti">Ekiti</option>
                                                                <option value="Enugu">Enugu</option>
                                                                <option value="FCT">FCT</option>
                                                                <option value="Gombe">Gombe</option>
                                                                <option value="Imo">Imo</option>
                                                                <option value="Jigawa">Jigawa</option>
                                                                <option value="Kaduna">Kaduna</option>
                                                                <option value="Kano">Kano</option>
                                                                <option value="Katsina">Katsina</option>
                                                                <option value="Kebbi">Kebbi</option>
                                                                <option value="Kogi">Kogi</option>
                                                                <option value="Kwara">Kwara</option>
                                                                <option value="Lagos">Lagos</option>
                                                                <option value="Nasarawa">Nasarawa</option>
                                                                <option value="Niger">Niger</option>
                                                                <option value="Ogun">Ogun</option>
                                                                <option value="Ondo">Ondo</option>
                                                                <option value="Osun">Osun</option>
                                                                <option value="Oyo">Oyo</option>
                                                                <option value="Plateau">Plateau</option>
                                                                <option value="Rivers">Rivers</option>
                                                                <option value="Sokoto">Sokoto</option>
                                                                <option value="Taraba">Taraba</option>
                                                                <option value="Yobe">Yobe</option>
                                                                <option value="Zamfara">Zamafara</option>
                                                            </select>
                                                            <select required name="lga" id='lga' className='w-full p-3 my-1 outline-none select-lga'>
                                                            </select>
                                                        </div>
                                                        <div className='flex justify-center py-2'>
                                                            <button className='bg-green-focus text-white p-3 w-full rounded drop-shadow hover:opacity-80 transition-all'>Save Details</button>
                                                        </div>
                                                        <div className='flex justify-center py-2'>
                                                            <button className='border border-green-focus text-green-focus p-3 w-full rounded hover:opacity-80 transition-all'>Cancel</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            )
                                        }
                                    </div>
                                )
                            }
                        </div>
                        <div className='py-2'>
                            <input 
                                type="radio" 
                                name="radio-one" 
                                value= "off" 
                                onChange={e => setCurrentValue(e.target.value)}
                                defaultChecked = { currentValue === 'off'}
                            />
                            <label htmlFor="radio-item2" className='font-bold px-1'>Pickup from a Store</label>
                                {
                                    currentValue === 'off' && (
                                        <div>
                                            <p className='text-sm font-light py-2'>Select a pickup location in your area from our avaliable locations nationwide.</p>
                                            <p className='flex items-center justify-center bg-gray/10 py-5'>
                                                <button 
                                                    onClick={PickupBtn}
                                                    id='pickupBtn'  
                                                    className={`drop-shadow-xl p-2 rounded bg-green-focus text-white hover:opacity-80 transition-all `}>
                                                        Select a Pickup Location
                                                </button>
                                            </p>
                                            {
                                                pickup ? (
                                                    <div>
                                                        <form>
                                                            <p className='p-1 font-bold'>Find a pick up station nearest to you</p>
                                                            <div className='md:flex  w-full gap-4 my-2'>
                                                                <select required onchange={()=> toggleLGA()} name="state" id='state' className='w-full p-3 my-1 outline-none'>
                                                                    <option value="" selected="selected">- Select -</option>
                                                                    <option value="Abia">Abia</option>
                                                                    <option value="Adamawa">Adamawa</option>
                                                                    <option value="AkwaIbom">AkwaIbom</option>
                                                                    <option value="Anambra">Anambra</option>
                                                                    <option value="Bauchi">Bauchi</option>
                                                                    <option value="Bayelsa">Bayelsa</option>
                                                                    <option value="Benue">Benue</option>
                                                                    <option value="Borno">Borno</option>
                                                                    <option value="Cross River">Cross River</option>
                                                                    <option value="Delta">Delta</option>
                                                                    <option value="Ebonyi">Ebonyi</option>
                                                                    <option value="Edo">Edo</option>
                                                                    <option value="Ekiti">Ekiti</option>
                                                                    <option value="Enugu">Enugu</option>
                                                                    <option value="FCT">FCT</option>
                                                                    <option value="Gombe">Gombe</option>
                                                                    <option value="Imo">Imo</option>
                                                                    <option value="Jigawa">Jigawa</option>
                                                                    <option value="Kaduna">Kaduna</option>
                                                                    <option value="Kano">Kano</option>
                                                                    <option value="Katsina">Katsina</option>
                                                                    <option value="Kebbi">Kebbi</option>
                                                                    <option value="Kogi">Kogi</option>
                                                                    <option value="Kwara">Kwara</option>
                                                                    <option value="Lagos">Lagos</option>
                                                                    <option value="Nasarawa">Nasarawa</option>
                                                                    <option value="Niger">Niger</option>
                                                                    <option value="Ogun">Ogun</option>
                                                                    <option value="Ondo">Ondo</option>
                                                                    <option value="Osun">Osun</option>
                                                                    <option value="Oyo">Oyo</option>
                                                                    <option value="Plateau">Plateau</option>
                                                                    <option value="Rivers">Rivers</option>
                                                                    <option value="Sokoto">Sokoto</option>
                                                                    <option value="Taraba">Taraba</option>
                                                                    <option value="Yobe">Yobe</option>
                                                                    <option value="Zamfara">Zamafara</option>
                                                                </select>
                                                                <select required name="lga" id='lga' className='w-full p-3 my-1 outline-none select-lga'>
                                                                </select>
                                                            </div>
                                                            <div>
                                                                <div className='flex flex-wrap justify-center gap-4'>
                                                                    {
                                                                        location.map((item, id)=> {
                                                                        return (
                                                                                <div key={item.id} className='shadow text-green-focus border rounded w-96'>
                                                                                    <p className='font-bold border-b py-3'>
                                                                                        <input type="radio" name="" id="" className='mx-1' />
                                                                                        Select this pick up station
                                                                                    </p>
                                                                                    <p className='flex items-center p-2'><LuStore className='text-green mx-1'/>{item.store}</p>
                                                                                    <p className='flex items-center p-2'><PiMapPinLineLight className='text-green mx-1'/>{item.address}</p>
                                                                                    <p className='flex items-center p-2'><TbPhoneCalling className='text-green mx-1'/>{item.phone}</p>
                                                                                </div>
                                                                        )
                                                                        })
                                                                    }
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>)
                                                    :(
                                                    null
                                                )
                                            }
                                        </div>
                                    )
                                }
                        </div>
                    </div>
                </div>
            </div>
            <div className='border border-color mt-4'>
                <h1 className='sticky top-20 z-10 bg-white transition-all font-bold p-3 border-b border-color uppercase py-5 flex items-center'>
                    <VscVerified className='text-green' />
                    Payment summary
                </h1>
                <form action="">
                    <div className='py-2 px-2'>
                        <p className='font-bold px-2 py-4 flex items-center'>
                            <input type="radio" name="" id="" className='mx-1' />
                            <span className='flex items-center'>
                                Pay on Delivery
                                <BsCashCoin size={20} className='mx-1'/>
                            </span>
                        </p>
                        <p className='px-4 font-light bg-gray/10 py-5'>With cash, bank transfers or card</p>
                    </div>
                    <div className='p-4'>
                        <p className='font-bold px-2 py-4 flex items-center'>
                            <input type="radio" name="" id="" className='mx-1'/>
                            <span className='flex items-center capitalize'>
                                Pay with card, bank transfers or card
                                <FaCcMastercard size={20}/>
                            </span>
                        </p>
                        <p className='px-4 font-light bg-gray/10 py-5'>You will be redirected to our secure checkout page</p>
                    </div>
                    <div className='flex justify-end p-3'>
                        <button className='uppercase bg-green-focus rounded text-white hover:opacity-80 transition-all p-3'>confirm payment method</button>
                    </div>
                </form>
            </div>
        </div>
        {/* order summary */}
        <div className=' md:w-[27rem] bg-white rounded drop-shadow my-4 md:my-0'>
            <div className=' uppercase h-80 md:mx-0  bg-white transition-all sticky top-20 border border-color'>
                <p className='border-b border-color p-2 py-5 font-bold text-green-focus flex items-center sticky top-20 md:top-0 bg-white'>
                    <MdVerifiedUser className='text-green'/>
                    Order Summary
                </p>
                <div className='flex flex-wrap items-center cursor-pointer justify-between bg-gray/10 p-2 my-1'>
                    <span className='flex items-center'>
                        Item's total
                    </span>
                    <span  className=' text-green text-lg'>
                        ${total.toLocaleString()}
                    </span>
                </div>
                <div className='flex flex-wrap items-center cursor-pointer justify-between bg-gray/10 p-2 my-1'>
                    <span className='flex items-center'>
                        Delivery fee
                    </span>
                    <span  className=' text-green text-lg'>
                        ${total.toLocaleString()}
                    </span>
                </div>
                <div className='flex flex-wrap items-center cursor-pointer justify-between bg-gray/10 p-2 my-1'>
                    <span className='flex items-center font-bold'>
                        total  
                        <BsArrowRight size={20} className='mx-1 font-bold animate-pulse'/>
                    </span>
                    <span  className=' text-green text-2xl'>
                        ${total.toLocaleString()}
                    </span>
                </div>
                <Link to={`/payment`}  className=' p-4 my-4 justify-center bg-green-focus text-white font-bold shadow hover:opacity-80 transition-all mx-2 flex items-center rounded'>
                    confirm order
                    <MdPayment className='ml-1'/>
                    (${total.toLocaleString()})
                </Link>
            </div>
        </div>
    </div>
  )
}
