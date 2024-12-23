import useRedeemsDispatch from "@/hooks/useRedeemsDispatch";
import { Box, FormGroup, FormLabel, TextField } from "@mui/material";
import { useState } from "react";

export default function ShiptmentsPersonalData() {
  const [name, setName] = useState('')
  const [cpf, setCpf] = useState('')
  const [email, setEmail] = useState('')

  const redeemsDispatch = useRedeemsDispatch()

  const handleRedeemChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, eventCallback: Function) => {
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
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        gap: '16px',
        marginBottom: '12px'
      }}
    >
      <FormLabel sx={{ fontWeight: 600, marginBottom: '12px' }}>Dados do destinatário</FormLabel>

      <FormGroup
        sx={{
          display: 'grid',
          width: '100%',
          gap: '16px',
          gridTemplateColumns: '1fr',
          gridTemplateRows: 'auto',
          '@media (min-width: 960px)': {
            gridTemplateColumns: 'repeat(2, 1fr)',
          },
        }}
      >
        <TextField
          id="name"
          label="Nome"
          name="name"
          value={name}
          variant="standard"
          sx={{
            gridColumn: {
              xs: '1 / -1',
              sm: '1 / 3',
            },
          }}
          onChange={e => handleRedeemChange(e, setName)}
          required
        />
        <TextField
          id="cpf"
          label="CPF ou CNPJ"
          name="cpf"
          value={cpf}
          variant="standard"
          sx={{
            gridColumn: {
              xs: '1 / -1',
              sm: '1 / 2',
            },
          }}
          onChange={e => handleRedeemChange(e, setCpf)}
          required
        />
        <TextField
          id="email"
          label="Email"
          name="email"
          value={email}
          variant="standard"
          sx={{
            gridColumn: {
              xs: '1 / -1',
              sm: '2 / 3',
            },
          }}
          onChange={e => handleRedeemChange(e, setEmail)}
          required
        />
      </FormGroup>
    </Box>
  )
}