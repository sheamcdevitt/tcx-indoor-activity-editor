import { Box, Grid, Typography, Paper, TextField } from '@mui/material';
import {
  MonitorHeartOutlined,
  Favorite,
  FavoriteTwoTone,
  LocalFireDepartmentRounded,
  AlarmRounded,
  StraightenRounded,
} from '@mui/icons-material';
import { colors } from 'themes/colors';
import { ChildrenProps } from './Tools';

type DurationObject = {
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds: string;
};

const secondsToLuxonDuration = (seconds: number): DurationObject => {
  const hours: number = Math.floor(seconds / 3600);
  const minutes: number = Math.floor((seconds % 3600) / 60);
  const remainingSeconds: number = Math.floor(seconds % 60);
  const milliseconds = (seconds - Math.floor(seconds)).toFixed(3);

  const result = {
    hours: hours,
    minutes: minutes,
    seconds: remainingSeconds,
    milliseconds: milliseconds,
  };

  return result;
};

type TotalTimeProps = {
  duration: DurationObject;
};

const TotalTime = ({ duration }: TotalTimeProps) => (
  <Box display='flex' flexDirection='row' justifyContent='center' gap={0.5}>
    <Typography variant='h4' alignSelf={'flex-end'}>
      {duration.hours > 0 && `${duration.hours} `}
      {duration.hours > 0 && <span style={{ fontSize: 14 }}>h</span>}
    </Typography>
    <Typography variant='h4' alignSelf={'flex-end'}>
      {duration.minutes > 0 && `${duration.minutes} `}
      {duration.minutes > 0 && <span style={{ fontSize: 14 }}>m</span>}
    </Typography>
    <Typography variant='h4' alignSelf={'flex-end'}>
      {duration.seconds > 0 && `${duration.seconds}`}{' '}
      {duration.seconds > 0 && <span style={{ fontSize: 14 }}>s</span>}
    </Typography>
    <Typography variant='h4' alignSelf={'flex-end'}>
      {duration.milliseconds && `${duration.milliseconds}`}{' '}
      {duration.milliseconds && <span style={{ fontSize: 14 }}>ms</span>}
    </Typography>
  </Box>
);

export const DisplayGrid = (
  props: ChildrenProps & {
    distance: number | undefined;
    setDistance: React.Dispatch<React.SetStateAction<number | undefined>>;
  }
) => {
  return (
    <Paper
      elevation={3}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 24,
        padding: 4,
        textAlign: 'center',
        flexDirection: 'row',
      }}
    >
      <Grid container spacing={2}>
        {props.displayData.sport && (
          <Grid
            width='100%'
            item
            sm={6}
            xs={12}
            display='flex'
            flexDirection='row'
            gap={4}
            alignSelf={'center'}
            justifySelf={'center'}
          >
            <MonitorHeartOutlined
              style={{ fontSize: '2em', color: colors.red }}
            />
            <Typography variant='h4'>{props.displayData.sport}</Typography>
          </Grid>
        )}
        {props.displayData.totalTime && (
          <Grid
            width='100%'
            item
            sm={6}
            xs={12}
            display='flex'
            flexDirection='row'
            gap={4}
          >
            <AlarmRounded style={{ fontSize: '2em' }} />
            <TotalTime
              duration={secondsToLuxonDuration(
                Number(props.displayData.totalTime)
              )}
            />
          </Grid>
        )}
        {props.displayData.calories && (
          <Grid
            width='100%'
            item
            sm={6}
            xs={12}
            display='flex'
            flexDirection='row'
            gap={4}
          >
            <LocalFireDepartmentRounded
              style={{ fontSize: '2em', color: colors.pizazz }}
            />
            <Typography variant='h4'>
              {props.displayData.calories} kcal
            </Typography>
          </Grid>
        )}
        {props.displayData.avgHR && (
          <Grid
            width='100%'
            item
            sm={6}
            xs={12}
            display='flex'
            flexDirection='row'
            gap={4}
          >
            <FavoriteTwoTone
              style={{ fontSize: '2em', color: colors.carnation }}
            />
            <Typography variant='h4'>
              {props.displayData.avgHR} bpm{' '}
              <span style={{ fontSize: 14 }}>(avg)</span>
            </Typography>
          </Grid>
        )}
        {props.displayData.maxHR && (
          <Grid
            item
            sm={6}
            xs={12}
            display='flex'
            flexDirection='row'
            gap={4}
            width='100%'
          >
            <Favorite style={{ fontSize: '2em', color: colors.red }} />
            <Typography variant='h4'>
              {props.displayData.maxHR} bpm{' '}
              <span style={{ fontSize: 14 }}>(max)</span>
            </Typography>
          </Grid>
        )}
        {props.displayData.sport && (
          <Grid
            item
            sm={6}
            xs={12}
            display='flex'
            flexDirection='row'
            gap={4}
            width='100%'
            alignItems={'flex-start'}
          >
            <StraightenRounded style={{ fontSize: '2em' }} />
            <TextField
              label='Distance (km)'
              variant='outlined'
              type='number'
              value={props.distance || ''}
              onChange={(e) => props.setDistance(parseFloat(e.target.value))}
              sx={{ width: 'auto' }}
            />
          </Grid>
        )}
      </Grid>
    </Paper>
  );
};
