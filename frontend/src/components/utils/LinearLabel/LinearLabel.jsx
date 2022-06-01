import * as React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

export default function LinearWithValueLabel(data) {
  const [progress, setProgress] = React.useState(10);
  
  const start = data.value.start;
  const end = data.value.end;
  const now = data.value.now;
  
  const progress1 = ((now - end) / (start - end)) * 100 ;
  console.log(start);
  console.log(end);
  
  React.useEffect(() => {
    //set progress bar with the value of now beeing start the 100% and end the 0%
    setProgress(progress1);
  }, [progress1]);


  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgressWithLabel value={progress} />
    </Box>
  );
}
