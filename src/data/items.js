// Units are in percentage positions of the image

const itemsData = [
  // SCENE-0
  [
    {
      id: 1,
      name: 'red pump',
      x: 3.2,
      y: 65.5,
      width: 7,
      height: 7.2,
    },
    {
      id: 2,
      name: 'tong',
      x: 11.4,
      y: 73,
      width: 5,
      height: 7.5,
    },
    {
      id: 3,
      name: 'dark botelya',
      x: 20.6,
      y: 63,
      width: 4.2,
      height: 18.4,
    },
    {
      id: 4,
      name: 'disecting set',
      x: 0,
      y: 74.5,
      width: 10.4,
      height: 14,
    },
    {
      id: 5,
      name: 'dikdikan',
      x: 7.6,
      y: 57.5,
      width: 7.5,
      height: 10,
    },
    {
      id: 6,
      name: 'malaking test tube',
      x: 22,
      y: 32.5,
      width: 3.5,
      height: 26.5,
    },
    {
      id: 7,
      name: 'mataas na flask',
      x: 26,
      y: 37,
      width: 4,
      height: 24,
    },
    {
      id: 8,
      name: 'screen',
      x: 31.2,
      y: 0,
      width: 10.5,
      height: 13.5,
    },
    {
      id: 9,
      name: 'spoontula',
      x: 39.2,
      y: 31.5,
      width: 2.3,
      height: 22.5,
    },
    {
      id: 10,
      name: 'malaking termometer',
      x: 25.5,
      y: 61.5,
      width: 7.8,
      height: 10,
    },
    {
      id: 11,
      name: 'test tube rack',
      x: 28.8,
      y: 71,
      width: 8.7,
      height: 28.5,
    },
    {
      id: 12,
      name: 'vials',
      x: 36.3,
      y: 58,
      width: 5.8,
      height: 16.5,
    },
    {
      id: 13,
      name: 'red Ts',
      x: 43,
      y: 66.8,
      width: 8,
      height: 7.5,
    },
    {
      id: 14,
      name: 'paper strips',
      x: 40.5,
      y: 77,
      width: 8,
      height: 7.6,
    },
    {
      id: 15,
      name: 'paper de hapon',
      x: 38.5,
      y: 86,
      width: 11,
      height: 12.7,
    },
    {
      id: 16,
      name: 'slides',
      x: 49.2,
      y: 74,
      width: 9.2,
      height: 18.7,
    },
    {
      id: 17,
      name: 'flat weight',
      x: 55.5,
      y: 66,
      width: 16.8,
      height: 19.5,
    },
    {
      id: 18,
      name: 'brush for bottle',
      x: 50,
      y: 5.5,
      width: 14,
      height: 9.8,
    },
    {
      id: 19,
      name: 'plastic pitsel',
      x: 64,
      y: 1.7,
      width: 4.6,
      height: 11.3,
    },
    {
      id: 20,
      name: 'bottle with takip',
      x: 73.6,
      y: 0.8,
      width: 5.8,
      height: 15.5,
    },
    {
      id: 21,
      name: 'spring weight',
      x: 70,
      y: 80,
      width: 10.7,
      height: 6.5,
    },
    {
      id: 22,
      name: 'magnet',
      x: 67,
      y: 87.5,
      width: 9.5,
      height: 5.5,
    },
    {
      id: 23,
      name: 'inertia tube',
      x: 67.3,
      y: 93.5,
      width: 13.5,
      height: 6,
    },
    {
      id: 24,
      name: 'microscope',
      x: 83,
      y: 49.5,
      width: 12.8,
      height: 46,
    },
    {
      id: 25,
      name: 'magnifying glass',
      x: 82.2,
      y: 23.5,
      width: 6.5,
      height: 16.5,
    },
  ],

  // SCENE-1
  [
    {
      id: 1,
      name: 'microscope',
      x: 3,
      y: 16,
      width: 19,
      height: 68,
    },
    {
      id: 2,
      name: 'stop watch',
      x: 11,
      y: 79,
      width: 17,
      height: 14,
    },
    {
      id: 3,
      name: 'lens',
      x: 21.8,
      y: 56,
      width: 21,
      height: 24,
    },
    {
      id: 4,
      name: 'pandikdik',
      x: 24.2,
      y: 40,
      width: 10.4,
      height: 18,
    },
    {
      id: 5,
      name: 'spring weigh',
      x: 30.2,
      y: 0,
      width: 2.5,
      height: 17.5,
    },
    {
      id: 6,
      name: 'blue ring test tube',
      x: 40,
      y: 19,
      width: 5,
      height: 46,
    },
    {
      id: 7,
      name: 'flame tripod',
      x: 45.7,
      y: 57,
      width: 18.5,
      height: 39.6,
    },
    {
      id: 8,
      name: 'test tube rack',
      x: 45.7,
      y: 28,
      width: 11,
      height: 32.5,
    },
    {
      id: 9,
      name: 'gas bottle',
      x: 63,
      y: 57,
      width: 8.2,
      height: 24.5,
    },
    {
      id: 10,
      name: 'big tong',
      x: 69.4,
      y: 60,
      width: 19,
      height: 7.5,
    },
    {
      id: 11,
      name: 'gloves',
      x: 72,
      y: 70,
      width: 24.2,
      height: 29,
    },
    {
      id: 12,
      name: 'specimen dish',
      x: 88.8,
      y: 53,
      width: 9.5,
      height: 14,
    },
    {
      id: 13,
      name: 'beam balance',
      x: 90.8,
      y: 28.5,
      width: 6.5,
      height: 24.5,
    },
    {
      id: 'beam balance',
      name: 'gas tube',
      x: 59.8,
      y: 25.7,
      width: 30.3,
      height: 32,
    },
  ],

  // SCENE-2
  [
    {
      id: 1,
      name: 'thermometer',
      x: 6.2,
      y: 0,
      width: 1.5,
      height: 43,
    },
    {
      id: 2,
      name: 'barometer',
      x: 11.8,
      y: 47.8,
      width: 7,
      height: 11.5,
    },
    {
      id: 3,
      name: 'beaker',
      x: 22,
      y: 59.5,
      width: 7.2,
      height: 19.5,
    },
    {
      id: 4,
      name: 'glass stirer',
      x: 11,
      y: 78.2,
      width: 16.8,
      height: 12.5,
    },
    {
      id: 5,
      name: 'dropper',
      x: 8,
      y: 90,
      width: 8.5,
      height: 9.5,
    },
    {
      id: 6,
      name: 'ceramic bowl',
      x: 34.5,
      y: 71.5,
      width: 6,
      height: 8.5,
    },
    {
      id: 7,
      name: 'dark glass',
      x: 34,
      y: 47,
      width: 4.5,
      height: 20,
    },
    {
      id: 8,
      name: 'long neck flask',
      x: 40.2,
      y: 27.3,
      width: 4.5,
      height: 29,
    },
    {
      id: 9,
      name: 'clear vessle',
      x: 44.6,
      y: 44,
      width: 4.5,
      height: 19.6,
    },
    {
      id: 10,
      name: 'soil tester',
      x: 48,
      y: 17,
      width: 2.4,
      height: 32.5,
    },
    {
      id: 11,
      name: 'tall test tube',
      x: 52.4,
      y: 16.4,
      width: 3.5,
      height: 26.8,
    },
    {
      id: 12,
      name: 'metal tray',
      x: 55,
      y: 30,
      width: 10.4,
      height: 10,
    },
    {
      id: 13,
      name: 'litmus paper',
      x: 42,
      y: 67.8,
      width: 5.4,
      height: 6,
    },
    {
      id: 14,
      name: 'glass dish',
      x: 42.8,
      y: 77.4,
      width: 7,
      height: 6.6,
    },
    {
      id: 15,
      name: 'cork',
      x: 45.2,
      y: 85,
      width: 6.6,
      height: 10.5,
    },
    {
      id: 16,
      name: 'rubber cork',
      x: 56.3,
      y: 85.5,
      width: 6.6,
      height: 8.5,
    },
    {
      id: 17,
      name: 'magnet',
      x: 52.6,
      y: 74,
      width: 8.8,
      height: 11,
    },
    {
      id: 18,
      name: 'brush bottle',
      x: 48,
      y: 58,
      width: 13,
      height: 12,
    },
    {
      id: 19,
      name: 'flash light',
      x: 55.4,
      y: 49,
      width: 7.8,
      height: 9,
    },
    {
      id: 20,
      name: 'glass funnel',
      x: 60,
      y: 37,
      width: 9.5,
      height: 12,
    },
    {
      id: 21,
      name: 'chem electricity ckt',
      x: 65.8,
      y: 21,
      width: 13,
      height: 20,
    },
    {
      id: 22,
      name: 'disecting set',
      x: 60,
      y: 60,
      width: 19.5,
      height: 19,
    },
    {
      id: 23,
      name: 'plastic thermometer',
      x: 67.5,
      y: 48,
      width: 5,
      height: 12,
    },
    {
      id: 24,
      name: 'red T',
      x: 75.6,
      y: 48,
      width: 6.8,
      height: 8.5,
    },
    {
      id: 25,
      name: 'lens set',
      x: 77.6,
      y: 41,
      width: 9.6,
      height: 8.5,
    },
    {
      id: 26,
      name: 'test tube rack',
      x: 83.5,
      y: 23.5,
      width: 6.8,
      height: 18.5,
    },
    {
      id: 27,
      name: 'square plate weigh',
      x: 81.5,
      y: 66,
      width: 15.3,
      height: 28.8,
    },
    {
      id: 28,
      name: 'dikdikan',
      x: 64.8,
      y: 14,
      width: 4.5,
      height: 7,
    },
    {
      id: 29,
      name: 'microscope',
      x: 70.6,
      y: 0,
      width: 6.9,
      height: 24,
    },
    {
      id: 30,
      name: 'plastic dish case',
      x: 29.5,
      y: 82,
      width: 10.4,
      height: 12,
    },
  ],

  // SCENE-3
  [
    {
      id: 1,
      name: 'test tube rack',
      x: 2.6,
      y: 28,
      width: 7.2,
      height: 18.5,
    },
    {
      id: 2,
      name: 'beam balance',
      x: 18.2,
      y: 4,
      width: 16.5,
      height: 22.5,
    },
    {
      id: 3,
      name: 'chem electricity ckt',
      x: 35.9,
      y: 8.6,
      width: 9.6,
      height: 18.8,
    },
    {
      id: 4,
      name: 'glass funnel',
      x: 47,
      y: 19.6,
      width: 9,
      height: 12.4,
    },
    {
      id: 5,
      name: 'vials',
      x: 29.6,
      y: 26,
      width: 7.8,
      height: 15.6,
    },
    {
      id: 6,
      name: 'tall large test tube',
      x: 27,
      y: 37,
      width: 4,
      height: 31.6,
    },
    {
      id: 7,
      name: 'long neck flask',
      x: 21.3,
      y: 42,
      width: 4.8,
      height: 28.9,
    },
    {
      id: 8,
      name: 'flask',
      x: 13.8,
      y: 36.6,
      width: 5.5,
      height: 20.9,
    },
    {
      id: 9,
      name: 'ammeter',
      x: 31.5,
      y: 55.5,
      width: 6.6,
      height: 17.3,
    },
    {
      id: 10,
      name: 'gas burner',
      x: 40.6,
      y: 70.4,
      width: 6.7,
      height: 15.3,
    },
    {
      id: 11,
      name: 'gas pipe',
      x: 37.2,
      y: 28.8,
      width: 4.3,
      height: 20,
    },
    {
      id: 12,
      name: 'slides set',
      x: 44.4,
      y: 44,
      width: 10.6,
      height: 14,
    },
    {
      id: 13,
      name: 'barometer',
      x: 57,
      y: 55,
      width: 6.8,
      height: 8.9,
    },
    {
      id: 14,
      name: 'specimen dish',
      x: 65.8,
      y: 61.6,
      width: 9.2,
      height: 11,
    },
    {
      id: 15,
      name: 'laser',
      x: 76.7,
      y: 59.5,
      width: 5.8,
      height: 9.8,
    },
    {
      id: 16,
      name: 'laser',
      x: 76.7,
      y: 59.5,
      width: 5.8,
      height: 9.8,
    },
    {
      id: 17,
      name: 'timer',
      x: 58.5,
      y: 13,
      width: 5.1,
      height: 13.5,
    },
    {
      id: 18,
      name: 'red rubber',
      x: 45,
      y: 31.6,
      width: 5.1,
      height: 8.5,
    },
    {
      id: 19,
      name: 'brush',
      x: 67,
      y: 41.6,
      width: 10.5,
      height: 10.6,
    },
    {
      id: 20,
      name: 'earth core',
      x: 76,
      y: 0,
      width: 20,
      height: 40.6,
    },
  ],

  // SCENE-4
  [
    {
      id: 1,
      name: 'disecting set',
      x: 1.4,
      y: 23.7,
      width: 13.8,
      height: 16.5,
    },
    {
      id: 2,
      name: 'voltmeter',
      x: 17.8,
      y: 18.3,
      width: 5.8,
      height: 12.8,
    },
    {
      id: 3,
      name: 'chem electricity ckt',
      x: 25.8,
      y: 5.3,
      width: 9.6,
      height: 18.4,
    },
    {
      id: 4,
      name: 'slide set',
      x: 35,
      y: 12.8,
      width: 8,
      height: 6.4,
    },
    {
      id: 5,
      name: 'rubber cork',
      x: 44.6,
      y: 10,
      width: 2.6,
      height: 3,
    },
    {
      id: 6,
      name: 'cork',
      x: 47,
      y: 12,
      width: 2.6,
      height: 4,
    },
    {
      id: 7,
      name: 'gloves',
      x: 50.8,
      y: 16,
      width: 6.2,
      height: 16.6,
    },
    {
      id: 8,
      name: 'tin pan',
      x: 36.6,
      y: 33.8,
      width: 9.5,
      height: 9.6,
    },
    {
      id: 9,
      name: 'prism',
      x: 33,
      y: 42,
      width: 5.5,
      height: 8.8,
    },
    {
      id: 10,
      name: 'plastic droper container',
      x: 29.6,
      y: 40.8,
      width: 3.6,
      height: 15,
    },
    {
      id: 11,
      name: 'beam balance',
      x: 33,
      y: 51.8,
      width: 9.2,
      height: 20.5,
    },
    {
      id: 12,
      name: 'microscope',
      x: 34.2,
      y: 72,
      width: 7.3,
      height: 25.5,
    },
    {
      id: 13,
      name: 'spoontula',
      x: 44.8,
      y: 89.3,
      width: 5,
      height: 4,
    },
    {
      id: 14,
      name: 'flat white weigh',
      x: 41.2,
      y: 63.3,
      width: 10.4,
      height: 20,
    },
    {
      id: 15,
      name: 'goggles',
      x: 59.3,
      y: 20.8,
      width: 4,
      height: 15.2,
    },
    {
      id: 16,
      name: 'lens set',
      x: 60.8,
      y: 80,
      width: 12.4,
      height: 17.8,
    },
    {
      id: 17,
      name: 'laser',
      x: 75,
      y: 87,
      width: 4.8,
      height: 12.8,
    },
    {
      id: 18,
      name: 'flash light',
      x: 79.8,
      y: 88,
      width: 15.5,
      height: 11.8,
    },
    {
      id: 19,
      name: 'barometer',
      x: 79,
      y: 74,
      width: 9,
      height: 13,
    },
    {
      id: 20,
      name: 'chem electricity ckt',
      x: 85.2,
      y: 40.8,
      width: 10,
      height: 40,
    },
    {
      id: 21,
      name: 'petri dish',
      x: 3,
      y: 82,
      width: 10,
      height: 11,
    },
    {
      id: 22,
      name: 'large tong',
      x: 24.6,
      y: 71,
      width: 3.8,
      height: 21.4,
    },
    {
      id: 23,
      name: 'thermometer',
      x: 26.4,
      y: 41,
      width: 2,
      height: 25,
    },
    {
      id: 24,
      name: 'chacko',
      x: 17,
      y: 26,
      width: 13.2,
      height: 13.8,
    },
    {
      id: 25,
      name: 'tripod',
      x: 4,
      y: 61,
      width: 10.8,
      height: 23.4,
    },
  ],
];

export default itemsData;
