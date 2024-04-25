export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Main {
  temp_min: number;
  temp_max: number;
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
