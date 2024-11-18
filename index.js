/* Declarations Section */
// Responsables de los cuarteles
const paddockManagers = [
  { id: 1, taxNumber: "132254524", name: "JUAN TAPIA BURGOS" },
  { id: 2, taxNumber: "143618668", name: "EFRAIN SOTO VERA" },
  { id: 3, taxNumber: "78903228", name: "CARLOS PEREZ GONZALEZ" },
  { id: 4, taxNumber: "176812737", name: "ANDRES VIÑALES CIENFUEGOS" },
  { id: 5, taxNumber: "216352696", name: "OSCAR PEREZ ZUÑIGA" },
  { id: 6, taxNumber: "78684747", name: "JOAQUIN ANDRADE SANDOVAL" },
];

// Tipo de cuartel, en el cual se utiliza el tipo de producto plantado
const paddockType = [
  { id: 1, name: "PALTOS" },
  { id: 2, name: "AVELLANOS" },
  { id: 3, name: "CEREZAS" },
  { id: 4, name: "NOGALES" },
];

// Un paddock representa un cuartel de un campo (Entiéndase también como potrero o parcela), el área está representada en m2, harvestYear es el año en el que se sembró el cuartel
const paddocks = [
  {
    paddockManagerId: 6,
    farmId: 1,
    paddockTypeId: 1,
    harvestYear: 2019,
    area: 1200,
  },
  {
    paddockManagerId: 1,
    farmId: 3,
    paddockTypeId: 4,
    harvestYear: 2019,
    area: 500,
  },
  {
    paddockManagerId: 5,
    farmId: 3,
    paddockTypeId: 2,
    harvestYear: 2020,
    area: 20000,
  },
  {
    paddockManagerId: 2,
    farmId: 2,
    paddockTypeId: 3,
    harvestYear: 2021,
    area: 8401,
  },
  {
    paddockManagerId: 3,
    farmId: 1,
    paddockTypeId: 1,
    harvestYear: 2020,
    area: 2877,
  },
  {
    paddockManagerId: 5,
    farmId: 2,
    paddockTypeId: 2,
    harvestYear: 2017,
    area: 15902,
  },
  {
    paddockManagerId: 3,
    farmId: 3,
    paddockTypeId: 2,
    harvestYear: 2018,
    area: 1736,
  },
  {
    paddockManagerId: 2,
    farmId: 3,
    paddockTypeId: 3,
    harvestYear: 2020,
    area: 2965,
  },
  {
    paddockManagerId: 4,
    farmId: 3,
    paddockTypeId: 4,
    harvestYear: 2018,
    area: 1651,
  },
  {
    paddockManagerId: 5,
    farmId: 1,
    paddockTypeId: 1,
    harvestYear: 2018,
    area: 700,
  },
  {
    paddockManagerId: 1,
    farmId: 2,
    paddockTypeId: 1,
    harvestYear: 2019,
    area: 7956,
  },
  {
    paddockManagerId: 5,
    farmId: 3,
    paddockTypeId: 2,
    harvestYear: 2020,
    area: 3745,
  },
  {
    paddockManagerId: 6,
    farmId: 1,
    paddockTypeId: 3,
    harvestYear: 2021,
    area: 11362,
  },
  {
    paddockManagerId: 2,
    farmId: 3,
    paddockTypeId: 3,
    harvestYear: 2021,
    area: 300,
  },
  {
    paddockManagerId: 3,
    farmId: 2,
    paddockTypeId: 2,
    harvestYear: 2020,
    area: 19188,
  },
  {
    paddockManagerId: 3,
    farmId: 1,
    paddockTypeId: 1,
    harvestYear: 2019,
    area: 17137,
  },
  {
    paddockManagerId: 4,
    farmId: 3,
    paddockTypeId: 2,
    harvestYear: 2020,
    area: 100,
  },
  {
    paddockManagerId: 2,
    farmId: 1,
    paddockTypeId: 3,
    harvestYear: 2019,
    area: 11845,
  },
  {
    paddockManagerId: 5,
    farmId: 2,
    paddockTypeId: 1,
    harvestYear: 2018,
    area: 15969,
  },
  {
    paddockManagerId: 1,
    farmId: 3,
    paddockTypeId: 1,
    harvestYear: 2029,
    area: 10420,
  },
  {
    paddockManagerId: 5,
    farmId: 2,
    paddockTypeId: 3,
    harvestYear: 2010,
    area: 3200,
  },
  {
    paddockManagerId: 6,
    farmId: 1,
    paddockTypeId: 2,
    harvestYear: 2012,
    area: 10587,
  },
  {
    paddockManagerId: 2,
    farmId: 2,
    paddockTypeId: 2,
    harvestYear: 2018,
    area: 16750,
  },
];

