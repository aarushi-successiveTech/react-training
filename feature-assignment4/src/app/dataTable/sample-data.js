function createData(id, name, calories, fat, carbs, protein) {
  return { id, name, calories, fat, carbs, protein };
}

export const rows = [
  createData('d1', 'Cupcake', 305, 3.7, 67, 4.3),
  createData('d2', 'Donut', 452, 25.0, 51, 4.9),
  createData('d3', 'Eclair', 262, 16.0, 24, 6.0),
  createData('d4', 'Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('d5', 'Gingerbread', 356, 16.0, 49, 3.9),
  createData('d6', 'Honeycomb', 408, 3.2, 87, 6.5),
  createData('d7', 'Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('d8', 'Jelly Bean', 375, 0.0, 94, 0.0),
  createData('d9', 'KitKat', 518, 26.0, 65, 7.0),
  createData('d10', 'Lollipop', 392, 0.2, 98, 0.0),
  createData('d11', 'Marshmallow', 318, 0, 81, 2.0),
  createData('d12', 'Nougat', 360, 19.0, 9, 37.0),
  createData('d13', 'Oreo', 437, 18.0, 63, 4.0),
];

export const headCells = [
  { id: 'name', numeric: false, label: 'Dessert (100g serving)' },
  { id: 'calories', numeric: true, label: 'Calories' },
  { id: 'fat', numeric: true, label: 'Fat (g)' },
  { id: 'carbs', numeric: true, label: 'Carbs (g)' },
  { id: 'protein', numeric: true, label: 'Protein (g)' },
];