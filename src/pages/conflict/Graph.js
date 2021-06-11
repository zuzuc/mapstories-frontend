import React from 'react'

export function Graph() {
    return (
        <div>
            <h4>Fatalities by type of Violence, 1989 - 2019</h4>
            <div>
            <br />
             <img src='/Conflict-fatalities.png' alt='Conflict fatalities' width='800' />
             </div>
        </div>
    )
};

export function Scatterplot() {
    return (
        <div>
            <h4>Fatal events around the world in 2019 by type of violence</h4>
            <div>
            <br />
             <img src='/ScatterplotMap.png' alt='Conflict fatalities' width='800' />
             </div>
        </div>
    )
}