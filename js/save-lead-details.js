let filteredCountry = {};
const countries = [
    {
        "id": "12",
        "country_name": "India",
        "country_code": "IN",
        "timezone": "IST",
        "timezone_offset": "330",
        "timezone_name": "Asia/Kolkata",
        "phone_code": "+91",
        "currency": "INR"
    },
    {
        "id": "2",
        "country_name": "US (CST)",
        "country_code": "US",
        "timezone": "CST",
        "timezone_offset": "-360",
        "timezone_name": "America/Chicago",
        "phone_code": "+1",
        "currency": "USD"
    },
    {
        "id": "1",
        "country_name": "US (EST)",
        "country_code": "US",
        "timezone": "EST",
        "timezone_offset": "-300",
        "timezone_name": "America/New_York",
        "phone_code": "+1",
        "currency": "USD"
    },
    {
        "id": "3",
        "country_name": "US (MST)",
        "country_code": "US",
        "timezone": "MST",
        "timezone_offset": "-420",
        "timezone_name": "America/Denver",
        "phone_code": "+1",
        "currency": "USD"
    },
    {
        "id": "5",
        "country_name": "US (PST)",
        "country_code": "US",
        "timezone": "PST",
        "timezone_offset": "-480",
        "timezone_name": "America/Los_Angeles",
        "phone_code": "+1",
        "currency": "USD"
    },
    {
        "id": "149",
        "country_name": "United Kingdom",
        "country_code": "GB",
        "timezone": "GMT",
        "timezone_offset": "0",
        "timezone_name": "Europe/London",
        "phone_code": "+44",
        "currency": "GBP"
    },
    {
        "id": "10",
        "country_name": "Singapore",
        "country_code": "SG",
        "timezone": "SGT",
        "timezone_offset": "480",
        "timezone_name": "Asia/Singapore",
        "phone_code": "+65",
        "currency": "SGD"
    },
    {
        "id": "258",
        "country_name": "Canada (AST)",
        "country_code": "CA",
        "timezone": "AST",
        "timezone_offset": "-240",
        "timezone_name": "America/Halifax",
        "phone_code": "+1",
        "currency": "CAD"
    },
    {
        "id": "260",
        "country_name": "Canada (CST)",
        "country_code": "CA",
        "timezone": "CST",
        "timezone_offset": "-360",
        "timezone_name": "America/Winnipeg",
        "phone_code": "+1",
        "currency": "CAD"
    },
    {
        "id": "259",
        "country_name": "Canada (EST)",
        "country_code": "CA",
        "timezone": "EST",
        "timezone_offset": "-300",
        "timezone_name": "America/Toronto",
        "phone_code": "+1",
        "currency": "CAD"
    },
    {
        "id": "261",
        "country_name": "Canada (MST)",
        "country_code": "CA",
        "timezone": "MST",
        "timezone_offset": "-420",
        "timezone_name": "America/Edmonton",
        "phone_code": "+1",
        "currency": "CAD"
    },
    {
        "id": "11",
        "country_name": "Canada (NST)",
        "country_code": "CA",
        "timezone": "NST",
        "timezone_offset": "-210",
        "timezone_name": "America/St_Johns",
        "phone_code": "+1",
        "currency": "CAD"
    },
    {
        "id": "262",
        "country_name": "Canada (PST)",
        "country_code": "CA",
        "timezone": "PST",
        "timezone_offset": "-480",
        "timezone_name": "America/Vancouver",
        "phone_code": "+1",
        "currency": "CAD"
    },
    {
        "id": "80",
        "country_name": "United Arab Emirates",
        "country_code": "AE",
        "timezone": "GST",
        "timezone_offset": "240",
        "timezone_name": "Asia/Dubai",
        "phone_code": "+971",
        "currency": "USD"
    },
    {
        "id": "257",
        "country_name": "Australia (ACST)",
        "country_code": "AU",
        "timezone": "ACST",
        "timezone_offset": "570",
        "timezone_name": "Australia/Adelaide",
        "phone_code": "+61",
        "currency": "AUD"
    },
    {
        "id": "256",
        "country_name": "Australia (AEST)",
        "country_code": "AU",
        "timezone": "AEST",
        "timezone_offset": "600",
        "timezone_name": "Australia/Sydney",
        "phone_code": "+61",
        "currency": "AUD"
    },
    {
        "id": "255",
        "country_name": "Australia (AWST)",
        "country_code": "AU",
        "timezone": "AWST",
        "timezone_offset": "480",
        "timezone_name": "Australia/Perth",
        "phone_code": "+61",
        "currency": "AUD"
    },
    {
        "id": "13",
        "country_name": "Australia (LHST)",
        "country_code": "AU",
        "timezone": "LHST",
        "timezone_offset": "630",
        "timezone_name": "Australia/Lord_Howe",
        "phone_code": "+61",
        "currency": "AUD"
    },
    {
        "id": "77",
        "country_name": "Afghanistan",
        "country_code": "AF",
        "timezone": "AFT",
        "timezone_offset": "270",
        "timezone_name": "Asia/Kabul",
        "phone_code": "+93",
        "currency": "USD"
    },
    {
        "id": "94",
        "country_name": "Aland Islands",
        "country_code": "AX",
        "timezone": "EET",
        "timezone_offset": "120",
        "timezone_name": "Europe/Mariehamn",
        "phone_code": "+358",
        "currency": "EUR"
    },
    {
        "id": "101",
        "country_name": "Albania",
        "country_code": "AL",
        "timezone": "CET",
        "timezone_offset": "60",
        "timezone_name": "Europe/Tirane",
        "phone_code": "+355",
        "currency": "USD"
    },
    {
        "id": "106",
        "country_name": "Algeria",
        "country_code": "DZ",
        "timezone": "CET",
        "timezone_offset": "60",
        "timezone_name": "Africa/Algiers",
        "phone_code": "+213",
        "currency": "USD"
    },
    {
        "id": "98",
        "country_name": "American Samoa",
        "country_code": "AS",
        "timezone": "SST",
        "timezone_offset": "-660",
        "timezone_name": "Pacific/Pago_Pago",
        "phone_code": "+1684",
        "currency": "USD"
    },
    {
        "id": "79",
        "country_name": "Andorra",
        "country_code": "AD",
        "timezone": "CET",
        "timezone_offset": "60",
        "timezone_name": "Europe/Andorra",
        "phone_code": "+376",
        "currency": "EUR"
    },
    {
        "id": "100",
        "country_name": "Angola",
        "country_code": "AO",
        "timezone": "WAT",
        "timezone_offset": "60",
        "timezone_name": "Africa/Luanda",
        "phone_code": "+244",
        "currency": "USD"
    },
    {
        "id": "76",
        "country_name": "Anguilla",
        "country_code": "AI",
        "timezone": "AST",
        "timezone_offset": "-240",
        "timezone_name": "America/Anguilla",
        "phone_code": "+1264",
        "currency": "USD"
    },
    {
        "id": "99",
        "country_name": "Antarctica",
        "country_code": "AQ",
        "timezone": "NZDT",
        "timezone_offset": "780",
        "timezone_name": "Antarctica/McMurdo",
        "phone_code": "+672",
        "currency": "USD"
    },
    {
        "id": "78",
        "country_name": "Antigua and Barbuda",
        "country_code": "AG",
        "timezone": "AST",
        "timezone_offset": "-240",
        "timezone_name": "America/Antigua",
        "phone_code": "+1268",
        "currency": "USD"
    },
    {
        "id": "97",
        "country_name": "Argentina",
        "country_code": "AR",
        "timezone": "ART",
        "timezone_offset": "-180",
        "timezone_name": "America/Argentina/Buenos_Aires",
        "phone_code": "+54",
        "currency": "USD"
    },
    {
        "id": "88",
        "country_name": "Armenia",
        "country_code": "AM",
        "timezone": "AMT",
        "timezone_offset": "240",
        "timezone_name": "Asia/Yerevan",
        "phone_code": "+374",
        "currency": "USD"
    },
    {
        "id": "95",
        "country_name": "Aruba",
        "country_code": "AW",
        "timezone": "AST",
        "timezone_offset": "-240",
        "timezone_name": "America/Aruba",
        "phone_code": "+297",
        "currency": "USD"
    },
    {
        "id": "96",
        "country_name": "Austria",
        "country_code": "AT",
        "timezone": "CET",
        "timezone_offset": "60",
        "timezone_name": "Europe/Vienna",
        "phone_code": "+43",
        "currency": "EUR"
    },
    {
        "id": "93",
        "country_name": "Azerbaijan",
        "country_code": "AZ",
        "timezone": "AZT",
        "timezone_offset": "240",
        "timezone_name": "Asia/Baku",
        "phone_code": "+994",
        "currency": "USD"
    },
    {
        "id": "188",
        "country_name": "Bahamas",
        "country_code": "BS",
        "timezone": "EST",
        "timezone_offset": "-300",
        "timezone_name": "America/Nassau",
        "phone_code": "+1242",
        "currency": "USD"
    },
    {
        "id": "167",
        "country_name": "Bahrain",
        "country_code": "BH",
        "timezone": "AST",
        "timezone_offset": "180",
        "timezone_name": "Asia/Bahrain",
        "phone_code": "+973",
        "currency": "USD"
    },
    {
        "id": "193",
        "country_name": "Bangladesh",
        "country_code": "BD",
        "timezone": "BDT",
        "timezone_offset": "360",
        "timezone_name": "Asia/Dhaka",
        "phone_code": "+880",
        "currency": "USD"
    },
    {
        "id": "173",
        "country_name": "Barbados",
        "country_code": "BB",
        "timezone": "AST",
        "timezone_offset": "-240",
        "timezone_name": "America/Barbados",
        "phone_code": "+1-246",
        "currency": "USD"
    },
    {
        "id": "186",
        "country_name": "Belarus",
        "country_code": "BY",
        "timezone": "MSK",
        "timezone_offset": "180",
        "timezone_name": "Europe/Minsk",
        "phone_code": "+375",
        "currency": "USD"
    },
    {
        "id": "177",
        "country_name": "Belgium",
        "country_code": "BE",
        "timezone": "CET",
        "timezone_offset": "60",
        "timezone_name": "Europe/Brussels",
        "phone_code": "+32",
        "currency": "EUR"
    },
    {
        "id": "185",
        "country_name": "Belize",
        "country_code": "BZ",
        "timezone": "CST",
        "timezone_offset": "-360",
        "timezone_name": "America/Belize",
        "phone_code": "+501",
        "currency": "USD"
    },
    {
        "id": "165",
        "country_name": "Benin",
        "country_code": "BJ",
        "timezone": "WAT",
        "timezone_offset": "60",
        "timezone_name": "Africa/Porto-Novo",
        "phone_code": "+229",
        "currency": "USD"
    },
    {
        "id": "170",
        "country_name": "Bermuda",
        "country_code": "BM",
        "timezone": "AST",
        "timezone_offset": "-240",
        "timezone_name": "Atlantic/Bermuda",
        "phone_code": "+1441",
        "currency": "USD"
    },
    {
        "id": "178",
        "country_name": "Bhutan",
        "country_code": "BT",
        "timezone": "BTT",
        "timezone_offset": "360",
        "timezone_name": "Asia/Thimphu",
        "phone_code": "+975",
        "currency": "INR"
    },
    {
        "id": "168",
        "country_name": "Bolivia",
        "country_code": "BO",
        "timezone": "BOT",
        "timezone_offset": "-240",
        "timezone_name": "America/La_Paz",
        "phone_code": "+591",
        "currency": "USD"
    },
    {
        "id": "192",
        "country_name": "Botswana",
        "country_code": "BW",
        "timezone": "CAT",
        "timezone_offset": "120",
        "timezone_name": "Africa/Gaborone",
        "phone_code": "+267",
        "currency": "USD"
    },
    {
        "id": "189",
        "country_name": "Brazil",
        "country_code": "BR",
        "timezone": "FNT",
        "timezone_offset": "-120",
        "timezone_name": "America/Noronha",
        "phone_code": "+55",
        "currency": "USD"
    },
    {
        "id": "109",
        "country_name": "British Virgin Islands",
        "country_code": "VG",
        "timezone": "AST",
        "timezone_offset": "-240",
        "timezone_name": "America/Tortola",
        "phone_code": "+1284",
        "currency": "USD"
    },
    {
        "id": "169",
        "country_name": "Brunei",
        "country_code": "BN",
        "timezone": "BNT",
        "timezone_offset": "480",
        "timezone_name": "Asia/Brunei",
        "phone_code": "+673",
        "currency": "USD"
    },
    {
        "id": "175",
        "country_name": "Bulgaria",
        "country_code": "BG",
        "timezone": "EET",
        "timezone_offset": "120",
        "timezone_name": "Europe/Sofia",
        "phone_code": "+359",
        "currency": "USD"
    },
    {
        "id": "176",
        "country_name": "Burkina Faso",
        "country_code": "BF",
        "timezone": "GMT",
        "timezone_offset": "0",
        "timezone_name": "Africa/Ouagadougou",
        "phone_code": "+226",
        "currency": "USD"
    },
    {
        "id": "166",
        "country_name": "Burundi",
        "country_code": "BI",
        "timezone": "CAT",
        "timezone_offset": "120",
        "timezone_name": "Africa/Bujumbura",
        "phone_code": "+257",
        "currency": "USD"
    },
    {
        "id": "39",
        "country_name": "Cambodia",
        "country_code": "KH",
        "timezone": "ICT",
        "timezone_offset": "420",
        "timezone_name": "Asia/Phnom_Penh",
        "phone_code": "+855",
        "currency": "USD"
    },
    {
        "id": "62",
        "country_name": "Cameroon",
        "country_code": "CM",
        "timezone": "WAT",
        "timezone_offset": "60",
        "timezone_name": "Africa/Douala",
        "phone_code": "+237",
        "currency": "USD"
    },
    {
        "id": "21",
        "country_name": "Cape Verde",
        "country_code": "CV",
        "timezone": "CVT",
        "timezone_offset": "-60",
        "timezone_name": "Atlantic/Cape_Verde",
        "phone_code": "+238",
        "currency": "USD"
    },
    {
        "id": "132",
        "country_name": "Cayman Islands",
        "country_code": "KY",
        "timezone": "EST",
        "timezone_offset": "-300",
        "timezone_name": "America/Cayman",
        "phone_code": "+1345",
        "currency": "USD"
    },
    {
        "id": "43",
        "country_name": "Central African Republic",
        "country_code": "CF",
        "timezone": "WAT",
        "timezone_offset": "60",
        "timezone_name": "Africa/Bangui",
        "phone_code": "+236",
        "currency": "USD"
    },
    {
        "id": "85",
        "country_name": "Chad",
        "country_code": "TD",
        "timezone": "WAT",
        "timezone_offset": "60",
        "timezone_name": "Africa/Ndjamena",
        "phone_code": "+235",
        "currency": "USD"
    },
    {
        "id": "61",
        "country_name": "Chile",
        "country_code": "CL",
        "timezone": "CLT",
        "timezone_offset": "-180",
        "timezone_name": "America/Santiago",
        "phone_code": "+56",
        "currency": "USD"
    },
    {
        "id": "63",
        "country_name": "China",
        "country_code": "CN",
        "timezone": "CST",
        "timezone_offset": "480",
        "timezone_name": "Asia/Shanghai",
        "phone_code": "+86",
        "currency": "USD"
    },
    {
        "id": "60",
        "country_name": "Cocos Islands",
        "country_code": "CC",
        "timezone": "CCT",
        "timezone_offset": "390",
        "timezone_name": "Indian/Cocos",
        "phone_code": "+61",
        "currency": "AUD"
    },
    {
        "id": "64",
        "country_name": "Colombia",
        "country_code": "CO",
        "timezone": "COT",
        "timezone_offset": "-300",
        "timezone_name": "America/Bogota",
        "phone_code": "+57",
        "currency": "USD"
    },
    {
        "id": "37",
        "country_name": "Comoros",
        "country_code": "KM",
        "timezone": "EAT",
        "timezone_offset": "180",
        "timezone_name": "Indian/Comoro",
        "phone_code": "+269",
        "currency": "USD"
    },
    {
        "id": "67",
        "country_name": "Cook Islands",
        "country_code": "CK",
        "timezone": "CKT",
        "timezone_offset": "-600",
        "timezone_name": "Pacific/Rarotonga",
        "phone_code": "+682",
        "currency": "USD"
    },
    {
        "id": "23",
        "country_name": "Costa Rica",
        "country_code": "CR",
        "timezone": "CST",
        "timezone_offset": "-360",
        "timezone_name": "America/Costa_Rica",
        "phone_code": "+506",
        "currency": "USD"
    },
    {
        "id": "152",
        "country_name": "Croatia",
        "country_code": "HR",
        "timezone": "CET",
        "timezone_offset": "60",
        "timezone_name": "Europe/Zagreb",
        "phone_code": "+385",
        "currency": "USD"
    },
    {
        "id": "20",
        "country_name": "Cuba",
        "country_code": "CU",
        "timezone": "CST",
        "timezone_offset": "-300",
        "timezone_name": "America/Havana",
        "phone_code": "+53",
        "currency": "USD"
    },
    {
        "id": "22",
        "country_name": "Curacao",
        "country_code": "CW",
        "timezone": "AST",
        "timezone_offset": "-240",
        "timezone_name": "America/Curacao",
        "phone_code": "+599",
        "currency": "USD"
    },
    {
        "id": "25",
        "country_name": "Cyprus",
        "country_code": "CY",
        "timezone": "EET",
        "timezone_offset": "120",
        "timezone_name": "Asia/Nicosia",
        "phone_code": "+357",
        "currency": "EUR"
    },
    {
        "id": "41",
        "country_name": "Czech Republic",
        "country_code": "CZ",
        "timezone": "CET",
        "timezone_offset": "60",
        "timezone_name": "Europe/Prague",
        "phone_code": "+420",
        "currency": "USD"
    },
    {
        "id": "110",
        "country_name": "Denmark",
        "country_code": "DK",
        "timezone": "CET",
        "timezone_offset": "60",
        "timezone_name": "Europe/Copenhagen",
        "phone_code": "+45",
        "currency": "USD"
    },
    {
        "id": "111",
        "country_name": "Djibouti",
        "country_code": "DJ",
        "timezone": "EAT",
        "timezone_offset": "180",
        "timezone_name": "Africa/Djibouti",
        "phone_code": "+253",
        "currency": "USD"
    },
    {
        "id": "112",
        "country_name": "Dominica",
        "country_code": "DM",
        "timezone": "AST",
        "timezone_offset": "-240",
        "timezone_name": "America/Dominica",
        "phone_code": "+1767",
        "currency": "USD"
    },
    {
        "id": "113",
        "country_name": "Dominican Republic",
        "country_code": "DO",
        "timezone": "AST",
        "timezone_offset": "-240",
        "timezone_name": "America/Santo_Domingo",
        "phone_code": "+1849",
        "currency": "USD"
    },
    {
        "id": "181",
        "country_name": "East Timor",
        "country_code": "TL",
        "timezone": "TLT",
        "timezone_offset": "540",
        "timezone_name": "Asia/Dili",
        "phone_code": "+670",
        "currency": "USD"
    },
    {
        "id": "249",
        "country_name": "Ecuador",
        "country_code": "EC",
        "timezone": "ECT",
        "timezone_offset": "-300",
        "timezone_name": "America/Guayaquil",
        "phone_code": "+593",
        "currency": "USD"
    },
    {
        "id": "251",
        "country_name": "Egypt",
        "country_code": "EG",
        "timezone": "EET",
        "timezone_offset": "120",
        "timezone_name": "Africa/Cairo",
        "phone_code": "+20",
        "currency": "USD"
    },
    {
        "id": "161",
        "country_name": "El Salvador",
        "country_code": "SV",
        "timezone": "CST",
        "timezone_offset": "-360",
        "timezone_name": "America/El_Salvador",
        "phone_code": "+503",
        "currency": "USD"
    },
    {
        "id": "139",
        "country_name": "Equatorial Guinea",
        "country_code": "GQ",
        "timezone": "WAT",
        "timezone_offset": "60",
        "timezone_name": "Africa/Malabo",
        "phone_code": "+240",
        "currency": "USD"
    },
    {
        "id": "208",
        "country_name": "Eritrea",
        "country_code": "ER",
        "timezone": "EAT",
        "timezone_offset": "180",
        "timezone_name": "Africa/Asmara",
        "phone_code": "+291",
        "currency": "USD"
    },
    {
        "id": "252",
        "country_name": "Estonia",
        "country_code": "EE",
        "timezone": "EET",
        "timezone_offset": "120",
        "timezone_name": "Europe/Tallinn",
        "phone_code": "+372",
        "currency": "EUR"
    },
    {
        "id": "245",
        "country_name": "Ethiopia",
        "country_code": "ET",
        "timezone": "EAT",
        "timezone_offset": "180",
        "timezone_name": "Africa/Addis_Ababa",
        "phone_code": "+251",
        "currency": "USD"
    },
    {
        "id": "54",
        "country_name": "Falkland Islands",
        "country_code": "FK",
        "timezone": "FKST",
        "timezone_offset": "-180",
        "timezone_name": "Atlantic/Stanley",
        "phone_code": "+500",
        "currency": "USD"
    },
    {
        "id": "52",
        "country_name": "Faroe Islands",
        "country_code": "FO",
        "timezone": "WET",
        "timezone_offset": "0",
        "timezone_name": "Atlantic/Faroe",
        "phone_code": "+298",
        "currency": "USD"
    },
    {
        "id": "55",
        "country_name": "Fiji",
        "country_code": "FJ",
        "timezone": "FJST",
        "timezone_offset": "780",
        "timezone_name": "Pacific/Fiji",
        "phone_code": "+679",
        "currency": "USD"
    },
    {
        "id": "56",
        "country_name": "Finland",
        "country_code": "FI",
        "timezone": "EET",
        "timezone_offset": "180",
        "timezone_name": "Europe/Helsinki",
        "phone_code": "+358",
        "currency": "EUR"
    },
    {
        "id": "212",
        "country_name": "France",
        "country_code": "FR",
        "timezone": "CET",
        "timezone_offset": "60",
        "timezone_name": "Europe/Paris",
        "phone_code": "+33",
        "currency": "EUR"
    },
    {
        "id": "134",
        "country_name": "French Guiana",
        "country_code": "GF",
        "timezone": "GFT",
        "timezone_offset": "-180",
        "timezone_name": "America/Cayenne",
        "phone_code": "+594",
        "currency": "EUR"
    },
    {
        "id": "230",
        "country_name": "French Polynesia",
        "country_code": "PF",
        "timezone": "TAHT",
        "timezone_offset": "-600",
        "timezone_name": "Pacific/Tahiti",
        "phone_code": "+689",
        "currency": "USD"
    },
    {
        "id": "162",
        "country_name": "Gabon",
        "country_code": "GA",
        "timezone": "WAT",
        "timezone_offset": "60",
        "timezone_name": "Africa/Libreville",
        "phone_code": "+241",
        "currency": "USD"
    },
    {
        "id": "159",
        "country_name": "Gambia",
        "country_code": "GM",
        "timezone": "GMT",
        "timezone_offset": "0",
        "timezone_name": "Africa/Banjul",
        "phone_code": "+220",
        "currency": "USD"
    },
    {
        "id": "147",
        "country_name": "Georgia",
        "country_code": "GE",
        "timezone": "GET",
        "timezone_offset": "240",
        "timezone_name": "Asia/Tbilisi",
        "phone_code": "+995",
        "currency": "USD"
    },
    {
        "id": "108",
        "country_name": "Germany",
        "country_code": "DE",
        "timezone": "CET",
        "timezone_offset": "60",
        "timezone_name": "Europe/Berlin",
        "phone_code": "+49",
        "currency": "EUR"
    },
    {
        "id": "156",
        "country_name": "Ghana",
        "country_code": "GH",
        "timezone": "GMT",
        "timezone_offset": "0",
        "timezone_name": "Africa/Accra",
        "phone_code": "+233",
        "currency": "USD"
    },
    {
        "id": "157",
        "country_name": "Gibraltar",
        "country_code": "GI",
        "timezone": "CET",
        "timezone_offset": "60",
        "timezone_name": "Europe/Gibraltar",
        "phone_code": "+350",
        "currency": "USD"
    },
    {
        "id": "140",
        "country_name": "Greece",
        "country_code": "GR",
        "timezone": "EET",
        "timezone_offset": "120",
        "timezone_name": "Europe/Athens",
        "phone_code": "+30",
        "currency": "EUR"
    },
    {
        "id": "158",
        "country_name": "Greenland",
        "country_code": "GL",
        "timezone": "WGT",
        "timezone_offset": "-180",
        "timezone_name": "America/Godthab",
        "phone_code": "+299",
        "currency": "USD"
    },
    {
        "id": "148",
        "country_name": "Grenada",
        "country_code": "GD",
        "timezone": "AST",
        "timezone_offset": "-240",
        "timezone_name": "America/Grenada",
        "phone_code": "+1473",
        "currency": "USD"
    },
    {
        "id": "138",
        "country_name": "Guadeloupe",
        "country_code": "GP",
        "timezone": "AST",
        "timezone_offset": "-240",
        "timezone_name": "America/Guadeloupe",
        "phone_code": "+590",
        "currency": "EUR"
    },
    {
        "id": "143",
        "country_name": "Guam",
        "country_code": "GU",
        "timezone": "ChST",
        "timezone_offset": "600",
        "timezone_name": "Pacific/Guam",
        "phone_code": "+1671",
        "currency": "USD"
    },
    {
        "id": "142",
        "country_name": "Guatemala",
        "country_code": "GT",
        "timezone": "CST",
        "timezone_offset": "-360",
        "timezone_name": "America/Guatemala",
        "phone_code": "+502",
        "currency": "USD"
    },
    {
        "id": "135",
        "country_name": "Guernsey",
        "country_code": "GG",
        "timezone": "GMT",
        "timezone_offset": "0",
        "timezone_name": "Europe/Guernsey",
        "phone_code": "+44",
        "currency": "GBP"
    },
    {
        "id": "160",
        "country_name": "Guinea",
        "country_code": "GN",
        "timezone": "GMT",
        "timezone_offset": "0",
        "timezone_name": "Africa/Conakry",
        "phone_code": "+224",
        "currency": "USD"
    },
    {
        "id": "144",
        "country_name": "Guinea-Bissau",
        "country_code": "GW",
        "timezone": "GMT",
        "timezone_offset": "0",
        "timezone_name": "Africa/Bissau",
        "phone_code": "+245",
        "currency": "USD"
    },
    {
        "id": "136",
        "country_name": "Guyana",
        "country_code": "GY",
        "timezone": "GYT",
        "timezone_offset": "-240",
        "timezone_name": "America/Guyana",
        "phone_code": "+592",
        "currency": "USD"
    },
    {
        "id": "151",
        "country_name": "Haiti",
        "country_code": "HT",
        "timezone": "EST",
        "timezone_offset": "-300",
        "timezone_name": "America/Port-au-Prince",
        "phone_code": "+509",
        "currency": "USD"
    },
    {
        "id": "194",
        "country_name": "Honduras",
        "country_code": "HN",
        "timezone": "CST",
        "timezone_offset": "-360",
        "timezone_name": "America/Tegucigalpa",
        "phone_code": "+504",
        "currency": "USD"
    },
    {
        "id": "133",
        "country_name": "Hong Kong",
        "country_code": "HK",
        "timezone": "HKT",
        "timezone_offset": "480",
        "timezone_name": "Asia/Hong_Kong",
        "phone_code": "+852",
        "currency": "USD"
    },
    {
        "id": "150",
        "country_name": "Hungary",
        "country_code": "HU",
        "timezone": "CET",
        "timezone_offset": "60",
        "timezone_name": "Europe/Budapest",
        "phone_code": "+36",
        "currency": "USD"
    },
    {
        "id": "74",
        "country_name": "Iceland",
        "country_code": "IS",
        "timezone": "GMT",
        "timezone_offset": "0",
        "timezone_name": "Atlantic/Reykjavik",
        "phone_code": "+354",
        "currency": "USD"
    },
    {
        "id": "91",
        "country_name": "Indonesia",
        "country_code": "ID",
        "timezone": "WIB",
        "timezone_offset": "420",
        "timezone_name": "Asia/Jakarta",
        "phone_code": "+62",
        "currency": "USD"
    },
    {
        "id": "87",
        "country_name": "Iran",
        "country_code": "IR",
        "timezone": "IRST",
        "timezone_offset": "210",
        "timezone_name": "Asia/Tehran",
        "phone_code": "+98",
        "currency": "USD"
    },
    {
        "id": "232",
        "country_name": "Iraq",
        "country_code": "IQ",
        "timezone": "AST",
        "timezone_offset": "180",
        "timezone_name": "Asia/Baghdad",
        "phone_code": "+964",
        "currency": "USD"
    },
    {
        "id": "92",
        "country_name": "Ireland",
        "country_code": "IE",
        "timezone": "GMT",
        "timezone_offset": "0",
        "timezone_name": "Europe/Dublin",
        "phone_code": "+353",
        "currency": "EUR"
    },
    {
        "id": "218",
        "country_name": "Isle of Man",
        "country_code": "IM",
        "timezone": "GMT",
        "timezone_offset": "0",
        "timezone_name": "Europe/Isle_of_Man",
        "phone_code": "+44",
        "currency": "GBP"
    },
    {
        "id": "213",
        "country_name": "Israel",
        "country_code": "IL",
        "timezone": "IST",
        "timezone_offset": "120",
        "timezone_name": "Asia/Jerusalem",
        "phone_code": "+972",
        "currency": "USD"
    },
    {
        "id": "248",
        "country_name": "Italy",
        "country_code": "IT",
        "timezone": "CET",
        "timezone_offset": "60",
        "timezone_name": "Europe/Rome",
        "phone_code": "+39",
        "currency": "EUR"
    },
    {
        "id": "66",
        "country_name": "Ivory Coast",
        "country_code": "CI",
        "timezone": "GMT",
        "timezone_offset": "0",
        "timezone_name": "Africa/Abidjan",
        "phone_code": "+225",
        "currency": "USD"
    },
    {
        "id": "179",
        "country_name": "Jamaica",
        "country_code": "JM",
        "timezone": "EST",
        "timezone_offset": "-300",
        "timezone_name": "America/Jamaica",
        "phone_code": "+1876",
        "currency": "USD"
    },
    {
        "id": "137",
        "country_name": "Japan",
        "country_code": "JP",
        "timezone": "JST",
        "timezone_offset": "540",
        "timezone_name": "Asia/Tokyo",
        "phone_code": "+81",
        "currency": "USD"
    },
    {
        "id": "187",
        "country_name": "Jersey",
        "country_code": "JE",
        "timezone": "GMT",
        "timezone_offset": "0",
        "timezone_name": "Europe/Jersey",
        "phone_code": "+44",
        "currency": "GBP"
    },
    {
        "id": "153",
        "country_name": "Jordan",
        "country_code": "JO",
        "timezone": "EET",
        "timezone_offset": "120",
        "timezone_name": "Asia/Amman",
        "phone_code": "+962",
        "currency": "USD"
    },
    {
        "id": "72",
        "country_name": "Kazakhstan",
        "country_code": "KZ",
        "timezone": "ALMT",
        "timezone_offset": "360",
        "timezone_name": "Asia/Almaty",
        "phone_code": "+7",
        "currency": "USD"
    },
    {
        "id": "14",
        "country_name": "Kenya",
        "country_code": "KE",
        "timezone": "EAT",
        "timezone_offset": "180",
        "timezone_name": "Africa/Nairobi",
        "phone_code": "+254",
        "currency": "USD"
    },
    {
        "id": "40",
        "country_name": "Kiribati",
        "country_code": "KI",
        "timezone": "GILT",
        "timezone_offset": "720",
        "timezone_name": "Pacific/Tarawa",
        "phone_code": "+686",
        "currency": "AUD"
    },
    {
        "id": "31",
        "country_name": "Kuwait",
        "country_code": "KW",
        "timezone": "AST",
        "timezone_offset": "180",
        "timezone_name": "Asia/Kuwait",
        "phone_code": "+965",
        "currency": "USD"
    },
    {
        "id": "18",
        "country_name": "Kyrgyzstan",
        "country_code": "KG",
        "timezone": "KGT",
        "timezone_offset": "360",
        "timezone_name": "Asia/Bishkek",
        "phone_code": "+996",
        "currency": "USD"
    },
    {
        "id": "131",
        "country_name": "Laos",
        "country_code": "LA",
        "timezone": "ICT",
        "timezone_offset": "420",
        "timezone_name": "Asia/Vientiane",
        "phone_code": "+856",
        "currency": "USD"
    },
    {
        "id": "124",
        "country_name": "Latvia",
        "country_code": "LV",
        "timezone": "EET",
        "timezone_offset": "120",
        "timezone_name": "Europe/Riga",
        "phone_code": "+371",
        "currency": "EUR"
    },
    {
        "id": "116",
        "country_name": "Lebanon",
        "country_code": "LB",
        "timezone": "EET",
        "timezone_offset": "120",
        "timezone_name": "Asia/Beirut",
        "phone_code": "+961",
        "currency": "USD"
    },
    {
        "id": "119",
        "country_name": "Lesotho",
        "country_code": "LS",
        "timezone": "SAST",
        "timezone_offset": "120",
        "timezone_name": "Africa/Maseru",
        "phone_code": "+266",
        "currency": "USD"
    },
    {
        "id": "120",
        "country_name": "Liberia",
        "country_code": "LR",
        "timezone": "GMT",
        "timezone_offset": "0",
        "timezone_name": "Africa/Monrovia",
        "phone_code": "+231",
        "currency": "USD"
    },
    {
        "id": "83",
        "country_name": "Libya",
        "country_code": "LY",
        "timezone": "EET",
        "timezone_offset": "120",
        "timezone_name": "Africa/Tripoli",
        "phone_code": "+218",
        "currency": "USD"
    },
    {
        "id": "125",
        "country_name": "Liechtenstein",
        "country_code": "LI",
        "timezone": "CET",
        "timezone_offset": "60",
        "timezone_name": "Europe/Vaduz",
        "phone_code": "+423",
        "currency": "USD"
    },
    {
        "id": "122",
        "country_name": "Lithuania",
        "country_code": "LT",
        "timezone": "EET",
        "timezone_offset": "120",
        "timezone_name": "Europe/Vilnius",
        "phone_code": "+370",
        "currency": "EUR"
    },
    {
        "id": "121",
        "country_name": "Luxembourg",
        "country_code": "LU",
        "timezone": "CET",
        "timezone_offset": "60",
        "timezone_name": "Europe/Luxembourg",
        "phone_code": "+352",
        "currency": "EUR"
    },
    {
        "id": "198",
        "country_name": "Macao",
        "country_code": "MO",
        "timezone": "CST",
        "timezone_offset": "480",
        "timezone_name": "Asia/Macau",
        "phone_code": "+853",
        "currency": "USD"
    },
    {
        "id": "209",
        "country_name": "Macedonia",
        "country_code": "MK",
        "timezone": "CET",
        "timezone_offset": "60",
        "timezone_name": "Europe/Skopje",
        "phone_code": "+389",
        "currency": "USD"
    },
    {
        "id": "205",
        "country_name": "Madagascar",
        "country_code": "MG",
        "timezone": "EAT",
        "timezone_offset": "180",
        "timezone_name": "Indian/Antananarivo",
        "phone_code": "+261",
        "currency": "USD"
    },
    {
        "id": "224",
        "country_name": "Malawi",
        "country_code": "MW",
        "timezone": "CAT",
        "timezone_offset": "120",
        "timezone_name": "Africa/Blantyre",
        "phone_code": "+265",
        "currency": "USD"
    },
    {
        "id": "215",
        "country_name": "Malaysia",
        "country_code": "MY",
        "timezone": "MYT",
        "timezone_offset": "480",
        "timezone_name": "Asia/Kuala_Lumpur",
        "phone_code": "+60",
        "currency": "USD"
    },
    {
        "id": "223",
        "country_name": "Maldives",
        "country_code": "MV",
        "timezone": "MVT",
        "timezone_offset": "300",
        "timezone_name": "Indian/Maldives",
        "phone_code": "+960",
        "currency": "USD"
    },
    {
        "id": "199",
        "country_name": "Mali",
        "country_code": "ML",
        "timezone": "GMT",
        "timezone_offset": "0",
        "timezone_name": "Africa/Bamako",
        "phone_code": "+223",
        "currency": "USD"
    },
    {
        "id": "211",
        "country_name": "Malta",
        "country_code": "MT",
        "timezone": "CET",
        "timezone_offset": "60",
        "timezone_name": "Europe/Malta",
        "phone_code": "+356",
        "currency": "EUR"
    },
    {
        "id": "196",
        "country_name": "Marshall Islands",
        "country_code": "MH",
        "timezone": "MHT",
        "timezone_offset": "720",
        "timezone_name": "Pacific/Majuro",
        "phone_code": "+692",
        "currency": "USD"
    },
    {
        "id": "222",
        "country_name": "Martinique",
        "country_code": "MQ",
        "timezone": "AST",
        "timezone_offset": "-240",
        "timezone_name": "America/Martinique",
        "phone_code": "+596",
        "currency": "EUR"
    },
    {
        "id": "219",
        "country_name": "Mauritania",
        "country_code": "MR",
        "timezone": "GMT",
        "timezone_offset": "0",
        "timezone_name": "Africa/Nouakchott",
        "phone_code": "+222",
        "currency": "USD"
    },
    {
        "id": "210",
        "country_name": "Mauritius",
        "country_code": "MU",
        "timezone": "MUT",
        "timezone_offset": "240",
        "timezone_name": "Indian/Mauritius",
        "phone_code": "+230",
        "currency": "USD"
    },
    {
        "id": "104",
        "country_name": "Mayotte",
        "country_code": "YT",
        "timezone": "EAT",
        "timezone_offset": "180",
        "timezone_name": "Indian/Mayotte",
        "phone_code": "+262",
        "currency": "EUR"
    },
    {
        "id": "214",
        "country_name": "Mexico",
        "country_code": "MX",
        "timezone": "CST",
        "timezone_offset": "-360",
        "timezone_name": "America/Mexico_City",
        "phone_code": "+52",
        "currency": "USD"
    },
    {
        "id": "53",
        "country_name": "Micronesia",
        "country_code": "FM",
        "timezone": "CHUT",
        "timezone_offset": "600",
        "timezone_name": "Pacific/Chuuk",
        "phone_code": "+691",
        "currency": "USD"
    },
    {
        "id": "206",
        "country_name": "Moldova",
        "country_code": "MD",
        "timezone": "EET",
        "timezone_offset": "120",
        "timezone_name": "Europe/Chisinau",
        "phone_code": "+373",
        "currency": "USD"
    },
    {
        "id": "202",
        "country_name": "Monaco",
        "country_code": "MC",
        "timezone": "CET",
        "timezone_offset": "60",
        "timezone_name": "Europe/Monaco",
        "phone_code": "+377",
        "currency": "EUR"
    },
    {
        "id": "197",
        "country_name": "Mongolia",
        "country_code": "MN",
        "timezone": "ULAT",
        "timezone_offset": "480",
        "timezone_name": "Asia/Ulaanbaatar",
        "phone_code": "+976",
        "currency": "USD"
    },
    {
        "id": "207",
        "country_name": "Montenegro",
        "country_code": "ME",
        "timezone": "CET",
        "timezone_offset": "60",
        "timezone_name": "Europe/Podgorica",
        "phone_code": "+382",
        "currency": "EUR"
    },
    {
        "id": "220",
        "country_name": "Montserrat",
        "country_code": "MS",
        "timezone": "AST",
        "timezone_offset": "-240",
        "timezone_name": "America/Montserrat",
        "phone_code": "+1",
        "currency": "USD"
    },
    {
        "id": "203",
        "country_name": "Morocco",
        "country_code": "MA",
        "timezone": "WET",
        "timezone_offset": "0",
        "timezone_name": "Africa/Casablanca",
        "phone_code": "+212",
        "currency": "USD"
    },
    {
        "id": "73",
        "country_name": "Mozambique",
        "country_code": "MZ",
        "timezone": "CAT",
        "timezone_offset": "120",
        "timezone_name": "Africa/Maputo",
        "phone_code": "+258",
        "currency": "USD"
    },
    {
        "id": "200",
        "country_name": "Myanmar",
        "country_code": "MM",
        "timezone": "MMT",
        "timezone_offset": "390",
        "timezone_name": "Asia/Rangoon",
        "phone_code": "+95",
        "currency": "USD"
    },
    {
        "id": "48",
        "country_name": "Namibia",
        "country_code": "NA",
        "timezone": "WAST",
        "timezone_offset": "120",
        "timezone_name": "Africa/Windhoek",
        "phone_code": "+264",
        "currency": "USD"
    },
    {
        "id": "69",
        "country_name": "Nauru",
        "country_code": "NR",
        "timezone": "NRT",
        "timezone_offset": "720",
        "timezone_name": "Pacific/Nauru",
        "phone_code": "+674",
        "currency": "AUD"
    },
    {
        "id": "70",
        "country_name": "Nepal",
        "country_code": "NP",
        "timezone": "NPT",
        "timezone_offset": "345",
        "timezone_name": "Asia/Kathmandu",
        "phone_code": "+977",
        "currency": "USD"
    },
    {
        "id": "50",
        "country_name": "Netherlands",
        "country_code": "NL",
        "timezone": "CET",
        "timezone_offset": "60",
        "timezone_name": "Europe/Amsterdam",
        "phone_code": "+31",
        "currency": "EUR"
    },
    {
        "id": "46",
        "country_name": "New Caledonia",
        "country_code": "NC",
        "timezone": "NCT",
        "timezone_offset": "660",
        "timezone_name": "Pacific/Noumea",
        "phone_code": "+687",
        "currency": "USD"
    },
    {
        "id": "58",
        "country_name": "New Zealand",
        "country_code": "NZ",
        "timezone": "NZDT",
        "timezone_offset": "780",
        "timezone_name": "Pacific/Auckland",
        "phone_code": "+64",
        "currency": "USD"
    },
    {
        "id": "51",
        "country_name": "Nicaragua",
        "country_code": "NI",
        "timezone": "CST",
        "timezone_offset": "-360",
        "timezone_name": "America/Managua",
        "phone_code": "+505",
        "currency": "USD"
    },
    {
        "id": "45",
        "country_name": "Niger",
        "country_code": "NE",
        "timezone": "WAT",
        "timezone_offset": "60",
        "timezone_name": "Africa/Niamey",
        "phone_code": "+227",
        "currency": "USD"
    },
    {
        "id": "57",
        "country_name": "Nigeria",
        "country_code": "NG",
        "timezone": "WAT",
        "timezone_offset": "60",
        "timezone_name": "Africa/Lagos",
        "phone_code": "+234",
        "currency": "USD"
    },
    {
        "id": "68",
        "country_name": "Niue",
        "country_code": "NU",
        "timezone": "NUT",
        "timezone_offset": "-660",
        "timezone_name": "Pacific/Niue",
        "phone_code": "+683",
        "currency": "USD"
    },
    {
        "id": "44",
        "country_name": "Norfolk Island",
        "country_code": "NF",
        "timezone": "NFT",
        "timezone_offset": "660",
        "timezone_name": "Pacific/Norfolk",
        "phone_code": "+672",
        "currency": "AUD"
    },
    {
        "id": "32",
        "country_name": "North Korea",
        "country_code": "KP",
        "timezone": "KST",
        "timezone_offset": "510",
        "timezone_name": "Asia/Pyongyang",
        "phone_code": "+850",
        "currency": "USD"
    },
    {
        "id": "49",
        "country_name": "Norway",
        "country_code": "NO",
        "timezone": "CET",
        "timezone_offset": "60",
        "timezone_name": "Europe/Oslo",
        "phone_code": "+47",
        "currency": "USD"
    },
    {
        "id": "155",
        "country_name": "Oman",
        "country_code": "OM",
        "timezone": "GST",
        "timezone_offset": "240",
        "timezone_name": "Asia/Muscat",
        "phone_code": "+968",
        "currency": "USD"
    },
    {
        "id": "227",
        "country_name": "Pakistan",
        "country_code": "PK",
        "timezone": "PKT",
        "timezone_offset": "300",
        "timezone_name": "Asia/Karachi",
        "phone_code": "+92",
        "currency": "USD"
    },
    {
        "id": "236",
        "country_name": "Palau",
        "country_code": "PW",
        "timezone": "PWT",
        "timezone_offset": "540",
        "timezone_name": "Pacific/Palau",
        "phone_code": "+680",
        "currency": "USD"
    },
    {
        "id": "237",
        "country_name": "Palestinian Territory",
        "country_code": "PS",
        "timezone": "EET",
        "timezone_offset": "120",
        "timezone_name": "Asia/Gaza",
        "phone_code": "+970",
        "currency": "USD"
    },
    {
        "id": "231",
        "country_name": "Panama",
        "country_code": "PA",
        "timezone": "EST",
        "timezone_offset": "-300",
        "timezone_name": "America/Panama",
        "phone_code": "+507",
        "currency": "USD"
    },
    {
        "id": "229",
        "country_name": "Papua New Guinea",
        "country_code": "PG",
        "timezone": "PGT",
        "timezone_offset": "600",
        "timezone_name": "Pacific/Port_Moresby",
        "phone_code": "+675",
        "currency": "USD"
    },
    {
        "id": "233",
        "country_name": "Paraguay",
        "country_code": "PY",
        "timezone": "PYST",
        "timezone_offset": "-180",
        "timezone_name": "America/Asuncion",
        "phone_code": "+595",
        "currency": "USD"
    },
    {
        "id": "228",
        "country_name": "Peru",
        "country_code": "PE",
        "timezone": "PET",
        "timezone_offset": "-300",
        "timezone_name": "America/Lima",
        "phone_code": "+51",
        "currency": "USD"
    },
    {
        "id": "240",
        "country_name": "Philippines",
        "country_code": "PH",
        "timezone": "PHT",
        "timezone_offset": "480",
        "timezone_name": "Asia/Manila",
        "phone_code": "+63",
        "currency": "USD"
    },
    {
        "id": "241",
        "country_name": "Pitcairn",
        "country_code": "PN",
        "timezone": "PST",
        "timezone_offset": "-480",
        "timezone_name": "Pacific/Pitcairn",
        "phone_code": "+64",
        "currency": "USD"
    },
    {
        "id": "242",
        "country_name": "Poland",
        "country_code": "PL",
        "timezone": "CET",
        "timezone_offset": "60",
        "timezone_name": "Europe/Warsaw",
        "phone_code": "+48",
        "currency": "USD"
    },
    {
        "id": "235",
        "country_name": "Portugal",
        "country_code": "PT",
        "timezone": "WET",
        "timezone_offset": "0",
        "timezone_name": "Europe/Lisbon",
        "phone_code": "+351",
        "currency": "EUR"
    },
    {
        "id": "238",
        "country_name": "Puerto Rico",
        "country_code": "PR",
        "timezone": "AST",
        "timezone_offset": "-240",
        "timezone_name": "America/Puerto_Rico",
        "phone_code": "+1",
        "currency": "USD"
    },
    {
        "id": "89",
        "country_name": "Qatar",
        "country_code": "QA",
        "timezone": "AST",
        "timezone_offset": "180",
        "timezone_name": "Asia/Qatar",
        "phone_code": "+974",
        "currency": "USD"
    },
    {
        "id": "59",
        "country_name": "Republic of the Congo",
        "country_code": "CG",
        "timezone": "WAT",
        "timezone_offset": "60",
        "timezone_name": "Africa/Brazzaville",
        "phone_code": "+242",
        "currency": "USD"
    },
    {
        "id": "180",
        "country_name": "Reunion",
        "country_code": "RE",
        "timezone": "RET",
        "timezone_offset": "240",
        "timezone_name": "Indian/Reunion",
        "phone_code": "+262",
        "currency": "EUR"
    },
    {
        "id": "146",
        "country_name": "Romania",
        "country_code": "RO",
        "timezone": "EET",
        "timezone_offset": "120",
        "timezone_name": "Europe/Bucharest",
        "phone_code": "+40",
        "currency": "USD"
    },
    {
        "id": "184",
        "country_name": "Russia",
        "country_code": "RU",
        "timezone": "EET",
        "timezone_offset": "120",
        "timezone_name": "Europe/Kaliningrad",
        "phone_code": "+7",
        "currency": "USD"
    },
    {
        "id": "183",
        "country_name": "Rwanda",
        "country_code": "RW",
        "timezone": "CAT",
        "timezone_offset": "120",
        "timezone_name": "Africa/Kigali",
        "phone_code": "+250",
        "currency": "USD"
    },
    {
        "id": "171",
        "country_name": "Saint Barthelemy",
        "country_code": "BL",
        "timezone": "AST",
        "timezone_offset": "-240",
        "timezone_name": "America/St_Barthelemy",
        "phone_code": "+590",
        "currency": "EUR"
    },
    {
        "id": "71",
        "country_name": "Saint Helena",
        "country_code": "SH",
        "timezone": "GMT",
        "timezone_offset": "0",
        "timezone_name": "Atlantic/St_Helena",
        "phone_code": "+290",
        "currency": "USD"
    },
    {
        "id": "118",
        "country_name": "Saint Lucia",
        "country_code": "LC",
        "timezone": "AST",
        "timezone_offset": "-240",
        "timezone_name": "America/St_Lucia",
        "phone_code": "+1",
        "currency": "USD"
    },
    {
        "id": "204",
        "country_name": "Saint Martin",
        "country_code": "MF",
        "timezone": "AST",
        "timezone_offset": "-240",
        "timezone_name": "America/Marigot",
        "phone_code": "+590",
        "currency": "EUR"
    },
    {
        "id": "191",
        "country_name": "Samoa",
        "country_code": "WS",
        "timezone": "WSDT",
        "timezone_offset": "840",
        "timezone_name": "Pacific/Apia",
        "phone_code": "+685",
        "currency": "USD"
    },
    {
        "id": "29",
        "country_name": "San Marino",
        "country_code": "SM",
        "timezone": "CET",
        "timezone_offset": "60",
        "timezone_name": "Europe/San_Marino",
        "phone_code": "+378",
        "currency": "EUR"
    },
    {
        "id": "226",
        "country_name": "Saudi Arabia",
        "country_code": "SA",
        "timezone": "AST",
        "timezone_offset": "180",
        "timezone_name": "Asia/Riyadh",
        "phone_code": "+966",
        "currency": "USD"
    },
    {
        "id": "30",
        "country_name": "Senegal",
        "country_code": "SN",
        "timezone": "GMT",
        "timezone_offset": "0",
        "timezone_name": "Africa/Dakar",
        "phone_code": "+221",
        "currency": "USD"
    },
    {
        "id": "182",
        "country_name": "Serbia",
        "country_code": "RS",
        "timezone": "CET",
        "timezone_offset": "60",
        "timezone_name": "Europe/Belgrade",
        "phone_code": "+381",
        "currency": "USD"
    },
    {
        "id": "26",
        "country_name": "Seychelles",
        "country_code": "SC",
        "timezone": "SCT",
        "timezone_offset": "240",
        "timezone_name": "Indian/Mahe",
        "phone_code": "+248",
        "currency": "USD"
    },
    {
        "id": "28",
        "country_name": "Sierra Leone",
        "country_code": "SL",
        "timezone": "GMT",
        "timezone_offset": "0",
        "timezone_name": "Africa/Freetown",
        "phone_code": "+232",
        "currency": "USD"
    },
    {
        "id": "15",
        "country_name": "Sint Maarten",
        "country_code": "SX",
        "timezone": "AST",
        "timezone_offset": "-240",
        "timezone_name": "America/Lower_Princes",
        "phone_code": "+1721",
        "currency": "USD"
    },
    {
        "id": "35",
        "country_name": "Slovakia",
        "country_code": "SK",
        "timezone": "CET",
        "timezone_offset": "60",
        "timezone_name": "Europe/Bratislava",
        "phone_code": "+421",
        "currency": "EUR"
    },
    {
        "id": "33",
        "country_name": "Slovenia",
        "country_code": "SI",
        "timezone": "CET",
        "timezone_offset": "60",
        "timezone_name": "Europe/Ljubljana",
        "phone_code": "+386",
        "currency": "EUR"
    },
    {
        "id": "246",
        "country_name": "Solomon Islands",
        "country_code": "SB",
        "timezone": "SBT",
        "timezone_offset": "660",
        "timezone_name": "Pacific/Guadalcanal",
        "phone_code": "+677",
        "currency": "USD"
    },
    {
        "id": "244",
        "country_name": "Somalia",
        "country_code": "SO",
        "timezone": "EAT",
        "timezone_offset": "180",
        "timezone_name": "Africa/Mogadishu",
        "phone_code": "+252",
        "currency": "USD"
    },
    {
        "id": "250",
        "country_name": "South Africa",
        "country_code": "ZA",
        "timezone": "SAST",
        "timezone_offset": "120",
        "timezone_name": "Africa/Johannesburg",
        "phone_code": "+27",
        "currency": "USD"
    },
    {
        "id": "34",
        "country_name": "South Korea",
        "country_code": "KR",
        "timezone": "KST",
        "timezone_offset": "540",
        "timezone_name": "Asia/Seoul",
        "phone_code": "+82",
        "currency": "USD"
    },
    {
        "id": "16",
        "country_name": "South Sudan",
        "country_code": "SS",
        "timezone": "EAT",
        "timezone_offset": "180",
        "timezone_name": "Africa/Juba",
        "phone_code": "+211",
        "currency": "USD"
    },
    {
        "id": "225",
        "country_name": "Spain",
        "country_code": "ES",
        "timezone": "CET",
        "timezone_offset": "60",
        "timezone_name": "Europe/Madrid",
        "phone_code": "+34",
        "currency": "EUR"
    },
    {
        "id": "126",
        "country_name": "Sri Lanka",
        "country_code": "LK",
        "timezone": "IST",
        "timezone_offset": "330",
        "timezone_name": "Asia/Colombo",
        "phone_code": "+94",
        "currency": "USD"
    },
    {
        "id": "114",
        "country_name": "Sudan",
        "country_code": "SD",
        "timezone": "EAT",
        "timezone_offset": "180",
        "timezone_name": "Africa/Khartoum",
        "phone_code": "+249",
        "currency": "USD"
    },
    {
        "id": "27",
        "country_name": "Suriname",
        "country_code": "SR",
        "timezone": "SRT",
        "timezone_offset": "-180",
        "timezone_name": "America/Paramaribo",
        "phone_code": "+597",
        "currency": "USD"
    },
    {
        "id": "234",
        "country_name": "Svalbard and Jan Mayen",
        "country_code": "SJ",
        "timezone": "CET",
        "timezone_offset": "60",
        "timezone_name": "Arctic/Longyearbyen",
        "phone_code": "+47",
        "currency": "USD"
    },
    {
        "id": "19",
        "country_name": "Swaziland",
        "country_code": "SZ",
        "timezone": "SAST",
        "timezone_offset": "120",
        "timezone_name": "Africa/Mbabane",
        "phone_code": "+268",
        "currency": "USD"
    },
    {
        "id": "115",
        "country_name": "Sweden",
        "country_code": "SE",
        "timezone": "CET",
        "timezone_offset": "60",
        "timezone_name": "Europe/Stockholm",
        "phone_code": "+46",
        "currency": "USD"
    },
    {
        "id": "65",
        "country_name": "Switzerland",
        "country_code": "CH",
        "timezone": "CET",
        "timezone_offset": "60",
        "timezone_name": "Europe/Zurich",
        "phone_code": "+41",
        "currency": "USD"
    },
    {
        "id": "17",
        "country_name": "Syria",
        "country_code": "SY",
        "timezone": "EET",
        "timezone_offset": "120",
        "timezone_name": "Asia/Damascus",
        "phone_code": "+963",
        "currency": "USD"
    },
    {
        "id": "129",
        "country_name": "Taiwan",
        "country_code": "TW",
        "timezone": "CST",
        "timezone_offset": "480",
        "timezone_name": "Asia/Taipei",
        "phone_code": "+886",
        "currency": "USD"
    },
    {
        "id": "163",
        "country_name": "Tajikistan",
        "country_code": "TJ",
        "timezone": "TJT",
        "timezone_offset": "300",
        "timezone_name": "Asia/Dushanbe",
        "phone_code": "+992",
        "currency": "USD"
    },
    {
        "id": "216",
        "country_name": "Tanzania",
        "country_code": "TZ",
        "timezone": "EAT",
        "timezone_offset": "180",
        "timezone_name": "Africa/Dar_es_Salaam",
        "phone_code": "+255",
        "currency": "USD"
    },
    {
        "id": "103",
        "country_name": "Thailand",
        "country_code": "TH",
        "timezone": "ICT",
        "timezone_offset": "420",
        "timezone_name": "Asia/Bangkok",
        "phone_code": "+66",
        "currency": "USD"
    },
    {
        "id": "86",
        "country_name": "Togo",
        "country_code": "TG",
        "timezone": "GMT",
        "timezone_offset": "0",
        "timezone_name": "Africa/Lome",
        "phone_code": "+228",
        "currency": "USD"
    },
    {
        "id": "145",
        "country_name": "Tokelau",
        "country_code": "TK",
        "timezone": "TKT",
        "timezone_offset": "780",
        "timezone_name": "Pacific/Fakaofo",
        "phone_code": "+690",
        "currency": "USD"
    },
    {
        "id": "123",
        "country_name": "Tonga",
        "country_code": "TO",
        "timezone": "TOT",
        "timezone_offset": "780",
        "timezone_name": "Pacific/Tongatapu",
        "phone_code": "+676",
        "currency": "USD"
    },
    {
        "id": "128",
        "country_name": "Trinidad and Tobago",
        "country_code": "TT",
        "timezone": "AST",
        "timezone_offset": "-240",
        "timezone_name": "America/Port_of_Spain",
        "phone_code": "+1868",
        "currency": "USD"
    },
    {
        "id": "154",
        "country_name": "Tunisia",
        "country_code": "TN",
        "timezone": "CET",
        "timezone_offset": "60",
        "timezone_name": "Africa/Tunis",
        "phone_code": "+216",
        "currency": "USD"
    },
    {
        "id": "127",
        "country_name": "Turkey",
        "country_code": "TR",
        "timezone": "EET",
        "timezone_offset": "120",
        "timezone_name": "Europe/Istanbul",
        "phone_code": "+90",
        "currency": "USD"
    },
    {
        "id": "164",
        "country_name": "Turkmenistan",
        "country_code": "TM",
        "timezone": "TMT",
        "timezone_offset": "300",
        "timezone_name": "Asia/Ashgabat",
        "phone_code": "+993",
        "currency": "USD"
    },
    {
        "id": "130",
        "country_name": "Tuvalu",
        "country_code": "TV",
        "timezone": "TVT",
        "timezone_offset": "720",
        "timezone_name": "Pacific/Funafuti",
        "phone_code": "+688",
        "currency": "AUD"
    },
    {
        "id": "75",
        "country_name": "U.S. Virgin Islands",
        "country_code": "VI",
        "timezone": "AST",
        "timezone_offset": "-240",
        "timezone_name": "America/St_Thomas",
        "phone_code": "+1",
        "currency": "USD"
    },
    {
        "id": "217",
        "country_name": "Uganda",
        "country_code": "UG",
        "timezone": "EAT",
        "timezone_offset": "180",
        "timezone_name": "Africa/Kampala",
        "phone_code": "+256",
        "currency": "USD"
    },
    {
        "id": "90",
        "country_name": "Ukraine",
        "country_code": "UA",
        "timezone": "EET",
        "timezone_offset": "120",
        "timezone_name": "Europe/Kiev",
        "phone_code": "+380",
        "currency": "USD"
    },
    {
        "id": "105",
        "country_name": "Uruguay",
        "country_code": "UY",
        "timezone": "UYT",
        "timezone_offset": "-180",
        "timezone_name": "America/Montevideo",
        "phone_code": "+598",
        "currency": "USD"
    },
    {
        "id": "201",
        "country_name": "Uzbekistan",
        "country_code": "UZ",
        "timezone": "UZT",
        "timezone_offset": "300",
        "timezone_name": "Asia/Samarkand",
        "phone_code": "+998",
        "currency": "USD"
    },
    {
        "id": "47",
        "country_name": "Vanuatu",
        "country_code": "VU",
        "timezone": "VUT",
        "timezone_offset": "660",
        "timezone_name": "Pacific/Efate",
        "phone_code": "+678",
        "currency": "USD"
    },
    {
        "id": "82",
        "country_name": "Vatican",
        "country_code": "VA",
        "timezone": "CET",
        "timezone_offset": "60",
        "timezone_name": "Europe/Vatican",
        "phone_code": "+379",
        "currency": "EUR"
    },
    {
        "id": "239",
        "country_name": "Venezuela",
        "country_code": "VE",
        "timezone": "VET",
        "timezone_offset": "-270",
        "timezone_name": "America/Caracas",
        "phone_code": "+58",
        "currency": "USD"
    },
    {
        "id": "247",
        "country_name": "Vietnam",
        "country_code": "VN",
        "timezone": "ICT",
        "timezone_offset": "420",
        "timezone_name": "Asia/Ho_Chi_Minh",
        "phone_code": "+84",
        "currency": "USD"
    },
    {
        "id": "172",
        "country_name": "Wallis and Futuna",
        "country_code": "WF",
        "timezone": "WFT",
        "timezone_offset": "720",
        "timezone_name": "Pacific/Wallis",
        "phone_code": "+681",
        "currency": "USD"
    },
    {
        "id": "253",
        "country_name": "Western Sahara",
        "country_code": "EH",
        "timezone": "WET",
        "timezone_offset": "0",
        "timezone_name": "Africa/El_Aaiun",
        "phone_code": "+212",
        "currency": "USD"
    },
    {
        "id": "107",
        "country_name": "Yemen",
        "country_code": "YE",
        "timezone": "AST",
        "timezone_offset": "180",
        "timezone_name": "Asia/Aden",
        "phone_code": "+967",
        "currency": "USD"
    },
    {
        "id": "254",
        "country_name": "Zambia",
        "country_code": "ZM",
        "timezone": "CAT",
        "timezone_offset": "120",
        "timezone_name": "Africa/Lusaka",
        "phone_code": "+260",
        "currency": "USD"
    },
    {
        "id": "243",
        "country_name": "Zimbabwe",
        "country_code": "ZW",
        "timezone": "CAT",
        "timezone_offset": "120",
        "timezone_name": "Africa/Harare",
        "phone_code": "+263",
        "currency": "USD"
    }
];

