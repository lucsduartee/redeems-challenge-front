import { Box, FormGroup, FormLabel, TextField } from "@mui/material";
import { useState } from "react";

export default function ExtraQuestions() {
  const [question, setQuestion] = useState('')

  return (
    <Box sx={{
      display: 'flex',
      width: '100%',
      flexDirection: 'column',
      gap: '16px',
      marginBottom: '12px'
    }}>
      <FormLabel sx={{ fontWeight: 600 }}>Perguntas Extras</FormLabel>

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
          id="size"
          label="Qual seu tamanho de agasalho"
          value={question}
          variant="standard"
          sx={{
            gridColumn: '1 / 2',
          }}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setQuestion(event.target.value);
          }}
          required
        />
      </FormGroup>
    </Box>
  )
}