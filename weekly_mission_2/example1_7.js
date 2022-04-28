const countries7 = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
const countriesContainingLand = countries7.filter((country) => 
  country.includes('land')
)

console.log(countriesContainingLand)