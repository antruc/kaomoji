import Paper from '@mui/material/Paper'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import MoodIcon from '@mui/icons-material/Mood'
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt'
import PetsIcon from '@mui/icons-material/Pets'

const icons = {
  happy: <MoodIcon fontSize="medium" />,
  sad: <SentimentVeryDissatisfiedIcon fontSize="medium" />,
  love: <FavoriteBorderIcon fontSize="medium" />,
  hate: <ThumbDownOffAltIcon fontSize="medium" />,
  pets: <PetsIcon fontSize="medium" />
}

export default function Menu({ items, active, onSelect }) {
  return (
    <Paper
      elevation={3}
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 2 }}
    >
      <BottomNavigation value={active} onChange={(e, value) => onSelect(value)}>
        {items.map((name) => (
          <BottomNavigationAction key={name} value={name} icon={icons[name]} />
        ))}
      </BottomNavigation>
    </Paper>
  )
}
