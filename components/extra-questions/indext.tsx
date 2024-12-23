import useRedeemsDispatch from "@/hooks/useRedeemsDispatch";
import { Box, FormGroup, FormLabel, TextField } from "@mui/material";
import { useState } from "react";

export default function ExtraQuestions() {
  const [question, setQuestion] = useState('')

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
          onChange={(e) => handleRedeemChange(e, setQuestion)}
          required
        />
      </FormGroup>
    </Box>
  )
}