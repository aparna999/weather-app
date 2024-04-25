export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Main {
  temp: number;
  temp_min: number;
  temp_max: number;
  humidity: number;
}

export interface List {
  dt: number;
  main: Main;
  weather: Weather[];
  dt_txt: string;
}

export interface WeatherData {
  list: List[];
}
