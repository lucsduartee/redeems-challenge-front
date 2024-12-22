import { useContext, useState } from "react";
import { Box, FormControl, FormGroup, FormLabel, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import { CountriesContext } from "@/contexts/countries-context";
import { StatesContext } from "@/contexts/states-context";
import useCountriesDispatch from "@/hooks/useContriesDispatch";
import useStatesDispatch from "@/hooks/useStatesDispatch";

export default function ShiptmentsPersonalData() {
  const [cep, setCep] = useState('')
  const [street, setStreet] = useState('')
  const [adressNumber, setAdressNumber] = useState('')
  const [complement, setComplement] = useState('')
  const [neighborhood, setNeighborhood] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [country, setCounty] = useState('')

  const countries = useContext(CountriesContext)
  const countriesDispatch = useCountriesDispatch()

  const states = useContext(StatesContext)
  const statesDispatch = useStatesDispatch()

  const handleStateChange = (event: SelectChangeEvent) => {
    setState(event.target.value);

    statesDispatch({
      type: 'changed',
      data: {
        state: event.target.value,
      }
    });
  };

  const handleCountryChange = (event: SelectChangeEvent) => {
    setCounty(event.target.value)

    countriesDispatch({
      type: 'changed',
      data: {
        country: event.target.value,
      }
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
          variant="standard"
          sx={{
            gridColumn: '1 / 3',
          }}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setCep(event.target.value);
          }}
          required
        />
        <TextField
          id="street"
          label="Rua"
          value={street}
          variant="standard"
          sx={{
            gridColumn: '3 / 5',
          }}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setStreet(event.target.value);
          }}
          required
        />
        <TextField
          id="adressNumber"
          label="Número"
          value={adressNumber}
          variant="standard"
          sx={{
            gridColumn: '1 / 2',
          }}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setAdressNumber(event.target.value);
          }}
          required
        />
        <TextField
          id="complement"
          label="Complemento"
          value={complement}
          variant="standard"
          sx={{
            gridColumn: '2 / 3',
          }}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setComplement(event.target.value);
          }}
        />
        <TextField
          id="neighborhood"
          label="Bairro"
          value={neighborhood}
          variant="standard"
          sx={{
            gridColumn: '3 / 5',
          }}
          defaultValue="Normal"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setNeighborhood(event.target.value);
          }}
          required
        />
        <TextField
          id="city"
          label="Cidade"
          value={city}
          variant="standard"
          sx={{
            gridColumn: '1 / 3',
          }}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setCity(event.target.value);
          }}
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
            value={state}
            onChange={handleStateChange}
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
            onChange={handleCountryChange}
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