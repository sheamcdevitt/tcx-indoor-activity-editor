import {merge} from 'lodash';

import AccordionSummary from './AccordionSummary';
import Alert from './Alert';
import Button from './Button';
import Card from './Card';
import CardMedia from './CardMedia';
import DialogActions from './DialogActions';
import DialogContent from './DialogContent';
import DialogTitle from './DialogTitle';
import FilledInput from './FilledInput';
import FormControlLabel from './FormControlLabel';
import IconButton from './IconButton';
import Link from './Link';
import ListItem from './ListItem';
import ListItemIcon from './ListItemIcon';
import Tab from './Tab';
import Tabs from './Tabs';
import TextField from './TextField';
import Tooltip from './Tooltip';
import {DefaultTheme} from '@mui/styles';

export default function Overrides(theme: DefaultTheme) {
  return merge(
    AccordionSummary(),
    Alert(),
    Button(theme),
    Card(),
    CardMedia(),
    DialogActions(theme),
    DialogContent(theme),
    DialogTitle(theme),
    FilledInput(),
    FormControlLabel(),
    IconButton(),
    Link(),
    ListItem(),
    ListItemIcon(),
    Tab(),
    Tabs(theme),
    TextField(),
    Tooltip(),
  );
}
