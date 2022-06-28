type Label = {
    name: string;
    translations: {
        [key: string]: string;
    };
};

const labels: Label[] = [
    {
        name: 'NavigationHome',
        translations: {
            pl: 'Kokpit',
            en: 'Home',
        },
    },
    {
        name: 'NavigationStations',
        translations: {
            pl: 'Stacje',
            en: 'Stations',
        },
    },
    {
        name: 'NavigationSettings',
        translations: {
            pl: 'Ustawienia',
            en: 'Settings',
        },
    },
    {
        name: 'AccidentsHandled',
        translations: {
            pl: 'obsłużone wypadki',
            en: 'accidents handled',
        },
    },
    {
        name: 'Accidents',
        translations: {
            pl: 'wypadki',
            en: 'accidents',
        },
    },
    {
        name: 'MilesOfTowing',
        translations: {
            pl: 'mil holowania',
            en: 'miles of towing',
        },
    },
    {
        name: 'TrucksAvailable',
        translations: {
            pl: 'dostępnych lawet',
            en: 'trucks available',
        },
    },
    {
        name: 'Trucks',
        translations: {
            pl: 'lawety',
            en: 'trucks',
        },
    },
    {
        name: 'ChatStations',
        translations: {
            pl: 'Stacje',
            en: 'Stations',
        },
    },
    {
        name: 'ChatDrivers',
        translations: {
            pl: 'Kierowcy',
            en: 'Drivers',
        },
    },
    {
        name: 'Drivers',
        translations: {
            pl: 'kierowcy',
            en: 'drivers',
        },
    },
    {
        name: 'Driver',
        translations: {
            pl: 'Kierowca',
            en: 'Driver',
        },
    },
    {
        name: 'MostRecentAccident',
        translations: {
            pl: 'Ostatni wypadek',
            en: 'Most recent accident',
        },
    },
    {
        name: 'LastUpdate',
        translations: {
            pl: 'ostatnia aktualizacja: {}',
            en: 'last update: {}',
        },
    },
    {
        name: 'Miles',
        translations: {
            pl: '{} mil',
            en: '{} miles',
        },
    },
    {
        name: 'From',
        translations: {
            pl: 'z: {}',
            en: 'from: {}',
        },
    },
    {
        name: 'MinutesAgo',
        translations: {
            pl: '{} minut temu',
            en: '{} minutes ago',
        },
    },
    {
        name: 'HoursAgo',
        translations: {
            pl: '{} godzin temu',
            en: '{} hours ago',
        },
    },
    {
        name: 'DaysAgo',
        translations: {
            pl: '{} dni temu',
            en: '{} days ago',
        },
    },
    {
        name: 'InMinutes',
        translations: {
            pl: 'za {} minut',
            en: 'in {} minutes',
        },
    },
    {
        name: 'InHours',
        translations: {
            pl: 'za {} godzin',
            en: 'in {} hours',
        },
    },
    {
        name: 'InDays',
        translations: {
            pl: 'za {} dni',
            en: 'in {} days',
        },
    },
    {
        name: 'Now',
        translations: {
            pl: 'teraz',
            en: 'now',
        },
    },
    {
        name: 'FastestArrival',
        translations: {
            pl: 'najszybsze przybycie: {}',
            en: 'fastest arrival: {}',
        },
    },
    {
        name: 'Locate',
        translations: {
            pl: 'Zlokalizuj',
            en: 'Locate',
        },
    },
    {
        name: 'SendTruck',
        translations: {
            pl: 'Wyślij lawetę',
            en: 'Send truck',
        },
    },
    {
        name: 'MilesAway',
        translations: {
            pl: '{} mil stąd',
            en: '{} miles away',
        },
    },
    {
        name: 'in_progress',
        translations: {
            pl: 'w trakcie',
            en: 'in progress',
        },
    },
    {
        name: 'completed',
        translations: {
            pl: 'ukończono',
            en: 'completed',
        },
    },
    {
        name: 'missed',
        translations: {
            pl: 'pominięto',
            en: 'missed',
        },
    },
    {
        name: 'FetchingStationsFailed',
        translations: {
            pl: 'Ładowanie stacji zakończone niepowodzeniem',
            en: 'Fetching stations failed',
        },
    },
    {
        name: 'FetchingStatisticsFailed',
        translations: {
            pl: 'Ładowanie statystyk zakończone niepowodzeniem',
            en: 'Fetching statistics failed',
        },
    },
    {
        name: 'FetchingAccidentsFailed',
        translations: {
            pl: 'Ładowanie wypadków zakończone niepowodzeniem',
            en: 'Fetching accidents failed',
        },
    },
    {
        name: 'FetchingChatsFailed',
        translations: {
            pl: 'Ładowanie czatu zakończone niepowodzeniem',
            en: 'Fetching chats failed',
        },
    },
    {
        name: 'FetchingUserDataFailed',
        translations: {
            pl: 'Ładowanie danych użytkownika zakończone niepowodzeniem',
            en: 'Fetching user data failed',
        },
    },
    {
        name: 'FetchingHistoryFailed',
        translations: {
            pl: 'Ładowanie historii zakończone niepowodzeniem',
            en: 'Fetching history failed',
        },
    },
    {
        name: 'Manager',
        translations: {
            pl: 'kierownik: {}',
            en: 'manager: {}',
        },
    },
    {
        name: 'Stations',
        translations: {
            pl: 'stacje',
            en: 'stations',
        },
    },
    {
        name: 'History',
        translations: {
            pl: 'Historia',
            en: 'History',
        },
    },
    {
        name: 'Status',
        translations: {
            pl: 'Status',
            en: 'Status',
        },
    },
    {
        name: 'Mileage',
        translations: {
            pl: 'Odległość',
            en: 'Mileage',
        },
    },
    {
        name: 'Duration',
        translations: {
            pl: 'Czas trwania',
            en: 'Duration',
        },
    },
    {
        name: 'DurationValueHoursMinutes',
        translations: {
            pl: '{}g {}m',
            en: '{}h {}m',
        },
    },
    {
        name: 'DurationValueMinutes',
        translations: {
            pl: '{}m',
            en: '{}m',
        },
    },
];

export default labels;