const farms = [
  { id: 1, name: "AGRICOLA SANTA ANA" },
  { id: 2, name: "VINA SANTA PAULA" },
  { id: 3, name: "FORESTAL Y AGRICOLA LO ENCINA" },
];

/* Problems Section */
// Tip: Una hectárea equivale a 10.000m2

// 0 Arreglo con los ids de los responsables de cada cuartel
function listPaddockManagerIds() {
  return paddockManagers.map((paddockManager) => paddockManager.id);
}

// 1 Arreglo con los ruts de los responsables de los cuarteles, ordenados por nombre
function listPaddockManagersByName() {
  // CODE HERE
  const compareNames = (a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  };

  const sortedManagers = paddockManagers.sort(compareNames);
  return sortedManagers.map(({ taxNumber }) => taxNumber);
}

// 2 Arreglo con los nombres de cada tipo de cultivo, ordenados decrecientemente por la suma TOTAL de la cantidad de hectáreas plantadas de cada uno de ellos.
function sortPaddockTypeByTotalArea() {
  // CODE HERE
  const HECTARE_CONVERSION = 10000;

  const groupTypes = ({ id, name }) => {
    const filt = paddocks.filter((el) => el.paddockTypeId === id);
    const totalArea = filt.reduce((total, value) => total + value.area, 0);
    const hectares = totalArea / HECTARE_CONVERSION;
    return { name, hectares };
  };

  const groupedTypes = paddockType.map(groupTypes);
  const sortedTypes = groupedTypes.sort((a, b) => b.hectares - a.hectares);
  return sortedTypes.map(({ name }) => name);
}

// 3 Arreglo con los nombres de los administradores, ordenados decrecientemente por la suma TOTAL de hectáreas que administran.
function sortFarmManagerByAdminArea() {
  // CODE HERE
  const HECTARE_CONVERSION = 10000;

  const groupMNGT = ({ id, name }) => {
    const filtered = paddocks.filter((el) => el.paddockManagerId === id);
    const totalArea = filtered.reduce((total, value) => total + value.area, 0);
    const hectares = totalArea / HECTARE_CONVERSION;
    return { name, hectares };
  };

  const groupedMNGT = paddockManagers.map(groupMNGT);
  const sortedMNGT = groupedMNGT.sort((a, b) => b.hectares - a.hectares);
  return sortedMNGT.map(({ name }) => name);
}

// 4 Objeto en que las claves sean los nombres de los campos y los valores un arreglo con los ruts de sus administradores ordenados alfabéticamente por nombre.
function farmManagerNames() {
  // CODE HERE
  const groupFarms = ({ id, name }) => {
    const groupedManagers = [];
    const filtered = paddocks.filter(({ farmId }) => farmId === id);
    const managerIds = filtered.map(({ paddockManagerId }) => paddockManagerId);
    const uniqueIds = [...new Set(managerIds)];
    for (const uniqueId of uniqueIds) {
      const manager = paddockManagers.find(({ id }) => id === uniqueId);
      groupedManagers.push(manager);
    }
    const sortedManagers = groupedManagers.sort(compareNames);
    const groupedTaxNumbers = sortedManagers.map(({ taxNumber }) => taxNumber);
    return { [name]: groupedTaxNumbers };
  };

  const compareNames = (a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  };

  const groupedFarms = farms.map(groupFarms);
  return groupedFarms.reduce((total, value) => ({ ...total, ...value }));
}

