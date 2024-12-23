import { useContext, useState } from "react";
import { Box, FormControl, FormGroup, FormLabel, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import { CountriesContext } from "@/contexts/countries-context";
import { StatesContext } from "@/contexts/states-context";
import useCountriesDispatch from "@/hooks/useContriesDispatch";
import useStatesDispatch from "@/hooks/useStatesDispatch";
import useRedeemsDispatch from "@/hooks/useRedeemsDispatch";

export default function ShiptmentsPersonalData() {
  const [cep, setCep] = useState('')
  const [street, setStreet] = useState('')
  const [adressNumber, setAdressNumber] = useState('')
  const [complement, setComplement] = useState('')
  const [neighborhood, setNeighborhood] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [country, setCountry] = useState('')

  const countries = useContext(CountriesContext)

  const states = useContext(StatesContext)

  const redeemsDispatch = useRedeemsDispatch()

  const handleRedeemChange = (event: SelectChangeEvent | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, eventCallback: Function) => {
    eventCallback(event.target.value);

    redeemsDispatch({
      type: 'updated',
      data: {
        [event.target.name]: event.target.value,
      },
      field: event.target.name,
    });
  };

  return (
    <Box sx={{
      display: 'flex',
      width: '100%',
      flexDirection: 'column',
      gap: '16px',
      marginBottom: '12px'
    }}>
      <FormLabel sx={{ fontWeight: 600, marginBottom: '12px' }}>Endereço de entrega</FormLabel>

      <FormGroup
        sx={{
          display: 'grid',
          width: '100%',
          gap: '16px',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gridTemplateRows: 'auto',
        }}
      >
        <TextField
          id="cep"
          label="CEP"
          value={cep}
          name="cep"
          variant="standard"
          sx={{
            gridColumn: '1 / 3',
          }}
          onChange={(e) => handleRedeemChange(e, setCep)}
          required
        />
        <TextField
          id="street"
          label="Rua"
          value={street}
          variant="standard"
          name="street"
          sx={{
            gridColumn: '3 / 5',
          }}
          onChange={(e) => handleRedeemChange(e, setStreet)}
          required
        />
        <TextField
          id="adressNumber"
          label="Número"
          value={adressNumber}
          name="adressNumber"
          variant="standard"
          sx={{
            gridColumn: '1 / 2',
          }}
          onChange={(e) => handleRedeemChange(e, setAdressNumber)}
          required
        />
        <TextField
          id="complement"
          label="Complemento"
          value={complement}
          variant="standard"
          name="complement"
          sx={{
            gridColumn: '2 / 3',
          }}
          onChange={(e) => handleRedeemChange(e, setComplement)}          
        />
        <TextField
          id="neighborhood"
          label="Bairro"
          value={neighborhood}
          variant="standard"
          name="neighborhood"
          sx={{
            gridColumn: '3 / 5',
          }}
          defaultValue="Normal"
          onChange={(e) => handleRedeemChange(e, setNeighborhood)}
          required
        />
        <TextField
          id="city"
          label="Cidade"
          value={city}
          name="city"
          variant="standard"
          sx={{
            gridColumn: '1 / 3',
          }}
          onChange={(e) => handleRedeemChange(e, setCity)}
          required
        />
        <FormControl
          variant="standard"
          sx={{
            gridColumn: '3 / 4',
          }}
        >
          <InputLabel required id="state-label">Estado</InputLabel>
          <Select
            labelId="state-label"
            id="state"
            name="state"
            value={state}
            onChange={(e) => handleRedeemChange(e, setState)}
            label="Estado"
          >
            {
              states?.states.map((state) => (
                <MenuItem key={state} value={state}>{state}</MenuItem>
              ))
            }
          </Select>
        </FormControl>

        <FormControl
          variant="standard"
          sx={{
            gridColumn: '4 / 5',
          }}
        >
          <InputLabel required id="country-label">País</InputLabel>
          <Select
            labelId="country-label"
            id="country"
            value={country}
            name="country"
            onChange={(e) => handleRedeemChange(e, setCountry) }
            label="País"
            required
          >
            {
              countries?.countries.map((country) => (
                <MenuItem key={country} value={country}>{country}</MenuItem>
              ))
            }
          </Select>
        </FormControl>
      </FormGroup>
    </Box>
  )
}