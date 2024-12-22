import { Box, FormGroup, FormLabel, TextField } from "@mui/material";
import { useState } from "react";

export default function ShiptmentsPersonalData() {
  const [name, setName] = useState('')
  const [cpf, setCpf] = useState('')
  const [email, setEmail] = useState('')

  return (
    <Box sx={{
      display: 'flex',
      width: '100%',
      flexDirection: 'column',
      gap: '16px',
      marginBottom: '12px'
    }}>
      <FormLabel sx={{ fontWeight: 600, marginBottom: '12px' }}>Dados do destinatário</FormLabel>

      <FormGroup
        sx={{
          display: 'grid',
          width: '100%',
          gap: '16px',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gridTemplateRows: 'auto',
        }}
      >
        <TextField
          id="name"
          label="Nome"
          value={name}
          variant="standard"
          sx={{
            gridColumn: '1 / 3',
          }}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setName(event.target.value);
          }}
          required
        />
        <TextField
          id="cpf"
          label="CPF ou CNPJ"
          value={cpf}
          variant="standard"
          sx={{
            gridColumn: '1 / 2',
          }}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setCpf(event.target.value);
          }}
          required
        />
        <TextField
          id="email"
          label="Email"
          value={email}
          type="email"
          variant="standard"
          sx={{
            gridColumn: '2 / 3',
          }}
          defaultValue="Normal"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setEmail(event.target.value);
          }}
          required
        />
      </FormGroup>
    </Box>
  )
}