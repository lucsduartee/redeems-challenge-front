import { RedeemPageContext } from '@/contexts/redeem-page-context';
import useRedeemsDispatch from '@/hooks/useRedeemsDispatch';
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
import { useContext, useState } from 'react';

export default function ShiptmentsItemsData() {
  const [size, setSize] = useState('')
  const redeemPage = useContext(RedeemPageContext)

  const redeemsDispatch = useRedeemsDispatch()

  const handleRedeemChange = (event: SelectChangeEvent | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, id: string) => {
    setSize(event.target.value)

    redeemsDispatch({
      type: 'updated',
      data: {
        size_name: event.target.value,
        customer_product_id: id, 
      },
      field: event.target.name,
    });
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
        {
          redeemPage?.items
            .filter((item) => Boolean(item.sizes_grid))
            .map((item) => (
              <FormControl
                variant="standard"
                sx={{
                  gridColumn: '1 / 2',
                }}
                key={item.customer_product_id}
              >
                <InputLabel required id="size-label">Qual seu tamanho? ({item.sizes_grid.name})</InputLabel>
                <Select
                  labelId="size-label"
                  id="size"
                  value={size}
                  name="items"
                  onChange={(e => handleRedeemChange(e, item.customer_product_id))}
                  label="Tamanho"
                >
                  {
                    item.sizes.map((size) => (
                      <MenuItem key={size.id} value={size.name}>{size.name}</MenuItem>
                    ))
                  }
                </Select>
              </FormControl>
            ))
        }
      </FormGroup>
    </Box>
  )
}