(() => {
    const countrySelect = document.getElementById('countrySelect');
    countries.forEach(country => {
        const option = document.createElement('option');
        option.innerHTML = `${country.country_code}&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;${country.country_name}`;
        option.value = country.country_code;
        countrySelect.appendChild(option);
    });
    selectCountry({ target: { value: countries[0].country_name } });
    document.getElementById('selectedCountryCode').innerHTML = countries[0]['phone_code'];
    document.getElementById('countrySelect').value = countries[0]['country_code'];
})();

function saveLeadDetails(event, courseId, techStack, classMode) {
    event.preventDefault();

    // Get form inputs
    const name = document.getElementById('name');
    const phone = document.getElementById('phone');
    const email = document.getElementById('email');

    // Validate required fields
    if (!name.value || !filteredCountry['phone_code'] || !phone.value || !email.value) {
        alert('Please fill in all required fields.');
        return;
    }

    // Validate phone number format
    if (!/^[0-9]{10}$/.test(phone.value)) {
        alert('Please enter a valid phone number.');
        return;
    }

    // Validate email format
    if (!/^\S+@\S+\.\S+$/.test(email.value)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Prepare data object
    const leadData = {
        name: name.value,
        countryCode: filteredCountry['phone_code'],
        phone: phone.value,
        email: email.value,
        leadSource: 'Website',
        techStack,
        courseId,
        classMode,
        userId: 1,
        leadStatus: 'contacted',
        feeQuoted: 0,
        batchTiming: null,
    };

    // Create a new XMLHttpRequest object
    const xhr = new XMLHttpRequest();

    // Define the request method, URL, and set async to true
    xhr.open('POST', 'https://api.dev.crm.digitallync.ai/api/v1/leads');
    xhr.setRequestHeader('Content-Type', 'application/json');

    // Set up the onload function to handle the response
    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            name.value = null;
            email.value = null;
            phone.value = null;
            filteredCountry = {};
            document.getElementById('countrySelect').value = null;
            document.getElementById('selectedCountryCode').innerHTML = '';
            alert('Lead details saved successfully');
        } else {
            // Request failed
            console.error('Error saving lead details:', xhr.statusText);
            // Handle error if needed
            alert('Failed to save lead details, Please contact support team for further assistance.');
        }
    };

    // Set up the onerror function to handle errors
    xhr.onerror = function () {
        console.error('Error saving lead details:', xhr.statusText);
        // Handle error if needed
    };

    // Convert data object to JSON string and send the request
    xhr.send(JSON.stringify(leadData));
}

function selectCountry(event) {
    filteredCountry = countries.find(country => country.country_code === event.target.value);
    if (filteredCountry) {
        document.getElementById('selectedCountryCode').innerHTML = filteredCountry['phone_code'];
    }
}