// 5 Arreglo ordenado decrecientemente con los m2 totales de cada campo que tengan más de 2 hectáreas en Paltos
function biggestAvocadoFarms() {
  // CODE HERE
  const HECTARE_CONVERSION = 10000;
  const PALTOS_ID = 1;
  const MIN_HECTARE = 2;

  const groupFarms = ({ id }) => {
    const farm = paddocks.filter(({ farmId }) => farmId === id);
    const totalArea = farm.reduce(reduceArea, 0);
    const paltos = farm.filter((el) => el.paddockTypeId === PALTOS_ID);
    const paltosArea = paltos.reduce(reduceArea, 0);
    const paltosHectares = paltosArea / HECTARE_CONVERSION;
    return { paltosHectares, totalArea };
  };

  const reduceArea = (total, value) => total + value.area;

  const groupedFarms = farms.map(groupFarms);
  const filtered = groupedFarms.filter((el) => el.paltosHectares > MIN_HECTARE);
  const sortedFarms = filtered.sort((a, b) => b.totalArea - a.totalArea);
  return sortedFarms.map(({ totalArea }) => totalArea);
}

// 6 Arreglo con nombres de los administradores de la FORESTAL Y AGRÍCOLA LO ENCINA, ordenados por nombre, que trabajen más de 1000 m2 de Cerezas
function biggestCherriesManagers() {
  // CODE HERE
  const FARM_ID = 3;
  const TYPE_ID = 3;
  const MIN_M2 = 1000;

  const filterCerezas = ({ id }) => {
    const filtered = paddocks.filter(
      (el) => el.paddockTypeId === TYPE_ID && el.paddockManagerId === id
    );
    const cerezas = filtered.reduce((total, value) => total + value.area, 0);
    return cerezas > MIN_M2;
  };

  const filterFarms = ({ id }) => {
    const filtered = paddocks.filter((el) => el.paddockManagerId === id);
    return filtered.find((el) => el.farmId === FARM_ID);
  };

  const compareNames = (a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  };

  const filteredCerezas = paddockManagers.filter(filterCerezas);
  const filteredFarms = filteredCerezas.filter(filterFarms);
  const sortedManagers = filteredFarms.sort(compareNames);
  return sortedManagers.map(({ name }) => name);
}

// 7 Objeto en el cual las claves sean el nombre del administrador y el valor un arreglo con los nombres de los campos que administra, ordenados alfabéticamente
function farmManagerPaddocks() {
  // CODE HERE
  const groupMNGT = ({ id, name }) => {
    const groupedFarms = [];
    const filtered = paddocks.filter((el) => el.paddockManagerId === id);
    const farmIds = filtered.map(({ farmId }) => farmId);
    const uniqueIds = [...new Set(farmIds)];
    for (const uniqueId of uniqueIds) {
      const { name } = farms.find(({ id }) => id === uniqueId);
      groupedFarms.push(name);
    }
    groupedFarms.sort(compareNames);
    return { [name]: groupedFarms };
  };

  const compareNames = (a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  };

  const groupedMNGT = paddockManagers.map(groupMNGT);
  return groupedMNGT.reduce((total, value) => ({ ...total, ...value }));
}

