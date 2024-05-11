import { Button } from '@mui/material';
import React from 'react';
import { ChildrenProps } from './Tools';

export const UploadTCXFile = (
  props: ChildrenProps & {
    file: File | undefined;
    setFile: React.Dispatch<React.SetStateAction<File | undefined>>;
  }
) => {
  const fileRef = React.useRef<HTMLInputElement>(null);

  const onUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) return;

    if (file) {
      const reader = new FileReader();

      reader.onload = async (e) => {
        const tcxContent = e.target?.result;

        if (typeof tcxContent !== 'string') {
          console.error('TCX file content is not string');
          return;
        }

        try {
          const parser = new DOMParser();
          const xmlDoc = parser.parseFromString(tcxContent, 'text/xml');

          const activityTag = xmlDoc.getElementsByTagName('Activity');
          const totalTimeTag = xmlDoc.getElementsByTagName('TotalTimeSeconds');
          const caloriesTag = xmlDoc.getElementsByTagName('Calories');
          const avgHeartRate = xmlDoc.getElementsByTagName(
            'AverageHeartRateBpm'
          );
          const maxHeartRate = xmlDoc.getElementsByTagName(
            'MaximumHeartRateBpm'
          );
          const sport = activityTag[0].getAttribute('Sport');
          const totalTime = totalTimeTag[0].childNodes[0].nodeValue ?? '';
          const calories = caloriesTag[0].childNodes[0].nodeValue;
          const avgHR = avgHeartRate[0].childNodes[1].textContent;
          const maxHR = maxHeartRate[0].childNodes[1].textContent;

          props.setDisplayData({
            sport: sport ?? undefined,
            totalTime,
            calories: calories ?? undefined,
            avgHR: avgHR ?? undefined,
            maxHR: maxHR ?? undefined,
          });
          props.setFile(file);
        } catch (error) {
          console.error('Error parsing TCX file:', error);
        }
      };

      reader.readAsText(file);
    }
  };

  return (
    <>
      <input
        ref={fileRef}
        type='file'
        accept='.tcx'
        style={{ display: 'none' }}
        id='tcxFileInput'
        onChange={onUpload}
      />
      <Button
        onClick={() => {
          if (fileRef.current) fileRef.current.click();
        }}
        type='button'
        variant='contained'
        sx={{
          marginVertical: '1rem',
          width: { xs: '100%', sm: '20em' },
        }}
      >
        Upload TCX File
      </Button>
    </>
  );
};
