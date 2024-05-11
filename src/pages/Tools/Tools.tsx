import { Box } from '@mui/material';
import { Info } from './Info';
import { UploadTCXFile } from './UploadTCXParser';
import { useState } from 'react';
import { DisplayGrid } from './DisplayGrid';
import { Download } from './Download';

type DisplayData = {
  sport: string | undefined;
  totalTime: string | undefined;
  calories: string | undefined;
  avgHR: string | undefined;
  maxHR: string | undefined;
};

export type ChildrenProps = {
  displayData: DisplayData;
  setDisplayData: React.Dispatch<React.SetStateAction<DisplayData>>;
};

export const Tools = () => {
  const [displayData, setDisplayData] = useState<DisplayData>({
    sport: undefined,
    totalTime: undefined,
    calories: undefined,
    avgHR: undefined,
    maxHR: undefined,
  });
  const hasData = Object.values(displayData).some(
    (value) => value !== undefined
  );
  const [distance, setDistance] = useState<number | undefined>(undefined);
  const [file, setFile] = useState<File | undefined>(undefined);

  return (
    <Box
      className='fade-in'
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='space-between'
      height={'100%'}
    >
      <Info />
      {hasData && (
        <DisplayGrid
          displayData={displayData}
          setDisplayData={setDisplayData}
          distance={distance}
          setDistance={setDistance}
        />
      )}
      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        gap={2}
        mt={2}
        width={{
          xs: '100%',
          sm: 'auto',
        }}
      >
        <UploadTCXFile
          setDisplayData={setDisplayData}
          displayData={displayData}
          file={file}
          setFile={setFile}
        />
        <Download file={file} distance={distance} />
      </Box>
    </Box>
  );
};
