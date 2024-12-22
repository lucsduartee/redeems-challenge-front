import {
  Box,
  FormControl,
  FormGroup,
  FormLabel,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { useState } from 'react';

export default function ShiptmentsItemsData() {
  const [size, setSize] = useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setSize(event.target.value);
  };

  return (
    <Box sx={{
      display: 'flex',
      width: '100%',
      flexDirection: 'column',
      marginBottom: '12px'
    }}>
      <FormLabel sx={{ fontWeight: 600, marginBottom: '12px' }}>Tamanhos</FormLabel>

      <FormGroup
        sx={{
          display: 'grid',
          width: '100%',
          gap: '16px',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gridTemplateRows: 'auto',
        }}
      >
        <FormControl
          variant="standard"
          sx={{
            gridColumn: '1 / 2',
          }}
        >
          <InputLabel required id="size-label">Qual seu tamanho de agasalho</InputLabel>
          <Select
            labelId="size-label"
            id="size"
            value={size}
            onChange={handleChange}
            label="Tamanho"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </FormGroup>
    </Box>
  )
}