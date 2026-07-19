import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import IconButton from '@mui/material/IconButton'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'

export default function Cards({ items, onCopy }) {
  return (
    <Box
      component="ul"
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        listStyle: 'none',
        p: 0,
        maxWidth: 1152,
        m: '20px auto 75px'
      }}
    >
      {items.map((text) => (
        <Card
          key={text}
          component="li"
          sx={{
            width: 350,
            m: '17px',
            fontSize: 22,
            p: '10px 15px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          {text}
          <IconButton
            aria-label="copy"
            size="small"
            onClick={() => onCopy(text)}
          >
            <ContentCopyIcon fontSize="medium" />
          </IconButton>
        </Card>
      ))}
    </Box>
  )
}
