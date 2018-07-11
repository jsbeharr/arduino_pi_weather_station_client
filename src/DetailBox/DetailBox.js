import React from 'react';
import {
  FlexibleXYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  LineMarkSeries,
} from 'react-vis';

const detail_box = (props) => {
  return (
    <div className='WeatherBox'>
      <div className='card'>
          <FlexibleXYPlot
            height={'260'}  >
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis title='x-axis' />
            <YAxis title='y-axis'/>
            <LineMarkSeries
              className="linemark-series-example"
              style={{
                stroke: 'white'
              }}
              data={[
                { x: 1, y: 10 },
                { x: 2, y: 5 },
                { x: 3, y: 15 }
              ]} />
            <LineMarkSeries
              className="linemark-series-example-2"
              curve={'curveMonotoneX'}
              data={[
                { x: 1, y: 11 },
                { x: 1.5, y: 29 },
                { x: 3, y: 7 }
              ]} />
          </FlexibleXYPlot>
      </div>
    </div>
  );
};

export default detail_box;