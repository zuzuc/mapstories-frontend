// import { geoNaturalEarth1, geoPath, geoGraticule} from 'd3'
// const projection = geoNaturalEarth1();
// const path = geoPath(projection);
// const graticule = geoGraticule();

// const missingDataColor = 'gray';

// export const Marks = ({
//     worldAtlas: { countries, interiors },
//     rowByCountry, // data,
//     colorScale,
//     colorValue
// }) => {
//     // console.log('Marks', data)
//     return (
//     <g className='marks'>
//         <path className='sphere' d={path({ type: 'Sphere' })} />
//         <path className='graticules' d={path(graticule())} />
//         {countries.features.map(feature => {
//             const d = rowByCountry.get(feature.properties.name);
//             if(!d){
//                 console.log(feature.properties.name);
//             }
            
//             return <path 
//                 fill={d ? colorScale(colorValue(d)) : missingDataColor} 
//                 d={path(feature)} />; 
//             })}
//         <path className='interiors' d={path(interiors)} />
        
//     </g>
// )};