// 8 Objeto en que las claves sean el tipo de cultivo concatenado con su año de plantación (la concatenación tiene un separador de guión ‘-’, por ejemplo AVELLANOS-2020) y el valor otro objeto en el cual la clave sea el id del administrador y el valor el nombre del administrador
function paddocksManagers() {
  // CODE HERE
  const objArr = [];

  const removeDuplicates = (objArr) => {
    const filtered = objArr.filter(
      (value, index, self) =>
        index ===
        self.findIndex(
          (el) =>
            el.paddockManagerId === value.paddockManagerId &&
            el.paddockTypeId === value.paddockTypeId &&
            el.harvestYear === value.harvestYear
        )
    );
    return filtered.map(({ paddockManagerId, harvestYear }) => ({
      paddockManagerId,
      harvestYear,
    }));
  };

  const getObj = ({ name, paddockManagerId, harvestYear }) => {
    const manager = paddockManagers.find(({ id }) => id === paddockManagerId);
    return {
      key: `${name}-${harvestYear}`,
      val: { [manager.id]: manager.name },
    };
  };

  const buildObj = (propKey) => {
    const keys = objArr.filter(({ key }) => key === propKey);
    const values = keys.map(({ val }) => val);
    const obj = values.reduce(reduceObj);
    return { [propKey]: obj };
  };

  const reduceObj = (total, value) => ({ ...total, ...value });

  for (const type of paddockType) {
    const { id, name } = type;
    const types = paddocks.filter((el) => el.paddockTypeId === id);
    const uniqueTypes = removeDuplicates(types);
    const obj = uniqueTypes.map((el) => getObj({ name, ...el }));
    objArr.push(...obj);
  }
  const keys = objArr.map(({ key }) => key);
  const uniqueKeys = [...new Set(keys)];
  const result = uniqueKeys.map(buildObj);
  return result.reduce(reduceObj);
}

// 9 Agregar nuevo administrador con datos ficticios a "paddockManagers" y agregar un nuevo cuartel de tipo NOGALES con 900mts2, año 2017 de AGRICOLA SANTA ANA, administrado por este nuevo administrador
// Luego devolver el lugar que ocupa este nuevo administrador en el ranking de la pregunta 3.
function newManagerRanking() {
  // CODE HERE
  const HECTARE_CONVERSION = 10000;

  const NEW_MANAGER = {
    id: 7,
    taxNumber: "168988886",
    name: "MARIO ARANCIBIA",
  };
  const NEW_PADDOCK = {
    paddockManagerId: 7,
    farmId: 1,
    paddockTypeId: 4,
    harvestYear: 2017,
    area: 900,
  };

  const copySortFarmManagerByAdminArea = (paddocks, paddockManagers) => {
    const groupMNGT = ({ id, name }) => {
      const filtered = paddocks.filter((el) => el.paddockManagerId === id);
      const totalArea = filtered.reduce(
        (total, value) => total + value.area,
        0
      );
      const hectares = totalArea / HECTARE_CONVERSION;
      return { name, hectares };
    };

    const groupedMNGT = paddockManagers.map(groupMNGT);
    const sortedMNGT = groupedMNGT.sort((a, b) => b.hectares - a.hectares);
    const nameMNGT = sortedMNGT.map(({ name }) => name);
    const newAdminIndex = nameMNGT.indexOf(NEW_MANAGER.name);
    return newAdminIndex + 1;
  };

  const copyPaddockManagers = [...paddockManagers];
  copyPaddockManagers.push(NEW_MANAGER);
  const copyPaddocks = [...paddocks];
  copyPaddocks.push(NEW_PADDOCK);
  return copySortFarmManagerByAdminArea(copyPaddocks, copyPaddockManagers);
}

/* Results Section */
console.log("Pregunta 0");
console.log(listPaddockManagerIds());
console.log("Pregunta 1");
console.log(listPaddockManagersByName());
console.log("Pregunta 2");
console.log(sortPaddockTypeByTotalArea());
console.log("Pregunta 3");
console.log(sortFarmManagerByAdminArea());
console.log("Pregunta 4");
console.log(farmManagerNames());
console.log("Pregunta 5");
console.log(biggestAvocadoFarms());
console.log("Pregunta 6");
console.log(biggestCherriesManagers());
console.log("Pregunta 7");
console.log(farmManagerPaddocks());
console.log("Pregunta 8");
console.log(paddocksManagers());
console.log("Pregunta 9");
console.log(newManagerRanking());
