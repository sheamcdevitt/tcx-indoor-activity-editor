import { Button } from '@mui/material';

type DownloadProps = {
  file: File | undefined;
  distance: number | undefined;
};

export const Download = ({ file, distance }: DownloadProps) => {
  const onClick = () => {
    if (!file || !distance) return;
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = (e) => {
      console.log('clicked');
      const tcxContent = e.target?.result;

      if (typeof tcxContent !== 'string') {
        console.error('TCX file content is not string');
        return;
      }
      console.log('here');
      const xmlDoc = new DOMParser().parseFromString(
        tcxContent as string,
        'text/xml'
      );
      const distanceTag = xmlDoc.getElementsByTagName('DistanceMeters');
      const totalDistance = distance * 1000;

      distanceTag[0].childNodes[0].nodeValue = totalDistance
        .toFixed(1)
        .toString();
      distanceTag[1].childNodes[0].nodeValue = '0.0';

      const interval = totalDistance / (distanceTag.length - 2);

      for (let i = 1; i < distanceTag.length; i++) {
        const value = (i - 1) * interval;
        distanceTag[i].childNodes[0].nodeValue = value.toFixed(1).toString();
      }

      const serializer = new XMLSerializer();
      const tcxString = serializer.serializeToString(xmlDoc);

      const element = document.createElement('a');
      const file = new Blob([tcxString], {
        type: 'text/xml',
      });
      element.href = URL.createObjectURL(file);
      element.download = 'new.tcx';
      document.body.appendChild(element);
      element.click();
    };
  };

  return (
    <Button
      type='button'
      variant='outlined'
      onClick={onClick}
      disabled={!file || !distance}
      sx={{
        marginVertical: '1rem',
        width: { xs: '100%', sm: '20em' },
        backgroundColor: 'white',
      }}
    >
      Download New TCX File
    </Button>
  );
};
